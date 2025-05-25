// import { create } from 'zustand';

// export const useStore = create((set) => ({
//   coins: 100,
//   addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
// }));

//code 2
import { create } from 'zustand';

export const useStore = create((set) => ({
  coins: 100,
  currentQuestion: null,
  showQuestionPopup: false,

  addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
  
  triggerQuestion: (question) => set(() => ({
    currentQuestion: question,
    showQuestionPopup: true
  })),

  closeQuestion: () => set(() => ({
    currentQuestion: null,
    showQuestionPopup: false
  })),
}));

