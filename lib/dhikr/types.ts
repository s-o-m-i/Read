export type DhikrCategory =
  | "general"
  | "morning"
  | "evening"
  | "after-salah"
  | "before-sleep"
  | "after-waking"
  | "istighfar"
  | "salawat"
  | "quranic";

export type DhikrItem = {
  id: string;
  arabic: string;
  transliteration: string;
  translation: string;
  recommendedCount: number | null;
  categories: DhikrCategory[];
  source: string;
  /** Present only when a standalone page has enough depth for its own search intent. */
  slug?: string;
};

export type DhikrRoutineStep = {
  dhikrId: string;
  arabic: string;
  transliteration?: string;
  translation?: string;
  target: number;
  source?: string;
};

export type DhikrRoutine = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  href: string;
  steps: DhikrRoutineStep[];
  source?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type AdhkarBlock = {
  dhikrId: string;
  heading: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  countLabel: string;
  source: string;
  note?: string;
};
