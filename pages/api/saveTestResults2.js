import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const {
        userId, firstName, gender, height, yearsOfStudy, educationLevel, occupation,
        date, duration, birthday, nativeLanguage, country, city, state,
        confidenceInterval, standardError, totalKnown, totalUnknown,
        a1Known, a2Known, b1Known, b2Known, c1Known, c2Known,
        a1Unknown, a2Unknown, b1Unknown, b2Unknown, c1Unknown, c2Unknown,
        a1SeenBefore, a2SeenBefore, b1SeenBefore, b2SeenBefore, c1SeenBefore, c2SeenBefore
    } = req.body;

    const filePath = path.join(process.cwd(), 'public', 'new_TEST_RESULTS.CSV');
    const headers = [
        'Unique ID', 'First Name', 'Gender', 'Height', 'Years of Study of English', 'Education Level', 'Occupation or Field of Study',
        'Date', 'Duration of Test', 'Birthday', 'Native Language', 'Country', 'City', 'State',
        'Confidence Interval', 'Standard Error', 'Total Known', 'Total Unknown',
        'A1 Known', 'A2 Known', 'B1 Known', 'B2 Known', 'C1 Known', 'C2 Known',
        'A1 Unknown', 'A2 Unknown', 'B1 Unknown', 'B2 Unknown', 'C1 Unknown', 'C2 Unknown',
        'A1 SeenBefore', 'A2 SeenBefore', 'B1 SeenBefore', 'B2 SeenBefore', 'C1 SeenBefore', 'C2 SeenBefore'
    ];

    const newRow = [
        userId, firstName, gender, height, yearsOfStudy, educationLevel, occupation,
        date, duration, birthday, nativeLanguage, country, city, state,
        confidenceInterval, standardError, totalKnown, totalUnknown,
        a1Known, a2Known, b1Known, b2Known, c1Known, c2Known,
        a1Unknown, a2Unknown, b1Unknown, b2Unknown, c1Unknown, c2Unknown,
        a1SeenBefore, a2SeenBefore, b1SeenBefore, b2SeenBefore, c1SeenBefore, c2SeenBefore
    ];

    let fileExists = fs.existsSync(filePath);
    let fileContent = fileExists ? fs.readFileSync(filePath, 'utf8') : '';
    let lines = fileContent.trim().split('\n');
    let fileHeaders = lines.length > 0 ? lines[0].split(',') : [];

    if (!fileExists || fileHeaders.length !== headers.length || fileHeaders.some((h, i) => h.trim() !== headers[i].trim())) {
        fs.writeFileSync(filePath, headers.join(',') + '\n');
    }

    fs.appendFileSync(filePath, newRow.join(',') + '\n');
    res.status(200).json({ success: true });
}
