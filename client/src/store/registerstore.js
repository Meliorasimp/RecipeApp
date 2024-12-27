import { create } from 'zustand';

export const useRegisterStore = create((set) => ({
    userdata: [],
    addUserData:(user) => set((state) => ({userdata: [...state.userdata, user]}))
}));

export const useArticleStore = create((set) => ({
    articles: [],
    setArticles: (articles) => set({articles}),
    addArticle:(article) => set((state) => ({articles: [...state.articles, ...article]})),
    deleteArticle:(id) => set((state) => ({articles: state.articles.filter(article => article._id !== id)})),
}))