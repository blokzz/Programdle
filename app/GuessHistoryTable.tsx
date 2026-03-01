'use client'

import type { ProgrammingLanguage } from './data/languages';

interface GuessHistoryTableProps {
  guesses: ProgrammingLanguage[];
  dailyLanguage: ProgrammingLanguage;
}

export function GuessHistoryTable({
  guesses,
  dailyLanguage,
}: GuessHistoryTableProps) {
  if (guesses.length === 0) return null;

  return (
    <div className="mt-8 w-full overflow-x-auto pb-2 flex flex-col items-center animate-in fade-in duration-300">
      <div className="mb-2 flex items-center justify-center gap-6 text-xs text-muted-foreground text-center">
        <span className="font-medium uppercase tracking-[0.2em]">
          Guess history
        </span>
        <span>
          Attempts:{' '}
          <span className="font-semibold text-foreground">{guesses.length}</span>
        </span>
      </div>

      <div className="min-w-max rounded-xl border border-border/70 bg-black/30 p-3 shadow-inner">
        <div className="mb-2 flex gap-2 px-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          <div className="w-28 text-center">Language</div>
          <div className="w-24 text-center">Year</div>
          <div className="w-32 text-center">Paradigm</div>
          <div className="w-32 text-center">Typing</div>
          <div className="w-24 text-center">Compiled?</div>
        </div>

        <div className="space-y-1.5 text-sm font-medium text-foreground">
          {guesses.map((guess, i) => (
            <div
              key={i}
              className="flex min-w-max gap-2 rounded-lg bg-background/40 p-1.5 text-center shadow-sm animate-in fade-in zoom-in-95"
            >
              <div
                className={`flex w-28 items-center justify-center rounded-md px-2 py-1.5 ${guess.name === dailyLanguage.name
                  ? 'bg-emerald-500/80 text-black'
                  : 'bg-destructive/80 text-black'
                  }`}
              >
                {guess.name}
              </div>
              <div
                className={`flex w-24 flex-col items-center justify-center rounded-md px-2 py-1.5 ${guess.releaseYear === dailyLanguage.releaseYear
                  ? 'bg-emerald-500/80 text-black'
                  : 'bg-destructive/80 text-black'
                  }`}
              >
                <span>{guess.releaseYear}</span>
                {guess.releaseYear > dailyLanguage.releaseYear && (
                  <span className="text-[10px]">⬇️</span>
                )}
                {guess.releaseYear < dailyLanguage.releaseYear && (
                  <span className="text-[10px]">⬆️</span>
                )}
              </div>
              <div
                className={`flex w-32 items-center justify-center rounded-md px-2 py-1.5 ${guess.paradigm === dailyLanguage.paradigm
                  ? 'bg-emerald-500/80 text-black'
                  : 'bg-destructive/80 text-black'
                  }`}
              >
                {guess.paradigm}
              </div>
              <div
                className={`flex w-32 items-center justify-center rounded-md px-2 py-1.5 ${guess.typing === dailyLanguage.typing
                  ? 'bg-emerald-500/80 text-black'
                  : 'bg-destructive/80 text-black'
                  }`}
              >
                {guess.typing}
              </div>
              <div
                className={`flex w-24 items-center justify-center rounded-md px-2 py-1.5 ${guess.isCompiled === dailyLanguage.isCompiled
                  ? 'bg-emerald-500/80 text-black'
                  : 'bg-destructive/80 text-black'
                  }`}
              >
                {guess.isCompiled ? 'Yes' : 'No'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


