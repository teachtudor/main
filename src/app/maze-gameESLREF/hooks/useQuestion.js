import { useState } from 'react';

export function useQuestion() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const triggerQuestion = (question) => {
    setCurrentQuestion(question);
    setShowPopup(true);
  };

  const closeQuestion = () => {
    setShowPopup(false);
    setCurrentQuestion(null);
  };

  return {
    currentQuestion,
    showPopup,
    triggerQuestion,
    closeQuestion
  };
}
