"use client";

import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Navbar from "../../Navbar";

export default function Home() {
  const [words, setWords] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [randomWord, setRandomWord] = useState(null);

  // Fetch and parse the CSV file directly
  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch('/CEFR UNFETTERED.csv');
      const text = await response.text();
      parseCSV(text);
    };

    fetchCSV();
  }, []);

  // Parse CSV using PapaParse
  const parseCSV = (csvText) => {
    Papa.parse(csvText, {
      complete: (result) => {
        const parsedWords = result.data.map(row => {
          if (!row.headword || !row.CEFR) {
            console.warn("Invalid row:", row);  // Log the problematic rows
          }
          return {
            headword: row.headword ? row.headword.trim() : "",
            CEFR: row.CEFR ? row.CEFR.trim().toUpperCase() : "",
          };
        });
        setWords(parsedWords);
      },
      header: true,
    });
  };
  
  // Handle checkbox selection for levels
  const handleCheckboxChange = (level) => {
    setSelectedLevels((prevSelectedLevels) => {
      if (prevSelectedLevels.includes(level)) {
        return prevSelectedLevels.filter(item => item !== level);
      } else {
        return [...prevSelectedLevels, level];
      }
    });
  };

  // Randomly pick a word from the selected levels
  const getRandomWord = () => {
    if (selectedLevels.length === 0 || words.length === 0) return;
    
    // Filter words based on selected CEFR levels
    const filteredWords = words.filter(word => selectedLevels.includes(word.CEFR));
  
    if (filteredWords.length === 0) return;
    
    // Pick a random word from the filtered words
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const word = filteredWords[randomIndex];
  
    console.log("Random word selected:", word);  // Add this line to debug
  
    // Set random word and trigger the fade-in effect
    setRandomWord(word);
  };

  return (
    <div>
        <Navbar />

        <div className="container">
        
            <h1>Magic Ball Word Selector</h1>

            <div className="checkbox-group">
                {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(level => (
                <div key={level} className="checkbox-item">
                    <input
                    type="checkbox"
                    id={level}
                    onChange={() => handleCheckboxChange(level)}
                    />
                    <label htmlFor={level}>{level}</label>
                </div>
                ))}
            </div>

            <button className="go-button" onClick={getRandomWord}>Go!</button>

            {randomWord && (
                <div className="result">
                <p className="fade-in">{randomWord.headword}</p>
                </div>
            )}

            <style jsx>{`
                .container {
                text-align: center;
                margin-top: 20px;
                }
                .checkbox-group {
                display: flex;
                justify-content: center;
                gap: 20px; /* Adds spacing between the checkboxes */
                margin: 20px 0;
                }
                .checkbox-item {
                display: flex;
                align-items: center;
                }
                .go-button {
                padding: 10px 20px;
                background-color: #007BFF;
                color: white;
                border: none;
                cursor: pointer;
                font-size: 16px;
                border-radius: 5px;
                margin-top: 20px;
                }
                .go-button:hover {
                background-color: #0056b3;
                }
                .result {
                margin-top: 20px;
                }
                .fade-in {
                animation: fadeIn 2s;
                font-size: 100px;
                font-weight: bold;
                color: #333;
                }
                @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
                }
            `}</style>
        </div>
    </div>
  );
}
