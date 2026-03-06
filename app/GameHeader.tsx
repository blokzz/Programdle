'use client'

import { BarChart2 } from 'lucide-react';

interface GameHeaderProps {
  onOpenStats?: () => void;
}

export function GameHeader({ onOpenStats }: GameHeaderProps = {}) {
  return (
    <header className="mb-6 space-y-2 text-center relative flex flex-col items-center">
      <div className="absolute right-0 top-0 mt-[-0.5rem] mr-[-0.5rem]">
        <button
          onClick={onOpenStats}
          className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition-colors"
          title="Statistics"
        >
          <BarChart2 size={20} />
        </button>
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Programdle
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Guess the programming language
      </h1>
      <p className="text-sm text-muted-foreground">
        Read hints from the code snippets and choose the correct language from the list.
      </p>
    </header>
  );
}


