'use client';

import { X, BarChart2 } from 'lucide-react';
import { useStatsStore } from './store/statsStore';

interface StatsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function StatsModal({ isOpen, onClose }: StatsModalProps) {
    const stats = useStatsStore((state) => state);

    if (!isOpen) return null;

    const maxDistribution = Math.max(...Object.values(stats.guessDistribution), 1);
    const winPercent = stats.played > 0 ? Math.round((stats.won / stats.played) * 100) : 0;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 px-4 pt-24 sm:pt-32 backdrop-blur-sm">
            <div className="relative w-full max-w-sm rounded-2xl bg-card p-6 shadow-2xl ring-1 ring-border text-foreground animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="mb-6 flex flex-col items-center gap-2">
                    <BarChart2 className="text-primary h-8 w-8" />
                    <h2 className="text-xl font-semibold tracking-tight">Statistics</h2>
                </div>

                <div className="mb-8 flex justify-between px-2 text-center">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold">{stats.played}</span>
                        <span className="text-[10px] mt-1 uppercase tracking-wider text-muted-foreground leading-tight">Played</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold">{winPercent}</span>
                        <span className="text-[10px] mt-1 uppercase tracking-wider text-muted-foreground leading-tight">Win %</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold">{stats.currentStreak}</span>
                        <span className="text-[10px] mt-1 uppercase tracking-wider text-muted-foreground leading-tight">Current<br />Streak</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold">{stats.maxStreak}</span>
                        <span className="text-[10px] mt-1 uppercase tracking-wider text-muted-foreground leading-tight">Max<br />Streak</span>
                    </div>
                </div>

                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center">
                    Guess Distribution
                </h3>

                <div className="mt-4 flex h-36 items-end justify-center space-x-2">
                    {Object.entries(stats.guessDistribution).length === 0 && (
                        <div className="text-center text-sm text-muted-foreground w-full py-4 h-full flex items-center justify-center">No wins yet</div>
                    )}
                    {Object.entries(stats.guessDistribution).length > 0 &&
                        Array.from(
                            { length: Math.max(5, Math.max(...Object.keys(stats.guessDistribution).map(Number))) },
                            (_, i) => i + 1
                        ).map((guessCount) => {
                            const frequency = stats.guessDistribution[guessCount] || 0;
                            const height = Math.max((frequency / maxDistribution) * 100, 5);
                            return (
                                <div key={guessCount} className="flex flex-col items-center flex-1 h-full justify-end">
                                    <div className="text-xs mb-1 font-medium h-4">{frequency > 0 ? frequency : ''}</div>
                                    <div
                                        className={`w-full max-w-[2.5rem] rounded-t-sm transition-all duration-500 ease-out ${frequency > 0 ? 'bg-primary shadow-sm' : 'bg-muted/50'}`}
                                        style={{ height: `${frequency > 0 ? height : 5}%` }}
                                    ></div>
                                    <div className="mt-2 text-xs font-medium text-muted-foreground">{guessCount}</div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
