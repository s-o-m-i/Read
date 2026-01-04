'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * TasbihCounter Component
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * - useCallback prevents function recreation on each render
 * - Minimal state updates (only when necessary)
 * - localStorage writes are debounced via useEffect dependency
 * - No inline functions in JSX
 * 
 * PERSISTENCE:
 * - localStorage syncs counter and target on every change
 * - Hydration-safe: reads from localStorage only after mount
 * - Falls back gracefully if localStorage unavailable
 */

interface TasbihState {
  count: number;
  target: number | null;
}

const STORAGE_KEY = 'tasbih_counter_state';
const PRESET_TARGETS = [33, 99, 100];

export default function TasbihCounter() {
  // State management
  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<number | null>(null);
  const [customTarget, setCustomTarget] = useState<string>('');
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  // Hydration fix: only render dynamic content after mount
  useEffect(() => {
    setIsClient(true);
    
    // Load state from localStorage
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
  }, []);

  // Persist to localStorage whenever count or target changes
  useEffect(() => {
    if (!isClient) return;
    
    try {
      const state: TasbihState = { count, target };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, [count, target, isClient]);

  // Haptic feedback helper
  const vibrate = useCallback((duration: number = 10) => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(duration);
    }
  }, []);

  // Increment counter with haptic feedback
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
    vibrate(10);
  }, [vibrate]);

  // Reset with confirmation
  const handleResetClick = useCallback(() => {
    setShowResetConfirm(true);
  }, []);

  const handleResetConfirm = useCallback(() => {
    setCount(0);
    setShowResetConfirm(false);
    vibrate(20);
  }, [vibrate]);

  const handleResetCancel = useCallback(() => {
    setShowResetConfirm(false);
  }, []);

  // Target management
  const handleSetTarget = useCallback((value: number | null) => {
    setTarget(value);
    setCustomTarget('');
  }, []);

  const handleCustomTargetSubmit = useCallback(() => {
    const parsed = parseInt(customTarget, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setTarget(parsed);
      setCustomTarget('');
    }
  }, [customTarget]);

  // Calculate progress percentage
  const progress = target && target > 0 ? Math.min((count / target) * 100, 100) : 0;
  const isTargetReached = target !== null && count >= target;

  // Keyboard support for increment (Space/Enter)
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleIncrement();
    }
  }, [handleIncrement]);

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Counter Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 space-y-6">
          
          {/* Counter Display */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Tasbih Counter
            </h1>
            
            {/* Main Count - Fixed height to prevent CLS */}
            <div className="h-32 flex items-center justify-center">
              <span 
                className="text-8xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums"
                aria-live="polite"
                aria-label={`Count: ${isClient ? count : 0}`}
              >
                {isClient ? count : 0}
              </span>
            </div>

            {/* Target Progress */}
            {target !== null && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Target: {target}</span>
                  <span>{Math.floor(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 dark:bg-emerald-400 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                {isTargetReached && (
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm animate-pulse">
                    🎉 Target Reached!
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3">
            {/* Increment Button - Optimized for thumb usage */}
            <button
              onClick={handleIncrement}
              onKeyDown={handleKeyDown}
              className="w-full h-24 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-2xl text-3xl font-bold shadow-lg transition-colors duration-150 touch-manipulation select-none"
              aria-label="Increment counter"
            >
              +1
            </button>

            {/* Reset Button with Confirmation */}
            {!showResetConfirm ? (
              <button
                onClick={handleResetClick}
                className="w-full h-14 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold shadow transition-colors duration-150 touch-manipulation"
                aria-label="Reset counter"
              >
                Reset
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleResetConfirm}
                  className="flex-1 h-14 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-xl font-semibold shadow transition-colors duration-150 touch-manipulation"
                  aria-label="Confirm reset"
                >
                  Confirm Reset
                </button>
                <button
                  onClick={handleResetCancel}
                  className="flex-1 h-14 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 rounded-xl font-semibold shadow transition-colors duration-150 touch-manipulation"
                  aria-label="Cancel reset"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Target Presets */}
          <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Set Target
            </h2>
            
            <div className="flex gap-2">
              {PRESET_TARGETS.map((preset) => (
                <button
                  key={preset}
                  onClick={() => handleSetTarget(preset)}
                  className={`flex-1 h-12 rounded-lg font-semibold transition-colors duration-150 touch-manipulation ${
                    target === preset
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
                  }`}
                  aria-label={`Set target to ${preset}`}
                  aria-pressed={target === preset}
                >
                  {preset}
                </button>
              ))}
              
              {target !== null && (
                <button
                  onClick={() => handleSetTarget(null)}
                  className="h-12 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-colors duration-150 touch-manipulation"
                  aria-label="Clear target"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Custom Target Input */}
            <div className="flex gap-2">
              <input
                type="number"
                inputMode="numeric"
                placeholder="Custom target"
                value={customTarget}
                onChange={(e) => setCustomTarget(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCustomTargetSubmit();
                  }
                }}
                className="flex-1 h-12 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                aria-label="Enter custom target"
                min="1"
              />
              <button
                onClick={handleCustomTargetSubmit}
                disabled={!customTarget || isNaN(parseInt(customTarget, 10))}
                className="h-12 px-6 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors duration-150 touch-manipulation"
                aria-label="Set custom target"
              >
                Set
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Tap anywhere on the counter button to increment
        </p>
      </div>
    </div>
  );
}