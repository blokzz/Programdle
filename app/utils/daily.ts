
import { LANGUAGES, type ProgrammingLanguage } from '../data/languages';

export function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getDailyLanguage(targetDate?: Date): ProgrammingLanguage {
  const today = targetDate || new Date();

  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  const pseudoRandom = Math.abs(Math.sin(seed) * 10000);

  const index = Math.floor(pseudoRandom) % LANGUAGES.length;

  const dailyLangData = LANGUAGES[index];

  const level1Index = Math.floor(Math.abs(Math.sin(seed + 1) * 10000)) % 3;
  const level2Index = Math.floor(Math.abs(Math.sin(seed + 2) * 10000)) % 3;
  const level3Index = Math.floor(Math.abs(Math.sin(seed + 3) * 10000)) % 3;

  return {
    ...dailyLangData,
    snippets: [
      dailyLangData.snippets[0][level1Index],
      dailyLangData.snippets[1][level2Index],
      dailyLangData.snippets[2][level3Index]
    ]
  };
}

export function getGameNumber(targetDate?: Date): number {
  const startDate = new Date('2026-02-27T00:00:00');
  const today = targetDate || new Date();

  const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const diffTime = current.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays + 1;
}