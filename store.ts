import { create } from 'zustand'

/**
 * Interface for the application's global search and theme state.
 */
type SearchText = {
    /** The current search query string used across the dashboard. */
    searchText: string;
    /** Function to update the global search text. */
    setSearchText: (text: string) => void;
    /** Whether the application is in dark mode. */
    darkMode: boolean;
}

/**
 * Global store using Zustand for managing search state and application preferences.
 */
export const useStore = create<SearchText>((set) => ({
  searchText: "",
  setSearchText: (text: string) => set({ searchText: text }),
  darkMode: false,
}))
