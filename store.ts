import { create } from 'zustand'

type SearchText = {
    searchText: string;
    setSearchText: (text: string) => void;
    darkMode: boolean;
  
}

export const useStore = create<SearchText>((set) => ({
  searchText: "",
  setSearchText: (text: string) => set({ searchText: text }),
  darkMode: false,
}))
