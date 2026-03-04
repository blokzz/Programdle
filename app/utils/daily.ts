
import { LANGUAGES, type ProgrammingLanguage } from '../data/languages';

export function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getDailyLanguage(): ProgrammingLanguage {
  const today = new Date();

  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  const pseudoRandom = Math.abs(Math.sin(seed) * 10000);

  const index = Math.floor(pseudoRandom) % LANGUAGES.length;

  return LANGUAGES[index];
}