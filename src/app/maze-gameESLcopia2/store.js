import { create } from 'zustand';

export const useStore = create((set) => ({
  currentWord: null,
  setCurrentWord: (word) => set(() => ({ currentWord: word }))
}));
