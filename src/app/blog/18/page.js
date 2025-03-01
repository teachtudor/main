"use client";

import { useState, useEffect } from "react";
import Papa from "papaparse";
import Navbar from "../../Navbar";

export default function Home() {
  const [words, setWords] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [randomWord, setRandomWord] = useState(null);
  const [knownWords, setKnownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
  const [unknownWords, setUnknownWords] = useState({ A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 });
  const [testedWords, setTestedWords] = useState([]); // Track number of tested words
  const [confidenceMessage, setConfidenceMessage] = useState("");
  const [confidenceInterval, setConfidenceInterval] = useState(null);
  const [standardError, setStandardError] = useState(null);
  const [lastClicked, setLastClicked] = useState(null);//TRACK LAST BUTTON CLICKED
  const [isReady, setIsReady] = useState(false);
  const [isTesting, setIsTesting] = useState(false); // Track if testing is in progress
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");//added for username
  const [isUsernameRequired, setIsUsernameRequired] = useState(false);//added for input of username
  

  // Auto-start testing when levels are selected
  useEffect(() => {
    if (selectedLevels.length > 0) {
      setIsTesting(true);
    }
    // Parse the CSV file directly after page loads
    parseCSVFile();
  }, [selectedLevels]);

  // Parse CSV using PapaParse
  const parseCSVFile = () => {
    const csvFilePath = '/CEFR UNFETTERED.csv'; // Path to the CSV file inside the public folder
    fetch(csvFilePath)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          complete: (result) => {
						const parsedWordsMap = new Map();
                result.data.forEach((row, index) => {
                    if (!row.headword || !row.headword.trim() || !row.CEFR) {
                      console.warn(`Skipping invalid row at index ${index}:`, row);
                      return; // Skip invalid rows completely
                    }
                  
                    // Make sure to remove any accidental whitespace
                    parsedWordsMap.set(row.headword.trim(), {
                      headword: row.headword.trim(),
                      CEFR: row.CEFR.trim().toUpperCase(),
                    });
                  });
                  

						setWords(Array.from(parsedWordsMap.values()));
          },
          header: true,
        });
      })
      .catch((error) => {
        console.error('Error loading CSV file:', error);
      });
  };

  //NEW
  const handleClick = (type) => {
    setLastClicked(type);

    if (type === 'known') {
        setKnownCount((prev) => prev + 1);
    } else {
        setUnknownCount((prev) => prev + 1);
    }

    saveTally(type);
};

//NEWEST SAVETALLY
const saveTally = async (word, type) => {
    try {
        const updatedKnown = { ...knownWords };
        const updatedUnknown = { ...unknownWords };

        if (randomWord) {
            if (type === "known") {
                updatedKnown[randomWord.CEFR] = (updatedKnown[randomWord.CEFR] || 0) + 1;
            } else {
                updatedUnknown[randomWord.CEFR] = (updatedUnknown[randomWord.CEFR] || 0) + 1;
            }
        }

        const totalKnown = Object.values(updatedKnown).reduce((a, b) => a + b, 0);
        const totalUnknown = Object.values(updatedUnknown).reduce((a, b) => a + b, 0);

        const res = await fetch('/api/saveWordTally1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                word,
                knownCount: totalKnown,
                unknownCount: totalUnknown,
                totalCount: totalKnown + totalUnknown,
                levels: {
                    A1: updatedKnown["A1"] || 0,
                    A2: updatedKnown["A2"] || 0,
                    B1: updatedKnown["B1"] || 0,
                    B2: updatedKnown["B2"] || 0,
                    C1: updatedKnown["C1"] || 0,
                    C2: updatedKnown["C2"] || 0,
                    A1_unknown: updatedUnknown["A1"] || 0,
                    A2_unknown: updatedUnknown["A2"] || 0,
                    B1_unknown: updatedUnknown["B1"] || 0,
                    B2_unknown: updatedUnknown["B2"] || 0,
                    C1_unknown: updatedUnknown["C1"] || 0,
                    C2_unknown: updatedUnknown["C2"] || 0,
                }
            }),
        });

        if (!res.ok) throw new Error('Failed to save tally');
        console.log('Tally saved successfully!');
    } catch (error) {
        console.error('Error saving tally:', error);
    }
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

    // Exclude already tested words
    const untestedWords = filteredWords.filter(
      (word) => !testedWords.some((testedWord) => testedWord.headword === word.headword)
    );

    if (untestedWords.length === 0) return; // No more untested words

		// Pick a random word from the untested words
		const randomIndex = Math.floor(Math.random() * untestedWords.length);
		const word = untestedWords[randomIndex];

    setRandomWord(word);
    setTestedWords((prev) => [...prev, word]); // Increment the number of tested words
  };

  //NEW CODE MARKUK
  const markAsKnown = () => {
    if (randomWord) {
        setKnownWords(prev => ({
            ...prev,
            [randomWord.CEFR]: (prev[randomWord.CEFR] || 0) + 1
        }));

        saveTally(randomWord.headword, "known");
        getRandomWord(); // Fetch new word
    }
};

const markAsUnknown = () => {
    if (randomWord) {
        setUnknownWords(prev => ({
            ...prev,
            [randomWord.CEFR]: (prev[randomWord.CEFR] || 0) + 1
        }));

        saveTally(randomWord.headword, "unknown");
        getRandomWord(); // Fetch new word
    }
};


//NEW CALCULATE RESULTS
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
        Math.min((proportionKnown - 1.96 * SE) * 100, 100),
        Math.min((proportionKnown + 1.96 * SE) * 100, 100)
    ];

    setStandardError(SE);
    setConfidenceInterval(CI);
    setConfidenceMessage(`You know approximately ${Math.round(proportionKnown * 100)}% of the words in the list.`);

    // const levels = {
    //     A1: knownWords.A1 || 0,
    //     A2: knownWords.A2 || 0,
    //     B1: knownWords.B1 || 0,
    //     B2: knownWords.B2 || 0,
    //     C1: knownWords.C1 || 0,
    //     C2: knownWords.C2 || 0,
        
    //     A1_unknown: Math.max((testedWords.filter(w => w.level === 'A1').length || 0) - (knownWords.A1 || 0), 0),
    //     A2_unknown: Math.max((testedWords.filter(w => w.level === 'A2').length || 0) - (knownWords.A2 || 0), 0),
    //     B1_unknown: Math.max((testedWords.filter(w => w.level === 'B1').length || 0) - (knownWords.B1 || 0), 0),
    //     B2_unknown: Math.max((testedWords.filter(w => w.level === 'B2').length || 0) - (knownWords.B2 || 0), 0),
    //     C1_unknown: Math.max((testedWords.filter(w => w.level === 'C1').length || 0) - (knownWords.C1 || 0), 0),
    //     C2_unknown: Math.max((testedWords.filter(w => w.level === 'C2').length || 0) - (knownWords.C2 || 0), 0)
    // };

    const levels = {
      A1: knownWords.A1 || 0,
      A2: knownWords.A2 || 0,
      B1: knownWords.B1 || 0,
      B2: knownWords.B2 || 0,
      C1: knownWords.C1 || 0,
      C2: knownWords.C2 || 0,
      A1_unknown: unknownWords.A1 || 0,
      A2_unknown: unknownWords.A2 || 0,
      B1_unknown: unknownWords.B1 || 0,
      B2_unknown: unknownWords.B2 || 0,
      C1_unknown: unknownWords.C1 || 0,
      C2_unknown: unknownWords.C2 || 0,
  };
  
    

    // Send the test results to the server
    const testResults = {
        userId,
        username: username, //username from input
        confidenceInterval: `${CI[0]}% - ${CI[1]}%`,
        standardError: SE.toFixed(3),
        totalKnown: totalKnown,
        totalUnknown: totalTested - totalKnown,
        levels: levels  // ✅ Added levels
    };


    //test line to see what gets sent to saveTestResults
    console.log("Before sending to saveTestResults WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW:", JSON.stringify(levels, null, 2));
    console.log("🚀 Sending Data to Backend:kkkkkkkkkkkkkkkkkkkkkkkkkkk", JSON.stringify(levels, null, 2));
    console.log("🚀 Function is running!");
    console.log("Before sending to saveTestResults:", levels ? JSON.stringify(levels, null, 2) : "❌ levels is undefined or null!");


    fetch('/api/saveTestResults1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testResults),
    }).then((response) => {
        if (response.ok) {
            console.log('Test results saved');
        }
    }).catch((error) => {
        console.error('Error saving test results:', error);
        console.log("🚀 Sending Data to Backend:whoooooooooooooooooooooooo", JSON.stringify(levels, null, 2));
        console.log("🚀 Function is running!");
        console.log("Before sending to saveTestResults:", levels ? JSON.stringify(levels, null, 2) : "❌ levels is undefined or null!");
    });
};


  // // Handle "Ready" button press
  // const handleReady = () => {
  //   setIsReady(true);
  //   setIsTesting(true); // Start the test once Ready is clicked
  //   calculateResults(); // Calculate results when ready
  // };
  
  const handleReady = () => {
    if (!username.trim()) {
      alert("Please enter a username before submitting the test.");
      setIsUsernameRequired(true);
      return;
    }
    // setIsReady(true);
    // setIsTesting(true);
    calculateResults(); // Calculate results when ready
  };
  
  

  const getTotalWords = () => {
    return Object.values(knownWords).reduce((a, b) => a + b, 0) + Object.values(unknownWords).reduce((a, b) => a + b, 0);
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>Magic Ball Word Selector</h1>

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

        {/* <button onClick={handleReady} className="ready-button">
          Ready
        </button> */}
        {/* {isUsernameRequired && (
          <div className="username-input">
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleReady} className="ready-button">
              Submit Test
            </button>
          </div>
        )} */}

        {!isUsernameRequired && (
          <button onClick={() => setIsUsernameRequired(true)} className="ready-button">
            Ready
          </button>
        )}

        {isUsernameRequired && (
          <div className="username-input">
            <input
              type="text"
              placeholder="ENTER FIRST NAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ marginRight: '10px' }} // Adds space to the right of the input
            />
            <button onClick={handleReady} className="ready-button">
              Submit Test
            </button>
          </div>
        )}


        {confidenceMessage && (
          <div className="confidence-message">
            <p>{confidenceMessage}</p>
            {confidenceInterval && (
              <p>
                95% Confidence Interval: [{Math.round(confidenceInterval[0])}%,{" "}
                {Math.round(confidenceInterval[1])}%]
                <br/>MORE WORDS MEAN MORE PRECISION!!!! 
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
            font-size: 50px;
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

          /* Responsive styling */
          @media (max-width: 768px) {
            .fade-in {
              font-size: 5vw;
            }
            .container {
              margin: 10px;
            }
            .word-counter {
              flex-direction: column;
              align-items: center;
            }
            .word-counts {
              flex-direction: column;
            }
            .known-column, .unknown-column {
              width: 100%;
            }
          }
          
          @media (max-width: 480px) {
            .fade-in {
              font-size: 8vw;
            }
            .go-button, .ready-button {
              font-size: 14px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}