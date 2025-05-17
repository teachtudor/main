//code 4
"use client";

import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Navbar from "../../../Navbar";
import "../../../globals.css";

const stories = [
  "BRUSHING YOUR TEETH",
  "WASHING YOUR HANDS",
  "DRINKING MILK",
  "TAKING VITAMINS",
  "MAKING COFFEE",
  "MAKING TOAST",
  "FEEDING THE CAT",
  "EATING CEREAL",
  "READING A BOOK",
  "DRINKING TEA",
  "EATING SCRAMBLED EGGS",
  "EATING ICE CREAM",
  "BREAKING A GLASS",
  "CLEANING THE HOUSE",
  "BREAKING A PLATE",
  "FALLING DOWN",
  "WASHING DISHES",
  "GETTING SICK",
  "GOING HOME",
  "GIVING A PRESENT",
];

export default function SingleStorySlidePage() {
  const params = useParams();
  const id = parseInt(params.id, 10);
  const title = stories[id - 1];

  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFileName, setShowFileName] = useState(false); // <-- FIXED: hook must be inside function!

  const handleToggleFileName = () => {  // <-- FIXED: function inside component
    setShowFileName((prev) => !prev);
  };

  useEffect(() => {
    async function loadSlides() {
      if (!title) return;

      const folderName = title.toLowerCase().replace(/\s/g, "-");
      const res = await fetch(`/api/slides?folder=${folderName}`);
      const data = await res.json();

      if (data.files) {
        const loadedSlides = data.files.map(file => `/${folderName}/${file}`);
        setSlides(loadedSlides);
        setCurrentIndex(0);
      } else {
        console.error("Failed to load slides.");
      }
    }

    loadSlides();
  }, [title]);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNextSlide();
      } else if (e.key === "ArrowLeft") {
        handlePrevSlide();
      } else if (e.code === "Space") { // <- Spacebar!
        e.preventDefault(); // prevent page scroll
        handleToggleFileName();
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slides]);
  

  if (!title) {
    return (
      <div className="mt-14 flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Navbar />
        <h1 className="text-3xl font-bold">Story Not Found</h1>
      </div>
    );
  }

  return (
    <div className="mt-14 w-full min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Navbar />
      <h1 className="text-3xl font-bold mt-10 mb-6">{title}</h1>

      {slides.length > 0 ? (
        <div className="text-center mb-6">
          <div
            className="w-[90%] aspect-[3/4] sm:aspect-[4/3] sm:w-[80%] md:w-[700px] aspect-[4/3] min-h-[300px] perspective-1000 mx-auto cursor-pointer"
            onClick={handleToggleFileName}
            >
            <div
                className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
                showFileName ? "rotate-y-180" : ""
                }`}
            >
                {/* Front face */}
                <div className="absolute w-full h-full backface-hidden bg-gray-200 flex items-center justify-center border border-black rounded-md">
                <img
                    src={slides[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="h-full object-contain"
                />
                </div>

                {/* Back face */}
                <div className="absolute w-full h-full backface-hidden bg-gray-300 flex items-center justify-center border border-black rounded-md transform rotate-y-180">
                {/* <p className="text-5xl font-semibold text-gray-800 px-4 text-center"> */}
                <p className="w-full h-full flex items-center justify-center px-4 text-gray-800 text-center break-words overflow-hidden text-[clamp(1rem,5vw,4rem)] font-semibold">
                    {slides[currentIndex].split('/').pop().replace(/\.[^/.]+$/, "")}
                </p>
                </div>
            </div>
            </div>


          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="p-2 bg-black text-white rounded-lg"
              onClick={handlePrevSlide}
            >
              Previous
            </button>
            <button
              className="p-2 bg-black text-white rounded-lg"
              onClick={handleNextSlide}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p className="text-xl text-gray-600 mt-8">Loading slides...</p>
      )}
    </div>
  );
}
