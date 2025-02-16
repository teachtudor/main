// // pages/api/saveTestResults.js
// import fs from 'fs';
// import path from 'path';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { confidenceInterval, standardError, totalKnown, totalUnknown } = req.body;

//     // Create the CSV content for the test results
//     const csvContent = `${confidenceInterval},${standardError},${totalKnown},${totalUnknown}\n`;

//     try {
//       const filePath = path.resolve(process.cwd(), 'public', 'test_results.csv');
//       // Append the result to the CSV file
//       fs.appendFileSync(filePath, csvContent);
//       res.status(200).json({ message: 'Test results saved successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error saving test results', error });
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
//         const filePath = path.resolve(process.cwd(), 'public', 'test_results.csv');
//         const { confidenceInterval, standardError, totalKnown, totalUnknown } = req.body;

//         // Convert data to CSV format
//         const csvRow = `${confidenceInterval},${standardError},${totalKnown},${totalUnknown}\n`;

//         // Append to file
//         fs.appendFileSync(filePath, csvRow, 'utf8');

//         return res.status(200).json({ message: 'Data saved successfully!' });
//     } catch (error) {
//         return res.status(500).json({ message: 'Error saving data', error });
//     }
// }


//CODE 3
// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     try {
//         // Define the path to the data folder and ensure it exists
//         const dataDir = path.resolve(process.cwd(), 'data');
//         if (!fs.existsSync(dataDir)) {
//             fs.mkdirSync(dataDir, { recursive: true });
//         }

//         // Define file path
//         const filePath = path.join(dataDir, 'test_results.csv');

//         // Extract data from request
//         const { confidenceInterval, standardError, totalKnown, totalUnknown } = req.body;

//         // Convert data to CSV format
//         const csvRow = `${confidenceInterval},${standardError},${totalKnown},${totalUnknown}\n`;

//         // Append data to file (async for better performance)
//         fs.appendFile(filePath, csvRow, 'utf8', (err) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Error saving data', error: err });
//             }
//             return res.status(200).json({ message: 'Data saved successfully!' });
//         });
//     } catch (error) {
//         return res.status(500).json({ message: 'Error saving data', error });
//     }
// }

//CODE 4
// import fs from 'fs';
// import path from 'path';
// import { v4 as uuidv4 } from 'uuid';

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     try {
//         // Define the path to the data folder and ensure it exists
//         const dataDir = path.resolve(process.cwd(), 'data');
//         if (!fs.existsSync(dataDir)) {
//             fs.mkdirSync(dataDir, { recursive: true });
//         }

//         // Define file path
//         const filePath = path.join(dataDir, 'test_results.csv');

//         // Generate a unique ID
//         const uniqueID = uuidv4();

//         // Extract data from request
//         const { 
//             confidenceInterval, 
//             standardError, 
//             totalKnown, 
//             totalUnknown, 
//             levels 
//         } = req.body;

//         // Check if file exists; if not, create headers
//         const headers = [
//             'Unique ID', 'Confidence Interval', 'Standard Error', 'Total Known', 'Total Unknown',
//             'A1 Known', 'A2 Known', 'B1 Known', 'B2 Known', 'C1 Known', 'C2 Known',
//             'A1 Unknown', 'A2 Unknown', 'B1 Unknown', 'B2 Unknown', 'C1 Unknown', 'C2 Unknown'
//         ];
        
//         if (!fs.existsSync(filePath)) {
//             fs.writeFileSync(filePath, headers.join(',') + '\n', 'utf8');
//         }

//         // Convert data to CSV format
//         const csvRow = [
//             uniqueID, confidenceInterval, standardError, totalKnown, totalUnknown,
//             levels.A1 || 0, levels.A2 || 0, levels.B1 || 0, levels.B2 || 0, levels.C1 || 0, levels.C2 || 0,
//             levels.A1_unknown || 0, levels.A2_unknown || 0, levels.B1_unknown || 0, levels.B2_unknown || 0, levels.C1_unknown || 0, levels.C2_unknown || 0
//         ].join(',') + '\n';

//         // Append data to file (async for better performance)
//         fs.appendFile(filePath, csvRow, 'utf8', (err) => {
//             if (err) {
//               console.error('Error saving data:', err);  // Log the error
//               return res.status(500).json({ message: 'Error saving data', error: err });
//             }
//             return res.status(200).json({ message: 'Data saved successfully!', id: uniqueID });
//         });
//     } catch (error) {
//         return res.status(500).json({ message: 'Error saving data', error });
//     }
// }

//CODE 5
// import fs from 'fs';
// import path from 'path';
// import { v4 as uuidv4 } from 'uuid';

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     try {
//         // Define the path to the data folder and ensure it exists
//         const dataDir = path.resolve(process.cwd(), 'data');
//         if (!fs.existsSync(dataDir)) {
//             fs.mkdirSync(dataDir, { recursive: true });
//         }

//         // Define file path
//         const filePath = path.join(dataDir, 'test_results.csv');

//         // Generate a unique ID
//         const uniqueID = uuidv4();

//         // Extract data from request
//         const { confidenceInterval, standardError, totalKnown, totalUnknown, levels } = req.body;

//         // Debugging: Log received data
//         console.log("Received Data:", req.body);

//         // Validate the levels object
//         if (!levels || typeof levels !== 'object') {
//             console.error("Invalid levels data:", levels);
//             return res.status(400).json({ message: "Invalid levels data" });
//         }

//         // Check if file exists; if not, create headers
//         const headers = [
//             'Unique ID', 'Confidence Interval', 'Standard Error', 'Total Known', 'Total Unknown',
//             'A1 Known', 'A2 Known', 'B1 Known', 'B2 Known', 'C1 Known', 'C2 Known',
//             'A1 Unknown', 'A2 Unknown', 'B1 Unknown', 'B2 Unknown', 'C1 Unknown', 'C2 Unknown'
//         ];
        
//         if (!fs.existsSync(filePath)) {
//             fs.writeFileSync(filePath, headers.join(',') + '\n', 'utf8');
//         }

//         // Convert data to CSV format
//         const csvRow = [
//             uniqueID, confidenceInterval, standardError, totalKnown, totalUnknown,
//             levels?.A1 || 0, levels?.A2 || 0, levels?.B1 || 0, levels?.B2 || 0, levels?.C1 || 0, levels?.C2 || 0,
//             levels?.A1_unknown || 0, levels?.A2_unknown || 0, levels?.B1_unknown || 0, levels?.B2_unknown || 0, levels?.C1_unknown || 0, levels?.C2_unknown || 0
//         ].join(',') + '\n';

//         // Debugging: Log CSV row before writing
//         console.log("CSV Row:", csvRow);

//         // Append data to file
//         fs.appendFile(filePath, csvRow, 'utf8', (err) => {
//             if (err) {
//                 console.error('Error saving data:', err);  
//                 return res.status(500).json({ message: 'Error saving data', error: err.message });
//             }
//             console.log("Data saved successfully!");
//             return res.status(200).json({ message: 'Data saved successfully!', id: uniqueID });
//         });

//     } catch (error) {
//         console.error("Unhandled error:", error);
//         return res.status(500).json({ message: 'Error saving data', error: error.message });
//     }
// }


//CODE 6
// import fs from 'fs';
// import path from 'path';
// import { v4 as uuidv4 } from 'uuid';

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     try {
//         const dataDir = path.resolve(process.cwd(), 'data');
//         if (!fs.existsSync(dataDir)) {
//             fs.mkdirSync(dataDir, { recursive: true });
//         }

//         const filePath = path.join(dataDir, 'test_results.csv');

//         let { userId, confidenceInterval, standardError, totalKnown, totalUnknown, levels } = req.body;
        
//         // Assign a new userId if not provided
//         if (!userId) {
//             userId = uuidv4();
//         }

//         const headers = [
//             'User ID', 'Confidence Interval', 'Standard Error', 'Total Known', 'Total Unknown',
//             'A1 Known', 'A2 Known', 'B1 Known', 'B2 Known', 'C1 Known', 'C2 Known',
//             'A1 Unknown', 'A2 Unknown', 'B1 Unknown', 'B2 Unknown', 'C1 Unknown', 'C2 Unknown'
//         ];

//         if (!fs.existsSync(filePath)) {
//             fs.writeFileSync(filePath, headers.join(',') + '\n', 'utf8');
//         }

//         const csvRow = [
//             userId, confidenceInterval, standardError, totalKnown, totalUnknown,
//             levels.A1 || 0, levels.A2 || 0, levels.B1 || 0, levels.B2 || 0, levels.C1 || 0, levels.C2 || 0,
//             levels.A1_unknown || 0, levels.A2_unknown || 0, levels.B1_unknown || 0, levels.B2_unknown || 0, levels.C1_unknown || 0, levels.C2_unknown || 0
//         ].join(',') + '\n';

//         fs.appendFile(filePath, csvRow, 'utf8', (err) => {
//             if (err) {
//                 console.error('Error saving data:', err);
//                 return res.status(500).json({ message: 'Error saving data', error: err });
//             }
//             return res.status(200).json({ message: 'Data saved successfully!', userId });
//         });
//     } catch (error) {
//         return res.status(500).json({ message: 'Error saving data', error });
//     }
// }

//CODE 7
// import fs from 'fs';
// import path from 'path';
// import { v4 as uuidv4 } from 'uuid';

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     try {
//         const dataDir = path.resolve(process.cwd(), 'data');
//         if (!fs.existsSync(dataDir)) {
//             fs.mkdirSync(dataDir, { recursive: true });
//         }

//         const filePath = path.join(dataDir, 'test_results.csv');

//         let { userId, username, confidenceInterval, standardError, totalKnown, totalUnknown, levels } = req.body;
        
//         // Assign a new userId if not provided
//         if (!userId) {
//             userId = uuidv4();
//         }

//         // ✅ Add "Username" to the headers
//         const headers = [
//             'User ID', 'Username', 'Confidence Interval', 'Standard Error', 'Total Known', 'Total Unknown',
//             'A1 Known', 'A2 Known', 'B1 Known', 'B2 Known', 'C1 Known', 'C2 Known',
//             'A1 Unknown', 'A2 Unknown', 'B1 Unknown', 'B2 Unknown', 'C1 Unknown', 'C2 Unknown'
//         ];

//         if (!fs.existsSync(filePath)) {
//             fs.writeFileSync(filePath, headers.join(',') + '\n', 'utf8');
//         }

//         // ✅ Add "username" to the saved CSV row
//         const csvRow = [
//             userId, username || "Unknown", confidenceInterval, standardError, totalKnown, totalUnknown,
//             levels.A1 || 0, levels.A2 || 0, levels.B1 || 0, levels.B2 || 0, levels.C1 || 0, levels.C2 || 0,
//             levels.A1_unknown || 0, levels.A2_unknown || 0, levels.B1_unknown || 0, levels.B2_unknown || 0, levels.C1_unknown || 0, levels.C2_unknown || 0
//         ].join(',') + '\n';

//         fs.appendFile(filePath, csvRow, 'utf8', (err) => {
//             if (err) {
//                 console.error('Error saving data:', err);
//                 return res.status(500).json({ message: 'Error saving data', error: err });
//             }
//             return res.status(200).json({ message: 'Data saved successfully!', userId });
//         });
//     } catch (error) {
//         console.error("Server Error:", error);  // 🔴 Log error for debugging
//         return res.status(500).json({ message: "Error saving data", error: error.message });
//     }
    
// }

// //CODE 8
// import fs from 'fs';
// import path from 'path';
// import { v4 as uuidv4 } from 'uuid';

// export default function handler(req, res) {
//     // console.log("Raw Request Body:", req.body);

//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     try {
//         console.log("Raw Request Body:", req.body);
//         console.log("🔍 Full Raw Request Body:", JSON.stringify(req.body, null, 2));
//         const dataDir = path.resolve(process.cwd(), 'data');
//         if (!fs.existsSync(dataDir)) {
//             fs.mkdirSync(dataDir, { recursive: true });
//         }

//         const filePath = path.join(dataDir, 'test_results.csv');

//         let { userId, username, confidenceInterval, standardError, totalKnown, totalUnknown, levels } = req.body;
        
//         // Debugging logs
//         // console.log("Received levels:", levels);
//         // console.log("Total unknown before writing:", totalUnknown);
//         // console.log("A1 Unknown:", levels.A1_unknown);
//         // console.log("B1 Unknown:", levels.B1_unknown);

//         // Assign a new userId if not provided
//         if (!userId) {
//             userId = uuidv4();
//         }

//         // ✅ Ensure levels exist and default to 0 if missing
//         levels = levels || {}; // Ensure levels object exists

//         // const completeLevels = {
//         //     A1: levels.A1 || 0,
//         //     A2: levels.A2 || 0,
//         //     B1: levels.B1 || 0,
//         //     B2: levels.B2 || 0,
//         //     C1: levels.C1 || 0,
//         //     C2: levels.C2 || 0,
//         //     A1_unknown: levels.A1_unknown || 0,
//         //     A2_unknown: levels.A2_unknown || 0,
//         //     B1_unknown: levels.B1_unknown || 0,
//         //     B2_unknown: levels.B2_unknown || 0,
//         //     C1_unknown: levels.C1_unknown || 0,
//         //     C2_unknown: levels.C2_unknown || 0 // ✅ Ensure totalUnknown is reflected
//         // };
//         const completeLevels = {
//             A1: levels.A1 ?? 0,
//             A2: levels.A2 ?? 0,
//             B1: levels.B1 ?? 0,
//             B2: levels.B2 ?? 0,
//             C1: levels.C1 ?? 0,
//             C2: levels.C2 ?? 0,
//             A1_unknown: levels.A1_unknown ?? 0,
//             A2_unknown: levels.A2_unknown ?? 0,
//             B1_unknown: levels.B1_unknown ?? 0,
//             B2_unknown: levels.B2_unknown ?? 0,
//             C1_unknown: levels.C1_unknown ?? 0,
//             C2_unknown: levels.C2_unknown ?? 0,
//         };
        

//         // ✅ Headers for CSV file
//         const headers = [
//             'User ID', 'Username', 'Confidence Interval', 'Standard Error', 'Total Known', 'Total Unknown',
//             'A1 Known', 'A2 Known', 'B1 Known', 'B2 Known', 'C1 Known', 'C2 Known',
//             'A1 Unknown', 'A2 Unknown', 'B1 Unknown', 'B2 Unknown', 'C1 Unknown', 'C2 Unknown'
//         ];

//         if (!fs.existsSync(filePath)) {
//             fs.writeFileSync(filePath, headers.join(',') + '\n', 'utf8');
//         }

//         // ✅ Ensure unknown values are included correctly
//         // const csvRow = [
//         //     userId, username || "Unknown", confidenceInterval, standardError, totalKnown, totalUnknown,
//         //     completeLevels.A1, completeLevels.A2, completeLevels.B1, completeLevels.B2, completeLevels.C1, completeLevels.C2,
//         //     completeLevels.A1_unknown, completeLevels.A2_unknown, completeLevels.B1_unknown, completeLevels.B2_unknown, completeLevels.C1_unknown, completeLevels.C2_unknown
//         // ].join(',') + '\n';

//         // const csvRow = [
//         //     userId, username || "Unknown", confidenceInterval, standardError, totalKnown, totalUnknown,
//         //     (completeLevels?.A1 ?? 0), (completeLevels?.A2 ?? 0), (completeLevels?.B1 ?? 0), (completeLevels?.B2 ?? 0), (completeLevels?.C1 ?? 0), (completeLevels?.C2 ?? 0),
//         //     (completeLevels?.A1_unknown ?? 0), (completeLevels?.A2_unknown ?? 0), (completeLevels?.B1_unknown ?? 0), (completeLevels?.B2_unknown ?? 0), (completeLevels?.C1_unknown ?? 0), (completeLevels?.C2_unknown ?? totalUnknown)
//         // ].join(',') + '\n';

//         // console.log("Complete Levels before CSV row:", completeLevels);


//         const csvRow = [
//             userId, username || "Unknown", confidenceInterval, standardError, totalKnown, totalUnknown,
//             completeLevels.A1, completeLevels.A2, completeLevels.B1, completeLevels.B2, completeLevels.C1, completeLevels.C2,
//             completeLevels.A1_unknown, completeLevels.A2_unknown, completeLevels.B1_unknown, completeLevels.B2_unknown, completeLevels.C1_unknown, completeLevels.C2_unknown
//         ].join(',') + '\n';
        
        

//         // console.log("Final CSV row before writing:", csvRow);

//         // console.log("A1_unknown in csvRow:", levels.A1_unknown);
//         // console.log("B1_unknown in csvRow:", levels.B1_unknown);
//         // console.log("Final CSV row before writing:", csvRow);
//         // console.log("Final Unknown Counts Before CSV:", levels);


//         // fs.appendFile(filePath, csvRow, 'utf8', (err) => {
//         //     if (err) {
//         //         console.error('Error saving data:', err);
//         //         return res.status(500).json({ message: 'Error saving data', error: err });
//         //     }
//         //     return res.status(200).json({ message: 'Data saved successfully!', userId });
//         // });
//         fs.appendFileSync(filePath, csvRow, 'utf8');
//             res.status(200).json({ message: 'Data saved successfully!', userId });
//             return;

//     } catch (error) {
//         console.error("Server Error:", error);
//         return res.status(500).json({ message: "Error saving data", error: error.message });
//     }
// }

//CODE 9
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
        
    }

    try {
        console.log("Raw Request Body test tesst TEST TEST:", req.body);
        console.log("🔍 Full Raw Request Body:", JSON.stringify(req.body, null, 2));
        
        const dataDir = path.resolve(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        const filePath = path.join(dataDir, 'test_results.csv');

        let { userId, username, confidenceInterval, standardError, totalKnown, totalUnknown, levels } = req.body;

        if (!userId) {
            userId = uuidv4();
        }

        levels = levels || {};

        const completeLevels = {
            A1: levels.A1 ?? 0,
            A2: levels.A2 ?? 0,
            B1: levels.B1 ?? 0,
            B2: levels.B2 ?? 0,
            C1: levels.C1 ?? 0,
            C2: levels.C2 ?? 0,
            A1_unknown: levels.A1_unknown ?? 0,
            A2_unknown: levels.A2_unknown ?? 0,
            B1_unknown: levels.B1_unknown ?? 0,
            B2_unknown: levels.B2_unknown ?? 0,
            C1_unknown: levels.C1_unknown ?? 0,
            C2_unknown: levels.C2_unknown ?? 0,
        };

        console.log("test this", completeLevels);
        console.log("Raw Request Body 2 2 2 22 2 2:", req.body);

        

        totalUnknown = Object.values({
            A1_unknown: completeLevels.A1_unknown,
            A2_unknown: completeLevels.A2_unknown,
            B1_unknown: completeLevels.B1_unknown,
            B2_unknown: completeLevels.B2_unknown,
            C1_unknown: completeLevels.C1_unknown,
            C2_unknown: completeLevels.C2_unknown,
        }).reduce((sum, count) => sum + count, 0);

        console.log("Complete level stuff", completeLevels.C2_unknown);
        console.log(totalUnknown);

        const headers = [
            'User ID', 'Username', 'Confidence Interval', 'Standard Error', 'Total Known', 'Total Unknown',
            'A1 Known', 'A2 Known', 'B1 Known', 'B2 Known', 'C1 Known', 'C2 Known',
            'A1 Unknown', 'A2 Unknown', 'B1 Unknown', 'B2 Unknown', 'C1 Unknown', 'C2 Unknown'
        ];

        let fileExists = fs.existsSync(filePath);
        let data = [];

        if (fileExists) {
            let fileData = fs.readFileSync(filePath, 'utf8').split('\n');
            let existingHeaders = fileData[0].split(',');

            if (headers.length > existingHeaders.length) {
                let newHeaders = existingHeaders.concat(headers.slice(existingHeaders.length));
                data = fileData.map((line, index) => {
                    if (index === 0) return newHeaders.join(',');
                    return line + headers.slice(existingHeaders.length).map(() => ',0').join('');
                });
            } else {
                data = fileData;
            }
        } else {
            data.push(headers.join(','));
        }

        const csvRow = [
            userId, username || "Unknown", confidenceInterval, standardError, totalKnown, totalUnknown,
            completeLevels.A1, completeLevels.A2, completeLevels.B1, completeLevels.B2, completeLevels.C1, completeLevels.C2,
            completeLevels.A1_unknown, completeLevels.A2_unknown, completeLevels.B1_unknown, completeLevels.B2_unknown, completeLevels.C1_unknown, completeLevels.C2_unknown
        ].join(',') + '\n';

        data.push(csvRow);

        console.log("Writing to CSV:", userId, username, totalUnknown, levels);


        fs.writeFileSync(filePath, data.join('\n'), 'utf8');

        res.status(200).json({ message: 'Data saved successfully!', userId });
        
        console.log("Complete level stuff", completeLevels.C2_unknown);
        console.log(totalUnknown);
    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({ message: "Error saving data", error: error.message });
    }
}

