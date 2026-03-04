'use client'

import { useState, useRef, useEffect } from 'react';
import type { BasicProgrammingLanguage } from './data/languages';

interface GuessInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: boolean) => void;
  isWon: boolean;
  availableLanguages: BasicProgrammingLanguage[];
  onGuess: (language: BasicProgrammingLanguage) => void;
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

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [searchTerm, availableLanguages.length]);

  useEffect(() => {
    if (selectedIndex >= 0 && listRef.current) {
      const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isDropdownOpen || availableLanguages.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < availableLanguages.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < availableLanguages.length) {
        onGuess(availableLanguages[selectedIndex]);
      } else if (availableLanguages.length > 0 && searchTerm.length > 0) {
        onGuess(availableLanguages[0]);
      }
    } else if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

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
          onKeyDown={handleKeyDown}
          placeholder={isWon ? 'You guessed it!' : 'Type a language name...'}
          disabled={isWon}
          className="w-full rounded-xl border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground shadow-sm outline-none ring-0 transition hover:bg-background focus:border-primary focus:ring-2 focus:ring-primary/50 disabled:opacity-60"
        />

        {isDropdownOpen && availableLanguages.length > 0 && !isWon && (
          <ul
            ref={listRef}
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-border bg-popover/95 text-sm shadow-lg no-scrollbar animate-in fade-in zoom-in-95 duration-150"
          >
            {availableLanguages.map((lang, index) => (
              <li
                key={lang.id}
                onClick={() => onGuess(lang)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`cursor-pointer px-3 py-2 text-foreground transition-colors ${index === selectedIndex ? 'bg-muted/70' : 'hover:bg-muted/70'
                  }`}
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
