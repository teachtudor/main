// import Papa from 'papaparse';

// export async function loadWordList() {
//   const response = await fetch('/CEFR UNFETTERED.csv');
//   const text = await response.text();
//   const parsed = Papa.parse(text, { header: true });

//   return parsed.data.map(item => item.headword).filter(Boolean);
// }

//code 2

// import Papa from 'papaparse';

// export async function loadWordList() {
//   const response = await fetch('/CEFR UNFETTERED.csv');
//   const text = await response.text();
//   const parsed = Papa.parse(text, { header: true });

//   // ✅ Create a Set to ensure uniqueness
//   const uniqueWords = Array.from(
//     new Set(parsed.data.map(item => item.headword).filter(Boolean))
//   );

//   return uniqueWords;
// }

//code 3
import Papa from 'papaparse';

export async function loadWordList() {
  const response = await fetch('/CEFR UNFETTERED.csv');
  const text = await response.text();
  const parsed = Papa.parse(text, { header: true });

  return parsed.data.map(item => item.headword).filter(Boolean);
}
