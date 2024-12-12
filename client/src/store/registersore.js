import { create } from 'zustand';

export const useRegisterStore = create((set) => ({
    userdata: [],
}));