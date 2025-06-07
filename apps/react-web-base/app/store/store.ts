import { create } from "zustand"
import { createThemeSlice } from "./slices/theme"
import type { AppStore } from "~/types/store"
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'

const useAppStore = create<AppStore>()(
  devtools(
    immer((...a) => ({
      ...createThemeSlice(...a),
    }))
  )
)