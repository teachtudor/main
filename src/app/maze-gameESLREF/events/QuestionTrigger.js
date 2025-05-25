// import { generateQuestion } from '../utils/wordManager';

// export async function QuestionTrigger(wordList, triggerCallback) {
//   const randomIndex = Math.floor(Math.random() * wordList.length);
//   const word = wordList[randomIndex];

//   try {
//     const question = await generateQuestion(word);
//     if (question.image && question.options.length === 4) {
//       triggerCallback(question);
//     } else {
//       console.warn('Incomplete question generated, skipping...');
//     }
//   } catch (error) {
//     console.error('Error generating question:', error);
//   }
// }

//code 2
import { generateQuestion } from '../utils/wordManager';

export async function QuestionTrigger(wordObj, triggerCallback) {
  const word = wordObj.headword || wordObj;  // Safe for both structured or plain strings

  try {
    let question = await generateQuestion(word);

    if (!question.image) {
      console.warn(`❌ No image for word "${word}", skipping.`);
      return;
    }

    // ✅ Deduplicate options
    question.options = Array.from(new Set([question.correct, ...question.options.filter(opt => opt !== question.correct)]));
    
    if (question.options.length >= 2) {  // ✅ Allow min 2 options to proceed
      triggerCallback(question);
    } else {
      console.warn(`❌ Not enough options for "${word}", skipping.`);
    }
    
  } catch (error) {
    console.error(`❌ Error generating question for "${word}":`, error);
  }
}

