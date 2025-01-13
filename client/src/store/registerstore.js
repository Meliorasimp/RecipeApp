import { create } from 'zustand';

export const useRegisterStore = create((set) => ({
    userdata: [],
    addUserData:(user) => set((state) => ({userdata: [...state.userdata, user]}))
}));