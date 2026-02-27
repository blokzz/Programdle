
import { LANGUAGES, type ProgrammingLanguage } from '../data/languages';

export function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getDailyLanguage(): ProgrammingLanguage {
  const today = new Date();
  const midnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysSinceEpoch = Math.floor(midnight.getTime() / 86400000);
  const index = daysSinceEpoch % LANGUAGES.length;
  return LANGUAGES[index];
}