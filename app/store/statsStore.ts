'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getTodayString } from '../utils/daily';

export interface StatsState {
    played: number;
    won: number;
    currentStreak: number;
    maxStreak: number;
    guessDistribution: Record<number, number>;
    lastWinDate: string | null;
    lastPlayedDate: string | null;
    recordWin: (numGuesses: number) => void;
    recordPlay: () => void;
}

const STORAGE_KEY = 'programmdle-stats';

function isNextDay(dateString1: string, dateString2: string): boolean {
    if (!dateString1 || !dateString2) return false;
    const d1 = new Date(dateString1);
    const d2 = new Date(dateString2);
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 1;
}

export const useStatsStore = create<StatsState>()(
    persist(
        (set, get) => ({
            played: 0,
            won: 0,
            currentStreak: 0,
            maxStreak: 0,
            guessDistribution: {},
            lastWinDate: null,
            lastPlayedDate: null,

            recordPlay: () => {
                const today = getTodayString();
                const state = get();

                if (state.lastPlayedDate === today) return;
                let newStreak = state.currentStreak;
                if (state.lastWinDate && !isNextDay(state.lastWinDate, today) && state.lastWinDate !== today) {
                    newStreak = 0;
                }

                set({
                    played: state.played + 1,
                    lastPlayedDate: today,
                    currentStreak: newStreak,
                });
            },

            recordWin: (numGuesses: number) => {
                const today = getTodayString();
                const state = get();

                if (state.lastWinDate === today) return;

                let played = state.played;
                if (state.lastPlayedDate !== today) {
                    played += 1;
                }

                const isConsecutive = state.lastWinDate ? isNextDay(state.lastWinDate, today) : false;
                const newStreak = isConsecutive ? state.currentStreak + 1 : 1;
                const newMaxStreak = Math.max(newStreak, state.maxStreak);

                const newDistribution = { ...state.guessDistribution };
                newDistribution[numGuesses] = (newDistribution[numGuesses] || 0) + 1;

                set({
                    played,
                    won: state.won + 1,
                    currentStreak: newStreak,
                    maxStreak: newMaxStreak,
                    guessDistribution: newDistribution,
                    lastWinDate: today,
                    lastPlayedDate: today,
                });
            },
        }),
        {
            name: STORAGE_KEY,
            storage: createJSONStorage(() => localStorage),
        }
    )
);
