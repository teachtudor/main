// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     const {
//         userId, firstName, gender, height, yearsOfStudy, educationLevel, occupation,
//         date, duration, birthday, nativeLanguage, country, city, state,
//         confidenceInterval, standardError, totalKnown, totalUnknown,
//         a1Known, a2Known, b1Known, b2Known, c1Known, c2Known,
//         a1Unknown, a2Unknown, b1Unknown, b2Unknown, c1Unknown, c2Unknown,
//         a1SeenBefore, a2SeenBefore, b1SeenBefore, b2SeenBefore, c1SeenBefore, c2SeenBefore
//     } = req.body;

//     const filePath = path.join(process.cwd(), 'public', 'new_TEST_RESULTS.CSV');
//     const headers = [
//         'Unique ID', 'First Name', 'Gender', 'Height', 'Years of Study of English', 'Education Level', 'Occupation or Field of Study',
//         'Date', 'Duration of Test', 'Birthday', 'Native Language', 'Country', 'City', 'State',
//         'Confidence Interval', 'Standard Error', 'Total Known', 'Total Unknown',
//         'A1 Known', 'A2 Known', 'B1 Known', 'B2 Known', 'C1 Known', 'C2 Known',
//         'A1 Unknown', 'A2 Unknown', 'B1 Unknown', 'B2 Unknown', 'C1 Unknown', 'C2 Unknown',
//         'A1 SeenBefore', 'A2 SeenBefore', 'B1 SeenBefore', 'B2 SeenBefore', 'C1 SeenBefore', 'C2 SeenBefore'
//     ];

//     const newRow = [
//         userId, firstName, gender, height, yearsOfStudy, educationLevel, occupation,
//         date, duration, birthday, nativeLanguage, country, city, state,
//         confidenceInterval, standardError, totalKnown, totalUnknown,
//         a1Known, a2Known, b1Known, b2Known, c1Known, c2Known,
//         a1Unknown, a2Unknown, b1Unknown, b2Unknown, c1Unknown, c2Unknown,
//         a1SeenBefore, a2SeenBefore, b1SeenBefore, b2SeenBefore, c1SeenBefore, c2SeenBefore
//     ];

//     let fileExists = fs.existsSync(filePath);
//     let fileContent = fileExists ? fs.readFileSync(filePath, 'utf8') : '';
//     let lines = fileContent.trim().split('\n');
//     let fileHeaders = lines.length > 0 ? lines[0].split(',') : [];

//     if (!fileExists || fileHeaders.length !== headers.length || fileHeaders.some((h, i) => h.trim() !== headers[i].trim())) {
//         fs.writeFileSync(filePath, headers.join(',') + '\n');
//     }

//     fs.appendFileSync(filePath, newRow.join(',') + '\n');
//     res.status(200).json({ success: true });
// }

//CODE 2
// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     console.log("Received request body:", req.body);

//     // const {
//     //     userId, firstName, testDate, testDuration, birthday, gender, height,
//     //     yearsOfStudy, educationLevel, occupation, nativeLanguage, country, city, state,
//     //     confidenceInterval, standardError, totalKnown, totalUnknown, totalSeen, totalTested,
//     //     testStatus, drone, color,
//     //     a1Known, a2Known, b1Known, b2Known, c1Known, c2Known,
//     //     a1Unknown, a2Unknown, b1Unknown, b2Unknown, c1Unknown, c2Unknown,
//     //     a1SeenBefore, a2SeenBefore, b1SeenBefore, b2SeenBefore, c1SeenBefore, c2SeenBefore
//     // } = req.body;
//     const {
//         userId, firstName, testDate, testDuration, birthday, gender, height,
//         yearsOfStudy, educationLevel, occupation, nativeLanguage, country, city, state,
//         confidenceInterval, standardError, totalKnown, totalUnknown, totalSeen, totalTested,
//         testStatus, drone, color,
//         a1Known, a2Known, b1Known, b2Known, c1Known, c2Known,
//         a1Unknown, a2Unknown, b1Unknown, b2Unknown, c1Unknown, c2Unknown,
//         a1SeenBefore, a2SeenBefore, b1SeenBefore, b2SeenBefore, c1SeenBefore, c2SeenBefore
//     } = req.body;

//     const filePath = path.join(process.cwd(), 'data', 'TestResults3.csv');
    
//     const headers = [
//         "Unique ID", "First Name", "Test Date", "Test Duration", "Birthday", "Gender", "Height",
//         "Years of Study of English", "Education Level", "Occupation or Field of Study",
//         "Native Language", "Country", "City", "State", "Confidence Interval", "Standard Error",
//         "Total Known", "Total Unknown", "Total Seen", "Total Tested", "Test Status", "Drone", "Color",
//         "A1 Known", "A2 Known", "B1 Known", "B2 Known", "C1 Known", "C2 Known",
//         "A1 Unknown", "A2 Unknown", "B1 Unknown", "B2 Unknown", "C1 Unknown", "C2 Unknown",
//         "A1 SeenBefore", "A2 SeenBefore", "B1 SeenBefore", "B2 SeenBefore", "C1 SeenBefore", "C2 SeenBefore"
//     ];
    

//     // const newRow = [
//     //     userId, firstName, testDate, testDuration, birthday, gender, height,
//     //     yearsOfStudy, educationLevel, occupation, nativeLanguage, country, city, state,
//     //     confidenceInterval, standardError, totalKnown, totalUnknown, totalSeen, totalTested,
//     //     testStatus, drone, color,
//     //     a1Known, a2Known, b1Known, b2Known, c1Known, c2Known,
//     //     a1Unknown, a2Unknown, b1Unknown, b2Unknown, c1Unknown, c2Unknown,
//     //     a1SeenBefore, a2SeenBefore, b1SeenBefore, b2SeenBefore, c1SeenBefore, c2SeenBefore
//     // ];

//     // const newRow = [
//     //     userId || "", firstName || "", testDate || "", testDuration || "", birthday || "", gender || "", height || "",
//     //     yearsOfStudy || "", educationLevel || "", occupation || "", nativeLanguage || "", country || "", city || "", state || "",
//     //     confidenceInterval || "", standardError || "", totalKnown || "", totalUnknown || "", totalSeen || "", totalTested || "",
//     //     testStatus || "", drone || "", color || "",
//     //     a1Known || "", a2Known || "", b1Known || "", b2Known || "", c1Known || "", c2Known || "",
//     //     a1Unknown || "", a2Unknown || "", b1Unknown || "", b2Unknown || "", c1Unknown || "", c2Unknown || "",
//     //     a1SeenBefore || "", a2SeenBefore || "", b1SeenBefore || "", b2SeenBefore || "", c1SeenBefore || "", c2SeenBefore || ""
//     // ];
//     const newRow = [
//         userId || "", firstName || "", testDate || "", testDuration || "", birthday || "", gender || "", height || "",
//         yearsOfStudy || "", educationLevel || "", occupation || "", nativeLanguage || "", country || "", city || "", state || "",
//         confidenceInterval || "", standardError || "", totalKnown || "", totalUnknown || "", totalSeen || "", totalTested || "",
//         testStatus || "", drone || "", color || "",
//         a1Known || "", a2Known || "", b1Known || "", b2Known || "", c1Known || "", c2Known || "",
//         a1Unknown || "", a2Unknown || "", b1Unknown || "", b2Unknown || "", c1Unknown || "", c2Unknown || "",
//         a1SeenBefore || "", a2SeenBefore || "", b1SeenBefore || "", b2SeenBefore || "", c1SeenBefore || "", c2SeenBefore || ""
//     ];
    
    

//     let fileExists = fs.existsSync(filePath);
//     let fileContent = fileExists ? fs.readFileSync(filePath, 'utf8') : '';
//     let lines = fileContent.trim().split('\n');
//     let fileHeaders = lines.length > 0 ? lines[0].split(',') : [];

//     if (!fileExists || fileHeaders.length !== headers.length || fileHeaders.some((h, i) => h.trim() !== headers[i].trim())) {
//         fs.writeFileSync(filePath, headers.join(',') + '\n');
//     }

//     fs.appendFileSync(filePath, newRow.join(',') + '\n');
//     res.status(200).json({ success: true });
// }


//code 3 ISSUES WITH ERROR CHECK
// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     console.log("Received request body:", req.body);

//     // Ensure req.body exists before destructuring
//     if (!req.body) {
//         return res.status(400).json({ error: "Invalid request body" });
//     }

//     const {
//         userId, firstName, testDate, testDuration, birthday, gender, height,
//         yearsOfStudy, educationLevel, occupation, nativeLanguage, country, city, state,
//         confidenceInterval, standardError, totalKnown, totalUnknown, totalSeen, totalTested,
//         testStatus, drone, color,
//         a1Known, a2Known, b1Known, b2Known, c1Known, c2Known,
//         a1Unknown, a2Unknown, b1Unknown, b2Unknown, c1Unknown, c2Unknown,
//         a1SeenBefore, a2SeenBefore, b1SeenBefore, b2SeenBefore, c1SeenBefore, c2SeenBefore
//     } = req.body;

//     const filePath = path.join(process.cwd(), 'data', 'TestResults3.csv');

//     // Ensure 'data' directory exists
//     const dataDir = path.dirname(filePath);
//     if (!fs.existsSync(dataDir)) {
//         fs.mkdirSync(dataDir, { recursive: true });
//     }

//     const headers = [
//         "Unique ID", "First Name", "Test Date", "Test Duration", "Birthday", "Gender", "Height",
//         "Years of Study of English", "Education Level", "Occupation or Field of Study",
//         "Native Language", "Country", "City", "State", "Confidence Interval", "Standard Error",
//         "Total Known", "Total Unknown", "Total Seen", "Total Tested", "Test Status", "Drone", "Color",
//         "A1 Known", "A2 Known", "B1 Known", "B2 Known", "C1 Known", "C2 Known",
//         "A1 Unknown", "A2 Unknown", "B1 Unknown", "B2 Unknown", "C1 Unknown", "C2 Unknown",
//         "A1 SeenBefore", "A2 SeenBefore", "B1 SeenBefore", "B2 SeenBefore", "C1 SeenBefore", "C2 SeenBefore"
//     ];

//     const newRow = [
//         userId || "", firstName || "", testDate || "", testDuration || "", birthday || "", gender || "", height || "",
//         yearsOfStudy || "", educationLevel || "", occupation || "", nativeLanguage || "", country || "", city || "", state || "",
//         confidenceInterval || "", standardError || "", totalKnown || "", totalUnknown || "", totalSeen || "", totalTested || "",
//         testStatus || "", drone || "", color || "",
//         a1Known || "", a2Known || "", b1Known || "", b2Known || "", c1Known || "", c2Known || "",
//         a1Unknown || "", a2Unknown || "", b1Unknown || "", b2Unknown || "", c1Unknown || "", c2Unknown || "",
//         a1SeenBefore || "", a2SeenBefore || "", b1SeenBefore || "", b2SeenBefore || "", c1SeenBefore || "", c2SeenBefore || ""
//     ];

//     try {
//         let fileExists = fs.existsSync(filePath);
//         let fileContent = fileExists ? fs.readFileSync(filePath, 'utf8') : '';
//         let lines = fileContent.trim().split('\n');
//         let fileHeaders = lines.length > 0 ? lines[0].split(',') : [];

//         // If file does not exist OR headers are incorrect, overwrite with correct headers
//         if (!fileExists || fileHeaders.length !== headers.length || fileHeaders.some((h, i) => h.trim() !== headers[i].trim())) {
//             fs.writeFileSync(filePath, headers.join(',') + '\n');
//         }

//         // Append new row
//         fs.appendFileSync(filePath, newRow.join(',') + '\n');

//         res.status(200).json({ success: true });
//     } catch (error) {
//         console.error("Error writing to file:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }

// CODE 4 this works locally
// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     console.log("Received request body:", req.body);

//     if (!req.body) {
//         return res.status(400).json({ error: "Invalid request body" });
//     }

//     // Extract values directly as per the structure of `testResults`
//     const {
//         UniqueID, FirstName, TestDate, TestDuration, Birthday, Gender, Height,
//         YearsOfStudy, EducationLevel, Occupation, NativeLanguage, Country, City, State,
//         ConfidenceInterval, StandardError, TotalKnown, TotalUnknown, TotalSeen, TotalTested,
//         TestStatus, Drone, Color, Level, Exposure, Method,LearningStyle, TimeOfDay, Comment,
//         A1_Known, A2_Known, B1_Known, B2_Known, C1_Known, C2_Known,
//         A1_Unknown, A2_Unknown, B1_Unknown, B2_Unknown, C1_Unknown, C2_Unknown,
//         A1_SeenBefore, A2_SeenBefore, B1_SeenBefore, B2_SeenBefore, C1_SeenBefore, C2_SeenBefore
//     } = req.body;

//     const filePath = path.join(process.cwd(), 'data', 'TestResults3.csv');

//     const dataDir = path.dirname(filePath);
//     if (!fs.existsSync(dataDir)) {
//         fs.mkdirSync(dataDir, { recursive: true });
//     }

//     const headers = [
//         "UniqueID", "FirstName", "TestDate", "TestDuration", "Birthday", "Gender", "Height",
//         "YearsOfStudy", "EducationLevel", "Occupation",
//         "NativeLanguage", "Country", "City", "State", "ConfidenceInterval", "StandardError",
//         "TotalKnown", "TotalUnknown", "TotalSeen", "TotalTested", "TestStatus", "Drone", "Color",
//         "Level", "Exposure", "Method", "LearningStyle", "TimeOfDay", "Comment",
//         "A1_Known", "A2_Known", "B1_Known", "B2_Known", "C1_Known", "C2_Known",
//         "A1_Unknown", "A2_Unknown", "B1_Unknown", "B2_Unknown", "C1_Unknown", "C2_Unknown",
//         "A1_SeenBefore", "A2_SeenBefore", "B1_SeenBefore", "B2_SeenBefore", "C1_SeenBefore", "C2_SeenBefore"
//     ];

//     const safe = (value) => (value === undefined || value === null ? "" : value);
    
//     const newRow = [
//         safe(UniqueID), safe(FirstName), safe(TestDate), safe(TestDuration), safe(Birthday), safe(Gender), safe(Height),
//         safe(YearsOfStudy), safe(EducationLevel), safe(Occupation), safe(NativeLanguage), safe(Country), safe(City), safe(State),
//         safe(ConfidenceInterval), safe(StandardError), safe(TotalKnown), safe(TotalUnknown), safe(TotalSeen), safe(TotalTested),
//         safe(TestStatus), safe(Drone), safe(Color), safe(Level), safe(Exposure), `"${safe(Method)}"`, safe(LearningStyle), safe(TimeOfDay), 
//         safe(Comment), safe(A1_Known), safe(A2_Known), safe(B1_Known), safe(B2_Known), safe(C1_Known), safe(C2_Known),
//         safe(A1_Unknown), safe(A2_Unknown), safe(B1_Unknown), safe(B2_Unknown), safe(C1_Unknown), safe(C2_Unknown),
//         safe(A1_SeenBefore), safe(A2_SeenBefore), safe(B1_SeenBefore), safe(B2_SeenBefore), safe(C1_SeenBefore), safe(C2_SeenBefore)
//     ];

//     console.log("New row to be written:", newRow);

//     try {
//         let fileExists = fs.existsSync(filePath);
//         let fileContent = fileExists ? fs.readFileSync(filePath, 'utf8') : '';
//         let lines = fileContent.trim().split('\n');
//         let fileHeaders = lines.length > 0 ? lines[0].split(',') : [];

//         // Ensure headers are correctly written if missing or different
//         if (!fileExists || fileHeaders.length !== headers.length || fileHeaders.some((h, i) => h.trim() !== headers[i].trim())) {
//             fs.writeFileSync(filePath, headers.join(',') + '\n', 'utf8');
//         }

//         fs.appendFileSync(filePath, newRow.join(',') + '\r\n', 'utf8');

//         res.status(200).json({ success: true });
//     } catch (error) {
//         console.error("Error writing to file:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }

//CODE 5 ACCOUNTS FOR ERROR AND FOR GITHUB
// import axios from 'axios';

// const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
// if (!GITHUB_TOKEN) {
//     throw new Error("GitHub token is missing.");
//   }
  
// const REPO_OWNER = "teachtudor";
// const REPO_NAME = "main";
// const FILE_PATH = "data/TestResults3.csv"; // Path in your GitHub repo
// const BRANCH = "main"; // Branch to update

// // Function to fetch existing file content from GitHub
// async function fetchFileContent(filePath) {
//   const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
//   const headers = { Authorization: `token ${GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" };

//   try {
//     const response = await axios.get(url, { headers });
//     return {
//       content: Buffer.from(response.data.content, 'base64').toString('utf-8'),
//       sha: response.data.sha
//     };
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.log("File not found, creating a new one.");
//       return { content: '', sha: null }; // Return empty content if file doesn't exist
//     } else {
//       throw new Error('Error fetching file: ' + error.message);
//     }
//   }
// }

// // Function to save updated file content to GitHub
// async function saveFileContent(filePath, content, sha = null) {
//   const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
//   const encodedContent = Buffer.from(content, 'utf-8').toString('base64');
//   const commitData = {
//     message: "Updated CSV with new test result",
//     content: encodedContent,
//     branch: BRANCH,
//     sha: sha || undefined
//   };
//   const headers = { Authorization: `token ${GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" };

//   try {
//     await axios.put(url, commitData, { headers });
//   } catch (error) {
//     throw new Error('Error updating file: ' + error.message);
//   }
// }

// // Main handler function
// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   console.log("Received request body:", req.body);

//   if (!req.body) {
//     return res.status(400).json({ error: "Invalid request body" });
//   }

//   // Extracting values from the request body
//   const {
//     UniqueID, FirstName, TestDate, TestDuration, Birthday, Gender, Height,
//     YearsOfStudy, EducationLevel, Occupation, NativeLanguage, Country, City, State,
//     ConfidenceInterval, StandardError, TotalKnown, TotalUnknown, TotalSeen, TotalTested,
//     TestStatus, Drone, Color, Level, Exposure, Method, LearningStyle, TimeOfDay, Comment,
//     A1_Known, A2_Known, B1_Known, B2_Known, C1_Known, C2_Known,
//     A1_Unknown, A2_Unknown, B1_Unknown, B2_Unknown, C1_Unknown, C2_Unknown,
//     A1_SeenBefore, A2_SeenBefore, B1_SeenBefore, B2_SeenBefore, C1_SeenBefore, C2_SeenBefore
//   } = req.body;

//   // Prepare data for new row
//   const safe = (value) => (value === undefined || value === null ? "" : value);
//   const newRow = [
//     safe(UniqueID), safe(FirstName), safe(TestDate), safe(TestDuration), safe(Birthday), safe(Gender), safe(Height),
//     safe(YearsOfStudy), safe(EducationLevel), safe(Occupation), safe(NativeLanguage), safe(Country), safe(City), safe(State),
//     safe(ConfidenceInterval), safe(StandardError), safe(TotalKnown), safe(TotalUnknown), safe(TotalSeen), safe(TotalTested),
//     safe(TestStatus), safe(Drone), safe(Color), safe(Level), safe(Exposure), `"${safe(Method)}"`, safe(LearningStyle), safe(TimeOfDay), 
//     safe(Comment), safe(A1_Known), safe(A2_Known), safe(B1_Known), safe(B2_Known), safe(C1_Known), safe(C2_Known),
//     safe(A1_Unknown), safe(A2_Unknown), safe(B1_Unknown), safe(B2_Unknown), safe(C1_Unknown), safe(C2_Unknown),
//     safe(A1_SeenBefore), safe(A2_SeenBefore), safe(B1_SeenBefore), safe(B2_SeenBefore), safe(C1_SeenBefore), safe(C2_SeenBefore)
//   ];

//   try {
//     // Fetch existing file content from GitHub
//     const { content, sha } = await fetchFileContent(FILE_PATH);

//     // Append new row to the existing file content
//     const updatedContent = content + newRow.join(',') + '\r\n';

//     // Save the updated content back to GitHub
//     await saveFileContent(FILE_PATH, updatedContent, sha);

//     res.status(200).json({ success: true, message: "Data saved successfully" });
//   } catch (error) {
//     console.error("Error updating file:", error);
//     res.status(500).json({ error: "Failed to update file on GitHub" });
//   }
// }

//CODE 6 FIREBASE
// import { db } from '../../lib/firebase'; // Ensure Firestore is initialized
// import { collection, addDoc } from 'firebase/firestore';

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     console.log("Received request body:", req.body);

//     if (!req.body) {
//         return res.status(400).json({ error: "Invalid request body" });
//     }

//     try {
//         const {
//             UniqueID, FirstName, TestDate, TestDuration, Birthday, Gender, Height,
//             YearsOfStudy, EducationLevel, Occupation, NativeLanguage, Country, City, State,
//             ConfidenceInterval, StandardError, TotalKnown, TotalUnknown, TotalSeen, TotalTested,
//             TestStatus, Drone, Color, Level, Exposure, Method, LearningStyle, TimeOfDay, Comment,
//             A1_Known, A2_Known, B1_Known, B2_Known, C1_Known, C2_Known,
//             A1_Unknown, A2_Unknown, B1_Unknown, B2_Unknown, C1_Unknown, C2_Unknown,
//             A1_SeenBefore, A2_SeenBefore, B1_SeenBefore, B2_SeenBefore, C1_SeenBefore, C2_SeenBefore
//         } = req.body;

//         // Prepare the data object
//         const testResult = {
//             UniqueID, FirstName, TestDate, TestDuration, Birthday, Gender, Height,
//             YearsOfStudy, EducationLevel, Occupation, NativeLanguage, Country, City, State,
//             ConfidenceInterval, StandardError, TotalKnown, TotalUnknown, TotalSeen, TotalTested,
//             TestStatus, Drone, Color, Level, Exposure, Method, LearningStyle, TimeOfDay, Comment,
//             A1_Known, A2_Known, B1_Known, B2_Known, C1_Known, C2_Known,
//             A1_Unknown, A2_Unknown, B1_Unknown, B2_Unknown, C1_Unknown, C2_Unknown,
//             A1_SeenBefore, A2_SeenBefore, B1_SeenBefore, B2_SeenBefore, C1_SeenBefore, C2_SeenBefore,
//             timestamp: new Date() // Adds a timestamp for record tracking
//         };

//         // Save the data in Firestore under the "testResults" collection
//         const docRef = await addDoc(collection(db, "testResults"), testResult);

//         console.log("Test result saved with ID:", docRef.id);
//         res.status(200).json({ success: true, id: docRef.id });
//     } catch (error) {
//         console.error("Error saving test results:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }


//CODE 7 VERCEL BLOB 1
// import { put, get } from '@vercel/blob';

// const BLOB_FILE_PATH = "data/TestResults3.csv";

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     console.log("Received request body:", req.body);

//     if (!req.body) {
//         return res.status(400).json({ error: "Invalid request body" });
//     }

//     const {
//         UniqueID, FirstName, TestDate, TestDuration, Birthday, Gender, Height,
//         YearsOfStudy, EducationLevel, Occupation, NativeLanguage, Country, City, State,
//         ConfidenceInterval, StandardError, TotalKnown, TotalUnknown, TotalSeen, TotalTested,
//         TestStatus, Drone, Color, Level, Exposure, Method, LearningStyle, TimeOfDay, Comment,
//         A1_Known, A2_Known, B1_Known, B2_Known, C1_Known, C2_Known,
//         A1_Unknown, A2_Unknown, B1_Unknown, B2_Unknown, C1_Unknown, C2_Unknown,
//         A1_SeenBefore, A2_SeenBefore, B1_SeenBefore, B2_SeenBefore, C1_SeenBefore, C2_SeenBefore
//     } = req.body;

//     const headers = [
//         "UniqueID", "FirstName", "TestDate", "TestDuration", "Birthday", "Gender", "Height",
//         "YearsOfStudy", "EducationLevel", "Occupation",
//         "NativeLanguage", "Country", "City", "State", "ConfidenceInterval", "StandardError",
//         "TotalKnown", "TotalUnknown", "TotalSeen", "TotalTested", "TestStatus", "Drone", "Color",
//         "Level", "Exposure", "Method", "LearningStyle", "TimeOfDay", "Comment",
//         "A1_Known", "A2_Known", "B1_Known", "B2_Known", "C1_Known", "C2_Known",
//         "A1_Unknown", "A2_Unknown", "B1_Unknown", "B2_Unknown", "C1_Unknown", "C2_Unknown",
//         "A1_SeenBefore", "A2_SeenBefore", "B1_SeenBefore", "B2_SeenBefore", "C1_SeenBefore", "C2_SeenBefore"
//     ];

//     const safe = (value) => (value === undefined || value === null ? "" : value);
    
//     const newRow = [
//         safe(UniqueID), safe(FirstName), safe(TestDate), safe(TestDuration), safe(Birthday), safe(Gender), safe(Height),
//         safe(YearsOfStudy), safe(EducationLevel), safe(Occupation), safe(NativeLanguage), safe(Country), safe(City), safe(State),
//         safe(ConfidenceInterval), safe(StandardError), safe(TotalKnown), safe(TotalUnknown), safe(TotalSeen), safe(TotalTested),
//         safe(TestStatus), safe(Drone), safe(Color), safe(Level), safe(Exposure), `"${safe(Method)}"`, safe(LearningStyle), safe(TimeOfDay), 
//         safe(Comment), safe(A1_Known), safe(A2_Known), safe(B1_Known), safe(B2_Known), safe(C1_Known), safe(C2_Known),
//         safe(A1_Unknown), safe(A2_Unknown), safe(B1_Unknown), safe(B2_Unknown), safe(C1_Unknown), safe(C2_Unknown),
//         safe(A1_SeenBefore), safe(A2_SeenBefore), safe(B1_SeenBefore), safe(B2_SeenBefore), safe(C1_SeenBefore), safe(C2_SeenBefore)
//     ];

//     console.log("New row to be written:", newRow);

//     try {
//         let existingContent = "";
//         let fileHeaders = [];

//         // Try fetching the existing file from Vercel Blob
//         try {
//             const existingFile = await get(BLOB_FILE_PATH);
//             if (existingFile?.url) {
//                 const response = await fetch(existingFile.url);
//                 existingContent = await response.text();
//                 let lines = existingContent.trim().split('\n');
//                 fileHeaders = lines.length > 0 ? lines[0].split(',') : [];
//             }
//         } catch (error) {
//             console.log("No existing file found. Creating a new one.");
//         }

//         // Ensure headers are written if missing or different
//         let updatedContent = existingContent;
//         if (!existingContent || fileHeaders.length !== headers.length || fileHeaders.some((h, i) => h.trim() !== headers[i].trim())) {
//             updatedContent = headers.join(',') + '\n';
//         }

//         // Append new row
//         updatedContent += newRow.join(',') + '\r\n';

//         // Upload updated content to Vercel Blob
//         await put(BLOB_FILE_PATH, updatedContent, { access: 'public' });

//         res.status(200).json({ success: true });

//     } catch (error) {
//         console.error("Error writing to Vercel Blob:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }

//CODE 8 VERCEL BLOB 2
import { put } from "@vercel/blob";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const headers = [
            "UniqueID", "FirstName", "TestDate", "TestDuration", "Birthday", "Gender", "Height",
            "YearsOfStudy", "EducationLevel", "Occupation",
            "NativeLanguage", "Country", "City", "State", "ConfidenceInterval", "StandardError",
            "TotalKnown", "TotalUnknown", "TotalSeen", "TotalTested", "TestStatus", "Drone", "Color",
            "Level", "Exposure", "Method", "LearningStyle", "TimeOfDay", "Comment",
            "A1_Known", "A2_Known", "B1_Known", "B2_Known", "C1_Known", "C2_Known",
            "A1_Unknown", "A2_Unknown", "B1_Unknown", "B2_Unknown", "C1_Unknown", "C2_Unknown",
            "A1_SeenBefore", "A2_SeenBefore", "B1_SeenBefore", "B2_SeenBefore", "C1_SeenBefore", "C2_SeenBefore"
        ];

        const safe = (value) => (value === undefined || value === null ? "" : value);

        const {
            UniqueID, FirstName, TestDate, TestDuration, Birthday, Gender, Height,
            YearsOfStudy, EducationLevel, Occupation, NativeLanguage, Country, City, State,
            ConfidenceInterval, StandardError, TotalKnown, TotalUnknown, TotalSeen, TotalTested,
            TestStatus, Drone, Color, Level, Exposure, Method, LearningStyle, TimeOfDay, Comment,
            A1_Known, A2_Known, B1_Known, B2_Known, C1_Known, C2_Known,
            A1_Unknown, A2_Unknown, B1_Unknown, B2_Unknown, C1_Unknown, C2_Unknown,
            A1_SeenBefore, A2_SeenBefore, B1_SeenBefore, B2_SeenBefore, C1_SeenBefore, C2_SeenBefore
        } = req.body;

        const newRow = [
            safe(UniqueID), safe(FirstName), safe(TestDate), safe(TestDuration), safe(Birthday), safe(Gender), safe(Height),
            safe(YearsOfStudy), safe(EducationLevel), safe(Occupation), safe(NativeLanguage), safe(Country), safe(City), safe(State),
            safe(ConfidenceInterval), safe(StandardError), safe(TotalKnown), safe(TotalUnknown), safe(TotalSeen), safe(TotalTested),
            safe(TestStatus), safe(Drone), safe(Color), safe(Level), safe(Exposure), `"${safe(Method)}"`, safe(LearningStyle), safe(TimeOfDay), 
            safe(Comment), safe(A1_Known), safe(A2_Known), safe(B1_Known), safe(B2_Known), safe(C1_Known), safe(C2_Known),
            safe(A1_Unknown), safe(A2_Unknown), safe(B1_Unknown), safe(B2_Unknown), safe(C1_Unknown), safe(C2_Unknown),
            safe(A1_SeenBefore), safe(A2_SeenBefore), safe(B1_SeenBefore), safe(B2_SeenBefore), safe(C1_SeenBefore), safe(C2_SeenBefore)
        ].join(",");

        // Upload file to Vercel Blob
        const { url } = await put("TestResults3.csv", newRow + "\n", { access: "public", append: true });

        return res.status(200).json({ success: true, url });
    } catch (error) {
        console.error("Error uploading to Vercel Blob:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//CODE 9 JUNCTION BLOB 1
// import { get, put } from "@vercel/blob";

// const TEST_RESULTS_FILE = "TestResults3.csv";
// const WORD_TALLY_FILE = "saveWordTally3.csv";
// const FINAL_RESULTS_FILE = "FinalTestResults.csv";

// export default async function handler(req, res) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ error: "Method Not Allowed" });
//     }

//     try {
//         const headers = [
//             "UniqueID", "FirstName", "TestDate", "TestDuration", "Birthday", "Gender", "Height",
//             "YearsOfStudy", "EducationLevel", "Occupation",
//             "NativeLanguage", "Country", "City", "State", "ConfidenceInterval", "StandardError",
//             "TotalKnown", "TotalUnknown", "TotalSeen", "TotalTested", "TestStatus", "Drone", "Color",
//             "Level", "Exposure", "Method", "LearningStyle", "TimeOfDay", "Comment",
//             "A1_Known", "A2_Known", "B1_Known", "B2_Known", "C1_Known", "C2_Known",
//             "A1_Unknown", "A2_Unknown", "B1_Unknown", "B2_Unknown", "C1_Unknown", "C2_Unknown",
//             "A1_SeenBefore", "A2_SeenBefore", "B1_SeenBefore", "B2_SeenBefore", "C1_SeenBefore", "C2_SeenBefore",
//             "Word", "WordCount", "SeenBefore", "TimeTaken"
//         ];

//         const safe = (value) => (value === undefined || value === null ? "" : value);

//         const {
//             UniqueID, FirstName, TestDate, TestDuration, Birthday, Gender, Height,
//             YearsOfStudy, EducationLevel, Occupation, NativeLanguage, Country, City, State,
//             ConfidenceInterval, StandardError, TotalKnown, TotalUnknown, TotalSeen, TotalTested,
//             TestStatus, Drone, Color, Level, Exposure, Method, LearningStyle, TimeOfDay, Comment,
//             A1_Known, A2_Known, B1_Known, B2_Known, C1_Known, C2_Known,
//             A1_Unknown, A2_Unknown, B1_Unknown, B2_Unknown, C1_Unknown, C2_Unknown,
//             A1_SeenBefore, A2_SeenBefore, B1_SeenBefore, B2_SeenBefore, C1_SeenBefore, C2_SeenBefore
//         } = req.body;

//         const testResultRow = [
//             safe(UniqueID), safe(FirstName), safe(TestDate), safe(TestDuration), safe(Birthday), safe(Gender), safe(Height),
//             safe(YearsOfStudy), safe(EducationLevel), safe(Occupation), safe(NativeLanguage), safe(Country), safe(City), safe(State),
//             safe(ConfidenceInterval), safe(StandardError), safe(TotalKnown), safe(TotalUnknown), safe(TotalSeen), safe(TotalTested),
//             safe(TestStatus), safe(Drone), safe(Color), safe(Level), safe(Exposure), `"${safe(Method)}"`, safe(LearningStyle), safe(TimeOfDay), 
//             safe(Comment), safe(A1_Known), safe(A2_Known), safe(B1_Known), safe(B2_Known), safe(C1_Known), safe(C2_Known),
//             safe(A1_Unknown), safe(A2_Unknown), safe(B1_Unknown), safe(B2_Unknown), safe(C1_Unknown), safe(C2_Unknown),
//             safe(A1_SeenBefore), safe(A2_SeenBefore), safe(B1_SeenBefore), safe(B2_SeenBefore), safe(C1_SeenBefore), safe(C2_SeenBefore)
//         ].join(",");

//         // Append test result to TestResults3.csv (if you still need this separate file)
//         await put(TEST_RESULTS_FILE, testResultRow + "\n", { access: "public", append: true });

//         // Fetch all word tally rows
//         const wordTallyBlob = await get(WORD_TALLY_FILE);
//         const wordTallyData = wordTallyBlob?.body ? await wordTallyBlob.body.text() : "";
//         const wordTallyRows = wordTallyData.trim().split("\n");

//         if (wordTallyRows.length === 0) {
//             return res.status(400).json({ error: "Missing word tally data" });
//         }

//         // Merge test results with word tally data
//         const mergedRows = wordTallyRows.map(wordTallyRow => `${testResultRow},${wordTallyRow}`).join("\n");

//         // Append merged rows to FinalTestResults.csv
//         await put(FINAL_RESULTS_FILE, mergedRows + "\n", { access: "public", append: true });

//         return res.status(200).json({ success: true, message: "Test results and word tally saved successfully" });

//     } catch (error) {
//         console.error("Error merging test results:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// }

//CODE 10 JUNCTON BLOB 2
// import { put } from "@vercel/blob";

// const FINAL_RESULTS_FILE = "FinalTestResults.csv";

// export default async function handler(req, res) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ error: "Method Not Allowed" });
//     }

//     try {
//         const headers = [
//             "UniqueID", "FirstName", "TestDate", "TestDuration", "Birthday", "Gender", "Height",
//             "YearsOfStudy", "EducationLevel", "Occupation", "NativeLanguage", "Country", "City", "State",
//             "ConfidenceInterval", "StandardError", "TotalKnown", "TotalUnknown", "TotalSeen", "TotalTested",
//             "TestStatus", "Drone", "Color", "Level", "Exposure", "Method", "LearningStyle", "TimeOfDay", "Comment",
//             "A1_Known", "A2_Known", "B1_Known", "B2_Known", "C1_Known", "C2_Known",
//             "A1_Unknown", "A2_Unknown", "B1_Unknown", "B2_Unknown", "C1_Unknown", "C2_Unknown",
//             "A1_SeenBefore", "A2_SeenBefore", "B1_SeenBefore", "B2_SeenBefore", "C1_SeenBefore", "C2_SeenBefore",
//             "Word", "KnownCount", "UnknownCount", "SeenCount", "TotalCount", "TimeBetweenClicks"
//         ];

//         const safe = (value) => (value === undefined || value === null ? "" : value);

//         const {
//             UniqueID, FirstName, TestDate, TestDuration, Birthday, Gender, Height,
//             YearsOfStudy, EducationLevel, Occupation, NativeLanguage, Country, City, State,
//             ConfidenceInterval, StandardError, TotalKnown, TotalUnknown, TotalSeen, TotalTested,
//             TestStatus, Drone, Color, Level, Exposure, Method, LearningStyle, TimeOfDay, Comment,
//             A1_Known, A2_Known, B1_Known, B2_Known, C1_Known, C2_Known,
//             A1_Unknown, A2_Unknown, B1_Unknown, B2_Unknown, C1_Unknown, C2_Unknown,
//             A1_SeenBefore, A2_SeenBefore, B1_SeenBefore, B2_SeenBefore, C1_SeenBefore, C2_SeenBefore,
//             words // <-- Expecting an array of word tallies
//         } = req.body;

//         if (!words || !Array.isArray(words) || words.length === 0) {
//             return res.status(400).json({ error: "No word tally data provided" });
//         }

//         // Base test result row (without word tallies)
//         const testResultRow = [
//             safe(UniqueID), safe(FirstName), safe(TestDate), safe(TestDuration), safe(Birthday), safe(Gender), safe(Height),
//             safe(YearsOfStudy), safe(EducationLevel), safe(Occupation), safe(NativeLanguage), safe(Country), safe(City), safe(State),
//             safe(ConfidenceInterval), safe(StandardError), safe(TotalKnown), safe(TotalUnknown), safe(TotalSeen), safe(TotalTested),
//             safe(TestStatus), safe(Drone), safe(Color), safe(Level), safe(Exposure), `"${safe(Method)}"`, safe(LearningStyle), safe(TimeOfDay), 
//             safe(Comment), safe(A1_Known), safe(A2_Known), safe(B1_Known), safe(B2_Known), safe(C1_Known), safe(C2_Known),
//             safe(A1_Unknown), safe(A2_Unknown), safe(B1_Unknown), safe(B2_Unknown), safe(C1_Unknown), safe(C2_Unknown),
//             safe(A1_SeenBefore), safe(A2_SeenBefore), safe(B1_SeenBefore), safe(B2_SeenBefore), safe(C1_SeenBefore), safe(C2_SeenBefore)
//         ].join(",");

//         // Create a row for each word in the tally
//         const mergedRows = words.map(({ word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks }) =>
//             `${testResultRow},${safe(word)},${safe(knownCount)},${safe(unknownCount)},${safe(seenCount)},${safe(totalCount)},${safe(timeBetweenClicks)}`
//         ).join("\n");

//         // Append merged rows to FinalTestResults.csv
//         await put(FINAL_RESULTS_FILE, mergedRows + "\n", { access: "public", append: true });

//         return res.status(200).json({ success: true, message: "Test results and word tally saved successfully" });

//     } catch (error) {
//         console.error("Error merging test results:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// }

//CODE 11 JUNCTION BLOB 3
// import { put } from "@vercel/blob";

// export default async function handler(req, res) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ error: "Method Not Allowed" });
//     }

//     try {
//         const headers = [
//             "uniqueID", "firstName", "TestDate", "TestDuration", "Birthday", "Gender", "Height",
//             "YearsOfStudy", "EducationLevel", "Occupation", "NativeLanguage", "Country", "City", "State",
//             "ConfidenceInterval", "StandardError", "TotalKnown", "TotalUnknown", "TotalSeen", "TotalTested",
//             "TestStatus", "Drone", "Color", "Level", "Exposure", "Method", "LearningStyle", "TimeOfDay", "Comment",
//             "A1_Known", "A2_Known", "B1_Known", "B2_Known", "C1_Known", "C2_Known",
//             "A1_Unknown", "A2_Unknown", "B1_Unknown", "B2_Unknown", "C1_Unknown", "C2_Unknown",
//             "A1_SeenBefore", "A2_SeenBefore", "B1_SeenBefore", "B2_SeenBefore", "C1_SeenBefore", "C2_SeenBefore",
//             "Word", "KnownCount", "UnknownCount", "SeenCount", "TotalCount", "TimeBetweenClicks"
//         ];

//         const safe = (value) => (value === undefined || value === null ? "" : value);

//         const {
//             uniqueID, firstName, TestDate, TestDuration, Birthday, Gender, Height,
//             YearsOfStudy, EducationLevel, Occupation, NativeLanguage, Country, City, State,
//             ConfidenceInterval, StandardError, TotalKnown, TotalUnknown, TotalSeen, TotalTested,
//             TestStatus, Drone, Color, Level, Exposure, Method, LearningStyle, TimeOfDay, Comment,
//             A1_Known, A2_Known, B1_Known, B2_Known, C1_Known, C2_Known,
//             A1_Unknown, A2_Unknown, B1_Unknown, B2_Unknown, C1_Unknown, C2_Unknown,
//             A1_SeenBefore, A2_SeenBefore, B1_SeenBefore, B2_SeenBefore, C1_SeenBefore, C2_SeenBefore,
//             words // <-- Expecting an array of word tallies
//         } = req.body;

//         console.log("Received words array:", words);

//         if (!uniqueID || !firstName || !words || !Array.isArray(words) || words.length === 0) {
//             return res.status(400).json({ error: "Invalid request data" });
//         }

//         // Generate a unique file name for each user
//         const userFileName = `FinalTestResults_${uniqueID}.csv`;

//         // Base test result row (without word tallies)
//         const testResultRow = [
//             safe(uniqueID), safe(firstName), safe(TestDate), safe(TestDuration), safe(Birthday), safe(Gender), safe(Height),
//             safe(YearsOfStudy), safe(EducationLevel), safe(Occupation), safe(NativeLanguage), safe(Country), safe(City), safe(State),
//             safe(ConfidenceInterval), safe(StandardError), safe(TotalKnown), safe(TotalUnknown), safe(TotalSeen), safe(TotalTested),
//             safe(TestStatus), safe(Drone), safe(Color), safe(Level), safe(Exposure), `"${safe(Method)}"`, safe(LearningStyle), safe(TimeOfDay), 
//             safe(Comment), safe(A1_Known), safe(A2_Known), safe(B1_Known), safe(B2_Known), safe(C1_Known), safe(C2_Known),
//             safe(A1_Unknown), safe(A2_Unknown), safe(B1_Unknown), safe(B2_Unknown), safe(C1_Unknown), safe(C2_Unknown),
//             safe(A1_SeenBefore), safe(A2_SeenBefore), safe(B1_SeenBefore), safe(B2_SeenBefore), safe(C1_SeenBefore), safe(C2_SeenBefore)
//         ].join(",");

//         // Create a row for each word in the tally
//         const mergedRows = words.map(({ word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks }) =>
//             `${testResultRow},${safe(word)},${safe(knownCount)},${safe(unknownCount)},${safe(seenCount)},${safe(totalCount)},${safe(timeBetweenClicks)}`
//         ).join("\n");

//         // Append merged rows to the user-specific CSV file
//         await put(userFileName, mergedRows + "\n", { access: "public", append: true });

//         return res.status(200).json({ success: true, message: `Test results saved to ${userFileName}` });

//     } catch (error) {
//         console.error("Error saving test results:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// }

//code 12 junction blob 4
// import { put } from "@vercel/blob";

// export default async function handler(req, res) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ error: "Method Not Allowed" });
//     }

//     try {
//         const headers = [
//             "uniqueID", "firstName", "TestDate", "TestDuration", "Birthday", "Gender", "Height",
//             "YearsOfStudy", "EducationLevel", "Occupation", "NativeLanguage", "Country", "City", "State",
//             "ConfidenceInterval", "StandardError", "TotalKnown", "TotalUnknown", "TotalSeen", "TotalTested",
//             "TestStatus", "Drone", "Color", "Level", "Exposure", "Method", "LearningStyle", "TimeOfDay", "Comment",
//             "A1_Known", "A2_Known", "B1_Known", "B2_Known", "C1_Known", "C2_Known",
//             "A1_Unknown", "A2_Unknown", "B1_Unknown", "B2_Unknown", "C1_Unknown", "C2_Unknown",
//             "A1_SeenBefore", "A2_SeenBefore", "B1_SeenBefore", "B2_SeenBefore", "C1_SeenBefore", "C2_SeenBefore",
//             "Word", "KnownCount", "UnknownCount", "SeenCount", "TotalCount", "TimeBetweenClicks"
//         ];

//         const safe = (value) => (value === undefined || value === null ? "" : value);

//         const {
//             uniqueID, firstName, TestDate, TestDuration, Birthday, Gender, Height,
//             YearsOfStudy, EducationLevel, Occupation, NativeLanguage, Country, City, State,
//             ConfidenceInterval, StandardError, TotalKnown, TotalUnknown, TotalSeen, TotalTested,
//             TestStatus, Drone, Color, Level, Exposure, Method, LearningStyle, TimeOfDay, Comment,
//             A1_Known, A2_Known, B1_Known, B2_Known, C1_Known, C2_Known,
//             A1_Unknown, A2_Unknown, B1_Unknown, B2_Unknown, C1_Unknown, C2_Unknown,
//             A1_SeenBefore, A2_SeenBefore, B1_SeenBefore, B2_SeenBefore, C1_SeenBefore, C2_SeenBefore,
//             words, // Bulk word list (if present)
//             word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks // Single word submission
//         } = req.body;

//         if (!uniqueID || !firstName) {
//             return res.status(400).json({ error: "Missing uniqueID or firstName" });
//         }

//         const userFileName = `FinalTestResults_${uniqueID}.csv`;

//         const testResultRow = [
//             safe(uniqueID), safe(firstName), safe(TestDate), safe(TestDuration), safe(Birthday), safe(Gender), safe(Height),
//             safe(YearsOfStudy), safe(EducationLevel), safe(Occupation), safe(NativeLanguage), safe(Country), safe(City), safe(State),
//             safe(ConfidenceInterval), safe(StandardError), safe(TotalKnown), safe(TotalUnknown), safe(TotalSeen), safe(TotalTested),
//             safe(TestStatus), safe(Drone), safe(Color), safe(Level), safe(Exposure), `"${safe(Method)}"`, safe(LearningStyle), safe(TimeOfDay), 
//             safe(Comment), safe(A1_Known), safe(A2_Known), safe(B1_Known), safe(B2_Known), safe(C1_Known), safe(C2_Known),
//             safe(A1_Unknown), safe(A2_Unknown), safe(B1_Unknown), safe(B2_Unknown), safe(C1_Unknown), safe(C2_Unknown),
//             safe(A1_SeenBefore), safe(A2_SeenBefore), safe(B1_SeenBefore), safe(B2_SeenBefore), safe(C1_SeenBefore), safe(C2_SeenBefore)
//         ].join(",");

//         let csvData = "";

//         if (words && Array.isArray(words) && words.length > 0) {
//             // Bulk submission
//             csvData = words.map(({ word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks }) =>
//                 `${testResultRow},${safe(word)},${safe(knownCount)},${safe(unknownCount)},${safe(seenCount)},${safe(totalCount)},${safe(timeBetweenClicks)}`
//             ).join("\n") + "\n";

//         } else if (word) {
//             // Single word submission
//             csvData = `${testResultRow},${safe(word)},${safe(knownCount)},${safe(unknownCount)},${safe(seenCount)},${safe(totalCount)},${safe(timeBetweenClicks)}\n`;

//         } else {
//             return res.status(400).json({ error: "Invalid request: No words provided" });
//         }

//         await put(userFileName, csvData, { access: "public", append: true });

//         return res.status(200).json({ success: true, message: `Data saved to ${userFileName}` });

//     } catch (error) {
//         console.error("Error saving test results:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// }




























//CODE 8 github update
// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
//     const REPO_OWNER = "teachtudor";
//     const REPO_NAME = "main";
//     const FILE_PATH = "data/TestResults3.csv"; // Path in the repo
//     const BRANCH = "main"; // Change if needed
//     const API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

//     try {
//         // Fetch existing file info from GitHub
//         const fileResponse = await fetch(API_URL, {
//             headers: {
//                 Authorization: `token ${GITHUB_TOKEN}`,
//                 Accept: "application/vnd.github.v3+json",
//             },
//         });

//         const fileData = await fileResponse.json();
//         let existingContent = "";

//         if (fileData.content) {
//             existingContent = Buffer.from(fileData.content, "base64").toString("utf-8");
//         }

//         // Convert request body to CSV row
//         const newRow = Object.values(req.body).map(value => `"${String(value).replace(/"/g, '""')}"`).join(",") + "\n";

//         // Append new row to existing content
//         const updatedContent = existingContent + newRow;
//         const encodedContent = Buffer.from(updatedContent).toString("base64");

//         // Commit changes to GitHub
//         const commitResponse = await fetch(API_URL, {
//             method: "PUT",
//             headers: {
//                 Authorization: `token ${GITHUB_TOKEN}`,
//                 Accept: "application/vnd.github.v3+json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 message: "Updated CSV with new test result",
//                 content: encodedContent,
//                 sha: fileData.sha, // Required for updating existing file
//                 branch: BRANCH,
//             }),
//         });

//         const commitData = await commitResponse.json();

//         if (commitResponse.ok) {
//             res.status(200).json({ success: true, message: "Data saved successfully", commit: commitData });
//         } else {
//             throw new Error(commitData.message);
//         }
//     } catch (error) {
//         console.error("Error updating GitHub file:", error);
//         res.status(500).json({ error: "Failed to update CSV file on GitHub" });
//     }
// }

//CODE 4


































//CODE 6
// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     console.log("Received request body:", req.body);

//     if (!req.body) {
//         return res.status(400).json({ error: "Invalid request body" });
//     }

//     // Extract values directly as per the structure of `testResults`
//     const {
//         UniqueID, FirstName, TestDate, TestDuration, Birthday, Gender, Height,
//         YearsOfStudy, EducationLevel, Occupation, NativeLanguage, Country, City, State,
//         ConfidenceInterval, StandardError, TotalKnown, TotalUnknown, TotalSeen, TotalTested,
//         TestStatus, Drone, Color, Level, Exposure, Method, Comment,
//         A1_Known, A2_Known, B1_Known, B2_Known, C1_Known, C2_Known,
//         A1_Unknown, A2_Unknown, B1_Unknown, B2_Unknown, C1_Unknown, C2_Unknown,
//         A1_SeenBefore, A2_SeenBefore, B1_SeenBefore, B2_SeenBefore, C1_SeenBefore, C2_SeenBefore
//     } = req.body;

//     const filePath = path.join(process.cwd(), 'data', 'TestResults3.csv');

//     const dataDir = path.dirname(filePath);
//     if (!fs.existsSync(dataDir)) {
//         fs.mkdirSync(dataDir, { recursive: true });
//     }

//     const headers = [
//         "UniqueID", "FirstName", "TestDate", "TestDuration", "Birthday", "Gender", "Height",
//         "YearsOfStudy", "EducationLevel", "Occupation",
//         "NativeLanguage", "Country", "City", "State", "ConfidenceInterval", "StandardError",
//         "TotalKnown", "TotalUnknown", "TotalSeen", "TotalTested", "TestStatus", "Drone", "Color",
//         "Level", "Exposure", "Method", "Comment",
//         "A1_Known", "A2_Known", "B1_Known", "B2_Known", "C1_Known", "C2_Known",
//         "A1_Unknown", "A2_Unknown", "B1_Unknown", "B2_Unknown", "C1_Unknown", "C2_Unknown",
//         "A1_SeenBefore", "A2_SeenBefore", "B1_SeenBefore", "B2_SeenBefore", "C1_SeenBefore", "C2_SeenBefore"
//     ];

//     const safe = (value) => (value === undefined || value === null ? "" : value);
    
//     // Convert `Method` array to a JSON string before saving it
//     const stringifiedMethod = JSON.stringify(Method);

//     const newRow = [
//         safe(UniqueID), safe(FirstName), safe(TestDate), safe(TestDuration), safe(Birthday), safe(Gender), safe(Height),
//         safe(YearsOfStudy), safe(EducationLevel), safe(Occupation), safe(NativeLanguage), safe(Country), safe(City), safe(State),
//         safe(ConfidenceInterval), safe(StandardError), safe(TotalKnown), safe(TotalUnknown), safe(TotalSeen), safe(TotalTested),
//         safe(TestStatus), safe(Drone), safe(Color), safe(Level), safe(Exposure), safe(stringifiedMethod), safe(Comment),
//         safe(A1_Known), safe(A2_Known), safe(B1_Known), safe(B2_Known), safe(C1_Known), safe(C2_Known),
//         safe(A1_Unknown), safe(A2_Unknown), safe(B1_Unknown), safe(B2_Unknown), safe(C1_Unknown), safe(C2_Unknown),
//         safe(A1_SeenBefore), safe(A2_SeenBefore), safe(B1_SeenBefore), safe(B2_SeenBefore), safe(C1_SeenBefore), safe(C2_SeenBefore)
//     ];

//     console.log("New row to be written:", newRow);

//     try {
//         let fileExists = fs.existsSync(filePath);
//         let fileContent = fileExists ? fs.readFileSync(filePath, 'utf8') : '';
//         let lines = fileContent.trim().split('\n');
//         let fileHeaders = lines.length > 0 ? lines[0].split(',') : [];

//         // Ensure headers are correctly written if missing or different
//         if (!fileExists || fileHeaders.length !== headers.length || fileHeaders.some((h, i) => h.trim() !== headers[i].trim())) {
//             fs.writeFileSync(filePath, headers.join(',') + '\n', 'utf8');
//         }

//         fs.appendFileSync(filePath, newRow.join(',') + '\r\n', 'utf8');

//         res.status(200).json({ success: true });
//     } catch (error) {
//         console.error("Error writing to file:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }
