// 'use client'

// import { useState, useEffect } from 'react';
// import Papa from 'papaparse';
// import Navbar from "../../Navbar";

// const FlipCardGame = () => {
//   const [csvData, setCsvData] = useState([]);
//   const [selectedLevels, setSelectedLevels] = useState(['N1']);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isClient, setIsClient] = useState(false);
//   const [currentCard, setCurrentCard] = useState({}); // Initialize as null

//   useEffect(() =>{
//     setIsClient(true);
//   },[]);

//   useEffect(() => {
//     const loadCSV = async () => {
//       try {
//         const response = await fetch('/jlpt_vocab.csv');
//         if (!response.ok) throw new Error('Failed to fetch CSV file');
        
//         const text = await response.text();
//         const result = Papa.parse(text, { header: true, skipEmptyLines: true });

//         setCsvData(result.data);
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
//       const filtered = csvData.filter((card) => selectedLevels.includes(card['JLPT Level']));
//       setFilteredCards(filtered);  // Directly set the filtered cards
//       setCurrentIndex(0); // Reset the index when the filters change
//     }
//   }, [csvData, selectedLevels]); // This effect depends on csvData and selectedLevels
  
//   useEffect(() => {
//     // Ensure currentCard is only updated when filteredCards and currentIndex are valid
//     if (filteredCards.length > 0 && currentIndex >= 0) {
//       setCurrentCard(filteredCards[currentIndex] || {});
//     }
//   }, [filteredCards, currentIndex]); // Trigger this effect when filteredCards or currentIndex change

//   // 5. Handle keyboard events (Enter, ArrowRight, ArrowLeft)
//     useEffect(() => {
//         const handleKeyDown = (event) => {
//         if (event.key === 'Enter') {
//             handleNextCard();
//         } else if (event.key === 'ArrowRight') {
//             handleNextCard();
//         } else if (event.key === 'ArrowLeft') {
//             handlePrevCard();
//         } else if (event.key === ' '){
//             handleCardClick();//flips the card
//         }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
// }, [currentIndex, isFlipped]);

//   const handleLevelChange = (level) => {
//     setSelectedLevels((prev) =>
//       prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
//     );
//   };

//   const handleNextCard = () => {
//     if (currentIndex < filteredCards.length - 1) {
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

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Enter') {
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

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Show blank card if no levels are selected or no cards match
//   if (filteredCards.length === 0 || selectedLevels.length ===0) {
//     return (
//         <div><Navbar />
//             <div style={{ textAlign: 'center' }}>
//                 <h1>JLPT Flip Card Game</h1>
//                 <div className="flip-card">
//                 <div className="flip-card-inner">
//                     <div className="flip-card-front">
//                     <p style={{ fontSize: '24px', color: '#777' }}>No cards available</p>
//                     </div>
//                     <div className="flip-card-back">
//                     <p style={{ fontSize: '24px', color: '#777' }}>Please select a level</p>
//                     </div>
//                 </div>
//                 </div>

//                 <div className="checkbox-container">
//                 {['N1', 'N2', 'N3', 'N4', 'N5'].map((level) => (
//                     <label key={level} style={{ marginRight: '10px' }}>
//                     <input
//                         type="checkbox"
//                         checked={selectedLevels.includes(level)}
//                         onChange={() => handleLevelChange(level)}
//                     /> {level}
//                     </label>
//                 ))}
//                 </div>

//                 <style jsx>{`
//                 /* Custom styles for the message and checkboxes */
//                 h1 {
//                     font-family: 'Poppins', sans-serif;
//                     font-size: 48px;
//                     font-weight: 600;
//                     color: #3d3d3d;
//                     text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
//                     background: linear-gradient(45deg, #ff416c, #ff4b2b);
//                     -webkit-background-clip: text;
//                     color: transparent;
//                 }
//                 .flip-card {
//                     background-color: transparent;
//                     width: 500px;
//                     height: 700px;
//                     perspective: 1000px;
//                     margin: 20px auto;
//                     cursor: pointer;
//                 }
//                 .flip-card-inner {
//                     position: relative;
//                     width: 100%;
//                     height: 100%;
//                     transform-style: preserve-3d;
//                     transition: transform 0.5s;
//                 }
//                 .flip-card-front,
//                 .flip-card-back {
//                     position: absolute;
//                     width: 100%;
//                     height: 100%;
//                     backface-visibility: hidden;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: center;
//                     align-items: center;
//                     font-size: 100px;
//                     border: 1px solid #ccc;
//                     border-radius: 8px;
//                     background-color: white;
//                     box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), 
//                         inset 2px 2px 5px rgba(255, 255, 255, 0.3);
//                 }
//                 .flip-card-back {
//                     transform: rotateY(180deg);
//                     background-color: #f2f2f2;
//                     font-size: 60px;
//                 }
//                 .checkbox-container {
//                     display: flex;
//                     justify-content: center;
//                     gap: 15px;
//                     margin: 20px 0;
//                 }
//                 input[type="checkbox"] {
//                     width: 20px;
//                     height: 20px;
//                     margin-right: 10px;
//                     cursor: pointer;
//                 }
//                 label {
//                     font-size: 20px;
//                     font-weight: 500;
//                     color: #333;
//                     cursor: pointer;
//                     transition: color 0.3s ease;
//                 }
//                 label:hover {
//                     color: #ff416c;
//                 }
//                 `}</style>
//             </div>
//         </div>
//     );
//   }

//   return (
//     <div>
//         <Navbar />
//         <div style={{ textAlign: 'center' }}>
//         <h1>JLPT Flip Card Game</h1>
//         <div className='checkbox-container'>
//             {['N1', 'N2', 'N3', 'N4', 'N5'].map((level) => (
//             <label key={level} style={{ marginRight: '10px' }}>
//                 <input
//                 type="checkbox"
//                 checked={selectedLevels.includes(level)}
//                 onChange={() => handleLevelChange(level)}
//                 /> {level}
//             </label>
//             ))}
//         </div>

//         <div className="flip-card" onClick={handleCardClick}>
//             <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                
//             <div className="flip-card-front">
//                 <p>{currentCard.Original}</p>
//                 <p style={{ fontSize: '24px', color: '#777' }}>{currentCard.Furigana}</p>
//             </div>
//             <div className="flip-card-back">
//                 <p>{currentCard.English}</p>
//             </div>
//             </div>
//         </div>

//         <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
//         <button 
//             style={{
//             padding: '12px 24px',
//             fontSize: '18px',
//             fontWeight: 'bold',
//             color: '#fff',
//             background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             transition: 'transform 0.2s, box-shadow 0.2s',
//             boxShadow: '0 4px 10px rgba(255, 65, 108, 0.3)',
//             opacity: currentIndex === 0 ? '0.5' : '1'
//             }}
//             onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
//             onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
//             onClick={handlePrevCard} 
//             disabled={currentIndex === 0}
//         >
//             ⬅ Previous
//         </button>

//         <button 
//             style={{
//             padding: '12px 24px',
//             fontSize: '18px',
//             fontWeight: 'bold',
//             color: '#fff',
//             background: 'linear-gradient(45deg, #1e90ff, #00c6ff)',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             transition: 'transform 0.2s, box-shadow 0.2s',
//             boxShadow: '0 4px 10px rgba(0, 198, 255, 0.3)',
//             opacity: currentIndex === filteredCards.length - 1 ? '0.5' : '1'
//             }}
//             onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
//             onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
//             onClick={handleNextCard} 
//             disabled={currentIndex === filteredCards.length - 1}
//         >
//             Next ➡
//         </button>
//         </div>
//             <style jsx>{`
//                 h1 {
//                     font-family: 'Poppins', sans-serif;
//                     font-size: 48px;
//                     font-weight: 600;
//                     color: #3d3d3d;
//                     text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
//                     background: linear-gradient(45deg, #ff416c, #ff4b2b);
//                     -webkit-background-clip: text;
//                     color: transparent;
//                 }


//                 .flip-card {
//                 background-color: transparent;
//                 width: 500px;
//                 height: 700px;
//                 perspective: 1000px;
//                 margin: 20px auto;
//                 cursor: pointer;
//                 }

//                 .flip-card-inner {
//                 position: relative;
//                 width: 100%;
//                 height: 100%;
//                 transform-style: preserve-3d;
//                 transition: transform 0.5s;
//                 }

//                 .flipped {
//                 transform: rotateY(180deg);
//                 }

//                 .flip-card-front,
//                 .flip-card-back {
//                 position: absolute;
//                 width: 100%;
//                 height: 100%;
//                 backface-visibility: hidden;
//                 display: flex;
//                 flex-direction: column;
//                 justify-content: center;
//                 align-items: center;
//                 font-size: 100px;
//                 border: 1px solid #ccc;
//                 border-radius: 8px;
//                 background-color: white;
//                 box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), 
//                         inset 2px 2px 5px rgba(255, 255, 255, 0.3);
//                 }

//                 .flip-card-back {
//                 transform: rotateY(180deg);
//                 background-color: #f2f2f2;
//                 font-size: 60px;
//                 }
                
//                 /* Container for the checkboxes */
//                 .checkbox-container {
//                 display: flex;
//                 justify-content: center;
//                 gap: 15px;
//                 margin: 20px 0;
//                 }

//                 /* Custom checkbox style */
//                 /* Custom checkbox style - remove appearance */
//                 input[type="checkbox"] {
//                 width: 20px;
//                 height: 20px;
//                 margin-right: 10px;
//                 cursor: pointer;
//                 }


//                 /* Checked state */
//                 input[type="checkbox"]:checked {
//                     background-color: #ff416c; /* Gradient color */
//                     border-color: #ff4b2b;
//                     box-shadow: 0 4px 15px rgba(255, 65, 108, 0.5); /* Glowing effect */
//                 }

//                 /* Hover effect */
//                 input[type="checkbox"]:hover {
//                 transform: scale(1.1); /* Slightly increase size */
//                 background-color: #ff4b2b;
//                 border-color: #ff416c;
//                 }

//                 /* Label style for the levels */
//                 label {
//                 font-size: 20px;
//                 font-weight: 500;
//                 color: #333;
//                 cursor: pointer;
//                 transition: color 0.3s ease;
//                 }

//                 /* Hover effect for the labels */
//                 label:hover {
//                 color: #ff416c;
//                 }

//             `}</style>
//         </div>
//     </div>
//   );
// };

// export default FlipCardGame;

//CODE 2

// 'use client'

// import { useState, useEffect } from 'react';
// import Papa from 'papaparse';
// import Navbar from "../../Navbar";

// const FlipCardGame = () => {
//   const [csvData, setCsvData] = useState([]);
//   const [selectedLevels, setSelectedLevels] = useState(['N1']);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isClient, setIsClient] = useState(false);
//   const [currentCard, setCurrentCard] = useState({}); // Initialize as null

//   useEffect(() =>{
//     setIsClient(true);
//   },[]);

//   useEffect(() => {
//     const loadCSV = async () => {
//       try {
//         const response = await fetch('/jlpt_vocab.csv');
//         if (!response.ok) throw new Error('Failed to fetch CSV file');
        
//         const text = await response.text();
//         const result = Papa.parse(text, { header: true, skipEmptyLines: true, dynamicTyping: true });

//          // Standardize the column names
//         const standardizedData = result.data.map((row) => ({
//           Original: row['Original'] || row['Kanji'], // Adjust based on actual headers
//           Furigana: row['Furigana'] || row['Reading'],
//           English: row['English'] || row['Translation'],
//           'JLPT Level': row['JLPT Level']
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
//       const filtered = csvData.filter((card) => selectedLevels.includes(card['JLPT Level']));
//       setFilteredCards(filtered);  // Directly set the filtered cards
//       setCurrentIndex(0); // Reset the index when the filters change
//     }
//   }, [csvData, selectedLevels]); // This effect depends on csvData and selectedLevels
  
//   useEffect(() => {
//     // Ensure currentCard is only updated when filteredCards and currentIndex are valid
//     if (filteredCards.length > 0 && currentIndex >= 0) {
//       setCurrentCard(filteredCards[currentIndex] || {});
//     }
//   }, [filteredCards, currentIndex]); // Trigger this effect when filteredCards or currentIndex change

//   // 5. Handle keyboard events (Enter, ArrowRight, ArrowLeft)
//     useEffect(() => {
//         const handleKeyDown = (event) => {
//         if (event.key === 'Enter') {
//             handleNextCard();
//         } else if (event.key === 'ArrowRight') {
//             handleNextCard();
//         } else if (event.key === 'ArrowLeft') {
//             handlePrevCard();
//         } else if (event.key === ' '){
//             handleCardClick();//flips the card
//         }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
// }, [currentIndex, isFlipped]);

//   const handleLevelChange = (level) => {
//     setSelectedLevels((prev) =>
//       prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
//     );
//   };

//   const handleNextCard = () => {
//     if (currentIndex < filteredCards.length - 1) {
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

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Enter') {
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

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Show blank card if no levels are selected or no cards match
//   if (filteredCards.length === 0 || selectedLevels.length ===0) {
//     return (
//         <div><Navbar />
//             <div style={{ textAlign: 'center' }}>
//                 <h1>JLPT Flip Card Game</h1>
//                 <div className="flip-card">
//                 <div className="flip-card-inner">
//                     <div className="flip-card-front">
//                     <p style={{ fontSize: '24px', color: '#777' }}>No cards available</p>
//                     </div>
//                     <div className="flip-card-back">
//                     <p style={{ fontSize: '24px', color: '#777' }}>Please select a level</p>
//                     </div>
//                 </div>
//                 </div>

//                 <div className="checkbox-container">
//                 {['N1', 'N2', 'N3', 'N4', 'N5'].map((level) => (
//                     <label key={level} style={{ marginRight: '10px' }}>
//                     <input
//                         type="checkbox"
//                         checked={selectedLevels.includes(level)}
//                         onChange={() => handleLevelChange(level)}
//                     /> {level}
//                     </label>
//                 ))}
//                 </div>

//                 <style jsx>{`
//                 /* Custom styles for the message and checkboxes */
//                 h1 {
//                     font-family: 'Poppins', sans-serif;
//                     font-size: 48px;
//                     font-weight: 600;
//                     color: #3d3d3d;
//                     text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
//                     background: linear-gradient(45deg, #ff416c, #ff4b2b);
//                     -webkit-background-clip: text;
//                     color: transparent;
//                 }
//                 .flip-card {
//                     background-color: transparent;
//                     width: 150px;
//                     height: 350px;
//                     perspective: 1000px;
//                     margin: 20px auto;
//                     cursor: pointer;
//                 }
//                 .flip-card-inner {
//                     position: relative;
//                     width: 100%;
//                     height: 100%;
//                     transform-style: preserve-3d;
//                     transition: transform 0.5s;
//                 }
//                 .flip-card-front,
//                 .flip-card-back {
//                     position: absolute;
//                     width: 100%;
//                     height: 100%;
//                     backface-visibility: hidden;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: center;
//                     align-items: center;
//                     font-size: 100px;
//                     border: 1px solid #ccc;
//                     border-radius: 8px;
//                     background-color: white;
//                     box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), 
//                         inset 2px 2px 5px rgba(255, 255, 255, 0.3);
//                 }
//                 .flip-card-back {
//                     transform: rotateY(180deg);
//                     background-color: #f2f2f2;
//                     font-size: 60px;
//                 }
//                 .checkbox-container {
//                     display: flex;
//                     justify-content: center;
//                     gap: 15px;
//                     margin: 20px 0;
//                 }
//                 input[type="checkbox"] {
//                     width: 20px;
//                     height: 20px;
//                     margin-right: 10px;
//                     cursor: pointer;
//                 }
//                 label {
//                     font-size: 20px;
//                     font-weight: 500;
//                     color: #333;
//                     cursor: pointer;
//                     transition: color 0.3s ease;
//                 }
//                 label:hover {
//                     color: #ff416c;
//                 }
//                 `}</style>
//             </div>
//         </div>
//     );
//   }

//   return (
//     <div>
//         <Navbar />
//         <div style={{ textAlign: 'center' }}>
//         <h1>JLPT Flip Card Game</h1>
//         <div className='checkbox-container'>
//             {['N1', 'N2', 'N3', 'N4', 'N5'].map((level) => (
//             <label key={level} style={{ marginRight: '10px' }}>
//                 <input
//                 type="checkbox"
//                 checked={selectedLevels.includes(level)}
//                 onChange={() => handleLevelChange(level)}
//                 /> {level}
//             </label>
//             ))}
//         </div>

//         <div className="flip-card" onClick={handleCardClick}>
//             <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                
//             <div className="flip-card-front">
//                 <p>{currentCard.Original}</p>
//                 <p style={{ fontSize: '24px', color: '#777' }}>{currentCard.Furigana}</p>
//             </div>
//             <div className="flip-card-back">
//                 <p>{currentCard.English}</p>
//             </div>
//             </div>
//         </div>

//         <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
//         <button 
//             style={{
//             padding: '12px 24px',
//             fontSize: '18px',
//             fontWeight: 'bold',
//             color: '#fff',
//             background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             transition: 'transform 0.2s, box-shadow 0.2s',
//             boxShadow: '0 4px 10px rgba(255, 65, 108, 0.3)',
//             opacity: currentIndex === 0 ? '0.5' : '1'
//             }}
//             onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
//             onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
//             onClick={handlePrevCard} 
//             disabled={currentIndex === 0}
//         >
//             ⬅ Previous
//         </button>

//         <button 
//             style={{
//             padding: '12px 24px',
//             fontSize: '18px',
//             fontWeight: 'bold',
//             color: '#fff',
//             background: 'linear-gradient(45deg, #1e90ff, #00c6ff)',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             transition: 'transform 0.2s, box-shadow 0.2s',
//             boxShadow: '0 4px 10px rgba(0, 198, 255, 0.3)',
//             opacity: currentIndex === filteredCards.length - 1 ? '0.5' : '1'
//             }}
//             onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
//             onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
//             onClick={handleNextCard} 
//             disabled={currentIndex === filteredCards.length - 1}
//         >
//             Next ➡
//         </button>
//         </div>
//             <style jsx>{`
//                 h1 {
//                     font-family: 'Poppins', sans-serif;
//                     font-size: 48px;
//                     font-weight: 600;
//                     color: #3d3d3d;
//                     text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
//                     background: linear-gradient(45deg, #ff416c, #ff4b2b);
//                     -webkit-background-clip: text;
//                     color: transparent;
//                 }


//                 .flip-card {
//                 background-color: transparent;
//                 width: 500px;
//                 height: 700px;
//                 perspective: 1000px;
//                 margin: 20px auto;
//                 cursor: pointer;
//                 }

//                 .flip-card-inner {
//                 position: relative;
//                 width: 100%;
//                 height: 100%;
//                 transform-style: preserve-3d;
//                 transition: transform 0.5s;
//                 }

//                 .flipped {
//                 transform: rotateY(180deg);
//                 }

//                 .flip-card-front,
//                 .flip-card-back {
//                 position: absolute;
//                 width: 100%;
//                 height: 100%;
//                 backface-visibility: hidden;
//                 display: flex;
//                 flex-direction: column;
//                 justify-content: center;
//                 align-items: center;
//                 font-size: 100px;
//                 border: 1px solid #ccc;
//                 border-radius: 8px;
//                 background-color: white;
//                 box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), 
//                         inset 2px 2px 5px rgba(255, 255, 255, 0.3);
//                 }

//                 .flip-card-back {
//                 transform: rotateY(180deg);
//                 background-color: #f2f2f2;
//                 font-size: 60px;
//                 }
                
//                 /* Container for the checkboxes */
//                 .checkbox-container {
//                 display: flex;
//                 justify-content: center;
//                 gap: 15px;
//                 margin: 20px 0;
//                 }

//                 /* Custom checkbox style */
//                 /* Custom checkbox style - remove appearance */
//                 input[type="checkbox"] {
//                 width: 20px;
//                 height: 20px;
//                 margin-right: 10px;
//                 cursor: pointer;
//                 }


//                 /* Checked state */
//                 input[type="checkbox"]:checked {
//                     background-color: #ff416c; /* Gradient color */
//                     border-color: #ff4b2b;
//                     box-shadow: 0 4px 15px rgba(255, 65, 108, 0.5); /* Glowing effect */
//                 }

//                 /* Hover effect */
//                 input[type="checkbox"]:hover {
//                 transform: scale(1.1); /* Slightly increase size */
//                 background-color: #ff4b2b;
//                 border-color: #ff416c;
//                 }

//                 /* Label style for the levels */
//                 label {
//                 font-size: 20px;
//                 font-weight: 500;
//                 color: #333;
//                 cursor: pointer;
//                 transition: color 0.3s ease;
//                 }

//                 /* Hover effect for the labels */
//                 label:hover {
//                 color: #ff416c;
//                 }

//             `}</style>
//         </div>
//     </div>
//   );
// };

// export default FlipCardGame;


//CODE 3
'use client'

import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Navbar from "../../Navbar";

const FlipCardGame = () => {
  const [csvData, setCsvData] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState(['N1']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [currentCard, setCurrentCard] = useState({}); // Initialize as null

  useEffect(() =>{
    setIsClient(true);
  },[]);

  useEffect(() => {
    const loadCSV = async () => {
      try {
        const response = await fetch('/jlpt_vocab.csv');
        if (!response.ok) throw new Error('Failed to fetch CSV file');
        
        const text = await response.text();
        const result = Papa.parse(text, { header: true, skipEmptyLines: true, dynamicTyping: true });

         // Standardize the column names
        const standardizedData = result.data.map((row) => ({
          Original: row['Original'] || row['Kanji'], // Adjust based on actual headers
          Furigana: row['Furigana'] || row['Reading'],
          English: row['English'] || row['Translation'],
          'JLPT Level': row['JLPT Level']
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
      const filtered = csvData.filter((card) => selectedLevels.includes(card['JLPT Level']));
      setFilteredCards(filtered);  // Directly set the filtered cards
      setCurrentIndex(0); // Reset the index when the filters change
    }
  }, [csvData, selectedLevels]); // This effect depends on csvData and selectedLevels
  
  useEffect(() => {
    // Ensure currentCard is only updated when filteredCards and currentIndex are valid
    if (filteredCards.length > 0 && currentIndex >= 0) {
      setCurrentCard(filteredCards[currentIndex] || {});
    }
  }, [filteredCards, currentIndex]); // Trigger this effect when filteredCards or currentIndex change

  // 5. Handle keyboard events (Enter, ArrowRight, ArrowLeft)
    useEffect(() => {
        const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleNextCard();
        } else if (event.key === 'ArrowRight') {
            handleNextCard();
        } else if (event.key === 'ArrowLeft') {
            handlePrevCard();
        } else if (event.key === ' '){
            handleCardClick();//flips the card
        }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
}, [currentIndex, isFlipped]);

  const handleLevelChange = (level) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
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

  // Show blank card if no levels are selected or no cards match
  if (filteredCards.length === 0 || selectedLevels.length ===0) {
    return (
        <div><Navbar />
            <div style={{ textAlign: 'center' }}>
                <h1>JLPT Flip Card Game</h1>
                <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <p style={{ fontSize: '24px', color: '#777' }}>No cards available</p>
                    </div>
                    <div className="flip-card-back">
                    <p style={{ fontSize: '24px', color: '#777' }}>Please select a level</p>
                    </div>
                </div>
                </div>

                <div className="checkbox-container">
                {['N1', 'N2', 'N3', 'N4', 'N5'].map((level) => (
                    <label key={level} style={{ marginRight: '10px' }}>
                    <input
                        type="checkbox"
                        checked={selectedLevels.includes(level)}
                        onChange={() => handleLevelChange(level)}
                    /> {level}
                    </label>
                ))}
                </div>

                <style jsx>{`
                /* Custom styles for the message and checkboxes */
                h1 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 48px;
                    font-weight: 600;
                    color: #3d3d3d;
                    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
                    background: linear-gradient(45deg, #ff416c, #ff4b2b);
                    -webkit-background-clip: text;
                    color: transparent;
                }
                .flip-card {
                    background-color: transparent;
                    width: 150px;
                    height: 350px;
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
                }
                .flip-card-front,
                .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 100px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    background-color: white;
                    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), 
                        inset 2px 2px 5px rgba(255, 255, 255, 0.3);
                }
                .flip-card-back {
                    transform: rotateY(180deg);
                    background-color: #f2f2f2;
                    font-size: 60px;
                }
                .checkbox-container {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin: 20px 0;
                }
                input[type="checkbox"] {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                    cursor: pointer;
                }
                label {
                    font-size: 20px;
                    font-weight: 500;
                    color: #333;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }
                label:hover {
                    color: #ff416c;
                }
                `}</style>
            </div>
        </div>
    );
  }

  return (
    <div>
        <Navbar />
        <div className="mt-14" style={{ textAlign: 'center' }}>
        <h1>JLPT Flip Card Game</h1>
        <div className='checkbox-container'>
            {['N1', 'N2', 'N3', 'N4', 'N5'].map((level) => (
            <label key={level} style={{ marginRight: '10px' }}>
                <input
                type="checkbox"
                checked={selectedLevels.includes(level)}
                onChange={() => handleLevelChange(level)}
                /> {level}
            </label>
            ))}
        </div>

        <div className="flip-card" onClick={handleCardClick}>
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                
            <div className="flip-card-front">
                <p>{currentCard.Original}</p>
                <p style={{ fontSize: '24px', color: '#777' }}>{currentCard.Furigana}</p>
            </div>
            <div className="flip-card-back">
                <p>{currentCard.English}</p>
            </div>
            </div>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <button 
            style={{
            padding: '12px 24px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#fff',
            background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 10px rgba(255, 65, 108, 0.3)',
            opacity: currentIndex === 0 ? '0.5' : '1'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            onClick={handlePrevCard} 
            disabled={currentIndex === 0}
        >
            ⬅ Previous
        </button>

        <button 
            style={{
            padding: '12px 24px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#fff',
            background: 'linear-gradient(45deg, #1e90ff, #00c6ff)',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 10px rgba(0, 198, 255, 0.3)',
            opacity: currentIndex === filteredCards.length - 1 ? '0.5' : '1'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            onClick={handleNextCard} 
            disabled={currentIndex === filteredCards.length - 1}
        >
            Next ➡
        </button>
        </div>
            <style jsx>{`
              h1 {
              font-family: 'Poppins', sans-serif;
              font-size: 48px;
              font-weight: 600;
              color: #3d3d3d;
              text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
              background: linear-gradient(45deg, #ff416c, #ff4b2b);
              -webkit-background-clip: text;
              color: transparent;
          }

          /* Flip card */
          .flip-card {
              background-color: transparent;
              width: 90%; /* Adjust width for responsive layout */
              max-width: 500px; /* Max width for large screens */
              height: 70vh; /* Height based on viewport height */
              perspective: 1000px;
              margin: 20px auto;
              cursor: pointer;
          }

          /* Inner flip card */
          .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              transform-style: preserve-3d;
              transition: transform 0.5s;
          }

          /* Flipped state */
          .flipped {
              transform: rotateY(180deg);
          }

          /* Front and back of the flip card */
          .flip-card-front,
          .flip-card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              font-size: 5vw; /* Font size relative to viewport */
              border: 1px solid #ccc;
              border-radius: 8px;
              background-color: white;
              box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.3);
          }

          .flip-card-back {
              transform: rotateY(180deg);
              background-color: #f2f2f2;
              font-size: 3vw; /* Adjust font size */
          }

          /* Container for checkboxes */
          .checkbox-container {
              display: flex;
              justify-content: center;
              gap: 15px;
              margin: 20px 0;
              flex-wrap: wrap; /* Wrap checkboxes on smaller screens */
          }

          /* Custom checkbox style */
          input[type="checkbox"] {
              width: 20px;
              height: 20px;
              margin-right: 10px;
              cursor: pointer;
          }

          /* Checked state */
          input[type="checkbox"]:checked {
              background-color: #ff416c; 
              border-color: #ff4b2b;
              box-shadow: 0 4px 15px rgba(255, 65, 108, 0.5);
          }

          /* Hover effect */
          input[type="checkbox"]:hover {
              transform: scale(1.1);
              background-color: #ff4b2b;
              border-color: #ff416c;
          }

          /* Label style */
          label {
              font-size: 20px;
              font-weight: 500;
              color: #333;
              cursor: pointer;
              transition: color 0.3s ease;
          }

          /* Hover effect for labels */
          label:hover {
              color: #ff416c;
          }

          /* Responsive design for smaller screens */
          @media (max-width: 1024px) {
              h1 {
                  font-size: 40px; /* Adjust for tablets and medium screens */
              }
              .flip-card {
                  width: 85%; /* Slightly smaller card for tablets */
                  height: 60vh;
              }
              .flip-card-front, .flip-card-back {
                  font-size: 6vw; /* Adjust font size */
              }
          }

          @media (max-width: 768px) {
              h1 {
                  font-size: 32px; /* Smaller font for tablets */
              }
              .flip-card {
                  width: 80%; /* Even smaller width for smaller screens */
                  height: 50vh;
              }
              .flip-card-front, .flip-card-back {
                  font-size: 8vw; /* Larger font size on smaller screens */
              }
              .checkbox-container {
                  gap: 10px; /* Reduce space between checkboxes */
              }
          }

          @media (max-width: 480px) {
              h1 {
                  font-size: 24px; /* Smallest font for phones */
              }
              .flip-card {
                  width: 90%; /* Full width on mobile */
                  height: 45vh;
              }
              .flip-card-front, .flip-card-back {
                  font-size: 10vw; /* Make text size even bigger for readability */
              }
              .checkbox-container {
                  gap: 5px; /* Even more compact for small screens */
              }
          }
            `}</style>
        </div>
    </div>
  );
};

export default FlipCardGame;
