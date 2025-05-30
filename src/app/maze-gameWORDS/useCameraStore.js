// store/useCameraStore.js
import { create } from 'zustand';

export const useCameraStore = create((set) => ({
  followMode: false,
  setFollowMode: (mode) => set({ followMode: mode }),
}));
