import { Html } from '@react-three/drei';
import React from 'react';

const QuestionPopup3D = ({ position, image, options, correctAnswer, onAnswerSelected }) => {
  return (
    <group position={position}>
      <Html center transform>
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '20px',
          borderRadius: '10px',
          border: '2px solid #ccc',
          textAlign: 'center'
        }}>
          <img src={image} alt="Question Visual" style={{ width: '150px', height: '100px', objectFit: 'cover' }} />
          <div>
            {options.map((option, idx) => (
              <button
                key={`${option}-${idx}`} 
                onClick={() => onAnswerSelected(option === correctAnswer)}
                style={{
                    margin: '5px',
                    padding: '5px 10px',
                    fontSize: '14px'
                }}
                >
                {option}
              </button>

            ))}
          </div>
        </div>
      </Html>
    </group>
  );
};

export default QuestionPopup3D;
