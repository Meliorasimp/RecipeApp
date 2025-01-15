import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      introsToDisplay: {},
      setIntrosToDisplay: (id, introduction, isPublished) =>
        set((state) => ({
          introsToDisplay: {
            ...state.introsToDisplay,
            [id]: {
              intro: introduction,
              isPublished: isPublished,
            },
          },
        })),
    }),
    {
      name: 'introductions-storage',
      getStorage: () => localStorage, 
    }
  )
);

export default useStore;
