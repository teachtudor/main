// import fs from 'fs';
// import path from 'path';

// const filePath = path.join(process.cwd(), 'data', 'saveWordTally3.csv');

// export default function handler(req, res) {
    
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     try {
//         const { word, knownCount, unknownCount, totalCount } = req.body;

//         console.log("Received:", req.body);
//         console.log("Extracted:", word, knownCount, unknownCount, totalCount);

//         if (!word || knownCount === undefined || unknownCount === undefined || totalCount === undefined) {
//             return res.status(400).json({ error: "Invalid data received" });
//         }

//         const csvRow = `${word},${knownCount},${unknownCount},${totalCount}\n`;
//         console.log("Writing to CSV:", csvRow);

//         fs.appendFileSync(filePath, csvRow, 'utf8');

//         res.status(200).json({ message: 'Word tally saved successfully' });

//     } catch (error) {
//         console.error("Error writing word tally:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

//CODE 2 works great locally for testing
// import fs from 'fs';
// import path from 'path';

// const filePath = path.join(process.cwd(), 'data', 'WordTally3.csv');

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     try {
//         const { word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

//         console.log("Received:", req.body);

//         if (!word || 
//             knownCount === undefined || 
//             unknownCount === undefined || 
//             seenCount === undefined || 
//             totalCount === undefined || 
//             timeBetweenClicks === undefined) {
//             console.error("Invalid Data:", req.body);
//             return res.status(400).json({ error: "Invalid data received" });
//         }

//         const csvRow = `${word},${knownCount},${unknownCount},${seenCount},${totalCount},${timeBetweenClicks}\n`;
//         console.log("Writing to CSV:", csvRow);

//         // Ensure directory exists
//         const dirPath = path.join(process.cwd(), 'data');
//         if (!fs.existsSync(dirPath)) {
//             fs.mkdirSync(dirPath, { recursive: true });
//         }

//         fs.appendFile(filePath, csvRow, 'utf8', (err) => {
//             if (err) {
//                 console.error("Error writing to CSV:", err);
//                 return res.status(500).json({ error: 'Failed to write to file' });
//             }
//             res.status(200).json({ message: 'Word tally saved successfully' });
//         });

//     } catch (error) {
//         console.error("Unexpected Error:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

//code 3 incomplete no error checks issues 
// import axios from 'axios';

// const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
// const REPO_OWNER = "teachtudor"; // Your GitHub username or organization
// const REPO_NAME = "main"; // Your repository name
// const FILE_PATH = "data/WordTally3.csv"; // Path in your repo
// const BRANCH = "main"; // The branch to update

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     try {
//         const { word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

//         if (!word || 
//             knownCount === undefined || 
//             unknownCount === undefined || 
//             seenCount === undefined || 
//             totalCount === undefined || 
//             timeBetweenClicks === undefined) {
//             return res.status(400).json({ error: "Invalid data received" });
//         }

//         const csvRow = `${word},${knownCount},${unknownCount},${seenCount},${totalCount},${timeBetweenClicks}\n`;

//         // Fetch the existing file from GitHub
//         const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
//         const headers = { Authorization: `token ${GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" };

//         let existingContent = "";
//         let sha = null;

//         try {
//             const response = await axios.get(url, { headers });
//             existingContent = Buffer.from(response.data.content, 'base64').toString('utf-8');
//             sha = response.data.sha; // Required for updating the file
//         } catch (error) {
//             if (error.response && error.response.status === 404) {
//                 console.log("File not found, creating a new one.");
//             } else {
//                 console.error("Error fetching file:", error);
//                 return res.status(500).json({ error: 'Failed to fetch existing file' });
//             }
//         }

//         // Append new data
//         const newContent = existingContent + csvRow;
//         const encodedContent = Buffer.from(newContent, 'utf-8').toString('base64');

//         // Commit the updated file
//         const commitData = {
//             message: "Update WordTally3.csv",
//             content: encodedContent,
//             branch: BRANCH,
//             sha: sha || undefined // Only include SHA if the file already exists
//         };

//         await axios.put(url, commitData, { headers });

//         res.status(200).json({ message: 'Word tally saved successfully to GitHub' });

//     } catch (error) {
//         console.error("Unexpected Error:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

//CODE 4 error 500 server issue
// import axios from 'axios';

// const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
// const REPO_OWNER = "teachtudor";
// const REPO_NAME = "main";
// const BRANCH = "main";

// // Function to fetch the existing file content from GitHub
// async function fetchFileContent(filePath) {
//   const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
//   const headers = { Authorization: `token ${GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" };

  
//   try {
//     const response = await axios.get(url, { headers });
//     console.log("GitHub API Response:", response);
//     return {
//       content: Buffer.from(response.data.content, 'base64').toString('utf-8'),
//       sha: response.data.sha
//     };
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.log("File not found, creating a new one.");
//       return { content: '', sha: null };  // If the file doesn't exist, return empty content
//     } else {
//       throw new Error('Error fetching file: ' + error.message);
//     }
//   }
// }

// // Function to save the file content back to GitHub
// async function saveFileContent(filePath, content, sha = null) {
//   const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
//   const encodedContent = Buffer.from(content, 'utf-8').toString('base64');
//   const commitData = {
//     message: "Update WordTally3.csv",
//     content: encodedContent,
//     branch: BRANCH,
//     sha: sha || undefined
//   };
//   const headers = { Authorization: `token ${GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" };

//   try {
//     await axios.put(url, commitData, { headers });
//   } catch (error) {
//     console.log("Error during file save:", error.response ? error.response.data : error)
//     throw new Error('Error updating file: ' + error.message);
//   }
// }

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   const { word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

//   // Validate incoming data
//   if (!word || 
//       knownCount === undefined || 
//       unknownCount === undefined || 
//       seenCount === undefined || 
//       totalCount === undefined || 
//       timeBetweenClicks === undefined) {
//     return res.status(400).json({ error: "Invalid data received" });
//   }

//   const csvRow = `${word},${knownCount},${unknownCount},${seenCount},${totalCount},${timeBetweenClicks}\n`;

//   try {
//     // Fetch existing file content
//     const { content, sha } = await fetchFileContent("data/WordTally3.csv");

//     // Append new data
//     const updatedContent = content + csvRow;

//     // Save the updated content back to GitHub
//     await saveFileContent("data/WordTally3.csv", updatedContent, sha);

//     res.status(200).json({ message: 'Word tally saved successfully to GitHub' });
//   } catch (error) {
//     console.error("Unexpected Error:", error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

//CODE 5 works partially with github
// import axios from 'axios';

// const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
// const REPO_OWNER = "teachtudor";
// const REPO_NAME = "main";
// const BRANCH = "main";
// const FILE_PATH = "data/WordTally3.csv"; // Define FILE_PATH here

// // Function to fetch the existing file content from GitHub
// // async function fetchFileContent(filePath) {
// //   const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
// //   const headers = { Authorization: `token ${GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" };

// //   try {
// //     const response = await axios.get(url, { headers });
// //     console.log("GitHub API Response:", response);
// //     return {
// //       content: Buffer.from(response.data.content, 'base64').toString('utf-8'),
// //       sha: response.data.sha
// //     };
// //   } catch (error) {
// //     if (error.response && error.response.status === 404) {
// //       console.log("File not found, creating a new one.");
// //       return { content: '', sha: null };  // If the file doesn't exist, return empty content
// //     } else {
// //       console.error("Error fetching file:", error.response ? error.response.data : error);
// //       throw new Error('Error fetching file: ' + error.message);
// //     }
// //   }
// // }
// // Fetch existing file content from GitHub with logging
// async function fetchFileContent(filePath) {
//     const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
//     const headers = { Authorization: `token ${GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" };
  
//     try {
//       const response = await axios.get(url, { headers });
//       console.log("Fetched GitHub file successfully:", response.data);
  
//       const decodedContent = Buffer.from(response.data.content, 'base64').toString('utf-8');
//       return { content: decodedContent, sha: response.data.sha };
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         console.log("File not found, creating a new one.");
//         return { content: '', sha: null }; // File does not exist, returning empty content
//       } else {
//         console.error("Error fetching file from GitHub:", error.response ? error.response.data : error.message);
//         throw new Error('Error fetching file: ' + error.message);
//       }
//     }
// }

// // Function to save the file content back to GitHub
// async function saveFileContent(filePath, content, sha = null) {
//   const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
//   const encodedContent = Buffer.from(content, 'utf-8').toString('base64');
//   const commitData = {
//     message: "Update WordTally3.csv",
//     content: encodedContent,
//     branch: BRANCH,
//     sha: sha || undefined
//   };
//   const headers = { Authorization: `token ${GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" };

//   try {
//     await axios.put(url, commitData, { headers });
//   } catch (error) {
//     console.error("Error during file save:", error.response ? error.response.data : error);
//     throw new Error('Error updating file: ' + error.message);
//   }
// }

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   const { word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

//   // Validate incoming data
//   if (!word ||
//     knownCount === undefined ||
//     unknownCount === undefined ||
//     seenCount === undefined ||
//     totalCount === undefined ||
//     timeBetweenClicks === undefined) {
//     return res.status(400).json({ error: "Invalid data received" });
//   }

//   const csvRow = `${word},${knownCount},${unknownCount},${seenCount},${totalCount},${timeBetweenClicks}\n`;

//   try {
//     // Fetch existing file content
//     const { content, sha } = await fetchFileContent(FILE_PATH); // Use FILE_PATH here

//     // Append new data
//     const updatedContent = content + csvRow;

//     // Save the updated content back to GitHub
//     await saveFileContent(FILE_PATH, updatedContent, sha); // Use FILE_PATH here

//     res.status(200).json({ message: 'Word tally saved successfully to GitHub' });
//   } catch (error) {
//     console.error("Unexpected Error:", error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

//CODE 6 firebase
// import { db } from '../../lib/firebase'; // Ensure this file exports a Firestore instance
// import { collection, addDoc } from 'firebase/firestore';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   const { word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

//   // Validate incoming data
//   if (!word ||
//     knownCount === undefined ||
//     unknownCount === undefined ||
//     seenCount === undefined ||
//     totalCount === undefined ||
//     timeBetweenClicks === undefined) {
//     return res.status(400).json({ error: "Invalid data received" });
//   }

//   try {
//     // Create a new document in Firestore with the word tally data
//     const docRef = await addDoc(collection(db, 'wordTallies'), {
//       word,
//       knownCount,
//       unknownCount,
//       seenCount,
//       totalCount,
//       timeBetweenClicks,
//       timestamp: new Date(), // Adds timestamp
//     });

//     console.log("Document written with ID: ", docRef.id);
//     res.status(200).json({ message: 'Word tally saved successfully to Firestore', id: docRef.id });
//   } catch (error) {
//     console.error("Error adding document: ", error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

//CODE NEW VERCEL BLOB 1
// import { put, get } from '@vercel/blob';

// const BLOB_FILE_PATH = "data/WordTally3.csv";

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     try {
//         const { word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

//         console.log("Received:", req.body);

//         if (!word || 
//             knownCount === undefined || 
//             unknownCount === undefined || 
//             seenCount === undefined || 
//             totalCount === undefined || 
//             timeBetweenClicks === undefined) {
//             console.error("Invalid Data:", req.body);
//             return res.status(400).json({ error: "Invalid data received" });
//         }

//         const csvRow = `${word},${knownCount},${unknownCount},${seenCount},${totalCount},${timeBetweenClicks}\n`;
//         console.log("Appending to CSV:", csvRow);

//         // Try fetching the existing file from Vercel Blob
//         let existingContent = "";
//         try {
//             const existingFile = await get(BLOB_FILE_PATH);
//             if (existingFile?.url) {
//                 const response = await fetch(existingFile.url);
//                 existingContent = await response.text();
//             }
//         } catch (error) {
//             console.log("No existing file found. Creating a new one.");
//         }

//         // Append new data
//         const updatedContent = existingContent + csvRow;

//         // Upload updated content to Vercel Blob
//         await put(BLOB_FILE_PATH, updatedContent, { access: 'public' });

//         res.status(200).json({ message: 'Word tally saved successfully to Vercel Blob' });

//     } catch (error) {
//         console.error("Unexpected Error:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }


//CODE VERCEL BLOB 2 WORDS SEPARATE FILE
// import { put, head } from '@vercel/blob';

// const BLOB_FILE_PATH = "WordTally3.csv";

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     try {
//         const { uniqueID, word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

//         console.log("Received:", req.body);

//         if (!uniqueID || !word || 
//             knownCount === undefined || 
//             unknownCount === undefined || 
//             seenCount === undefined || 
//             totalCount === undefined || 
//             timeBetweenClicks === undefined) {
//             console.error("Invalid Data:", req.body);
//             return res.status(400).json({ error: "Invalid data received" });
//         }

//         const csvRow = `${uniqueID},${word},${knownCount},${unknownCount},${seenCount},${totalCount},${timeBetweenClicks}\n`;
//         console.log("Appending to CSV:", csvRow);

//         // Check if file exists before appending
//         try {
//             const fileExists = await head(BLOB_FILE_PATH);
//             if (!fileExists) {
//                 console.log("File does not exist, creating new file.");
//             }
//         } catch (error) {
//             console.log("No existing file found, creating a new one.");
//         }

//         // Append new data to Vercel Blob
//         await put(BLOB_FILE_PATH, csvRow, { access: 'public', append: true });

//         res.status(200).json({ message: 'Word tally saved successfully to Vercel Blob' });

//     } catch (error) {
//         console.error("Unexpected Error:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

//CODE VERCEL BLOB 3 WORDS SAME FILE WORKS BEAUTIFUL BUT TOO MANY FILES PAUSE IT.
// import { put, get } from '@vercel/blob';

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     try {
//         const { uniqueID, word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

//         console.log("Received:", req.body);

//         if (!uniqueID || 
//             !word || 
//             knownCount === undefined || 
//             unknownCount === undefined || 
//             seenCount === undefined || 
//             totalCount === undefined || 
//             timeBetweenClicks === undefined) {
//             console.error("Invalid Data:", req.body);
//             return res.status(400).json({ error: "Invalid data received" });
//         }

//         const userFilePath = `WordTally_${uniqueID}.csv`;
//         const csvRow = `${uniqueID},${word},${knownCount},${unknownCount},${seenCount},${totalCount},${timeBetweenClicks}\n`;
//         console.log(`Appending to ${userFilePath}:`, csvRow);

//         let existingData = "";
//         try {
//             const fileResponse = await get(userFilePath);
//             if (fileResponse && fileResponse.url) {
//                 const fileContent = await fetch(fileResponse.url);
//                 existingData = await fileContent.text();
//             }
//         } catch (error) {
//             console.log(`No existing file for ${uniqueID}, creating a new one.`);
//         }

//         const updatedData = existingData + csvRow;

//         await put(userFilePath, updatedData, { access: 'public' });

//         res.status(200).json({ message: `Word tally saved successfully for user ${uniqueID}` });

//     } catch (error) {
//         console.error("Unexpected Error:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

//pause upload of minute files
import { put, get } from '@vercel/blob';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { uniqueID, word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

        console.log("Received:", req.body);

        if (!uniqueID || 
            !word || 
            knownCount === undefined || 
            unknownCount === undefined || 
            seenCount === undefined || 
            totalCount === undefined || 
            timeBetweenClicks === undefined) {
            console.error("Invalid Data:", req.body);
            return res.status(400).json({ error: "Invalid data received" });
        }

        console.log(`Skipping file operations for ${uniqueID}`);
        
        // Prevent file operations
        return res.status(200).json({ message: `File operations disabled for ${uniqueID}` });

    } catch (error) {
        console.error("Unexpected Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}






//CODE JUNCTION VERCEL BLOB 1
// import { put } from '@vercel/blob';

// const BLOB_FILE_PATH = "FinalTestResults.csv"; // Unified file

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     try {
//         const { UniqueID, FirstName, word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

//         console.log("Received:", req.body);

//         if (!UniqueID || !FirstName || !word || 
//             knownCount === undefined || 
//             unknownCount === undefined || 
//             seenCount === undefined || 
//             totalCount === undefined || 
//             timeBetweenClicks === undefined) {
//             console.error("Invalid Data:", req.body);
//             return res.status(400).json({ error: "Invalid data received" });
//         }

//         const csvRow = `${UniqueID},${FirstName},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,${word},${knownCount},${unknownCount},${seenCount},${totalCount},${timeBetweenClicks}\n`;
//         console.log("Appending to FinalTestResults.csv:", csvRow);

//         // Append to the unified CSV file
//         await put(BLOB_FILE_PATH, csvRow, { access: 'public', append: true });

//         res.status(200).json({ message: 'Word tally saved successfully to FinalTestResults.csv' });

//     } catch (error) {
//         console.error("Unexpected Error:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }


//CODE JUNCTION VERCEL BLOB 2
// import { put } from '@vercel/blob';

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     try {
//         const { uniqueID, word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

//         if (!uniqueID || !word ||
//             knownCount === undefined ||
//             unknownCount === undefined ||
//             seenCount === undefined ||
//             totalCount === undefined ||
//             timeBetweenClicks === undefined) {
//               console.error("❌ Missing Fields:", {
//                 uniqueID, word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks
//             });
//             return res.status(400).json({ error: "Invalid data received" });
//         }

//         // Generate a unique filename per user
//         const userFileName = `FinalTestResults_${uniqueID}.csv`;

//         // Construct CSV row
//         const csvRow = `${uniqueID},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,${word},${knownCount},${unknownCount},${seenCount},${totalCount},${timeBetweenClicks}\n`;

//         // Append data to the user-specific file
//         await put(userFileName, csvRow, { access: 'public', append: true });

//         res.status(200).json({ message: `Word tally saved successfully to ${userFileName}` });

//     } catch (error) {
//         console.error("Unexpected Error:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }


//code new
// import { put } from '@vercel/blob';

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     try {
//         const { uniqueID, word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

//         if (!uniqueID || !word ||
//             knownCount === undefined ||
//             unknownCount === undefined ||
//             seenCount === undefined ||
//             totalCount === undefined ||
//             timeBetweenClicks === undefined) {
//               console.error("❌ Missing Fields:", {
//                 uniqueID, word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks
//             });
//             return res.status(400).json({ error: "Invalid data received" });
//         }

//         console.log("Submitting Data:", {
//           uniqueID, word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks
//         });
        

//         // Generate a unique filename per user
//         const userFileName = `FinalTestResults_${uniqueID}.csv`;

//         // Define the correct number of empty columns before adding word data
//         const emptyColumns = new Array(57).fill("").join(",");

//         // Construct CSV row in the correct format
//         const csvRow = `${uniqueID},${emptyColumns},${word},${knownCount},${unknownCount},${seenCount},${totalCount},${timeBetweenClicks}\n`;

//         // Append data to the user-specific file
//         await put(userFileName, csvRow, { access: 'public', append: true });

//         res.status(200).json({ message: `Word tally saved successfully to ${userFileName}` });

//     } catch (error) {
//         console.error("Unexpected Error:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }
