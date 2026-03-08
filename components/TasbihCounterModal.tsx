'use client';

import { useEffect } from 'react';
import TasbihCounterCompact from './TasbihCounterCompact';

interface TasbihCounterModalProps {
  isOpen: boolean;
  onClose: () => void;
  nameArabic: string;
  nameLatin: string;
  meaning: string;
}

export default function TasbihCounterModal({
  isOpen,
  onClose,
  nameArabic,
  nameLatin,
  meaning,
}: TasbihCounterModalProps) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-md max-h-[95vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 backdrop-blur-sm transition-all hover:scale-110"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-gray-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100" dir="rtl">
              {nameArabic}
            </h2>
            <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
              {nameLatin}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {meaning}
            </p>
          </div>
        </div>

        {/* Tasbih Counter */}
        <div className="p-6">
          <TasbihCounterCompact
            counterName={`asmaul-husna-${nameLatin.toLowerCase()}`}
            title={`Ya ${nameLatin}`}
            arabicText={nameArabic}
          />
        </div>
      </div>
    </div>
  );
}
