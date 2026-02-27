'use client'

import type { ProgrammingLanguage } from './data/languages';

interface GuessInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: boolean) => void;
  isWon: boolean;
  availableLanguages: ProgrammingLanguage[];
  onGuess: (language: ProgrammingLanguage) => void;
}

export function GuessInput({
  searchTerm,
  setSearchTerm,
  isDropdownOpen,
  setIsDropdownOpen,
  isWon,
  availableLanguages,
  onGuess,
}: GuessInputProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <label className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Your guess
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            const value = e.target.value;
            setSearchTerm(value);
            setIsDropdownOpen(value.length > 0);
          }}
          placeholder={isWon ? 'You guessed it!' : 'Type a language name...'}
          disabled={isWon}
          className="w-full rounded-xl border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground shadow-sm outline-none ring-0 transition hover:bg-background focus:border-primary focus:ring-2 focus:ring-primary/50 disabled:opacity-60"
        />

        {isDropdownOpen && availableLanguages.length > 0 && !isWon && (
          <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-border bg-popover/95 text-sm shadow-lg no-scrollbar animate-in fade-in zoom-in-95 duration-150">
            {availableLanguages.map((lang) => (
              <li
                key={lang.id}
                onClick={() => onGuess(lang)}
                className="cursor-pointer px-3 py-2 text-foreground hover:bg-muted/70"
              >
                {lang.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


