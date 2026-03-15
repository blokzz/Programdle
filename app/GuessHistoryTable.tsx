'use client'

import { HelpCircle, ChevronUp, ChevronDown } from 'lucide-react';
import type { ProgrammingLanguage, BasicProgrammingLanguage } from './data/languages';

interface GuessHistoryTableProps {
  guesses: BasicProgrammingLanguage[];
  dailyLanguage: ProgrammingLanguage;
}

export function GuessHistoryTable({
  guesses,
  dailyLanguage,
}: GuessHistoryTableProps) {
  if (guesses.length === 0) return null;

  return (
    <div className="mt-8 w-full overflow-x-auto pb-6 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-4 flex flex-col items-center justify-center gap-2">
        <h3 className="bg-gradient-to-r from-emerald-400 to-cyan-400 dark:from-emerald-300 dark:to-cyan-300 bg-clip-text text-sm font-black uppercase tracking-[0.2em] text-transparent drop-shadow-sm text-center">
          Guess History
        </h3>
        <div className="flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-3 py-1 text-xs font-semibold shadow-inner backdrop-blur-md">
          <span className="text-muted-foreground uppercase tracking-widest">Attempts</span>
          <span className="text-emerald-600 dark:text-emerald-400">{guesses.length}</span>
        </div>
      </div>

      <div className="min-w-max rounded-2xl border border-border/50 bg-background/40 p-4 shadow-xl backdrop-blur-xl">
        <div className="mb-3 flex gap-2 px-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <div className="flex w-32 items-center justify-center text-center">Language</div>
          <div className="flex w-24 items-center justify-center text-center">Year</div>
          <div className="flex w-36 cursor-help items-center justify-center gap-1.5 text-center transition-colors hover:text-foreground" title="The style or way the language is written (e.g., Object-Oriented, Functional)">
            Paradigm
            <HelpCircle className="h-3.5 w-3.5 opacity-70" />
          </div>
          <div className="flex w-36 cursor-help items-center justify-center gap-1.5 text-center transition-colors hover:text-foreground" title="How the language handles data types (e.g., Static checks types before running, Dynamic checks while running)">
            Typing
            <HelpCircle className="h-3.5 w-3.5 opacity-70" />
          </div>
          <div className="flex w-24 items-center justify-center text-center">Compiled?</div>
        </div>

        <div className="flex flex-col gap-2">
          {guesses.map((guess, i) => (
            <div
              key={i}
              className="flex min-w-max gap-2 rounded-xl bg-card border border-border/40 p-1.5 shadow-sm transition-all hover:bg-accent/50 hover:shadow-md animate-in fade-in zoom-in-95 fill-mode-backwards"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Cell match={guess.name === dailyLanguage.name} value={guess.name} width="w-32" />
              <YearCell guessYear={guess.releaseYear} targetYear={dailyLanguage.releaseYear} width="w-24" />
              <Cell match={guess.paradigm === dailyLanguage.paradigm} value={guess.paradigm} width="w-36" />
              <Cell match={guess.typing === dailyLanguage.typing} value={guess.typing} width="w-36" />
              <Cell match={guess.isCompiled === dailyLanguage.isCompiled} value={guess.isCompiled ? 'Yes' : 'No'} width="w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Cell({ match, value, width }: { match: boolean; value: string; width: string }) {
  return (
    <div
      className={`flex ${width} items-center justify-center rounded-lg px-2 py-2 text-xs sm:text-sm font-medium tracking-wide transition-all ${match
        ? 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300'
        : 'border border-rose-500/20 bg-rose-500/10 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/15 dark:text-rose-300'
        }`}
    >
      <span className="truncate px-1 text-center">{value}</span>
    </div>
  );
}

function YearCell({ guessYear, targetYear, width }: { guessYear: number; targetYear: number; width: string }) {
  const match = guessYear === targetYear;
  return (
    <div
      className={`flex ${width} items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs sm:text-sm font-medium tracking-wide transition-all ${match
        ? 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300'
        : 'border border-rose-500/20 bg-rose-500/10 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/15 dark:text-rose-300'
        }`}
    >
      <span>{guessYear}</span>
      {!match && (
        <span className="flex items-center">
          {guessYear > targetYear ? (
            <ChevronDown className="h-4 w-4 opacity-70" strokeWidth={2.5} />
          ) : (
            <ChevronUp className="h-4 w-4 opacity-70" strokeWidth={2.5} />
          )}
        </span>
      )}
    </div>
  );
}


