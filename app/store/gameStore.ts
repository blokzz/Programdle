'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { StateStorage } from 'zustand/middleware';
import type { ProgrammingLanguage } from '../data/languages';
import { getTodayString } from '../utils/daily';

const STORAGE_KEY = 'programmdle-game';

const dailyAwareStorage: StateStorage = {
  getItem: (name: string): string | null => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    try {
      const parsed = JSON.parse(str);
      const storedDate = parsed?.state?.date;
      const today = getTodayString();
      if (storedDate !== today) {
        localStorage.removeItem(name);
        return null;
      }
      return str;
    } catch {
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    try {
      const parsed = JSON.parse(value);
      parsed.state = { ...parsed.state, date: getTodayString() };
      localStorage.setItem(name, JSON.stringify(parsed));
    } catch {
      localStorage.setItem(name, value);
    }
  },
  removeItem: (name: string): void => localStorage.removeItem(name),
};

interface GameState {
  guesses: ProgrammingLanguage[];
  date?: string;
  addGuess: (language: ProgrammingLanguage) => void;
  reset: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      guesses: [],
      addGuess: (language) =>
        set((state) => ({
          guesses: [language, ...state.guesses],
        })),
      reset: () => set({ guesses: [] }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => dailyAwareStorage),
      partialize: (state) => ({ guesses: state.guesses, date: getTodayString() }),
    },
  ),
);


