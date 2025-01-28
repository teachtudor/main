//CODE 14 WORKS FOR BATCHES

"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import jsPDF from "jspdf";
import "../../globals.css";

export default function SlideCreator() {
  const [folderStructure, setFolderStructure] = useState([]);
  const [currentSlides, setCurrentSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilename, setShowFilename] = useState(false);
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState("");

  const handleFolderSelect = (event) => {
    const files = Array.from(event.target.files).filter((file) =>
      file.type.startsWith("image/")
    );

    const folderStructure = buildFolderStructure(files);
    setFolderStructure(folderStructure);

    const allSlides = flattenSlides(folderStructure);
    setCurrentSlides(allSlides);
    setCurrentIndex(0);
  };

  const buildFolderStructure = (files) => {
    const folderMap = {};

    files.forEach((file) => {
      const path = file.webkitRelativePath.split("/");
      const level1 = path[0]; // First-level folder
      const level2 = path[1]; // Second-level folder
      const filename = path.slice(2).join("/");

      if (!folderMap[level1]) folderMap[level1] = {};
      if (!folderMap[level1][level2]) folderMap[level1][level2] = [];
      folderMap[level1][level2].push(file);
    });

    return Object.entries(folderMap)
      .map(([level1Name, level2Folders]) => ({
        folderName: level1Name,
        subfolders: Object.entries(level2Folders)
          .map(([level2Name, files]) => ({
            subfolderName: level2Name,
            files: files.sort((a, b) => extractNumber(a.name) - extractNumber(b.name)),
          }))
          .sort((a, b) => extractNumber(a.subfolderName) - extractNumber(b.subfolderName)),
      }))
      .sort((a, b) => extractNumber(a.folderName) - extractNumber(b.folderName));
  };

  const extractNumber = (name) => {
    const match = name.match(/^(\d+)\./); // Match the numeric prefix followed by a dot
    return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
  };

  const flattenSlides = (structure) => {
    const slides = [];
    structure.forEach((level1) => {
      level1.subfolders.forEach((level2) => {
        level2.files.forEach((file) => {
          slides.push({
            level1: level1.folderName,
            level2: level2.subfolderName,
            file,
          });
        });
      });
    });
    return slides;
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + currentSlides.length) % currentSlides.length
    );
  };

  const handleToggleFilename = () => {
    setShowFilename((prevState) => !prevState);
  };

  const handleExportToPDF = async () => {
    const pdf = new jsPDF();
    let pageHeight = pdf.internal.pageSize.height;
    let yOffset = 10;

    //Defining margin here
    const margin = 10;

    for (const level1 of folderStructure) {
      pdf.setFontSize(16);
      pdf.text(level1.folderName, 10, yOffset);
      yOffset += 10;

      for (const level2 of level1.subfolders) {
        let firstImage = true;

        for (const file of level2.files) {
          if (firstImage) {
            // Add second-level folder name before the first image
            pdf.setFontSize(14);
            pdf.text(level2.subfolderName, 10, yOffset);
            yOffset += 10;
            firstImage = false;
          }

          const imgURL = URL.createObjectURL(file);
          const img = new Image();
          img.src = imgURL;

          await new Promise((resolve) => {
            img.onload = () => {
              const imgWidth = 190;
              const imgHeight = (img.height / img.width) * imgWidth;

              if (yOffset + imgHeight + 20 > pageHeight - 20) {
                pdf.addPage();
                yOffset = 10;
              }

              pdf.addImage(img, "JPEG", 10, yOffset, imgWidth, imgHeight);
              pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset + imgHeight + 10);
              yOffset += imgHeight + 20;

              URL.revokeObjectURL(imgURL);
              resolve();
            };
          });
        }

        // Add the second-level folder name and file list after all images
        pdf.addPage();
        pdf.setFontSize(14);
        pdf.text(level2.subfolderName, 10, 10);
        pdf.text(" ", 10, 20); // Blank line
        yOffset = 30;

        for (const file of level2.files) {
          pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset);
          yOffset += 10;
        }
        pdf.addPage();
      }
    }

    // Add Vocabulary page with numbered words
    // pdf.addPage();
    pdf.setFontSize(16);
    pdf.text("Vocabulary", 10, 15); // Title of the page
    yOffset = 25; // Space for the title

    // Add words with numbering
    words.forEach((word, index) => {
      if (yOffset + 10 > pageHeight - margin) {
        pdf.addPage(); // Create a new page if it doesn't fit
        yOffset = margin + 10; // Reset yOffset for the new page
      }
      
      pdf.setFontSize(12);
      pdf.text(`${index + 1}. ${word}`, margin, yOffset);
      yOffset += 10; // Increase yOffset for the next word
    });

    pdf.save("slides.pdf");
  };

  const handleAddWord = () => {
    if (newWord.trim() !== "") {
      setWords([...words, newWord]);
      setNewWord("");
    }
  };

  const handleDeleteWord = (word) => {
    setWords(words.filter((w) => w !== word));
  };

  const handleDownloadWords = () => {
    const blob = new Blob([words.join("\n")], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "words.txt";
    link.click();
  };

  // Listen for Enter key to add the word
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddWord();
    }
  };

  useEffect(() => {
    const handleKeyDownEvent = (e) => {
      if (e.key === "ArrowRight") handleNextSlide();
      else if (e.key === "ArrowLeft") handlePrevSlide();
    };

    window.addEventListener("keydown", handleKeyDownEvent);
    return () => window.removeEventListener("keydown", handleKeyDownEvent);
  }, [currentSlides]);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>
        <div className="text-center mb-6">
          <input
            type="file"
            webkitdirectory=""
            directory=""
            multiple
            onChange={handleFolderSelect}
            className="cursor-pointer p-2 border rounded-lg"
          />
        </div>
        {currentSlides.length > 0 && (
          <div className="text-center mb-6">
            <div
              className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
              onClick={handleToggleFilename}
            >
              {showFilename ? (
                <p className="text-lg font-semibold text-gray-800">
                  {currentSlides[currentIndex].file.name.replace(/\.[^/.]+$/, "")}
                </p>
              ) : (
                <img
                  src={URL.createObjectURL(currentSlides[currentIndex].file)}
                  alt="Slide"
                  className="h-full object-contain transition-transform"
                />
              )}
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="p-2 bg-gray-800 text-white rounded-lg"
                onClick={handlePrevSlide}
              >
                Previous
              </button>
              <button
                className="p-2 bg-gray-800 text-white rounded-lg"
                onClick={handleNextSlide}
              >
                Next
              </button>
            </div>
          </div>
        )}
        <div className="text-center mb-4">
          <button
            onClick={handleExportToPDF}
            className="p-2 bg-purple-600 text-white rounded-lg"
          >
            Export to PDF
          </button>
          <button
            onClick={handleDownloadWords}
            className="p-2 ml-4 bg-blue-600 text-white rounded-lg"
          >
            Download Words
          </button>
        </div>

        {/* Word Input and Add Word Button below the other buttons */}
        <div className="text-center mb-4">
          <input
            type="text"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            onKeyDown={handleKeyDown}
            className="p-2 border rounded-lg"
            placeholder="Type a word"
          />
          <button
            onClick={handleAddWord}
            className="p-2 ml-2 bg-green-500 text-white rounded-lg"
          >
            Add Word
          </button>
        </div>

        {/* Display added words */}
        <div className="mt-4">
          <div className="flex flex-wrap justify-center gap-4">
            {words.map((word, index) => (
              <div
                key={index}
                className="flex items-center bg-green-100 p-2 rounded-lg"
              >
                <span>{word}</span>
                <button
                  onClick={() => handleDeleteWord(word)}
                  className="ml-2 text-green-500"
                >
                  ➔
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}