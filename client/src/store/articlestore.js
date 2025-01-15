import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useArticleStore = create((set) => ({
    articles: [],
    setArticles: (articles) => set({articles}),

    addArticle:(article) => set((state) => ({articles: [...state.articles, ...article]})),

    deleteArticle:(id) => set((state) => ({articles: state.articles.filter(article => article._id !== id)})),

    isPublished: false,

    setIsPublished: (isPublished) => set({isPublished}),

    publishArticle: (id) => set((state) => ({
        articles: state.articles.map(article =>
          article._id === id ? { ...article, isPublished: true } : article
        )
    })),

    UnpublishArticle: (id) => set((state) => ({
        articles: state.articles.map(article => 
            article._id === id ? { ...article, isPublished: false } : article
        ) 
    })),
}));