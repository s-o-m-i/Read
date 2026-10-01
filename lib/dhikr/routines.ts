import type { DhikrRoutine } from "./types";
import { getDhikr } from "./catalog";

function step(dhikrId: string, target: number) {
  const dhikr = getDhikr(dhikrId);
  if (!dhikr) {
    throw new Error(`Unknown dhikr: ${dhikrId}`);
  }
  return {
    dhikrId,
    arabic: dhikr.arabic,
    transliteration: dhikr.transliteration,
    translation: dhikr.translation,
    target,
    source: dhikr.source,
  };
}

export const ROUTINES: DhikrRoutine[] = [
  {
    id: "after-salah",
    slug: "after-salah",
    name: "Dhikr After Salah",
    description: "The post-prayer remembrance: forgiveness three times, then SubhanAllah, Alhamdulillah, and Allahu Akbar.",
    category: "After Salah",
    href: "/dhikr-after-salah",
    source: "Sahih Muslim",
    steps: [
      step("astaghfirullah", 3),
      step("subhanallah", 33),
      step("alhamdulillah", 33),
      step("allahu-akbar", 34),
    ],
  },
  {
    id: "morning-adhkar",
    slug: "morning-adhkar",
    name: "Morning Adhkar",
    description: "A morning set drawn from the reported adhkar: Ayat al-Kursi, the three short surahs, the master istighfar, and a light tasbih.",
    category: "Morning",
    href: "/morning-adhkar",
    source: "Hisn al-Muslim, from Bukhari, Muslim, Abu Dawud and Tirmidhi",
    steps: [
      step("ayat-al-kursi", 1),
      step("al-ikhlas", 3),
      step("al-falaq", 3),
      step("an-nas", 3),
      step("sayyid-al-istighfar", 1),
      step("allahumma-bika-asbahna", 1),
      step("subhanallahi-wa-bihamdihi", 100),
    ],
  },
  {
    id: "evening-adhkar",
    slug: "evening-adhkar",
    name: "Evening Adhkar",
    description: "Evening wording and the protection sought at night, including the evening form of the morning dua and refuge in Allah's words.",
    category: "Evening",
    href: "/evening-adhkar",
    source: "Hisn al-Muslim, from Muslim, Abu Dawud and Tirmidhi",
    steps: [
      step("allahumma-bika-amsayna", 1),
      step("ayat-al-kursi", 1),
      step("al-ikhlas", 3),
      step("al-falaq", 3),
      step("an-nas", 3),
      step("audhu-bikalimatillah", 3),
    ],
  },
  {
    id: "before-sleep",
    slug: "before-sleep",
    name: "Before Sleep",
    description: "What is reported when lying down: Ayat al-Kursi, the closing of Al-Baqarah, the bedtime tasbih, and the sleep dua.",
    category: "Before Sleep",
    href: "/dhikr-before-sleep",
    source: "Sahih al-Bukhari",
    steps: [
      step("ayat-al-kursi", 1),
      step("baqarah-closing", 1),
      step("subhanallah", 33),
      step("alhamdulillah", 33),
      step("allahu-akbar", 34),
      step("sleep-dua", 1),
    ],
  },
  {
    id: "after-waking",
    slug: "after-waking",
    name: "After Waking",
    description: "The praise said on waking, then the morning entrance dua before you begin the wider morning adhkar.",
    category: "After Waking",
    href: "/dhikr-after-waking",
    source: "Sahih al-Bukhari; Abu Dawud",
    steps: [step("waking-dua", 1), step("allahumma-bika-asbahna", 1)],
  },
  {
    id: "istighfar",
    slug: "istighfar",
    name: "Istighfar",
    description: "A dedicated forgiveness routine: one hundred short istighfar, then the master supplication for forgiveness.",
    category: "Istighfar",
    href: "/istighfar-counter",
    source: "Sahih al-Bukhari",
    steps: [step("astaghfirullah", 100), step("sayyid-al-istighfar", 1)],
  },
  {
    id: "salawat",
    slug: "salawat",
    name: "Salawat",
    description: "A dedicated round of blessings upon the Prophet.",
    category: "Salawat",
    href: "/durood-counter",
    source: "Quran 33:56",
    steps: [step("salawat", 100)],
  },
];

export function getRoutine(id: string) {
  return ROUTINES.find((routine) => routine.id === id);
}
