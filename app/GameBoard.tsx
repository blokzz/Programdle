'use client'

import { useEffect, useState } from 'react';
import { LANGUAGES, type ProgrammingLanguage } from './data/languages';
import { GameHeader } from './GameHeader';
import { CodeHints } from './CodeHints';
import { GuessInput } from './GuessInput';
import { GuessHistoryTable } from './GuessHistoryTable';
import { useGameStore } from './store/gameStore';
import { getDailyLanguage } from './utils/daily';

export default function GameBoard() {
  const [dailyLanguage, setDailyLanguage] = useState<ProgrammingLanguage | null>(null);
  const guesses = useGameStore((state) => state.guesses);
  const addGuess = useGameStore((state) => state.addGuess);

  const [hasHydrated, setHasHydrated] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const unsub = useGameStore.persist.onFinishHydration(() => {
      setHasHydrated(true);
    });
    if (useGameStore.persist.hasHydrated()) {
      setHasHydrated(true);
    }

    return unsub;
  }, []);

  useEffect(() => {
    setDailyLanguage(getDailyLanguage());
  }, []);

  const handleGuess = (guessedLang: ProgrammingLanguage) => {
    addGuess(guessedLang);
    setSearchTerm('');
    setIsDropdownOpen(false);
  };

  const availableLanguages = LANGUAGES.filter(
    (lang) =>
      !guesses.some((g) => g.id === lang.id) &&
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  if (!dailyLanguage) return <div className="text-center p-10 text-white">Ładowanie dzisiejszego wyzwania...</div>;
  const visibleSnippetsCount = Math.min(guesses.length + 1, dailyLanguage.snippets.length);

  const isWon = guesses.length > 0 && guesses[0].id === dailyLanguage.id;

  if (!hasHydrated) {
    return null;
  }

  return (
    <section className="w-full max-w-4xl rounded-2xl bg-card/60 p-4 md:p-6 shadow-xl ring-1 ring-border backdrop-blur animate-in fade-in zoom-in-95 duration-300">
      <GameHeader />

      <div className="mt-4 grid items-stretch gap-6 md:gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="order-1 md:order-2 space-y-4">
          <GuessInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            isWon={isWon}
            availableLanguages={availableLanguages}
            onGuess={handleGuess}
          />

          {isWon && (
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-center text-sm font-medium text-emerald-300 shadow-sm">
              Congratulations! You guessed the language!
            </div>
          )}
        </div>

        <div className="order-2 md:order-1">
          <CodeHints
            language={dailyLanguage}
            visibleSnippetsCount={visibleSnippetsCount}
          />
        </div>
      </div>

      <GuessHistoryTable guesses={guesses} dailyLanguage={dailyLanguage} />
    </section>
  );
}