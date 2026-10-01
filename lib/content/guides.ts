export type Guide = {
  slug: string;
  title: string;
  description: string;
  paragraphs: string[];
  links: { href: string; label: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "daily-dhikr-habit",
    title: "How to Keep a Daily Dhikr Habit",
    description: "A small, finishable plan for people who want remembrance to survive a crowded day.",
    paragraphs: [
      "A dhikr habit fails when the target is a feeling rather than a finished set. Choose one moment that already exists: the end of one obligatory prayer, or the first quiet minute after you wake.",
      "Start with the after-salah tasbih, because the prayer has already stopped you. Three istighfar, then 33, 33, and 34. When that is easy for a week, add the morning entrance dua and Ayat al-Kursi. Leave the hundred-count phrases until the short set is stable.",
      "Use a counter only to protect the number. If you notice you are tapping without saying the words, put the phone down and finish the set on your fingers. The record on Tasbih Hub stays on the device either way.",
      "Missed days do not need a public streak repair. The local streak on the homepage is a private reminder, not a score other people can see. Begin again at the next prayer.",
    ],
    links: [
      { href: "/dhikr-after-salah", label: "Dhikr after salah" },
      { href: "/morning-adhkar", label: "Morning adhkar" },
      { href: "/evening-adhkar", label: "Evening adhkar" },
      { href: "/tasbih-counter", label: "Tasbih counter" },
      { href: "/dhikr", label: "Dhikr library" },
    ],
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}
