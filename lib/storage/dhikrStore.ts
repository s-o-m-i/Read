import type { DhikrItem } from "../dhikr/types";

export const STORAGE_KEY = "tasbihhub.store";
export const STORE_VERSION = 1;

export type CounterMode = "free" | "sunnah" | "routine";

export type CounterBucket = {
  count: number;
  target: number | null;
  dhikrId: string;
  mode?: CounterMode;
  cycleIndex?: number;
  routineId?: string;
};

export type CompletedSession = {
  id: string;
  routineId: string;
  routineName: string;
  totalCount: number;
  stepsCompleted: number;
  stepsTotal: number;
  durationMs: number;
  completedAt: string;
};

export type ActiveRoutine = {
  routineId: string;
  stepIndex: number;
  stepCounts: number[];
  startedAt: number;
};

export type DhikrSettings = {
  sound: boolean;
  vibration: boolean;
  showTransliteration: boolean;
  showTranslation: boolean;
};

export type DhikrStore = {
  version: number;
  settings: DhikrSettings;
  counters: Record<string, CounterBucket>;
  customDhikr: DhikrItem[];
  sessions: CompletedSession[];
  activeRoutines: Record<string, ActiveRoutine>;
  stats: {
    lifetime: number;
    byDay: Record<string, number>;
    streak: number;
    lastActiveDate: string | null;
  };
};

export const EMPTY_STORE: DhikrStore = {
  version: STORE_VERSION,
  settings: {
    sound: true,
    vibration: true,
    showTransliteration: true,
    showTranslation: false,
  },
  counters: {},
  customDhikr: [],
  sessions: [],
  activeRoutines: {},
  stats: {
    lifetime: 0,
    byDay: {},
    streak: 0,
    lastActiveDate: null,
  },
};

const LEGACY_KEYS = [
  "tasbih_counter_default",
  "tasbih_counter_tasbih",
  "tasbih_counter_istighfar",
  "tasbih_counter_dhikr",
  "tasbih_counter_durood",
  "tasbih_counter_zikr",
  "tasbih_counter_homepage-tasbih",
];

const LEGACY_DHIKR: Record<string, string> = {
  tasbih_counter_istighfar: "astaghfirullah",
  tasbih_counter_durood: "salawat",
  tasbih_counter_dhikr: "subhanallah",
  tasbih_counter_zikr: "subhanallah",
  tasbih_counter_tasbih: "subhanallah",
  tasbih_counter_default: "subhanallah",
  "tasbih_counter_homepage-tasbih": "subhanallah",
};

export function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function yesterdayKey() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return dateKey(date);
}

function freshStore(): DhikrStore {
  return structuredClone(EMPTY_STORE);
}

function readLegacy(): Pick<DhikrStore, "counters" | "stats"> | null {
  if (typeof window === "undefined") return null;
  const counters: Record<string, CounterBucket> = {};
  let found = false;
  for (const key of LEGACY_KEYS) {
    const raw = localStorage.getItem(key);
    if (!raw) continue;
    try {
      const parsed = JSON.parse(raw) as { count?: number; target?: number | null };
      const bucket = key.replace("tasbih_counter_", "");
      counters[bucket === "homepage-tasbih" ? "home" : bucket] = {
        count: parsed.count ?? 0,
        target: parsed.target ?? 33,
        dhikrId: LEGACY_DHIKR[key] ?? "subhanallah",
      };
      found = true;
    } catch {
      /* ignore broken legacy rows */
    }
  }
  if (!found) return null;
  const lifetime = Object.values(counters).reduce((sum, item) => sum + item.count, 0);
  return {
    counters,
    stats: {
      lifetime,
      byDay: lifetime ? { [dateKey()]: lifetime } : {},
      streak: lifetime ? 1 : 0,
      lastActiveDate: lifetime ? dateKey() : null,
    },
  };
}

function normalize(input: Partial<DhikrStore> | null): DhikrStore {
  const base = freshStore();
  if (!input || input.version !== STORE_VERSION) return base;
  return {
    ...base,
    ...input,
    version: STORE_VERSION,
    settings: { ...base.settings, ...input.settings },
    counters: input.counters ?? {},
    customDhikr: Array.isArray(input.customDhikr) ? input.customDhikr.slice(0, 40) : [],
    sessions: Array.isArray(input.sessions) ? input.sessions.slice(0, 40) : [],
    activeRoutines: input.activeRoutines ?? {},
    stats: {
      ...base.stats,
      ...input.stats,
      byDay: input.stats?.byDay ?? {},
    },
  };
}

let memory: DhikrStore | null = null;
const listeners = new Set<() => void>();

function persist(next: DhikrStore) {
  memory = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* private mode or quota */
  }
  listeners.forEach((listener) => listener());
}

export function loadStore(): DhikrStore {
  if (memory) return memory;
  if (typeof window === "undefined") return EMPTY_STORE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      memory = normalize(JSON.parse(raw) as DhikrStore);
      return memory;
    }
  } catch {
    /* fall through to legacy */
  }
  const legacy = readLegacy();
  const next = freshStore();
  if (legacy) {
    next.counters = legacy.counters;
    next.stats = legacy.stats;
  }
  memory = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
  return memory;
}

export function getStore() {
  return typeof window === "undefined" ? EMPTY_STORE : loadStore();
}

export function getServerStore() {
  return EMPTY_STORE;
}

export function subscribeStore(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function updateStore(mutator: (draft: DhikrStore) => void) {
  const next = structuredClone(loadStore());
  mutator(next);
  next.version = STORE_VERSION;
  persist(next);
  return next;
}

export function todayTotal(store: DhikrStore = getStore()) {
  return store.stats.byDay[dateKey()] ?? 0;
}

export function routinesCompletedToday(store: DhikrStore = getStore()) {
  const today = dateKey();
  return store.sessions.filter((session) => dateKey(new Date(session.completedAt)) === today).length;
}

export function touchStats(draft: DhikrStore, delta: number) {
  if (!delta) return;
  const today = dateKey();
  const current = draft.stats.byDay[today] ?? 0;
  draft.stats.byDay[today] = Math.max(0, current + delta);
  draft.stats.lifetime = Math.max(0, draft.stats.lifetime + delta);
  if (delta > 0 && draft.stats.lastActiveDate !== today) {
    draft.stats.streak = draft.stats.lastActiveDate === yesterdayKey() ? draft.stats.streak + 1 : 1;
    draft.stats.lastActiveDate = today;
  }
}

export function recordTap(delta: number) {
  updateStore((draft) => touchStats(draft, delta));
}

export function ensureCounter(draft: DhikrStore, key: string, dhikrId: string, target: number | null = 33) {
  if (!draft.counters[key]) {
    draft.counters[key] = { count: 0, target, dhikrId };
  }
  return draft.counters[key];
}
