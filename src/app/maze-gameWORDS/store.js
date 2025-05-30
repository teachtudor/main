// import { create } from 'zustand';

// export const useStore = create((set) => ({
//   coins: 2000,
//   loseCoins: (amount) =>
//     set((state) => ({
//       coins: Math.max(state.coins - amount, 0),
//     })),
// }));

//code 2
import { create } from 'zustand';
export const useStore = create((set) => ({
  coins: 7040,
  loseCoins: (amount) =>
    set((state) => ({
      coins: Math.max(state.coins - amount, 0),
    })),
  resetCoins: () => set({ coins: 2000 }), // 👈 new
}));
