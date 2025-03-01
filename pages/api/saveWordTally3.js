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

//code 3
import axios from 'axios';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = "teachtudor"; // Your GitHub username or organization
const REPO_NAME = "main"; // Your repository name
const FILE_PATH = "data/WordTally3.csv"; // Path in your repo
const BRANCH = "main"; // The branch to update

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { word, knownCount, unknownCount, seenCount, totalCount, timeBetweenClicks } = req.body;

        if (!word || 
            knownCount === undefined || 
            unknownCount === undefined || 
            seenCount === undefined || 
            totalCount === undefined || 
            timeBetweenClicks === undefined) {
            return res.status(400).json({ error: "Invalid data received" });
        }

        const csvRow = `${word},${knownCount},${unknownCount},${seenCount},${totalCount},${timeBetweenClicks}\n`;

        // Fetch the existing file from GitHub
        const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
        const headers = { Authorization: `token ${GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" };

        let existingContent = "";
        let sha = null;

        try {
            const response = await axios.get(url, { headers });
            existingContent = Buffer.from(response.data.content, 'base64').toString('utf-8');
            sha = response.data.sha; // Required for updating the file
        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.log("File not found, creating a new one.");
            } else {
                console.error("Error fetching file:", error);
                return res.status(500).json({ error: 'Failed to fetch existing file' });
            }
        }

        // Append new data
        const newContent = existingContent + csvRow;
        const encodedContent = Buffer.from(newContent, 'utf-8').toString('base64');

        // Commit the updated file
        const commitData = {
            message: "Update WordTally3.csv",
            content: encodedContent,
            branch: BRANCH,
            sha: sha || undefined // Only include SHA if the file already exists
        };

        await axios.put(url, commitData, { headers });

        res.status(200).json({ message: 'Word tally saved successfully to GitHub' });

    } catch (error) {
        console.error("Unexpected Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


