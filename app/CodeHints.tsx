'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { ProgrammingLanguage } from './data/languages';

interface CodeHintsProps {
  language: ProgrammingLanguage;
  visibleSnippetsCount: number;
}

export function CodeHints({ language, visibleSnippetsCount }: CodeHintsProps) {
  return (
    <div className="space-y-3 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-muted-foreground">
          Code hints
        </h2>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {visibleSnippetsCount} / {language.snippets.length} snippets
        </span>
      </div>

      {language.snippets.slice(0, visibleSnippetsCount).map((code, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-border/60 bg-black/40 shadow-md"
        >
          <div className="flex items-center gap-1 border-b border-border/60 bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
            <span className="h-2 w-2 rounded-full bg-green-500/80" />
            <span className="ml-3">Snippet {index + 1}</span>
          </div>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}
            customStyle={{ margin: 0, padding: '0.75rem 1rem', minHeight: '100%' }}
            codeTagProps={{ style: { minHeight: '100%' } }}>
            {code}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
}


