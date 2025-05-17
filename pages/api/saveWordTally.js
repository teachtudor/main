// // pages/api/saveWordTally.js
// import fs from 'fs';
// import path from 'path';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { word, knownCount, unknownCount, totalCount } = req.body;

//     // Create the CSV content for the word tally
//     const csvContent = `${word},${unknownCount},${knownCount},${totalCount}\n`;

//     try {
//       const filePath = path.resolve(process.cwd(), 'public', 'word_tally.csv');
//       // Append the result to the CSV file
//       fs.appendFileSync(filePath, csvContent);
//       res.status(200).json({ message: 'Word tally saved successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error saving word tally', error });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }


// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     try {
//         const filePath = path.resolve(process.cwd(), 'public', 'word_tally.csv');
//         const { word, knownCount, unknownCount, totalCount } = req.body;

//         // Convert data to CSV format
//         const csvRow = `${word},${knownCount},${unknownCount},${totalCount}\n`;

//         // Append to file
//         fs.appendFileSync(filePath, csvRow, 'utf8');

//         return res.status(200).json({ message: 'Word tally saved successfully!' });
//     } catch (error) {
//         return res.status(500).json({ message: 'Error saving word tally', error });
//     }
// }


//CODE 3
// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//     if (req.method === 'POST') {
//         const { word, count } = req.body; // Example data from frontend
//         const filePath = path.resolve(process.cwd(), 'data', 'word_tally.csv');

//         // Convert data to CSV row format
//         const newRow = `${word},${count}\n`;

//         try {
//             // Append the new row instead of overwriting
//             fs.appendFileSync(filePath, newRow, 'utf8');
//             res.status(200).json({ message: 'Word tally saved!' });
//         } catch (error) {
//             res.status(500).json({ error: 'Failed to save data' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method not allowed' });
//     }
// }

//CODE 4
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'word_tally.csv');

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { word, knownCount, unknownCount, totalCount } = req.body;

        console.log("Received:", req.body);
        console.log("Extracted:", word, knownCount, unknownCount, totalCount);

        if (!word || knownCount === undefined || unknownCount === undefined || totalCount === undefined) {
            return res.status(400).json({ error: "Invalid data received" });
        }

        const csvRow = `${word},${knownCount},${unknownCount},${totalCount}\n`;
        console.log("Writing to CSV:", csvRow);

        fs.appendFileSync(filePath, csvRow, 'utf8');

        res.status(200).json({ message: 'Word tally saved successfully' });

    } catch (error) {
        console.error("Error writing word tally:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//CODE 5
// import fs from 'fs';
// import path from 'path';

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     const filePath = path.join(process.cwd(), 'data', 'wordTally.json'); // Adjust path if needed

//     try {
//         // Ensure the request has data
//         const { word, knownCount, unknownCount, totalCount } = req.body;
//         if (!word) {
//             return res.status(400).json({ error: 'Missing word data' });
//         }

//         // Read existing data
//         let data = [];
//         if (fs.existsSync(filePath)) {
//             const fileContent = fs.readFileSync(filePath, 'utf8');
//             data = fileContent ? JSON.parse(fileContent) : [];
//         }

//         // Update or add new word entry
//         const existingIndex = data.findIndex((entry) => entry.word === word);
//         if (existingIndex !== -1) {
//             data[existingIndex] = { word, knownCount, unknownCount, totalCount };
//         } else {
//             data.push({ word, knownCount, unknownCount, totalCount });
//         }

//         // Save updated data
//         fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

//         console.log('✅ Tally saved:', { word, knownCount, unknownCount, totalCount });
//         return res.status(200).json({ message: 'Tally saved successfully' });

//     } catch (error) {
//         console.error('❌ Error saving tally:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

//CODE 6
// import fs from 'fs';
// import path from 'path';
// import { parse } from 'json2csv'; // Install: npm install json2csv

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     const filePath = path.join(process.cwd(), 'data', 'word_tally.csv'); // Adjust as needed

//     try {
//         const { word, knownCount, unknownCount, totalCount } = req.body;

//         if (!word) {
//             return res.status(400).json({ error: 'Missing word data' });
//         }

//         // Prepare CSV data
//         const newEntry = { word, knownCount, unknownCount, totalCount };
//         const csvData = parse([newEntry], { header: false });

//         // Check if file exists, add headers if needed
//         const fileExists = fs.existsSync(filePath);
//         if (!fileExists) {
//             fs.writeFileSync(filePath, 'word,knownCount,unknownCount,totalCount\n', 'utf8'); // Add headers
//         }

//         // Append new data
//         fs.appendFileSync(filePath, `\n${csvData}`, 'utf8');

//         console.log('✅ CSV Updated:', newEntry);
//         return res.status(200).json({ message: 'Tally saved successfully' });

//     } catch (error) {
//         console.error('❌ Error saving to CSV:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

//CODE 7
// import fs from 'fs';
// import path from 'path';

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     const filePath = path.join(process.cwd(), 'data', 'word_tally.csv'); // Adjust if needed

//     try {
//         const { word, knownCount, unknownCount, totalCount } = req.body;

//         if (!word) {
//             return res.status(400).json({ error: 'Missing word data' });
//         }

//         // Prepare CSV line
//         const csvLine = `${word},${knownCount},${unknownCount},${totalCount}\n`;

//         // If file doesn't exist, create it with headers
//         if (!fs.existsSync(filePath)) {
//             fs.writeFileSync(filePath, 'word,knownCount,unknownCount,totalCount\n', 'utf8');
//         }

//         // Append new data to CSV
//         fs.appendFileSync(filePath, csvLine, 'utf8');

//         console.log('✅ CSV Updated:', csvLine.trim());
//         return res.status(200).json({ message: 'Tally saved successfully' });

//     } catch (error) {
//         console.error('❌ Error saving to CSV:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// //CODE 8
