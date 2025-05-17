import { create } from 'zustand';

export const useStore = create((set) => ({
  coins: 100,
  addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
}));
