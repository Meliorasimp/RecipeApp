
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLoginStore = create(
    persist(
        (set) => ({
            isLoggedIn: false,
            logIn: () => set({ isLoggedIn: true }),
            logOut: () => set({ isLoggedIn: false })
        }),
        {
            name: "login-storage"
        }
    )
)