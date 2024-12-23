import { create } from 'zustand';

export const useRegisterStore = create((set) => ({
    userdata: [],
    addUserData:(user) => set((state) => ({userdata: [...state.userdata, user]}))
}));

export const useArticleStore = create((set) => ({
    articles: [],
    addArticle:(article) => set((state) => ({articles: [...state.articles, article]}))
}))