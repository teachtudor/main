//CODE 1.  FREEZES
// "use client";

// import { useState, useEffect } from "react";
// import Papa from "papaparse";
// import Navbar from "../../Navbar";

// export default function Home() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [words, setWords] = useState([]);
//   const [selectedLevels, setSelectedLevels] = useState([]);
//   const [randomWord, setRandomWord] = useState(null);
//   const [knownWords, setKnownWords] = useState(0); // Track number of known words
//   const [testedWords, setTestedWords] = useState(0); // Track number of tested words
//   const [confidenceMessage, setConfidenceMessage] = useState("");
//   const [confidenceInterval, setConfidenceInterval] = useState(null);
//   const [standardError, setStandardError] = useState(null);

//   const [isReady, setIsReady] = useState(false);

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "text/csv") {
//       setSelectedFile(file);
//       parseCSV(file);
//     }
//   };

//   // Parse CSV using PapaParse
//   const parseCSV = (file) => {
//     Papa.parse(file, {
//       complete: (result) => {
//         const parsedWords = result.data.map((row) => {
//           if (!row.headword || !row.CEFR) {
//             console.warn("Invalid row:", row); // Log the problematic rows
//           }
//           return {
//             headword: row.headword ? row.headword.trim() : "",
//             CEFR: row.CEFR ? row.CEFR.trim().toUpperCase() : "",
//           };
//         });
//         setWords(parsedWords);
//       },
//       header: true,
//     });
//   };

//   // Handle checkbox selection for levels
//   const handleCheckboxChange = (level) => {
//     setSelectedLevels((prevSelectedLevels) => {
//       if (prevSelectedLevels.includes(level)) {
//         return prevSelectedLevels.filter((item) => item !== level);
//       } else {
//         return [...prevSelectedLevels, level];
//       }
//     });
//   };

//   // Randomly pick a word from the selected levels
//   const getRandomWord = () => {
//     if (selectedLevels.length === 0 || words.length === 0 || isReady) return;

//     // Filter words based on selected CEFR levels
//     const filteredWords = words.filter((word) => selectedLevels.includes(word.CEFR));

//     if (filteredWords.length === 0) return;

//     // Pick a random word from the filtered words
//     const randomIndex = Math.floor(Math.random() * filteredWords.length);
//     const word = filteredWords[randomIndex];

//     console.log("Random word selected:", word); // Add this line to debug

//     // Set random word and trigger the fade-in effect
//     setRandomWord(word);
//     setTestedWords((prev) => prev + 1); // Increment the number of tested words
//   };

//   // Mark word as "known"
//   const markAsKnown = () => {
//     setKnownWords((prev) => prev + 1);
//     getRandomWord(); // Fetch new word
//   };

//   // Mark word as "unknown"
//   const markAsUnknown = () => {
//     getRandomWord(); // Fetch new word
//   };

//   // Calculate the estimated number of known words and perform statistical analysis
//   const calculateResults = () => {
//     const proportionKnown = knownWords / testedWords;
//     const sampleSize = testedWords;

//     if (sampleSize < 30) {
//       setConfidenceMessage("You need more words for testing.");
//       return;
//     }

//     // Standard error (SE) of the proportion
//     const SE = Math.sqrt((proportionKnown * (1 - proportionKnown)) / sampleSize);

//     // 95% Confidence Interval
//     const CI = [
//       (proportionKnown - 1.96 * SE) * 100,
//       (proportionKnown + 1.96 * SE) * 100,
//     ];

//     setStandardError(SE);
//     setConfidenceInterval(CI);

//     // Display final message
//     setConfidenceMessage(`You know approximately ${Math.round(proportionKnown * 100)}% of the words in the list.`);
//   };

//   // Handle "Ready" button press
//   const handleReady = () => {
//     setIsReady(true);
//     calculateResults(); // Calculate results when ready
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="container">
//         <h1>Magic Ball Word Selector</h1>

//         <div>
//           <label htmlFor="file-upload">Choose a CSV File:</label>
//           <input type="file" id="file-upload" accept=".csv" onChange={handleFileUpload} />
//         </div>

//         <div className="checkbox-group">
//           {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//             <div key={level} className="checkbox-item">
//               <input type="checkbox" id={level} onChange={() => handleCheckboxChange(level)} />
//               <label htmlFor={level}>{level}</label>
//             </div>
//           ))}
//         </div>

//         <button className="go-button" onClick={getRandomWord}>
//           Go!
//         </button>

//         {randomWord && (
//           <div className="result">
//             <p className="fade-in">{randomWord.headword}</p>
//             <div className="button-group">
//               <button onClick={markAsUnknown} style={{ backgroundColor: "red" }}>
//                 Unknown
//               </button>
//               <button onClick={markAsKnown} style={{ backgroundColor: "blue" }}>
//                 Known
//               </button>
//             </div>
//           </div>
//         )}

//         <button onClick={handleReady} className="ready-button">
//           Ready
//         </button>

//         {confidenceMessage && (
//           <div className="confidence-message">
//             <p>{confidenceMessage}</p>
//             {confidenceInterval && (
//               <p>
//                 95% Confidence Interval: [{Math.round(confidenceInterval[0])}%,{" "}
//                 {Math.round(confidenceInterval[1])}%]
//               </p>
//             )}
//             {standardError && <p>Standard Error: {standardError.toFixed(3)}</p>}
//           </div>
//         )}

//         <style jsx>{`
//           .container {
//             text-align: center;
//             margin-top: 20px;
//           }
//           .checkbox-group {
//             display: flex;
//             justify-content: center;
//             gap: 20px;
//             margin: 20px 0;
//           }
//           .checkbox-item {
//             display: flex;
//             align-items: center;
//           }
//           .go-button {
//             padding: 10px 20px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             cursor: pointer;
//             font-size: 16px;
//             border-radius: 5px;
//             margin-top: 20px;
//           }
//           .go-button:hover {
//             background-color: #0056b3;
//           }
//           .button-group {
//             margin-top: 20px;
//           }
//           .result {
//             margin-top: 20px;
//           }
//           .fade-in {
//             animation: fadeIn 2s;
//             font-size: 100px;
//             font-weight: bold;
//             color: #333;
//           }
//           .ready-button {
//             margin-top: 20px;
//             background-color: black;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//           }
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//             }
//             to {
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }

//CODE 2  NEEDS A LOT OF TWEAKING BUT SOME GOOD IDEAS
// "use client";

// import { useState } from "react";
// import Papa from "papaparse";
// import Navbar from "../../Navbar";

// export default function Home() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [words, setWords] = useState([]);
//   const [selectedLevels, setSelectedLevels] = useState([]);
//   const [randomWord, setRandomWord] = useState(null);
//   const [knownWords, setKnownWords] = useState(0); // Track number of known words
//   const [unknownWords, setUnknownWords] = useState(0); // Track number of unknown words
//   const [testedWords, setTestedWords] = useState(0); // Track number of tested words
//   const [confidenceMessage, setConfidenceMessage] = useState("");
//   const [confidenceInterval, setConfidenceInterval] = useState(null);
//   const [standardError, setStandardError] = useState(null);

//   const [isReady, setIsReady] = useState(false);
//   const [canPickWord, setCanPickWord] = useState(true); // Control the ability to pick words after ready

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "text/csv") {
//       setSelectedFile(file);
//       parseCSV(file);
//     }
//   };

//   // Parse CSV using PapaParse
//   const parseCSV = (file) => {
//     Papa.parse(file, {
//       complete: (result) => {
//         const parsedWords = result.data.map((row) => {
//           if (!row.headword || !row.CEFR) {
//             console.warn("Invalid row:", row); // Log the problematic rows
//           }
//           return {
//             headword: row.headword ? row.headword.trim() : "",
//             CEFR: row.CEFR ? row.CEFR.trim().toUpperCase() : "",
//           };
//         });
//         setWords(parsedWords);
//       },
//       header: true,
//     });
//   };

//   // Handle checkbox selection for levels
//   const handleCheckboxChange = (level) => {
//     setSelectedLevels((prevSelectedLevels) => {
//       if (prevSelectedLevels.includes(level)) {
//         return prevSelectedLevels.filter((item) => item !== level);
//       } else {
//         return [...prevSelectedLevels, level];
//       }
//     });
//   };

//   // Randomly pick a word from the selected levels
//   const getRandomWord = () => {
//     if (selectedLevels.length === 0 || words.length === 0 || !canPickWord) return;

//     // Filter words based on selected CEFR levels
//     const filteredWords = words.filter((word) => selectedLevels.includes(word.CEFR));

//     if (filteredWords.length === 0) return;

//     // Pick a random word from the filtered words
//     const randomIndex = Math.floor(Math.random() * filteredWords.length);
//     const word = filteredWords[randomIndex];

//     console.log("Random word selected:", word); // Add this line to debug

//     // Set random word and trigger the fade-in effect
//     setRandomWord(word);
//     setTestedWords((prev) => prev + 1); // Increment the number of tested words
//   };

//   // Mark word as "known"
//   const markAsKnown = () => {
//     setKnownWords((prev) => prev + 1);
//     getRandomWord(); // Fetch new word
//   };

//   // Mark word as "unknown"
//   const markAsUnknown = () => {
//     setUnknownWords((prev) => prev + 1);
//     getRandomWord(); // Fetch new word
//   };

//   // Calculate the estimated number of known words and perform statistical analysis
//   const calculateResults = () => {
//     const proportionKnown = knownWords / testedWords;
//     const sampleSize = testedWords;

//     if (sampleSize < 30) {
//       setConfidenceMessage("You need more words for testing.");
//       setCanPickWord(false); // Prevent further picking of words until more testing is done
//       return;
//     }

//     // Standard error (SE) of the proportion
//     const SE = Math.sqrt((proportionKnown * (1 - proportionKnown)) / sampleSize);

//     // 95% Confidence Interval
//     const CI = [
//       (proportionKnown - 1.96 * SE) * 100,
//       (proportionKnown + 1.96 * SE) * 100,
//     ];

//     setStandardError(SE);
//     setConfidenceInterval(CI);

//     // Display final message
//     setConfidenceMessage(`You know approximately ${Math.round(proportionKnown * 100)}% of the words in the list.`);
//   };

//   // Handle "Ready" button press
//   const handleReady = () => {
//     setIsReady(true);
//     calculateResults(); // Calculate results when ready
//   };

//   // Get count of words per level
//   const countWordsByLevel = () => {
//     const counts = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
//     words.forEach((word) => {
//       if (counts[word.CEFR]) {
//         counts[word.CEFR] += 1;
//       }
//     });
//     return counts;
//   };

//   const wordCounts = countWordsByLevel();

//   return (
//     <div>
//       <Navbar />

//       <div className="container">
//         <h1>Magic Ball Word Selector</h1>

//         <div>
//           <label htmlFor="file-upload">Choose a CSV File:</label>
//           <input type="file" id="file-upload" accept=".csv" onChange={handleFileUpload} />
//         </div>

//         <div className="checkbox-group">
//           {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//             <div key={level} className="checkbox-item">
//               <input type="checkbox" id={level} onChange={() => handleCheckboxChange(level)} />
//               <label htmlFor={level}>{level}</label>
//             </div>
//           ))}
//         </div>

//         <button className="go-button" onClick={getRandomWord}>
//           Go!
//         </button>

//         {randomWord && (
//           <div className="result">
//             <p className="fade-in">{randomWord.headword}</p>
//             <div className="button-group">
//               <button onClick={markAsUnknown} style={{ backgroundColor: "red" }}>
//                 Unknown
//               </button>
//               <button onClick={markAsKnown} style={{ backgroundColor: "blue" }}>
//                 Known
//               </button>
//             </div>
//           </div>
//         )}

//         <button onClick={handleReady} className="ready-button">
//           Ready
//         </button>

//         {confidenceMessage && (
//           <div className="confidence-message">
//             <p>{confidenceMessage}</p>
//             {confidenceInterval && (
//               <p>
//                 95% Confidence Interval: [{Math.round(confidenceInterval[0])}%,{" "}
//                 {Math.round(confidenceInterval[1])}%]
//               </p>
//             )}
//             {standardError && <p>Standard Error: {standardError.toFixed(3)}</p>}
//           </div>
//         )}

//         <div className="word-counts">
//           <h3>Words by Level</h3>
//           {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//             <p key={level}>
//               {level}: {wordCounts[level]} words
//             </p>
//           ))}
//         </div>

//         <div className="known-unknown-counts">
//           <h3>Known/Unknown Words</h3>
//           <p>Known: {knownWords}</p>
//           <p>Unknown: {unknownWords}</p>
//         </div>

//         <style jsx>{`
//           .container {
//             text-align: center;
//             margin-top: 20px;
//           }
//           .checkbox-group {
//             display: flex;
//             justify-content: center;
//             gap: 20px;
//             margin: 20px 0;
//           }
//           .checkbox-item {
//             display: flex;
//             align-items: center;
//           }
//           .go-button {
//             padding: 10px 20px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             cursor: pointer;
//             font-size: 16px;
//             border-radius: 5px;
//             margin-top: 20px;
//           }
//           .go-button:hover {
//             background-color: #0056b3;
//           }
//           .button-group {
//             margin-top: 20px;
//           }
//           .result {
//             margin-top: 20px;
//           }
//           .fade-in {
//             animation: fadeIn 2s;
//             font-size: 100px;
//             font-weight: bold;
//             color: #333;
//           }
//           .ready-button {
//             margin-top: 20px;
//             background-color: black;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//           }
//           .word-counts, .known-unknown-counts {
//             margin-top: 20px;
//           }
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//             }
//             to {
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }


//CODE 3
// "use client";

// import { useState } from "react";
// import Papa from "papaparse";
// import Navbar from "../../Navbar";

// export default function Home() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [words, setWords] = useState([]);
//   const [selectedLevels, setSelectedLevels] = useState([]);
//   const [randomWord, setRandomWord] = useState(null);
//   const [knownWords, setKnownWords] = useState(0); // Track number of known words
//   const [unknownWords, setUnknownWords] = useState(0); // Track number of unknown words
//   const [testedWords, setTestedWords] = useState(0); // Track number of tested words
//   const [confidenceMessage, setConfidenceMessage] = useState("");
//   const [confidenceInterval, setConfidenceInterval] = useState(null);
//   const [standardError, setStandardError] = useState(null);

//   const [isReady, setIsReady] = useState(false);
//   const [canPickWord, setCanPickWord] = useState(true); // Control the ability to pick words after ready

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "text/csv") {
//       setSelectedFile(file);
//       parseCSV(file);
//     }
//   };

//   // Parse CSV using PapaParse
//   const parseCSV = (file) => {
//     Papa.parse(file, {
//       complete: (result) => {
//         const parsedWords = result.data.map((row) => {
//           if (!row.headword || !row.CEFR) {
//             console.warn("Invalid row:", row); // Log the problematic rows
//           }
//           return {
//             headword: row.headword ? row.headword.trim() : "",
//             CEFR: row.CEFR ? row.CEFR.trim().toUpperCase() : "",
//           };
//         });
//         setWords(parsedWords);
//       },
//       header: true,
//     });
//   };

//   // Handle checkbox selection for levels
//   const handleCheckboxChange = (level) => {
//     setSelectedLevels((prevSelectedLevels) => {
//       if (prevSelectedLevels.includes(level)) {
//         return prevSelectedLevels.filter((item) => item !== level);
//       } else {
//         return [...prevSelectedLevels, level];
//       }
//     });
//   };

//   // Randomly pick a word from the selected levels
//   const getRandomWord = () => {
//     if (selectedLevels.length === 0 || words.length === 0 || !canPickWord) return;

//     // Filter words based on selected CEFR levels
//     const filteredWords = words.filter((word) => selectedLevels.includes(word.CEFR));

//     if (filteredWords.length === 0) return;

//     // Pick a random word from the filtered words
//     const randomIndex = Math.floor(Math.random() * filteredWords.length);
//     const word = filteredWords[randomIndex];

//     console.log("Random word selected:", word); // Add this line to debug

//     // Set random word and trigger the fade-in effect
//     setRandomWord(word);
//     setTestedWords((prev) => prev + 1); // Increment the number of tested words
//   };

//   // Mark word as "known"
//   const markAsKnown = () => {
//     setKnownWords((prev) => prev + 1);
//     getRandomWord(); // Fetch new word
//   };

//   // Mark word as "unknown"
//   const markAsUnknown = () => {
//     setUnknownWords((prev) => prev + 1);
//     getRandomWord(); // Fetch new word
//   };

//   // Calculate the estimated number of known words and perform statistical analysis
//   const calculateResults = () => {
//     const proportionKnown = knownWords / testedWords;
//     const sampleSize = testedWords;

//     if (sampleSize < 30) {
//       setConfidenceMessage("You need more words for testing.");
//       setCanPickWord(false); // Prevent further picking of words until more testing is done
//       return;
//     }

//     // Standard error (SE) of the proportion
//     const SE = Math.sqrt((proportionKnown * (1 - proportionKnown)) / sampleSize);

//     // 95% Confidence Interval
//     const CI = [
//       (proportionKnown - 1.96 * SE) * 100,
//       (proportionKnown + 1.96 * SE) * 100,
//     ];

//     setStandardError(SE);
//     setConfidenceInterval(CI);

//     // Display final message
//     setConfidenceMessage(`You know approximately ${Math.round(proportionKnown * 100)}% of the words in the list.`);
//   };

//   // Handle "Ready" button press
//   const handleReady = () => {
//     setIsReady(true);
//     calculateResults(); // Calculate results when ready
//   };

//   // Get count of words per level
//   const countWordsByLevel = () => {
//     const counts = {
//       A1: { known: 0, unknown: 0 },
//       A2: { known: 0, unknown: 0 },
//       B1: { known: 0, unknown: 0 },
//       B2: { known: 0, unknown: 0 },
//       C1: { known: 0, unknown: 0 },
//       C2: { known: 0, unknown: 0 },
//     };

//     words.forEach((word) => {
//       if (selectedLevels.includes(word.CEFR)) {
//         if (knownWords > 0) {
//           counts[word.CEFR].known += 1;
//         } else {
//           counts[word.CEFR].unknown += 1;
//         }
//       }
//     });
//     return counts;
//   };

//   const wordCounts = countWordsByLevel();

//   return (
//     <div>
//       <Navbar />

//       <div className="container">
//         <h1>Magic Ball Word Selector</h1>

//         <div>
//           <label htmlFor="file-upload">Choose a CSV File:</label>
//           <input type="file" id="file-upload" accept=".csv" onChange={handleFileUpload} />
//         </div>

//         <div className="checkbox-group">
//           {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//             <div key={level} className="checkbox-item">
//               <input type="checkbox" id={level} onChange={() => handleCheckboxChange(level)} />
//               <label htmlFor={level}>{level}</label>
//             </div>
//           ))}
//         </div>

//         <button className="go-button" onClick={getRandomWord}>
//           Go!
//         </button>

//         {randomWord && (
//           <div className="result">
//             <p className="fade-in">{randomWord.headword}</p>
//             <div className="button-group">
//               <button onClick={markAsUnknown} style={{ backgroundColor: "red" }}>
//                 Unknown
//               </button>
//               <button onClick={markAsKnown} style={{ backgroundColor: "blue" }}>
//                 Known
//               </button>
//             </div>
//           </div>
//         )}

//         <button onClick={handleReady} className="ready-button">
//           Ready
//         </button>

//         {confidenceMessage && !isReady && (
//           <div className="confidence-message">
//             <p>{confidenceMessage}</p>
//             <p>Minimum words to be tested: 30</p>
//           </div>
//         )}

//         {confidenceMessage && isReady && (
//           <div className="confidence-message">
//             <p>{confidenceMessage}</p>
//             {confidenceInterval && (
//               <p>
//                 95% Confidence Interval: [{Math.round(confidenceInterval[0])}%,{" "}
//                 {Math.round(confidenceInterval[1])}%]
//               </p>
//             )}
//             {standardError && <p>Standard Error: {standardError.toFixed(3)}</p>}
//           </div>
//         )}

//         <div className="word-counts">
//           <h3>Words by Level</h3>
//           <div className="level-columns">
//             <div className="column">
//               <h4>Known</h4>
//               {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//                 <div key={level}>
//                   <p>{level}: {wordCounts[level]?.known || 0}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="column">
//               <h4>Unknown</h4>
//               {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//                 <div key={level}>
//                   <p>{level}: {wordCounts[level]?.unknown || 0}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="known-unknown-counts">
//           <h3>Known/Unknown Words</h3>
//           <p>Known: {knownWords}</p>
//           <p>Unknown: {unknownWords}</p>
//         </div>

//         <style jsx>{`
//           .container {
//             text-align: center;
//             margin-top: 20px;
//           }
//           .checkbox-group {
//             display: flex;
//             justify-content: center;
//             gap: 20px;
//             margin: 20px 0;
//           }
//           .checkbox-item {
//             display: flex;
//             align-items: center;
//           }
//           .go-button {
//             padding: 10px 20px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             cursor: pointer;
//             font-size: 16px;
//             border-radius: 5px;
//             margin-top: 20px;
//           }
//           .go-button:hover {
//             background-color: #0056b3;
//           }
//           .button-group {
//             margin-top: 20px;
//           }
//           .result {
//             margin-top: 20px;
//           }
//           .fade-in {
//             animation: fadeIn 2s;
//             font-size: 100px;
//             font-weight: bold;
//             color: #333;
//           }
//           .ready-button {
//             margin-top: 20px;
//             background-color: black;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//           }
//           .word-counts {
//             margin-top: 20px;
//             display: flex;
//             justify-content: center;
//             gap: 40px;
//           }
//           .level-columns {
//             display: flex;
//             justify-content: center;
//           }
//           .column {
//             margin: 0 20px;
//           }
//           .known-unknown-counts {
//             margin-top: 20px;
//           }
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//             }
//             to {
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }


//CODE 4 ALMOST THERE
// "use client";

// import { useState } from "react";
// import Papa from "papaparse";
// import Navbar from "../../Navbar";

// export default function Home() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [words, setWords] = useState([]);
//   const [selectedLevels, setSelectedLevels] = useState([]);
//   const [randomWord, setRandomWord] = useState(null);
//   const [knownWords, setKnownWords] = useState(0); // Track number of known words
//   const [unknownWords, setUnknownWords] = useState(0); // Track number of unknown words
//   const [testedWords, setTestedWords] = useState(0); // Track number of tested words
//   const [confidenceMessage, setConfidenceMessage] = useState("");
//   const [confidenceInterval, setConfidenceInterval] = useState(null);
//   const [standardError, setStandardError] = useState(null);

//   const [isReady, setIsReady] = useState(false);
//   const [canPickWord, setCanPickWord] = useState(true); // Control the ability to pick words after ready

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "text/csv") {
//       setSelectedFile(file);
//       parseCSV(file);
//     }
//   };

//   // Parse CSV using PapaParse
//   const parseCSV = (file) => {
//     Papa.parse(file, {
//       complete: (result) => {
//         const parsedWords = result.data.map((row) => {
//           if (!row.headword || !row.CEFR) {
//             console.warn("Invalid row:", row); // Log the problematic rows
//           }
//           return {
//             headword: row.headword ? row.headword.trim() : "",
//             CEFR: row.CEFR ? row.CEFR.trim().toUpperCase() : "",
//           };
//         });
//         setWords(parsedWords);
//       },
//       header: true,
//     });
//   };

//   // Handle checkbox selection for levels
//   const handleCheckboxChange = (level) => {
//     setSelectedLevels((prevSelectedLevels) => {
//       if (prevSelectedLevels.includes(level)) {
//         return prevSelectedLevels.filter((item) => item !== level);
//       } else {
//         return [...prevSelectedLevels, level];
//       }
//     });
//   };

//   // Randomly pick a word from the selected levels
//   const getRandomWord = () => {
//     if (selectedLevels.length === 0 || words.length === 0 || !canPickWord) return;

//     // Filter words based on selected CEFR levels
//     const filteredWords = words.filter((word) => selectedLevels.includes(word.CEFR));

//     if (filteredWords.length === 0) return;

//     // Pick a random word from the filtered words
//     const randomIndex = Math.floor(Math.random() * filteredWords.length);
//     const word = filteredWords[randomIndex];

//     console.log("Random word selected:", word); // Add this line to debug

//     // Set random word and trigger the fade-in effect
//     setRandomWord(word);
//     setTestedWords((prev) => prev + 1); // Increment the number of tested words
//   };

//   // Mark word as "known"
//   const markAsKnown = () => {
//     setKnownWords((prev) => prev + 1);
//     getRandomWord(); // Fetch new word
//   };

//   // Mark word as "unknown"
//   const markAsUnknown = () => {
//     setUnknownWords((prev) => prev + 1);
//     getRandomWord(); // Fetch new word
//   };

//   // Calculate the estimated number of known words and perform statistical analysis
//   const calculateResults = () => {
//     const proportionKnown = knownWords / testedWords;
//     const sampleSize = testedWords;

//     if (sampleSize < 30) {
//       setConfidenceMessage("You need more words for testing.");
//       setCanPickWord(false); // Prevent further picking of words until more testing is done
//       return;
//     }

//     // Standard error (SE) of the proportion
//     const SE = Math.sqrt((proportionKnown * (1 - proportionKnown)) / sampleSize);

//     // 95% Confidence Interval
//     const CI = [
//       (proportionKnown - 1.96 * SE) * 100,
//       (proportionKnown + 1.96 * SE) * 100,
//     ];

//     setStandardError(SE);
//     setConfidenceInterval(CI);

//     // Display final message
//     setConfidenceMessage(`You know approximately ${Math.round(proportionKnown * 100)}% of the words in the list.`);
//   };

//   // Handle "Ready" button press
//   const handleReady = () => {
//     setIsReady(true);
//     calculateResults(); // Calculate results when ready
//   };

//   // Get count of words per level (known and unknown)
//   const countWordsByLevel = () => {
//     const counts = {
//       A1: { known: 0, unknown: 0 },
//       A2: { known: 0, unknown: 0 },
//       B1: { known: 0, unknown: 0 },
//       B2: { known: 0, unknown: 0 },
//       C1: { known: 0, unknown: 0 },
//       C2: { known: 0, unknown: 0 },
//     };

//     words.forEach((word) => {
//       if (selectedLevels.includes(word.CEFR)) {
//         if (word.CEFR === "A1") {
//           counts["A1"][knownWords > 0 ? "known" : "unknown"] += 1;
//         } else if (word.CEFR === "A2") {
//           counts["A2"][knownWords > 0 ? "known" : "unknown"] += 1;
//         } else if (word.CEFR === "B1") {
//           counts["B1"][knownWords > 0 ? "known" : "unknown"] += 1;
//         } else if (word.CEFR === "B2") {
//           counts["B2"][knownWords > 0 ? "known" : "unknown"] += 1;
//         } else if (word.CEFR === "C1") {
//           counts["C1"][knownWords > 0 ? "known" : "unknown"] += 1;
//         } else if (word.CEFR === "C2") {
//           counts["C2"][knownWords > 0 ? "known" : "unknown"] += 1;
//         }
//       }
//     });
//     return counts;
//   };

//   const wordCounts = countWordsByLevel();
//   const totalKnown = Object.values(wordCounts).reduce((acc, level) => acc + level.known, 0);
//   const totalUnknown = Object.values(wordCounts).reduce((acc, level) => acc + level.unknown, 0);

//   return (
//     <div>
//       <Navbar />

//       <div className="container">
//         <h1>Magic Ball Word Selector</h1>

//         <div>
//           <label htmlFor="file-upload">Choose a CSV File:</label>
//           <input type="file" id="file-upload" accept=".csv" onChange={handleFileUpload} />
//         </div>

//         <div className="checkbox-group">
//           {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//             <div key={level} className="checkbox-item">
//               <input type="checkbox" id={level} onChange={() => handleCheckboxChange(level)} />
//               <label htmlFor={level}>{level}</label>
//             </div>
//           ))}
//         </div>

//         <button className="go-button" onClick={getRandomWord}>
//           Go!
//         </button>

//         {randomWord && (
//           <div className="result">
//             <p className="fade-in">{randomWord.headword}</p>
//             <div className="button-group">
//               <button onClick={markAsUnknown} style={{ backgroundColor: "red" }}>
//                 Unknown
//               </button>
//               <button onClick={markAsKnown} style={{ backgroundColor: "blue" }}>
//                 Known
//               </button>
//             </div>
//           </div>
//         )}

//         <button onClick={handleReady} className="ready-button">
//           Ready
//         </button>

//         {confidenceMessage && !isReady && (
//           <div className="confidence-message">
//             <p>{confidenceMessage}</p>
//             <p>Minimum words to be tested: 30</p>
//           </div>
//         )}

//         {confidenceMessage && isReady && (
//           <div className="confidence-message">
//             <p>{confidenceMessage}</p>
//             {confidenceInterval && (
//               <p>
//                 95% Confidence Interval: [{Math.round(confidenceInterval[0])}%,{" "}
//                 {Math.round(confidenceInterval[1])}%]
//               </p>
//             )}
//             {standardError && <p>Standard Error: {standardError.toFixed(3)}</p>}
//           </div>
//         )}

//         <div className="word-counts">
//           <h3>Words by Level</h3>
//           <div className="level-columns">
//             <div className="column">
//               <h4>Known</h4>
//               {Object.keys(wordCounts).map((level) => (
//                 <p key={level}>
//                   {level}: {wordCounts[level].known}
//                 </p>
//               ))}
//             </div>

//             <div className="column">
//               <h4>Unknown</h4>
//               {Object.keys(wordCounts).map((level) => (
//                 <p key={level}>
//                   {level}: {wordCounts[level].unknown}
//                 </p>
//               ))}
//             </div>
//           </div>

//           <div className="known-unknown-counts">
//             <h4>Total Known: {totalKnown}</h4>
//             <h4>Total Unknown: {totalUnknown}</h4>
//           </div>
//         </div>

//         <style jsx>{`
//           .container {
//             text-align: center;
//             margin-top: 20px;
//           }
//           .checkbox-group {
//             display: flex;
//             justify-content: center;
//             gap: 20px;
//             margin: 20px 0;
//           }
//           .checkbox-item {
//             display: flex;
//             align-items: center;
//           }
//           .go-button {
//             padding: 10px 20px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             cursor: pointer;
//             font-size: 16px;
//             border-radius: 5px;
//             margin-top: 20px;
//           }
//           .go-button:hover {
//             background-color: #0056b3;
//           }
//           .button-group {
//             margin-top: 20px;
//           }
//           .result {
//             margin-top: 20px;
//           }
//           .fade-in {
//             animation: fadeIn 2s;
//             font-size: 100px;
//             font-weight: bold;
//             color: #333;
//           }
//           .ready-button {
//             margin-top: 20px;
//             background-color: black;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//           }
//           .word-counts {
//             margin-top: 20px;
//             display: flex;
//             justify-content: center;
//             gap: 40px;
//           }
//           .level-columns {
//             display: flex;
//             justify-content: center;
//           }
//           .column {
//             margin: 0 20px;
//           }
//           .known-unknown-counts {
//             margin-top: 20px;
//           }
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//             }
//             to {
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }


//CODE 5 ALMOST PERFECT SOME MINOR QUIRKS
// "use client";

// import { useState, useEffect } from "react";
// import Papa from "papaparse";
// import Navbar from "../../Navbar";

// export default function Home() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [words, setWords] = useState([]);
//   const [selectedLevels, setSelectedLevels] = useState([]);
//   const [randomWord, setRandomWord] = useState(null);
//   const [knownWords, setKnownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//   const [unknownWords, setUnknownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//   const [testedWords, setTestedWords] = useState(0); // Track number of tested words
//   const [confidenceMessage, setConfidenceMessage] = useState("");
//   const [confidenceInterval, setConfidenceInterval] = useState(null);
//   const [standardError, setStandardError] = useState(null);

//   const [isReady, setIsReady] = useState(false);
//   const [isTesting, setIsTesting] = useState(false); // Track if testing is in progress

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "text/csv") {
//       setSelectedFile(file);
//       parseCSV(file);
//     }
//   };

//   // Parse CSV using PapaParse
//   const parseCSV = (file) => {
//     Papa.parse(file, {
//       complete: (result) => {
//         const parsedWords = result.data.map((row) => {
//           if (!row.headword || !row.CEFR) {
//             console.warn("Invalid row:", row); // Log the problematic rows
//           }
//           return {
//             headword: row.headword ? row.headword.trim() : "",
//             CEFR: row.CEFR ? row.CEFR.trim().toUpperCase() : "",
//           };
//         });
//         setWords(parsedWords);
//       },
//       header: true,
//     });
//   };

//   // Handle checkbox selection for levels
//   const handleCheckboxChange = (level) => {
//     setSelectedLevels((prevSelectedLevels) => {
//       if (prevSelectedLevels.includes(level)) {
//         return prevSelectedLevels.filter((item) => item !== level);
//       } else {
//         return [...prevSelectedLevels, level];
//       }
//     });
//   };

//   // Randomly pick a word from the selected levels
//   const getRandomWord = () => {
//     if (selectedLevels.length === 0 || words.length === 0 || !isTesting) return;

//     // Filter words based on selected CEFR levels
//     const filteredWords = words.filter((word) => selectedLevels.includes(word.CEFR));

//     if (filteredWords.length === 0) return;

//     // Pick a random word from the filtered words
//     const randomIndex = Math.floor(Math.random() * filteredWords.length);
//     const word = filteredWords[randomIndex];

//     setRandomWord(word);
//     setTestedWords((prev) => prev + 1); // Increment the number of tested words
//   };

//   // Mark word as "known"
//   const markAsKnown = () => {
//     if (randomWord) {
//       setKnownWords((prev) => ({
//         ...prev,
//         [randomWord.CEFR]: prev[randomWord.CEFR] + 1,
//       }));
//       getRandomWord(); // Fetch new word
//     }
//   };

//   // Mark word as "unknown"
//   const markAsUnknown = () => {
//     if (randomWord) {
//       setUnknownWords((prev) => ({
//         ...prev,
//         [randomWord.CEFR]: prev[randomWord.CEFR] + 1,
//       }));
//       getRandomWord(); // Fetch new word
//     }
//   };

//   // Calculate the results and perform statistical analysis
//   const calculateResults = () => {
//     const totalKnown = Object.values(knownWords).reduce((a, b) => a + b, 0);
//     const totalTested = testedWords;

//     if (totalTested < 30) {
//       setConfidenceMessage("You need more words for testing.");
//       return;
//     }

//     // Standard error (SE) of the proportion
//     const proportionKnown = totalKnown / totalTested;
//     const SE = Math.sqrt((proportionKnown * (1 - proportionKnown)) / totalTested);

//     // 95% Confidence Interval
//     const CI = [
//       (proportionKnown - 1.96 * SE) * 100,
//       (proportionKnown + 1.96 * SE) * 100,
//     ];

//     setStandardError(SE);
//     setConfidenceInterval(CI);

//     setConfidenceMessage(`You know approximately ${Math.round(proportionKnown * 100)}% of the words in the list.`);
//   };

//   // Handle "Ready" button press
//   const handleReady = () => {
//     setIsReady(true);
//     setIsTesting(true); // Start the test once Ready is clicked
//     calculateResults(); // Calculate results when ready
//   };

//   // Handle the total words and known/unknown counters
//   const getTotalWords = () => {
//     return Object.values(knownWords).reduce((a, b) => a + b, 0) + Object.values(unknownWords).reduce((a, b) => a + b, 0);
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="container">
//         <h1>Magic Ball Word Selector</h1>

//         <div>
//           <label htmlFor="file-upload">Choose a CSV File:</label>
//           <input type="file" id="file-upload" accept=".csv" onChange={handleFileUpload} />
//         </div>

//         <div className="checkbox-group">
//           {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//             <div key={level} className="checkbox-item">
//               <input type="checkbox" id={level} onChange={() => handleCheckboxChange(level)} />
//               <label htmlFor={level}>{level}</label>
//             </div>
//           ))}
//         </div>

//         <button className="go-button" onClick={getRandomWord} disabled={!isTesting}>
//           Go!
//         </button>

//         {randomWord && (
//           <div className="result">
//             <p className="fade-in">{randomWord.headword}</p>
//             <div className="button-group">
//               <button onClick={markAsUnknown} className="known-unknown-btn unknown-btn">
//                 Unknown
//               </button>
//               <button onClick={markAsKnown} className="known-unknown-btn known-btn">
//                 Known
//               </button>
//             </div>
//           </div>
//         )}

//         <button onClick={handleReady} className="ready-button">
//           Ready
//         </button>

//         {confidenceMessage && (
//           <div className="confidence-message">
//             <p>{confidenceMessage}</p>
//             {confidenceInterval && (
//               <p>
//                 95% Confidence Interval: [{Math.round(confidenceInterval[0])}%,{" "}
//                 {Math.round(confidenceInterval[1])}%]
//               </p>
//             )}
//             {standardError && <p>Standard Error: {standardError.toFixed(3)}</p>}
//           </div>
//         )}

//         <div className="word-counter">
//           <h3>Word Counts</h3>
//           <div className="word-counts">
//             <div className="known-column">
//               <h4>Known</h4>
//               {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//                 <p key={level}>
//                   {level}: {knownWords[level]}
//                 </p>
//               ))}
//             </div>

//             <div className="unknown-column">
//               <h4>Unknown</h4>
//               {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//                 <p key={level}>
//                   {level}: {unknownWords[level]}
//                 </p>
//               ))}
//             </div>
//           </div>

//           <div className="total-count">
//             <p>Total Words: {getTotalWords()}</p>
//           </div>
//         </div>

//         <style jsx>{`
//           .container {
//             text-align: center;
//             margin-top: 20px;
//           }
//           .checkbox-group {
//             display: flex;
//             justify-content: center;
//             gap: 20px;
//             margin: 20px 0;
//           }
//           .checkbox-item {
//             display: flex;
//             align-items: center;
//           }
//           .go-button {
//             padding: 10px 20px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             cursor: pointer;
//             font-size: 16px;
//             border-radius: 5px;
//             margin-top: 20px;
//           }
//           .go-button:hover {
//             background-color: #0056b3;
//           }
//           .button-group {
//             margin-top: 20px;
//           }
//           .result {
//             margin-top: 20px;
//           }
//           .fade-in {
//             animation: fadeIn 2s;
//             font-size: 100px;
//             font-weight: bold;
//             color: #333;
//           }
//           .ready-button {
//             margin-top: 20px;
//             background-color: black;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//           }
//           .confidence-message {
//             margin-top: 20px;
//           }
//           .word-counter {
//             margin-top: 40px;
//             text-align: left;
//             display: flex;
//             justify-content: space-between;
//             margin: 0 10%;
//           }
//           .word-counts {
//             display: flex;
//             justify-content: space-between;
//           }
//           .known-column, .unknown-column {
//             width: 45%;
//           }
//           .total-count {
//             margin-top: 20px;
//             font-weight: bold;
//           }
//           .known-unknown-btn {
//             padding: 10px 20px;
//             font-size: 16px;
//             border-radius: 5px;
//             margin: 10px;
//             cursor: pointer;
//           }
//           .known-btn {
//             background-color: #4caf50;
//             color: white;
//           }
//           .known-btn:hover {
//             background-color: #45a049;
//           }
//           .unknown-btn {
//             background-color: #f44336;
//             color: white;
//           }
//           .unknown-btn:hover {
//             background-color: #e53935;
//           }
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//             }
//             to {
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }

//CODE 6 GO DOESN'T WORK UNTIL CLICKING READY
// "use client";

// import { useState, useEffect } from "react";
// import Papa from "papaparse";
// import Navbar from "../../Navbar";

// export default function Home() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [words, setWords] = useState([]);
//   const [selectedLevels, setSelectedLevels] = useState([]);
//   const [randomWord, setRandomWord] = useState(null);
//   const [knownWords, setKnownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//   const [unknownWords, setUnknownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//   const [testedWords, setTestedWords] = useState(0); // Track number of tested words
//   const [confidenceMessage, setConfidenceMessage] = useState("");
//   const [confidenceInterval, setConfidenceInterval] = useState(null);
//   const [standardError, setStandardError] = useState(null);

//   const [isReady, setIsReady] = useState(false);
//   const [isTesting, setIsTesting] = useState(false); // Track if testing is in progress

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "text/csv") {
//       setSelectedFile(file);
//       parseCSV(file);
//     }
//   };

//   // Parse CSV using PapaParse
//   const parseCSV = (file) => {
//     Papa.parse(file, {
//       complete: (result) => {
//         const parsedWords = result.data.map((row) => {
//           if (!row.headword || !row.CEFR) {
//             console.warn("Invalid row:", row); // Log the problematic rows
//           }
//           return {
//             headword: row.headword ? row.headword.trim() : "",
//             CEFR: row.CEFR ? row.CEFR.trim().toUpperCase() : "",
//           };
//         });
//         setWords(parsedWords);
//       },
//       header: true,
//     });
//   };

//   // Handle checkbox selection for levels
//   const handleCheckboxChange = (level) => {
//     setSelectedLevels((prevSelectedLevels) => {
//       if (prevSelectedLevels.includes(level)) {
//         return prevSelectedLevels.filter((item) => item !== level);
//       } else {
//         return [...prevSelectedLevels, level];
//       }
//     });
//   };

//   // Randomly pick a word from the selected levels
//   const getRandomWord = () => {
//     if (selectedLevels.length === 0 || words.length === 0 || !isTesting) return;

//     // Filter words based on selected CEFR levels
//     const filteredWords = words.filter((word) => selectedLevels.includes(word.CEFR));

//     if (filteredWords.length === 0) return;

//     // Pick a random word from the filtered words
//     const randomIndex = Math.floor(Math.random() * filteredWords.length);
//     const word = filteredWords[randomIndex];

//     setRandomWord(word);
//     setTestedWords((prev) => prev + 1); // Increment the number of tested words
//   };

//   // Mark word as "known"
//   const markAsKnown = () => {
//     if (randomWord) {
//       setKnownWords((prev) => ({
//         ...prev,
//         [randomWord.CEFR]: prev[randomWord.CEFR] + 1,
//       }));
//       getRandomWord(); // Fetch new word
//     }
//   };

//   // Mark word as "unknown"
//   const markAsUnknown = () => {
//     if (randomWord) {
//       setUnknownWords((prev) => ({
//         ...prev,
//         [randomWord.CEFR]: prev[randomWord.CEFR] + 1,
//       }));
//       getRandomWord(); // Fetch new word
//     }
//   };

//   // Calculate the results and perform statistical analysis
//   const calculateResults = () => {
//     const totalKnown = Object.values(knownWords).reduce((a, b) => a + b, 0);
//     const totalTested = testedWords;

//     if (totalTested < 30) {
//       setConfidenceMessage("You need more words for testing.");
//       return;
//     }

//     // Standard error (SE) of the proportion
//     const proportionKnown = totalKnown / totalTested;
//     const SE = Math.sqrt((proportionKnown * (1 - proportionKnown)) / totalTested);

//     // 95% Confidence Interval
//     const CI = [
//       (proportionKnown - 1.96 * SE) * 100,
//       (proportionKnown + 1.96 * SE) * 100,
//     ];

//     setStandardError(SE);
//     setConfidenceInterval(CI);

//     setConfidenceMessage(`You know approximately ${Math.round(proportionKnown * 100)}% of the words in the list.`);
//   };

//   // Handle "Ready" button press
//   const handleReady = () => {
//     setIsReady(true);
//     setIsTesting(true); // Start the test once Ready is clicked
//     calculateResults(); // Calculate results when ready
//   };

//   // Handle "Start Over" button press
//   const handleStartOver = () => {
//     setSelectedFile(null);
//     setWords([]);
//     setSelectedLevels([]);
//     setRandomWord(null);
//     setKnownWords({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//     setUnknownWords({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//     setTestedWords(0);
//     setConfidenceMessage("");
//     setConfidenceInterval(null);
//     setStandardError(null);
//     setIsReady(false);
//     setIsTesting(false);
//   };

//   // Handle the total words and known/unknown counters
//   const getTotalWords = () => {
//     return Object.values(knownWords).reduce((a, b) => a + b, 0) + Object.values(unknownWords).reduce((a, b) => a + b, 0);
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="container">
//         <h1>Magic Ball Word Selector</h1>

//         <div>
//           <label htmlFor="file-upload">Choose a CSV File:</label>
//           <input type="file" id="file-upload" accept=".csv" onChange={handleFileUpload} />
//         </div>

//         <div className="checkbox-group">
//           {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//             <div key={level} className="checkbox-item">
//               <input type="checkbox" id={level} onChange={() => handleCheckboxChange(level)} />
//               <label htmlFor={level}>{level}</label>
//             </div>
//           ))}
//         </div>

//         <button className="go-button" onClick={getRandomWord} disabled={!isTesting}>
//           Go!
//         </button>

//         {randomWord && (
//           <div className="result">
//             <p className="fade-in">{randomWord.headword}</p>
//             <div className="button-group">
//               <button onClick={markAsUnknown} className="known-unknown-btn unknown-btn">
//                 Unknown
//               </button>
//               <button onClick={markAsKnown} className="known-unknown-btn known-btn">
//                 Known
//               </button>
//             </div>
//           </div>
//         )}

//         <button onClick={handleReady} className="ready-button">
//           Ready
//         </button>

//         <button onClick={handleStartOver} className="start-over-button">
//           Start Over
//         </button>

//         {confidenceMessage && (
//           <div className="confidence-message">
//             <p>{confidenceMessage}</p>
//             {confidenceInterval && (
//               <p>
//                 95% Confidence Interval: [{Math.round(confidenceInterval[0])}%,{" "}
//                 {Math.round(confidenceInterval[1])}%]
//               </p>
//             )}
//             {standardError && <p>Standard Error: {standardError.toFixed(3)}</p>}
//           </div>
//         )}

//         <div className="word-counter">
//           <h3>Word Counts</h3>
//           <div className="word-counts">
//             <div className="known-column">
//               <h4>Known</h4>
//               {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//                 <p key={level}>
//                   {level}: {knownWords[level]}
//                 </p>
//               ))}
//             </div>

//             <div className="unknown-column">
//               <h4>Unknown</h4>
//               {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//                 <p key={level}>
//                   {level}: {unknownWords[level]}
//                 </p>
//               ))}
//             </div>
//           </div>

//           <div className="total-count">
//             <p>Total Words: {getTotalWords()}</p>
//           </div>
//         </div>

//         <style jsx>{`
//           .container {
//             text-align: center;
//             margin-top: 20px;
//           }
//           .checkbox-group {
//             display: flex;
//             justify-content: center;
//             gap: 20px;
//             margin: 20px 0;
//           }
//           .checkbox-item {
//             display: flex;
//             align-items: center;
//           }
//           .go-button {
//             padding: 10px 20px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             cursor: pointer;
//             font-size: 16px;
//             border-radius: 5px;
//             margin-top: 20px;
//           }
//           .go-button:hover {
//             background-color: #0056b3;
//           }
//           .button-group {
//             margin-top: 20px;
//           }
//           .result {
//             margin-top: 20px;
//           }
//           .fade-in {
//             animation: fadeIn 2s;
//             font-size: 100px;
//             font-weight: bold;
//             color: #333;
//           }
//           .ready-button {
//             margin-top: 20px;
//             background-color: black;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//           }
//           .start-over-button {
//             margin-top: 20px;
//             background-color: red;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//           }
//           .start-over-button:hover {
//             background-color: darkred;
//           }
//           .confidence-message {
//             margin-top: 20px;
//           }
//           .word-counter {
//             margin-top: 40px;
//             text-align: left;
//             display: flex;
//             justify-content: space-between;
//             margin: 0 10%;
//           }
//           .word-counts {
//             display: flex;
//             justify-content: space-between;
//           }
//           .known-column, .unknown-column {
//             width: 45%;
//           }
//           .total-count {
//             margin-top: 20px;
//             font-weight: bold;
//           }
//           .known-unknown-btn {
//             padding: 10px 20px;
//             font-size: 16px;
//             border-radius: 5px;
//             margin: 10px;
//             cursor: pointer;
//           }
//           .known-btn {
//             background-color: #4caf50;
//             color: white;
//           }
//           .known-btn:hover {
//             background-color: #45a049;
//           }
//           .unknown-btn {
//             background-color: #f44336;
//             color: white;
//           }
//           .unknown-btn:hover {
//             background-color: #e53935;
//           }
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//             }
//             to {
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }

//CODE 7 ALMOST THERE
// "use client";

// import { useState, useEffect } from "react";
// import Papa from "papaparse";
// import Navbar from "../../Navbar";

// export default function Home() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [words, setWords] = useState([]);
//   const [selectedLevels, setSelectedLevels] = useState([]);
//   const [randomWord, setRandomWord] = useState(null);
//   const [knownWords, setKnownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//   const [unknownWords, setUnknownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//   const [testedWords, setTestedWords] = useState(0); // Track number of tested words
//   const [confidenceMessage, setConfidenceMessage] = useState("");
//   const [confidenceInterval, setConfidenceInterval] = useState(null);
//   const [standardError, setStandardError] = useState(null);

//   const [isReady, setIsReady] = useState(false);
//   const [isTesting, setIsTesting] = useState(false); // Track if testing is in progress

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "text/csv") {
//       setSelectedFile(file);
//       parseCSV(file);
//     }
//   };

//   // Parse CSV using PapaParse
//   const parseCSV = (file) => {
//     Papa.parse(file, {
//       complete: (result) => {
//         const parsedWords = result.data.map((row) => {
//           if (!row.headword || !row.CEFR) {
//             console.warn("Invalid row:", row); // Log the problematic rows
//           }
//           return {
//             headword: row.headword ? row.headword.trim() : "",
//             CEFR: row.CEFR ? row.CEFR.trim().toUpperCase() : "",
//           };
//         });
//         setWords(parsedWords);
//       },
//       header: true,
//     });
//   };

//   // Handle checkbox selection for levels
//   const handleCheckboxChange = (level) => {
//     setSelectedLevels((prevSelectedLevels) => {
//       if (prevSelectedLevels.includes(level)) {
//         return prevSelectedLevels.filter((item) => item !== level);
//       } else {
//         return [...prevSelectedLevels, level];
//       }
//     });
//   };

//   // Randomly pick a word from the selected levels
//   const getRandomWord = () => {
//     if (selectedLevels.length === 0 || words.length === 0 || !isTesting) return;

//     // Filter words based on selected CEFR levels
//     const filteredWords = words.filter((word) => selectedLevels.includes(word.CEFR));

//     if (filteredWords.length === 0) return;

//     // Pick a random word from the filtered words
//     const randomIndex = Math.floor(Math.random() * filteredWords.length);
//     const word = filteredWords[randomIndex];

//     setRandomWord(word);
//     setTestedWords((prev) => prev + 1); // Increment the number of tested words
//   };

//   // Mark word as "known"
//   const markAsKnown = () => {
//     if (randomWord) {
//       setKnownWords((prev) => ({
//         ...prev,
//         [randomWord.CEFR]: prev[randomWord.CEFR] + 1,
//       }));
//       getRandomWord(); // Fetch new word
//     }
//   };

//   // Mark word as "unknown"
//   const markAsUnknown = () => {
//     if (randomWord) {
//       setUnknownWords((prev) => ({
//         ...prev,
//         [randomWord.CEFR]: prev[randomWord.CEFR] + 1,
//       }));
//       getRandomWord(); // Fetch new word
//     }
//   };

//   // Calculate the results and perform statistical analysis
//   const calculateResults = () => {
//     const totalKnown = Object.values(knownWords).reduce((a, b) => a + b, 0);
//     const totalTested = testedWords;

//     if (totalTested < 30) {
//       setConfidenceMessage("You need more words for testing.");
//       return;
//     }

//     // Standard error (SE) of the proportion
//     const proportionKnown = totalKnown / totalTested;
//     const SE = Math.sqrt((proportionKnown * (1 - proportionKnown)) / totalTested);

//     // 95% Confidence Interval
//     const CI = [
//       (proportionKnown - 1.96 * SE) * 100,
//       (proportionKnown + 1.96 * SE) * 100,
//     ];

//     setStandardError(SE);
//     setConfidenceInterval(CI);

//     setConfidenceMessage(`You know approximately ${Math.round(proportionKnown * 100)}% of the words in the list.`);
//   };

//   // Handle "Ready" button press
//   const handleReady = () => {
//     setIsReady(true);
//     setIsTesting(true); // Start the test once Ready is clicked
//     calculateResults(); // Calculate results when ready
//   };

//   // Handle "Start Over" button press
//   const handleStartOver = () => {
//     setSelectedFile(null);
//     setWords([]);
//     setSelectedLevels([]);
//     setRandomWord(null);
//     setKnownWords({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//     setUnknownWords({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//     setTestedWords(0);
//     setConfidenceMessage("");
//     setConfidenceInterval(null);
//     setStandardError(null);
//     setIsReady(false);
//     setIsTesting(false);
//   };

//   // Handle the total words and known/unknown counters
//   const getTotalWords = () => {
//     return Object.values(knownWords).reduce((a, b) => a + b, 0) + Object.values(unknownWords).reduce((a, b) => a + b, 0);
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="container">
//         <h1>Magic Ball Word Selector</h1>

//         <div>
//           <label htmlFor="file-upload">Choose a CSV File:</label>
//           <input type="file" id="file-upload" accept=".csv" onChange={handleFileUpload} />
//         </div>

//         <div className="checkbox-group">
//           {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//             <div key={level} className="checkbox-item">
//               <input type="checkbox" id={level} onChange={() => handleCheckboxChange(level)} />
//               <label htmlFor={level}>{level}</label>
//             </div>
//           ))}
//         </div>

//         <button className="go-button" onClick={getRandomWord} disabled={!isTesting}>
//           Go!
//         </button>

//         {randomWord && (
//           <div className="result">
//             <p className="fade-in">{randomWord.headword}</p>
//             <div className="button-group">
//               <button onClick={markAsUnknown} className="known-unknown-btn unknown-btn">
//                 Unknown
//               </button>
//               <button onClick={markAsKnown} className="known-unknown-btn known-btn">
//                 Known
//               </button>
//             </div>
//           </div>
//         )}

//         <button onClick={handleReady} className="ready-button">
//           Ready
//         </button>

//         <button onClick={handleStartOver} className="start-over-button">
//           Start Over
//         </button>

//         {confidenceMessage && (
//           <div className="confidence-message">
//             <p>{confidenceMessage}</p>
//             {confidenceInterval && (
//               <p>
//                 95% Confidence Interval: [{Math.round(confidenceInterval[0])}%,{" "}
//                 {Math.round(confidenceInterval[1])}%]
//               </p>
//             )}
//             {standardError && <p>Standard Error: {standardError.toFixed(3)}</p>}
//           </div>
//         )}

//         <div className="word-counter">
//           <h3>Word Counts</h3>
//           <div className="word-counts">
//             <div className="known-column">
//               <h4>Known</h4>
//               {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//                 <p key={level}>
//                   {level}: {knownWords[level]}
//                 </p>
//               ))}
//             </div>

//             <div className="unknown-column">
//               <h4>Unknown</h4>
//               {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//                 <p key={level}>
//                   {level}: {unknownWords[level]}
//                 </p>
//               ))}
//             </div>
//           </div>

//           <div className="total-count">
//             <p>Total Words: {getTotalWords()}</p>
//           </div>
//         </div>

//         <style jsx>{`
//           .container {
//             text-align: center;
//             margin-top: 20px;
//           }
//           .checkbox-group {
//             display: flex;
//             justify-content: center;
//             gap: 20px;
//             margin: 20px 0;
//           }
//           .checkbox-item {
//             display: flex;
//             align-items: center;
//           }
//           .go-button {
//             padding: 10px 20px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             cursor: pointer;
//             font-size: 16px;
//             border-radius: 5px;
//             margin-top: 20px;
//           }
//           .go-button:hover {
//             background-color: #0056b3;
//           }
//           .button-group {
//             margin-top: 20px;
//           }
//           .result {
//             margin-top: 20px;
//           }
//           .fade-in {
//             animation: fadeIn 2s;
//             font-size: 100px;
//             font-weight: bold;
//             color: #333;
//           }
//           .ready-button {
//             margin-top: 20px;
//             background-color: black;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//           }
//           .start-over-button {
//             margin-top: 20px;
//             background-color: red;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//           }
//           .start-over-button:hover {
//             background-color: darkred;
//           }
//           .confidence-message {
//             margin-top: 20px;
//           }
//           .word-counter {
//             margin-top: 40px;
//             text-align: left;
//             display: flex;
//             justify-content: space-between;
//             margin: 0 10%;
//           }
//           .word-counts {
//             display: flex;
//             justify-content: space-between;
//           }
//           .known-column, .unknown-column {
//             width: 45%;
//           }
//           .total-count {
//             margin-top: 20px;
//             font-weight: bold;
//           }
//           .known-unknown-btn {
//             padding: 10px 20px;
//             font-size: 16px;
//             border-radius: 5px;
//             margin: 10px;
//             cursor: pointer;
//           }
//           .known-btn {
//             background-color: #4caf50;
//             color: white;
//           }
//           .known-btn:hover {
//             background-color: #45a049;
//           }
//           .unknown-btn {
//             background-color: #f44336;
//             color: white;
//           }
//           .unknown-btn:hover {
//             background-color: #e53935;
//           }
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//             }
//             to {
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }

//CODE 8 THE VERY FINAL ONE
// "use client";

// import { useState, useEffect } from "react";
// import Papa from "papaparse";
// import Navbar from "../../Navbar";

// export default function Home() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [words, setWords] = useState([]);
//   const [selectedLevels, setSelectedLevels] = useState([]);
//   const [randomWord, setRandomWord] = useState(null);
//   const [knownWords, setKnownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//   const [unknownWords, setUnknownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//   const [testedWords, setTestedWords] = useState(0); // Track number of tested words
//   const [confidenceMessage, setConfidenceMessage] = useState("");
//   const [confidenceInterval, setConfidenceInterval] = useState(null);
//   const [standardError, setStandardError] = useState(null);

//   const [isReady, setIsReady] = useState(false);
//   const [isTesting, setIsTesting] = useState(false); // Track if testing is in progress

//   // Auto-start testing when a file is uploaded and levels are selected
//   useEffect(() => {
//     if (selectedFile && selectedLevels.length > 0) {
//       setIsTesting(true);
//     }
//   }, [selectedFile, selectedLevels]);

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "text/csv") {
//       setSelectedFile(file);
//       parseCSV(file);
//     }
//   };

//   // Parse CSV using PapaParse
//   const parseCSV = (file) => {
//     Papa.parse(file, {
//       complete: (result) => {
//         const parsedWords = result.data.map((row) => {
//           if (!row.headword || !row.CEFR) {
//             console.warn("Invalid row:", row); // Log the problematic rows
//           }
//           return {
//             headword: row.headword ? row.headword.trim() : "",
//             CEFR: row.CEFR ? row.CEFR.trim().toUpperCase() : "",
//           };
//         });
//         setWords(parsedWords);
//       },
//       header: true,
//     });
//   };

//   // Handle checkbox selection for levels
//   const handleCheckboxChange = (level) => {
//     setSelectedLevels((prevSelectedLevels) => {
//       if (prevSelectedLevels.includes(level)) {
//         return prevSelectedLevels.filter((item) => item !== level);
//       } else {
//         return [...prevSelectedLevels, level];
//       }
//     });
//   };

//   // Randomly pick a word from the selected levels
//   const getRandomWord = () => {
//     if (selectedLevels.length === 0 || words.length === 0 || !isTesting) return;

//     // Filter words based on selected CEFR levels
//     const filteredWords = words.filter((word) => selectedLevels.includes(word.CEFR));

//     if (filteredWords.length === 0) return;

//     // Pick a random word from the filtered words
//     const randomIndex = Math.floor(Math.random() * filteredWords.length);
//     const word = filteredWords[randomIndex];

//     setRandomWord(word);
//     setTestedWords((prev) => prev + 1); // Increment the number of tested words
//   };

//   // Mark word as "known"
//   const markAsKnown = () => {
//     if (randomWord) {
//       setKnownWords((prev) => ({
//         ...prev,
//         [randomWord.CEFR]: prev[randomWord.CEFR] + 1,
//       }));
//       getRandomWord(); // Fetch new word
//     }
//   };

//   // Mark word as "unknown"
//   const markAsUnknown = () => {
//     if (randomWord) {
//       setUnknownWords((prev) => ({
//         ...prev,
//         [randomWord.CEFR]: prev[randomWord.CEFR] + 1,
//       }));
//       getRandomWord(); // Fetch new word
//     }
//   };

//   // Calculate the results and perform statistical analysis
//   const calculateResults = () => {
//     const totalKnown = Object.values(knownWords).reduce((a, b) => a + b, 0);
//     const totalTested = testedWords;

//     if (totalTested < 30) {
//       setConfidenceMessage("You need more words for testing.");
//       return;
//     }

//     // Standard error (SE) of the proportion
//     const proportionKnown = totalKnown / totalTested;
//     const SE = Math.sqrt((proportionKnown * (1 - proportionKnown)) / totalTested);

//     // 95% Confidence Interval
//     const CI = [
//       (proportionKnown - 1.96 * SE) * 100,
//       (proportionKnown + 1.96 * SE) * 100,
//     ];

//     setStandardError(SE);
//     setConfidenceInterval(CI);

//     setConfidenceMessage(`You know approximately ${Math.round(proportionKnown * 100)}% of the words in the list.`);
//   };

//   // Handle "Ready" button press
//   const handleReady = () => {
//     setIsReady(true);
//     setIsTesting(true); // Start the test once Ready is clicked
//     calculateResults(); // Calculate results when ready
//   };

//   // Handle "Start Over" button press
//   const handleStartOver = () => {
//     // Reset all states
//     setSelectedFile(null);
//     setWords([]);
//     setSelectedLevels([]);
//     setRandomWord(null);
//     setKnownWords({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//     setUnknownWords({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
//     setTestedWords(0);
//     setConfidenceMessage("");
//     setConfidenceInterval(null);
//     setStandardError(null);
//     setIsReady(false);
//     setIsTesting(false);
  
//     // Force a full page reload
//     window.location.reload();
//   };
  
//   // Handle the total words and known/unknown counters
//   const getTotalWords = () => {
//     return Object.values(knownWords).reduce((a, b) => a + b, 0) + Object.values(unknownWords).reduce((a, b) => a + b, 0);
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="container">
//         <h1>Magic Ball Word Selector</h1>

//         <div>
//           <label htmlFor="file-upload">Choose a CSV File:</label>
//           <input type="file" id="file-upload" accept=".csv" onChange={handleFileUpload} />
//         </div>

//         <div className="checkbox-group">
//           {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//             <div key={level} className="checkbox-item">
//               <input type="checkbox" id={level} onChange={() => handleCheckboxChange(level)} />
//               <label htmlFor={level}>{level}</label>
//             </div>
//           ))}
//         </div>

//         <button className="go-button" onClick={getRandomWord} disabled={!isTesting}>
//           Go!
//         </button>

//         {randomWord && (
//           <div className="result">
//             <p className="fade-in">{randomWord.headword}</p>
//             <div className="button-group">
//               <button onClick={markAsUnknown} className="known-unknown-btn unknown-btn">
//                 Unknown
//               </button>
//               <button onClick={markAsKnown} className="known-unknown-btn known-btn">
//                 Known
//               </button>
//             </div>
//           </div>
//         )}

//         <button onClick={handleReady} className="ready-button">
//           Ready
//         </button>

//         <button onClick={handleStartOver} className="start-over-button">
//           Start Over
//         </button>

//         {confidenceMessage && (
//           <div className="confidence-message">
//             <p>{confidenceMessage}</p>
//             {confidenceInterval && (
//               <p>
//                 95% Confidence Interval: [{Math.round(confidenceInterval[0])}%,{" "}
//                 {Math.round(confidenceInterval[1])}%]
//               </p>
//             )}
//             {standardError && <p>Standard Error: {standardError.toFixed(3)}</p>}
//           </div>
//         )}

//         <div className="word-counter">
//           <h3>Word Counts</h3>
//           <div className="word-counts">
//             <div className="known-column">
//               <h4>Known</h4>
//               {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//                 <p key={level}>
//                   {level}: {knownWords[level]}
//                 </p>
//               ))}
//             </div>

//             <div className="unknown-column">
//               <h4>Unknown</h4>
//               {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
//                 <p key={level}>
//                   {level}: {unknownWords[level]}
//                 </p>
//               ))}
//             </div>
//           </div>

//           <div className="total-count">
//             <p>Total Words: {getTotalWords()}</p>
//           </div>
//         </div>

//         <style jsx>{`
//           .container {
//             text-align: center;
//             margin-top: 20px;
//           }
//           .checkbox-group {
//             display: flex;
//             justify-content: center;
//             gap: 20px;
//             margin: 20px 0;
//           }
//           .checkbox-item {
//             display: flex;
//             align-items: center;
//           }
//           .go-button {
//             padding: 10px 20px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             cursor: pointer;
//             font-size: 16px;
//             border-radius: 5px;
//             margin-top: 20px;
//           }
//           .go-button:hover {
//             background-color: #0056b3;
//           }
//           .button-group {
//             margin-top: 20px;
//           }
//           .result {
//             margin-top: 20px;
//           }
//           .fade-in {
//             animation: fadeIn 2s;
//             font-size: 100px;
//             font-weight: bold;
//             color: #333;
//           }
//           .ready-button {
//             margin-top: 20px;
//             background-color: black;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//           }
//           .start-over-button {
//             margin-top: 20px;
//             background-color: red;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//           }
//           .start-over-button:hover {
//             background-color: darkred;
//           }
//           .confidence-message {
//             margin-top: 20px;
//           }
//           .word-counter {
//             margin-top: 40px;
//             text-align: left;
//             display: flex;
//             justify-content: space-between;
//             margin: 0 10%;
//           }
//           .word-counts {
//             display: flex;
//             justify-content: space-between;
//           }
//           .known-column, .unknown-column {
//             width: 45%;
//           }
//           .total-count {
//             margin-top: 20px;
//             font-weight: bold;
//           }
//           .known-unknown-btn {
//             padding: 10px 20px;
//             font-size: 16px;
//             border-radius: 5px;
//             margin: 10px;
//             cursor: pointer;
//           }
//           .known-btn {
//             background-color: #4caf50;
//             color: white;
//           }
//           .known-btn:hover {
//             background-color: #45a049;
//           }
//           .unknown-btn {
//             background-color: #f44336;
//             color: white;
//           }
//           .unknown-btn:hover {
//             background-color: #e53935;
//           }
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//             }
//             to {
//               opacity: 1;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }

//CODE 9 FIX REPEAT WORDS
"use client";

import { useState, useEffect } from "react";
import Papa from "papaparse";
import Navbar from "../../Navbar";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [words, setWords] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [randomWord, setRandomWord] = useState(null);
  const [knownWords, setKnownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
  const [unknownWords, setUnknownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
  const [testedWords, setTestedWords] = useState([]); // Track number of tested words
  const [confidenceMessage, setConfidenceMessage] = useState("");
  const [confidenceInterval, setConfidenceInterval] = useState(null);
  const [standardError, setStandardError] = useState(null);

  const [isReady, setIsReady] = useState(false);
  const [isTesting, setIsTesting] = useState(false); // Track if testing is in progress

  // Auto-start testing when a file is uploaded and levels are selected
  useEffect(() => {
    if (selectedFile && selectedLevels.length > 0) {
      setIsTesting(true);
    }
  }, [selectedFile, selectedLevels]);

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/csv") {
      setSelectedFile(file);
      parseCSV(file);
    }
  };

  // Parse CSV using PapaParse
  const parseCSV = (file) => {
    Papa.parse(file, {
      complete: (result) => {
        const parsedWords = result.data.map((row) => {
          if (!row.headword || !row.CEFR) {
            console.warn("Invalid row:", row); // Log the problematic rows
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
        return prevSelectedLevels.filter((item) => item !== level);
      } else {
        return [...prevSelectedLevels, level];
      }
    });
  };

  // Randomly pick a word from the selected levels
  const getRandomWord = () => {
    if (selectedLevels.length === 0 || words.length === 0 || !isTesting) return;

    // Filter words based on selected CEFR levels
    const filteredWords = words.filter((word) => selectedLevels.includes(word.CEFR));

    if (filteredWords.length === 0) return;

    //Exclude already tested words
    const untestedWords = filteredWords.filter(
      (word) => !testedWords.some((testedWord)=> testedWord.headword === word.headword)
    );

    if (untestedWords.length === 0) return;//No more untested words

    // Pick a random word from the filtered words
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const word = filteredWords[randomIndex];

    setRandomWord(word);
    setTestedWords((prev) => [...prev, word]); // Increment the number of tested words
  };

  // Mark word as "known"
  const markAsKnown = () => {
    if (randomWord) {
      setKnownWords((prev) => ({
        ...prev,
        [randomWord.CEFR]: prev[randomWord.CEFR] + 1,
      }));
      getRandomWord(); // Fetch new word
    }
  };

  // Mark word as "unknown"
  const markAsUnknown = () => {
    if (randomWord) {
      setUnknownWords((prev) => ({
        ...prev,
        [randomWord.CEFR]: prev[randomWord.CEFR] + 1,
      }));
      getRandomWord(); // Fetch new word
    }
  };

  // Calculate the results and perform statistical analysis
  const calculateResults = () => {
    const totalKnown = Object.values(knownWords).reduce((a, b) => a + b, 0);
    const totalTested = testedWords.length;

    if (totalTested < 30) {
      setConfidenceMessage("You need more words for testing.");
      return;
    }

    // Standard error (SE) of the proportion
    const proportionKnown = totalKnown / totalTested;
    const SE = Math.sqrt((proportionKnown * (1 - proportionKnown)) / totalTested);

    // 95% Confidence Interval
    const CI = [
      (proportionKnown - 1.96 * SE) * 100,
      (proportionKnown + 1.96 * SE) * 100,
    ];

    setStandardError(SE);
    setConfidenceInterval(CI);

    setConfidenceMessage(`You know approximately ${Math.round(proportionKnown * 100)}% of the words in the list.`);
  };

  // Handle "Ready" button press
  const handleReady = () => {
    setIsReady(true);
    setIsTesting(true); // Start the test once Ready is clicked
    calculateResults(); // Calculate results when ready
  };

  // Handle "Start Over" button press
  const handleStartOver = () => {
    // Reset all states
    setSelectedFile(null);
    setWords([]);
    setSelectedLevels([]);
    setRandomWord(null);
    setKnownWords({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
    setUnknownWords({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
    setTestedWords(0);
    setConfidenceMessage("");
    setConfidenceInterval(null);
    setStandardError(null);
    setIsReady(false);
    setIsTesting(false);
  
    // Force a full page reload
    window.location.reload();
  };
  
  // Handle the total words and known/unknown counters
  const getTotalWords = () => {
    return Object.values(knownWords).reduce((a, b) => a + b, 0) + Object.values(unknownWords).reduce((a, b) => a + b, 0);
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>Magic Ball Word Selector</h1>

        <div>
          <label htmlFor="file-upload">Choose a CSV File:</label>
          <input type="file" id="file-upload" accept=".csv" onChange={handleFileUpload} />
        </div>

        <div className="checkbox-group">
          {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
            <div key={level} className="checkbox-item">
              <input type="checkbox" id={level} onChange={() => handleCheckboxChange(level)} />
              <label htmlFor={level}>{level}</label>
            </div>
          ))}
        </div>

        <button className="go-button" onClick={getRandomWord} disabled={!isTesting}>
          Go!
        </button>

        {randomWord && (
          <div className="result">
            <p className="fade-in">{randomWord.headword}</p>
            <div className="button-group">
              <button onClick={markAsUnknown} className="known-unknown-btn unknown-btn">
                Unknown
              </button>
              <button onClick={markAsKnown} className="known-unknown-btn known-btn">
                Known
              </button>
            </div>
          </div>
        )}

        <button onClick={handleReady} className="ready-button">
          Ready
        </button>

        <button onClick={handleStartOver} className="start-over-button">
          Start Over
        </button>

        {confidenceMessage && (
          <div className="confidence-message">
            <p>{confidenceMessage}</p>
            {confidenceInterval && (
              <p>
                95% Confidence Interval: [{Math.round(confidenceInterval[0])}%,{" "}
                {Math.round(confidenceInterval[1])}%]
              </p>
            )}
            {standardError && <p>Standard Error: {standardError.toFixed(3)}</p>}
          </div>
        )}

        <div className="word-counter">
          <h3>Word Counts</h3>
          <div className="word-counts">
            <div className="known-column">
              <h4>Known</h4>
              {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
                <p key={level}>
                  {level}: {knownWords[level]}
                </p>
              ))}
            </div>

            <div className="unknown-column">
              <h4>Unknown</h4>
              {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
                <p key={level}>
                  {level}: {unknownWords[level]}
                </p>
              ))}
            </div>
          </div>

          <div className="total-count">
            <p>Total Words: {getTotalWords()}</p>
          </div>
        </div>

        <style jsx>{`
          .container {
            text-align: center;
            margin-top: 20px;
          }
          .checkbox-group {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
          }
          .checkbox-item {
            display: flex;
            align-items: center;
          }
          .go-button {
            padding: 10px 20px;
            background-color: #007bff;
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
          .button-group {
            margin-top: 20px;
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
          .ready-button {
            margin-top: 20px;
            background-color: black;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
          }
          .start-over-button {
            margin-top: 20px;
            background-color: red;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
          }
          .start-over-button:hover {
            background-color: darkred;
          }
          .confidence-message {
            margin-top: 20px;
          }
          .word-counter {
            margin-top: 40px;
            text-align: left;
            display: flex;
            justify-content: space-between;
            margin: 0 10%;
          }
          .word-counts {
            display: flex;
            justify-content: space-between;
          }
          .known-column, .unknown-column {
            width: 45%;
          }
          .total-count {
            margin-top: 20px;
            font-weight: bold;
          }
          .known-unknown-btn {
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            margin: 10px;
            cursor: pointer;
          }
          .known-btn {
            background-color: #4caf50;
            color: white;
          }
          .known-btn:hover {
            background-color: #45a049;
          }
          .unknown-btn {
            background-color: #f44336;
            color: white;
          }
          .unknown-btn:hover {
            background-color: #e53935;
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
