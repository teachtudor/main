import Papa from 'papaparse';

const PEXELS_API_KEY = 'UX8UiSfJmY75XqZ5axEgXv6W1UvAD7shpRSJloku68PAZUpLn5K3BXMX';
const PEXELS_API_URL = 'https://api.pexels.com/v1/search';
const DATAMUSE_API_URL = 'https://api.datamuse.com/words?ml=';

export async function loadWordList() {
  const response = await fetch('/CEFR UNFETTERED.csv');
  const text = await response.text();
  const parsed = Papa.parse(text, { header: true });
  return parsed.data.map(item => cleanHeadword(item.headword));
}

export function cleanHeadword(word) {
  return word.split('/')[0].trim();  // Take the first variation
}

export async function fetchPexelsImage(query) {
  const response = await fetch(`${PEXELS_API_URL}?query=${query}&per_page=1`, {
    headers: {
      Authorization: PEXELS_API_KEY
    }
  });
  const data = await response.json();
  return data.photos[0]?.src.medium || null;
}

export async function getDistractors(word) {
  const response = await fetch(`${DATAMUSE_API_URL}${word}&max=5`);
  const data = await response.json();
  return data.slice(0, 3).map(item => item.word);
}

export async function generateQuestion(word) {
  const image = await fetchPexelsImage(word);
  const distractors = await getDistractors(word);
  const options = shuffle([word, ...distractors]);

  return { image, options, correct: word };
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
