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
 * - Each counter type has its own storage key for independent state
 */

interface TasbihState {
  count: number;
  target: number | null;
}

interface TasbihCounterProps {
  counterName?: string;
  title?: string;
  arabicText?: string;
}

const PRESET_TARGETS = [33, 99, 100];

export default function TasbihCounter({ 
  counterName = 'default',
  title = 'Tasbih Counter',
  arabicText
}: TasbihCounterProps) {
  const STORAGE_KEY = `tasbih_counter_${counterName}`;
  
  // State management
  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<number | null>(null);
  const [customTarget, setCustomTarget] = useState<string>('');
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isBlinking, setIsBlinking] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [vibrationEnabled, setVibrationEnabled] = useState<boolean>(true);
  const [addToCount, setAddToCount] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>('');

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
    if (vibrationEnabled && typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(duration);
    }
  }, [vibrationEnabled]);

  

  // Increment counter with haptic feedback
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
    vibrate(10);
   
    
    // Trigger blink animation
    if (arabicText) {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 300);
    }
  }, [vibrate,  arabicText]);

  // Decrement counter
  const handleDecrement = useCallback(() => {
    setCount(prev => Math.max(0, prev - 1));
    vibrate(10);
   
  }, [vibrate]);

  // Add to count
  const handleAddToCount = useCallback(() => {
    const parsed = parseInt(addToCount, 10);
    if (!isNaN(parsed)) {
      setCount(prev => Math.max(0, prev + parsed));
      setAddToCount('');
      vibrate(10);
    }
  }, [addToCount, vibrate]);

  // Copy count to clipboard
  const handleCopyCount = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(count.toString());
      alert('Count copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  }, [count]);

  // Share functionality
  const handleShare = useCallback(async () => {
    const shareData = {
      title: 'Tasbih Hub',
      text: `I've completed ${count} zikr on Tasbih Hub!`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy URL
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Share failed:', error);
    }
  }, [count]);

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  // Handle direct edit
  const handleEditClick = useCallback(() => {
    setEditValue(count.toString());
    setIsEditing(true);
  }, [count]);

  const handleEditSave = useCallback(() => {
    const parsed = parseInt(editValue, 10);
    if (!isNaN(parsed) && parsed >= 0) {
      setCount(parsed);
      setIsEditing(false);
      setEditValue('');
    }
  }, [editValue]);

  const handleEditKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEditSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue('');
    }
  }, [handleEditSave]);

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

  // Fullscreen mode
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black flex flex-col items-center justify-center p-4 z-50">
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6">
          <button
            onClick={toggleFullscreen}
            className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-colors text-2xl"
            aria-label="Exit fullscreen"
          >
            ⛶
          </button>
          <button
            onClick={handleResetClick}
            className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors text-2xl"
            aria-label="Reset counter"
          >
            ↻
          </button>
        </div>
        
        <div className="text-center space-y-12">
          {arabicText && (
            <p 
              className={`text-5xl md:text-6xl font-bold text-emerald-400 transition-all duration-300 ${
                isBlinking ? 'scale-110 opacity-100' : 'scale-100 opacity-80'
              }`}
              dir="rtl"
              lang="ar"
            >
              {arabicText}
            </p>
          )}
          
          {isEditing ? (
            <input
              type="number"
              inputMode="numeric"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleEditKeyDown}
              autoFocus
              className="text-9xl md:text-[14rem] font-bold text-white tabular-nums bg-transparent border-b-4 border-emerald-400 text-center focus:outline-none w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              style={{ maxWidth: '90%' }}
            />
          ) : (
            <div className="text-9xl md:text-[14rem] font-bold text-white tabular-nums">
              {isClient ? count : 0}
            </div>
          )}
          
          <div className="flex gap-6 justify-center">
            <button
              onClick={handleDecrement}
              className="w-28 h-28 bg-gray-700 hover:bg-gray-600 text-white rounded-full text-6xl font-bold shadow-2xl transition-all duration-150 hover:scale-105 active:scale-95 flex items-center justify-center"
              aria-label="Decrement"
            >
              −
            </button>
            <button
              onClick={handleIncrement}
              className="w-28 h-28 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-6xl font-bold shadow-2xl transition-all duration-150 hover:scale-105 active:scale-95 flex items-center justify-center"
              aria-label="Increment"
            >
              +
            </button>
          </div>
        </div>

        {/* Edit/Save Button Bottom Right */}
        <button
          onClick={isEditing ? handleEditSave : handleEditClick}
          className="absolute bottom-6 right-6 w-12 h-12 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-colors text-2xl"
          aria-label={isEditing ? 'Save count' : 'Edit count'}
        >
          {isEditing ? '✓' : '✎'}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Counter Card */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-8 overflow-hidden">
          
          {/* Corner Icons */}
          <div className="absolute top-4 left-4">
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-xl"
              aria-label="Fullscreen mode"
              title="Fullscreen"
            >
              ⛶
            </button>
          </div>
          
          <div className="absolute top-4 right-4">
            <button
              onClick={handleResetClick}
              className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors text-xl"
              aria-label="Reset counter"
              title="Reset"
            >
              ↻
            </button>
          </div>


          
          {/* Counter Display */}
          <div className="text-center space-y-6 pt-8">
            <h1 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
              {title}
            </h1>
            
            {/* Arabic Text Display */}
            {arabicText && (
              <div className="py-2">
                <p 
                  className={`text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 transition-all duration-300 ${
                    isBlinking ? 'scale-110 opacity-100' : 'scale-100 opacity-90'
                  }`}
                  style={{ fontFamily: 'Arial, sans-serif' }}
                  dir="rtl"
                  lang="ar"
                >
                  {arabicText}
                </p>
              </div>
            )}
            
            {/* Main Count */}
            <div className="py-6 relative">
              {isEditing ? (
                <input
                  type="number"
                  inputMode="numeric"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={handleEditKeyDown}
                  autoFocus
                  className="text-8xl md:text-9xl font-bold text-gray-800 dark:text-white tabular-nums bg-transparent border-b-4 border-emerald-500 dark:border-emerald-400 text-center focus:outline-none w-full max-w-full px-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  style={{ maxWidth: '100%' }}
                />
              ) : (
                <span 
                  className="text-8xl md:text-9xl font-bold text-gray-800 dark:text-white tabular-nums"
                  aria-live="polite"
                  aria-label={`Count: ${isClient ? count : 0}`}
                >
                  {isClient ? count : 0}
                </span>
              )}
                        <div className="absolute bottom-4 right-4">
            <button
              onClick={isEditing ? handleEditSave : handleEditClick}
              className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-xl"
              aria-label={isEditing ? 'Save count' : 'Edit count directly'}
              title={isEditing ? 'Save' : 'Edit'}
            >
              {isEditing ? '✓' : '✎'}
            </button>
          </div>
            </div>

            {/* Target Progress */}
            {target !== null && (
              <div className="space-y-2 px-4">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
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
          <div className="space-y-4 mt-8">
            {/* Increment/Decrement Buttons */}
            <div className="flex gap-3 justify-between">
              <button
                onClick={handleDecrement}
                className="w-30 h-30 bg-gray-300 hover:bg-gray-400 active:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-full text-4xl font-bold shadow-lg transition-all duration-150 hover:scale-105 active:scale-95 flex items-center justify-center"
                aria-label="Decrement counter"
              >
                −
              </button>
              <button
                onClick={handleIncrement}
                onKeyDown={handleKeyDown}
                className="w-30 h-30 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-full text-4xl font-bold shadow-lg transition-all duration-150 hover:scale-105 active:scale-95 flex items-center justify-center"
                aria-label="Increment counter"
              >
                +
              </button>
            </div>

            {/* Compact Action Buttons */}
            {/* <div className="grid grid-cols-4 gap-2">
              <button
                onClick={handleCopyCount}
                className="h-10 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg shadow text-sm transition-colors"
                aria-label="Copy count"
                title="Copy"
              >
                📋
              </button>
              <button
                onClick={handleShare}
                className="h-10 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg shadow text-sm transition-colors"
                aria-label="Share"
                title="Share"
              >
                📤
              </button>
              <button
                onClick={() => setSoundEnabled(prev => !prev)}
                className={`h-10 rounded-lg shadow text-sm transition-colors ${
                  soundEnabled 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
                aria-label="Toggle sound"
                title={soundEnabled ? 'Sound On' : 'Sound Off'}
              >
                {soundEnabled ? '🔊' : '🔇'}
              </button>
              <button
                onClick={() => setVibrationEnabled(prev => !prev)}
                className={`h-10 rounded-lg shadow text-sm transition-colors ${
                  vibrationEnabled 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
                aria-label="Toggle vibration"
                title={vibrationEnabled ? 'Vibration On' : 'Vibration Off'}
              >
                📳
              </button>
            </div> */}
          </div>

          {/* Target Presets - Collapsible */}
          <details className="mt-6">
            <summary className="cursor-pointer text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3 hover:text-emerald-600 dark:hover:text-emerald-400">
              Set Target
            </summary>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                {PRESET_TARGETS.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => handleSetTarget(preset)}
                    className={`flex-1 h-10 rounded-lg font-semibold transition-all duration-150 text-sm ${
                      target === preset
                        ? 'bg-emerald-500 text-white shadow-md scale-105'
                        : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
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
                    className="h-10 px-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors text-sm"
                    aria-label="Clear target"
                  >
                    ✕
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
                  className="flex-1 h-10 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  aria-label="Enter custom target"
                  min="1"
                />
                <button
                  onClick={handleCustomTargetSubmit}
                  disabled={!customTarget || isNaN(parseInt(customTarget, 10))}
                  className="h-10 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors text-sm"
                  aria-label="Set custom target"
                >
                  Set
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Reset Counter?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This will reset your count to 0.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleResetCancel}
                className="flex-1 h-12 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleResetConfirm}
                className="flex-1 h-12 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}