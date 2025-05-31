import { type StateCreator } from 'zustand'
import type { AppStore, ThemeSlice } from "~/types/store"

export const createThemeSlice: StateCreator<
    AppStore,
    [
        ["zustand/devtools", never],
        ["zustand/immer", never],
    ],
    [],
    ThemeSlice
> = (set) => ({
    isDarkMode: false,
    setDarkMode: (isDarkMode: Boolean) => set((state) => (
        {
            isDarkMode: isDarkMode
        })),
})

