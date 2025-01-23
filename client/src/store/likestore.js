import { create } from 'zustand';

export const useLikeStore = create((set) => ({
    counter: null,

    setCounter: (counter) => set({ counter }),
    
    increment: () => set((state) => ({ counter: state.counter + 1 })),
}));
