'use client'

import { useEffect, useState } from 'react';
import { Share2, Check } from 'lucide-react';
import type { ProgrammingLanguage, BasicProgrammingLanguage } from './data/languages';
import { GameHeader } from './GameHeader';
import { CodeHints } from './CodeHints';
import { GuessInput } from './GuessInput';
import { GuessHistoryTable } from './GuessHistoryTable';
import { useGameStore } from './store/gameStore';
import { useStatsStore } from './store/statsStore';
import { StatsModal } from './StatsModal';
import { getTodayString, getGameNumber } from './utils/daily';

export default function GameBoard() {
  const [dailyLanguage, setDailyLanguage] = useState<ProgrammingLanguage | null>(null);
  const [allLanguages, setAllLanguages] = useState<BasicProgrammingLanguage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const guesses = useGameStore((state) => state.guesses);
  const addGuess = useGameStore((state) => state.addGuess);
  const [hasHydrated, setHasHydrated] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const recordPlay = useStatsStore((state) => state.recordPlay);
  const recordWin = useStatsStore((state) => state.recordWin);

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
    const startDate = getTodayString();

    const updateTimer = () => {
      const now = new Date();
      if (getTodayString() !== startDate) {
        window.location.reload();
        return;
      }

      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diff = midnight.getTime() - now.getTime();

      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(
        `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dailyRes, langsRes] = await Promise.all([
          fetch(`/api/daily?date=${getTodayString()}`),
          fetch('/api/languages')
        ]);

        const dailyData = await dailyRes.json();
        const langsData = await langsRes.json();

        setDailyLanguage(dailyData);
        setAllLanguages(langsData);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (hasHydrated && dailyLanguage) {
      recordPlay();
    }
  }, [hasHydrated, dailyLanguage, recordPlay]);

  const handleGuess = (guessedLang: BasicProgrammingLanguage) => {
    addGuess(guessedLang);
    setSearchTerm('');
    setIsDropdownOpen(false);

    if (dailyLanguage && guessedLang.id === dailyLanguage.id) {
      recordWin(guesses.length + 1);
      setTimeout(() => setIsStatsOpen(true), 2000);
    }
  };

  const handleShare = () => {
    if (!dailyLanguage) return;

    const title = `Programdle #${getGameNumber()} - ${guesses.length}/6`;

    const grid = guesses.map(guess => {
      let row = "";
      row += guess.name === dailyLanguage.name ? "🟩" : "🟥";
      row += guess.releaseYear === dailyLanguage.releaseYear ? "🟩" : "🟥";
      row += guess.paradigm === dailyLanguage.paradigm ? "🟩" : "🟥";
      row += guess.typing === dailyLanguage.typing ? "🟩" : "🟥";
      row += guess.isCompiled === dailyLanguage.isCompiled ? "🟩" : "🟥";
      return row;
    }).join("\n");

    const textToShare = `${title}\n\n${grid}`;

    navigator.clipboard.writeText(textToShare).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  if (!hasHydrated || isLoading || !dailyLanguage) {
    return (
      <div className="flex justify-center items-center p-20">
        <div className="text-xl font-semibold text-muted-foreground animate-pulse">
          Loading today's challenge...
        </div>
      </div>
    );
  }

  const availableLanguages = allLanguages.filter(
    (lang) =>
      !guesses.some((g) => g.id === lang.id) &&
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const visibleSnippetsCount = Math.min(guesses.length + 1, dailyLanguage.snippets.length);
  const isWon = guesses.length > 0 && guesses[0].id === dailyLanguage.id;

  return (
    <section className="w-full max-w-4xl rounded-2xl bg-card/60 p-4 md:p-6 shadow-xl ring-1 ring-border backdrop-blur animate-in fade-in zoom-in-95 duration-300 relative">
      <GameHeader onOpenStats={() => setIsStatsOpen(true)} />
      <StatsModal isOpen={isStatsOpen} onClose={() => setIsStatsOpen(false)} />

      <div className="mt-4 grid items-stretch gap-6 md:gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="order-2 md:order-2 space-y-4">
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
            <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-center text-sm font-medium text-emerald-600 dark:text-emerald-300 shadow-sm">
                Congratulations! You guessed the language!
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="text-sm text-muted-foreground">
                  Next language: <span className="font-mono font-medium text-foreground">{timeLeft || '--:--:--'}</span>
                </div>
                <button
                  onClick={handleShare}
                  disabled={isCopied}
                  className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-80 active:scale-95"
                >
                  {isCopied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Share2 className="h-4 w-4" />
                      Share Result
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

        </div>

        <div className="order-1 md:order-1">
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