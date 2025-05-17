// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//     if (req.method !== 'GET') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     try {
//         const { userId } = req.query;
//         if (!userId) {
//             return res.status(400).json({ message: 'Missing userId parameter' });
//         }

//         // Define file path
//         const filePath = path.join(process.cwd(), 'data', 'test_results.csv');

//         if (!fs.existsSync(filePath)) {
//             return res.status(404).json({ message: 'No results found' });
//         }

//         // Read CSV file
//         const data = fs.readFileSync(filePath, 'utf8').split('\n');
//         const headers = data[0].split(',');

//         // Find user results
//         const userResults = data
//             .slice(1)
//             .map(row => row.split(','))
//             .filter(row => row[0] === userId);

//         if (userResults.length === 0) {
//             return res.status(404).json({ message: 'No results found for this user' });
//         }

//         // Convert results to JSON
//         const results = userResults.map(row =>
//             Object.fromEntries(headers.map((key, index) => [key, row[index]]))
//         );

//         return res.status(200).json({ results });
//     } catch (error) {
//         return res.status(500).json({ message: 'Error retrieving data', error });
//     }
// }
