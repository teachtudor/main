import { useEffect } from 'react';

export function useWordGlare(wordList, setCurrentWord) {
  useEffect(() => {
    if (!wordList.length) return;

    const playSparkle = () => {
      const audio = new Audio('/sparkle.mp3');
      audio.volume = 0.5;
      audio.play();
    };

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      const word = wordList[randomIndex];
      setCurrentWord(word);
      playSparkle();
    }, 5000);  // Every 5 seconds

    return () => clearInterval(interval);
  }, [wordList, setCurrentWord]);
}
