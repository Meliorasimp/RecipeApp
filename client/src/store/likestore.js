import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLikeStore = create((set) => ({
    likes: {},
    dislikes: {},
    setLikes: (likes, articleId) => set((state) => ({ likes: { ...state.likes, [articleId]: likes} })),
    setDislikes: (dislikes, articleId) => set((state) => ({ dislikes: { ...state.dislikes, [articleId]: dislikes} })),
}));
