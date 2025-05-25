import React from 'react';

const QuestionPopup = ({ image, options, correctAnswer, onAnswerSelected }) => {
  const handleClick = (option) => {
    const isCorrect = option === correctAnswer;
    onAnswerSelected(isCorrect);
  };

  return (
    <div className="question-popup" style={{
      position: 'absolute',
      top: '20%',
      left: '20%',
      backgroundColor: 'rgba(255,255,255,0.9)',
      padding: '20px',
      borderRadius: '10px',
      zIndex: 1000
    }}>
      <img src={image} alt="Question Visual" style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
      <div>
        {options.map((option, idx) => (
          <button key={idx} onClick={() => handleClick(option)} style={{
            margin: '10px',
            padding: '10px 20px',
            fontSize: '16px'
          }}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionPopup;
