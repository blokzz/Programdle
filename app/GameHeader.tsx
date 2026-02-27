'use client'

export function GameHeader() {
  return (
    <header className="mb-6 space-y-2 text-center">
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


