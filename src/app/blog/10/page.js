'use client'

import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Navbar from "../../Navbar";

const FlipCardGame = () => {
  const [csvData, setCsvData] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCSV = async () => {
      try {
        const response = await fetch('/GRE6021.csv');
        if (!response.ok) throw new Error('Failed to fetch CSV file');
        
        const text = await response.text();
        const result = Papa.parse(text, { header: true, skipEmptyLines: true });
        
        setCsvData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    loadCSV();
  }, []);

  useEffect(() => {
    if (csvData.length > 0) {
      const filtered = csvData.filter((card) => 
        selectedLetters.length === 0 || selectedLetters.includes(card.WORD[0].toUpperCase())
      );
      setFilteredCards(filtered);
      setCurrentIndex(0);
    }
  }, [csvData, selectedLetters]);

  const handleLetterChange = (letter) => {
    setSelectedLetters((prev) =>
      prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]
    );
  };

  const handleNextCard = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      // If "All" is checked, select all letters
      setSelectedLetters("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''));
    } else {
      // If "All" is unchecked, deselect all letters
      setSelectedLetters([]);
    }
  };
  

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        handleCardClick();
      } else if (event.key === 'ArrowRight') {
        handleNextCard();
      } else if (event.key === 'ArrowLeft') {
        handlePrevCard();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isFlipped]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <h1 className="title">Flip Card Game</h1>
      <div className="checkbox-container">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map((letter) => (
          <label key={letter}>
            <input 
              type="checkbox" 
              checked={selectedLetters.includes(letter)}
              onChange={() => handleLetterChange(letter)}
            /> {letter}
          </label>
        ))}

        <label>
            <input 
            type="checkbox"
            checked={selectedLetters.length === 26} // Check if all letters are selected
            onChange={handleSelectAll} // Handle "Select All" checkbox click
            /> All
        </label>
      </div>

      <div className="flip-card" onClick={handleCardClick}>
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-front">
            {/* <p>{filteredCards[currentIndex]?.WORD || 'No Words'}</p>
             */}
            <p>{selectedLetters.length === 0 ? '' : filteredCards[currentIndex]?.WORD || 'No Words'}</p>
          </div>
          <div className="flip-card-back">
            {/* <p>{filteredCards[currentIndex]?.WORDDEF || 'No Definition'}</p> */}
            <p>{selectedLetters.length === 0 ? '' : filteredCards[currentIndex]?.WORDDEF || 'No Definition'}</p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="prev-button" onClick={handlePrevCard} disabled={currentIndex === 0}>⬅ Previous</button>
        <button className="next-button" onClick={handleNextCard} disabled={currentIndex === filteredCards.length - 1}>Next ➡</button>
      </div>
      <style jsx>{`
        .title{
            text-align: center;
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .flip-card {
            width: 400px;
            height: 500px;
            perspective: 1500px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
          
        }

       
        .flip-card-inner {
          width: 100%;
          height: 100%;
          transition: transform 0.6s; /* Add transition for flip effect */
          transform-style: preserve-3d; /* Enable 3D transformations */
          box-shadow: 0 10px 20px rgba(0,0,0,0.2); /* Apply shadow only to the entire card */
          border-radius: 10px;
        }

        .flip-card-inner.flipped {
        transform: rotateY(180deg); /* Flip the card */
        }

        .flip-card-front,
        .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden; /* Hide the back side when flipped */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 28px;
            padding: 30px;
        }

        .flip-card-front {
            background-color: white;
            padding: 20px;
        }

        .flip-card-back {
            background-color: white;
            transform: rotateY(180deg); /* Keep back face rotated 180 degrees */
            padding: 20px;
        }

        .checkbox-container {
            display: grid;
            grid-template-columns: repeat(8,auto);
            justify-content: center;
            gap: 2px;
            margin: 10px 0;
        }

        .checkbox-container: last-child{
            grid-template-columns: repeat(2,1fr);        
        }

        label {
            font-size: 16px;
            font-weight: 500;
            color: #333;
            cursor: pointer;
            padding: 5px;
        }

        input[type="checkbox"] {
            transform: scale(0.9);
            cursor: pointer;
            margin:0;
        }

        .button-container {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }

        button {
            padding: 12px 24px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .prev-button {
            background: linear-gradient(45deg, #ff416c, #ff4b2b);
            box-shadow: 0 4px 10px rgba(255, 65, 108, 0.3);
        }

        .next-button {
            background: linear-gradient(45deg, #1e90ff, #00c6ff);
            box-shadow: 0 4px 10px rgba(0, 198, 255, 0.3);
        }

        button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        /* Tablets (portrait mode, up to 768px wide) */
        @media (max-width: 768px) {
        .flip-card {
            width: 250px;
            height: 350px;
            perspective: 1000px;
        }

        .flip-card-front,
          .flip-card-back {
              font-size: 20px; /* Smaller font for tablets */
          }
        }

        /* Phones (portrait mode, up to 480px wide) */
        @media (max-width: 480px) {
        .flip-card {
            width: 200px;
            height: 300px;
        }

        .flip-card-front,
          .flip-card-back {
              font-size: 20px; /* Smaller font for phones */
              padding: 20px;
          }
        }

      `}</style>
    </div>
  );
};

export default FlipCardGame;



