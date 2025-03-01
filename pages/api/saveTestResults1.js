import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

const GITHUB_OWNER = 'teachtudor'; // Replace with your GitHub username
const GITHUB_REPO = 'main'; // Replace with your repo name
const GITHUB_FILE_PATH = 'data/test_results.csv'; // Path inside repo
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN; // Store in .env.local


export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        let { userId, username, confidenceInterval, standardError, totalKnown, totalUnknown, levels } = req.body;

        if (!userId) {
            userId = uuidv4();
        }

        levels = levels || {};
        totalUnknown = Object.values(levels).reduce((sum, count) => sum + count, 0);

        const csvRow = `${userId},${username || "Unknown"},${confidenceInterval},${standardError},${totalKnown},${totalUnknown},${levels.A1 ?? 0},${levels.A2 ?? 0},${levels.B1 ?? 0},${levels.B2 ?? 0},${levels.C1 ?? 0},${levels.C2 ?? 0},${levels.A1_unknown ?? 0},${levels.A2_unknown ?? 0},${levels.B1_unknown ?? 0},${levels.B2_unknown ?? 0},${levels.C1_unknown ?? 0},${levels.C2_unknown ?? 0}\n`;

        // Fetch current file from GitHub
        const fileUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;
        const fileResponse = await fetch(fileUrl, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` }
        });

        const fileData = await fileResponse.json();
        const existingContent = fileData.content ? Buffer.from(fileData.content, 'base64').toString('utf-8') : '';
        const newContent = existingContent + csvRow;

        // Commit updated file
        const response = await fetch(fileUrl, {
            method: 'PUT',
            headers: {
                Authorization: `token ${GITHUB_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: 'Update test results',
                content: Buffer.from(newContent).toString('base64'),
                sha: fileData.sha,
            }),
        });

        if (!response.ok) throw new Error('GitHub API error');

        return res.status(200).json({ message: 'Test results saved successfully!', userId });

    } catch (error) {
        console.error("Error writing test results:", error);
        return res.status(500).json({ message: "Error saving data", error: error.message });
    }
}
