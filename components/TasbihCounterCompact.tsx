'use client';

import { useState, useEffect, useCallback } from 'react';

interface TasbihCounterCompactProps {
  counterName: string;
  title: string;
  arabicText?: string;
}

interface TasbihState {
  count: number;
  target: number | null;
}

const PRESET_TARGETS = [33, 99, 100];

export default function TasbihCounterCompact({
  counterName,
  title,
  arabicText,
}: TasbihCounterCompactProps) {
  const STORAGE_KEY = `tasbih_counter_${counterName}`;

  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<number | null>(null);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  // Load from localStorage
  useEffect(() => {
    setIsClient(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: TasbihState = JSON.parse(stored);
        setCount(parsed.count || 0);
        setTarget(parsed.target || null);
      }
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
    }
  }, [STORAGE_KEY]);

  // Save to localStorage
  useEffect(() => {
    if (!isClient) return;
    try {
      const state: TasbihState = { count, target };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, [count, target, isClient, STORAGE_KEY]);

  // Haptic feedback
  const vibrate = useCallback((duration: number = 10) => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(duration);
    }
  }, []);

  // Increment
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
    vibrate(10);
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 200);
  }, [vibrate]);

  // Decrement
  const handleDecrement = useCallback(() => {
    setCount((prev) => Math.max(0, prev - 1));
    vibrate(10);
  }, [vibrate]);

  // Reset
  const handleReset = useCallback(() => {
    setCount(0);
    vibrate(20);
  }, [vibrate]);

  // Set target
  const handleSetTarget = useCallback((value: number | null) => {
    setTarget(value);
  }, []);

  // Calculate progress
  const progress = target && target > 0 ? Math.min((count / target) * 100, 100) : 0;
  const isTargetReached = target !== null && count >= target;

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Main Counter Section */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 shadow-lg">
        
        {/* Title & Reset */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300">
            {title}
          </h3>
          <button
            onClick={handleReset}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Reset counter"
            title="Reset"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        {/* Arabic Text */}
        {/* Arabic Text - Optional */}
        {arabicText && (
          <div className="text-center mb-6">
            <p
              className={`text-4xl font-bold text-emerald-600 dark:text-emerald-400 transition-all duration-200 ${
                isBlinking ? 'scale-105' : 'scale-100'
              }`}
              dir="rtl"
              lang="ar"
            >
              {arabicText}
            </p>
          </div>
        )}

        {/* Count Display */}
        <div className="text-center mb-8">
          <div className="text-7xl font-bold text-gray-800 dark:text-white tabular-nums leading-none">
            {isClient ? count : 0}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={handleDecrement}
            className="w-20 h-20 bg-slate-300 hover:bg-slate-400 active:bg-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600 dark:active:bg-slate-500 text-gray-800 dark:text-white rounded-full text-3xl font-bold shadow-md transition-all duration-150 hover:scale-105 active:scale-95 flex items-center justify-center"
            aria-label="Decrement"
          >
            −
          </button>
          <button
            onClick={handleIncrement}
            className="w-20 h-20 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-full text-3xl font-bold shadow-md transition-all duration-150 hover:scale-105 active:scale-95 flex items-center justify-center"
            aria-label="Increment"
          >
            +
          </button>
        </div>

        {/* Target Progress */}
        {target !== null && (
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>Target: {target}</span>
              <span>{Math.floor(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            {isTargetReached && (
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm text-center animate-pulse mt-2">
                🎉 Target Reached!
              </p>
            )}
          </div>
        )}

        {/* Target Presets */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
            Set Target
          </p>
          <div className="flex gap-2">
            {PRESET_TARGETS.map((preset) => (
              <button
                key={preset}
                onClick={() => handleSetTarget(preset)}
                className={`flex-1 h-10 rounded-lg font-semibold transition-all duration-150 text-sm ${
                  target === preset
                    ? 'bg-emerald-500 text-white shadow-md scale-105'
                    : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 shadow-sm'
                }`}
                aria-label={`Set target to ${preset}`}
              >
                {preset}
              </button>
            ))}
            {target !== null && (
              <button
                onClick={() => handleSetTarget(null)}
                className="h-10 w-10 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center shadow-sm"
                aria-label="Clear target"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
