# Programdle

A daily guessing game in the style of Wordle and Loldle, where the answer is a **programming language**.
**[Play it live →](https://programdle.vercel.app)**

## How to play

1. A new language is picked every day. You see a code snippet written in it.
2. Guess a language from the list. Each guess is compared on **year, paradigm, typing and compiled vs. interpreted**: green means a match, red means a miss, and the year shows whether the answer is earlier or later.
3. Every wrong guess unlocks another code snippet (up to three).
4. Share your result as an emoji grid and come back tomorrow, there is a countdown to the next puzzle.

## Features

- Daily puzzle chosen deterministically from the date, no database or accounts needed
- 37 languages, three progressive code hints per puzzle
- Guess history table with higher/lower hints for the release year
- Stats with streaks and guess distribution, saved locally in the browser
- Copy-to-clipboard result sharing
- Keyboard-friendly search input, dark UI

## Tech stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, shadcn/ui (Radix, cmdk), Zustand with `persist` for local state, react-syntax-highlighter.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Project structure

```text
app/
├── api/            # /api/daily and /api/languages route handlers
├── data/           # language dataset and types
├── store/          # Zustand stores (game state, stats)
├── utils/daily.ts  # date-based daily language selection
└── *.tsx           # GameBoard, GuessInput, GuessHistoryTable, CodeHints, StatsModal
```
