// import fetch from 'node-fetch';

// const GITHUB_OWNER = 'teachtudor'; // Replace with your GitHub username
// const GITHUB_REPO = 'main'; // Replace with your repo name
// const GITHUB_FILE_PATH = 'data/word_tally.csv'; // Path inside repo
// const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN; // Store in .env.local

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     try {
//         const { word, knownCount, unknownCount, totalCount } = req.body;
//         if (!word || knownCount === undefined || unknownCount === undefined || totalCount === undefined) {
//             return res.status(400).json({ error: "Invalid data received" });
//         }

//         const csvRow = `${word},${knownCount},${unknownCount},${totalCount}\n`;

//         // Fetch current file from GitHub
//         const fileUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;
//         const fileResponse = await fetch(fileUrl, {
//             headers: { Authorization: `token ${GITHUB_TOKEN}` }
//         });

//         const fileData = await fileResponse.json();
//         const existingContent = fileData.content ? Buffer.from(fileData.content, 'base64').toString('utf-8') : '';
//         const newContent = existingContent + csvRow;

//         // Commit updated file
//         const response = await fetch(fileUrl, {
//             method: 'PUT',
//             headers: {
//                 Authorization: `token ${GITHUB_ACCESS_TOKEN}`,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 message: 'Update word tally',
//                 content: Buffer.from(newContent).toString('base64'),
//                 sha: fileData.sha,
//             }),
//         });

//         if (!response.ok) throw new Error('GitHub API error');

//         return res.status(200).json({ message: 'Word tally saved successfully' });

//     } catch (error) {
//         console.error("Error writing word tally:", error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }
