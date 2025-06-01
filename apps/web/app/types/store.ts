
export interface ThemeSlice {
    isDarkMode: Boolean
    setDarkMode: (isDarkMode: Boolean) => void
}

export type AppStore = ThemeSlice
