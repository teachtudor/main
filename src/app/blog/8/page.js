// 'use client'

// import { useState, useEffect } from 'react';
// import Papa from 'papaparse';
// import Navbar from "../../Navbar";

// const FlipCardGame = () => {
//   const [csvData, setCsvData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isClient, setIsClient] = useState(false);
//   const [currentCard, setCurrentCard] = useState({});

//   useEffect(() =>{
//     setIsClient(true);
//   },[]);

//   useEffect(() => {
//     const loadCSV = async () => {
//       try {
//         const response = await fetch('/WordnetNouns.csv');
//         if (!response.ok) throw new Error('Failed to fetch CSV file');
        
//         const text = await response.text();
//         const result = Papa.parse(text, { header: true, skipEmptyLines: true });
        
//         const standardizedData = result.data.map((row) => ({
//           Word: row['Word'],
//           Definition: row['Definition']
//         }));

//         setCsvData(standardizedData);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     loadCSV();
//   }, []);
  
//   useEffect(() => {
//     if (csvData.length > 0) {
//       setCurrentIndex(0);
//     }
//   }, [csvData]);
  
//   useEffect(() => {
//     if (csvData.length > 0 && currentIndex >= 0) {
//       setCurrentCard(csvData[currentIndex] || {});
//     }
//   }, [csvData, currentIndex]);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Enter' || event.key === ' ') {
//         handleCardClick();
//       } else if (event.key === 'ArrowRight') {
//         handleNextCard();
//       } else if (event.key === 'ArrowLeft') {
//         handlePrevCard();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [currentIndex, isFlipped]);

//   const handleNextCard = () => {
//     if (currentIndex < csvData.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setIsFlipped(false);
//     }
//   };

//   const handlePrevCard = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//       setIsFlipped(false);
//     }
//   };

//   const handleCardClick = () => {
//     setIsFlipped((prev) => !prev);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <Navbar />
//       <div style={{ textAlign: 'center' }}>
//         <h1>Vocabulary Flip Card Game</h1>
//         <div className="flip-card" onClick={handleCardClick}>
//           <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
//             <div className="flip-card-front">
//               <p>{currentCard.Word}</p>
//             </div>
//             <div className="flip-card-back">
//               <p>{currentCard.Definition}</p>
//             </div>
//           </div>
//         </div>
//         <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
//           <button onClick={handlePrevCard} disabled={currentIndex === 0}>⬅ Previous</button>
//           <button onClick={handleNextCard} disabled={currentIndex === csvData.length - 1}>Next ➡</button>
//         </div>
//         <style jsx>{`
//             h1 {
//                 font-size: 40px; /* Adjust size as needed */
//             }

//           .flip-card {
//             width: 500px;
//             height: 700px;
//             perspective: 1000px;
//             margin: 20px auto;
//             cursor: pointer;
//           }
//           .flip-card-inner {
//             position: relative;
//             width: 100%;
//             height: 100%;
//             transform-style: preserve-3d;
//             transition: transform 0.5s;
//           }
//           .flipped {
//             transform: rotateY(180deg);
//           }
//           .flip-card-front, .flip-card-back {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             backface-visibility: hidden;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             font-size: 100px;
//             border: 1px solid #ccc;
//             border-radius: 8px;
//             background-color: white;
//             box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
//           }
//           .flip-card-back {
//             transform: rotateY(180deg);
//             background-color: #f2f2f2;
//             font-size: 60px;
//           }

//         .flip-card-front p,
//         .flip-card-back p {
//             font-size: 40px; /* Adjust size as needed */
//         }

//         button{

//             font-size: 24px; /* Increase button text size */
//             padding: 16px 32px; /* Adjust button size */
//         }



//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default FlipCardGame;

//CODE 2  SIZE FOR PHONES ETC

'use client'

import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Navbar from "../../Navbar";

const FlipCardGame = () => {
  const [csvData, setCsvData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [currentCard, setCurrentCard] = useState({});

  useEffect(() =>{
    setIsClient(true);
  },[]);

  useEffect(() => {
    const loadCSV = async () => {
      try {
        const response = await fetch('/WordnetNouns.csv');
        if (!response.ok) throw new Error('Failed to fetch CSV file');
        
        const text = await response.text();
        const result = Papa.parse(text, { header: true, skipEmptyLines: true });
        
        const standardizedData = result.data.map((row) => ({
          Word: row['Word'],
          Definition: row['Definition']
        }));

        setCsvData(standardizedData);
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
      setCurrentIndex(0);
    }
  }, [csvData]);
  
  useEffect(() => {
    if (csvData.length > 0 && currentIndex >= 0) {
      setCurrentCard(csvData[currentIndex] || {});
    }
  }, [csvData, currentIndex]);

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

  const handleNextCard = () => {
    if (currentIndex < csvData.length - 1) {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center' }}>
        <h1>Vocabulary Flip Card Game</h1>
        <div className="flip-card" onClick={handleCardClick}>
          <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-front">
              <p>{currentCard.Word}</p>
            </div>
            <div className="flip-card-back">
              <p>{currentCard.Definition}</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <button onClick={handlePrevCard} disabled={currentIndex === 0}>⬅ Previous</button>
          <button onClick={handleNextCard} disabled={currentIndex === csvData.length - 1}>Next ➡</button>
        </div>
        <style jsx>{`
            h1 {
                font-size: 40px; /* Adjust size as needed */
            }

            .flip-card {
                width: 90%; /* Responsive width */
                max-width: 500px; /* Maximum width for large screens */
                height: 70vh; /* Dynamic height based on viewport */
                perspective: 1000px;
                margin: 20px auto;
                cursor: pointer;
            }

            .flip-card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                transition: transform 0.5s;
                will-change: transform;
                }


            .flipped {
                transform: rotateY(180deg);
            }

            .flip-card-front, .flip-card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 5vw; /* Responsive font size based on viewport width */
                border: 1px solid #ccc;
                border-radius: 8px;
                background-color: white;
                box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
                padding: 10px;
                word-wrap: break-word; /* Ensure long words break */
                font-size: clamp(1.2rem, 5vw, 2.5rem); /* Minimum 1rem, scales with viewport, max 3rem */
            }

            .flip-card-back {
                transform: rotateY(180deg);
                background-color: #f2f2f2;
                font-size: 6vw; /* Adjust font size */
            }

            .flip-card-front p, .flip-card-back p {
                font-size: inherit; /* Responsive font size based on viewport width */
                padding: 10px; /* Optional padding to ensure the text doesn't touch the edges */
                word-wrap: break-word; /* Allow the text to break into new lines if necessary */
                line-height: 1.2; /* Control line height to avoid overlap */
            }

            button {
                font-size: 24px;
                padding: 16px 32px;
                background-color: #ff416c;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            button:hover {
                background-color: #ff4b2b;
            }

            /* Tablet Screens */
            @media (max-width: 1024px) {
                h1 {
                    font-size: 32px; /* Adjust for tablets and medium screens */
                }
                .flip-card {
                    width: 85%; /* Slightly smaller card for tablets */
                    height: 60vh;
                }
                .flip-card-front, .flip-card-back {
                    font-size: clamp(1.2rem, 5vw, 2rem); /* Adjusted size for better fit */
                }
            }

            /* Small Screens (Tablets, Small Laptops) */
            @media (max-width: 768px) {
                h1 {
                    font-size: 28px; /* Smaller font for tablets */
                }
                .flip-card {
                    width: 80%; /* Even smaller width for smaller screens */
                    height: 50vh;
                }
                .flip-card-front, .flip-card-back {
                    font-size: 8vw; /* Adjusted for smaller screens */
                }
            }

            /* Smallest Screens (Phones) */
            @media (max-width: 480px) {
                h1 {
                    font-size: 24px; /* Smallest font for phones */
                }
                .flip-card {
                    width: 90%; /* Full width on mobile */
                    height: 45vh;
                }
                .flip-card-front, .flip-card-back {
                    font-size: clamp(1rem, 8vw, 1.5rem); /* Larger text size for readability */
                }
                button {
                    font-size: 20px; /* Smaller button font */
                    padding: 12px 24px;
                }
            }

            /* Adjustments for larger screens (laptops, desktops) */
           @media (min-width: 1025px) {
                .flip-card-front, .flip-card-back {
                    font-size: clamp(1.2rem, 2vw, 3rem); /* Font size scales more appropriately for larger screens */
                }
            }
        `}</style>
      </div>
    </div>
  );
};

export default FlipCardGame;