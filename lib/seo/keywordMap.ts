import type { Metadata } from "next";
import { SITE_URL } from "@/lib/i18n/locales";

export type KeywordEntry = {
  path: string;
  primary: string;
  secondary: string[];
  intent: string;
  title: string;
  description: string;
  h1: string;
  h2: string[];
};

export const KEYWORD_MAP: KeywordEntry[] = [
  {
    path: "/",
    primary: "tasbih",
    secondary: [
      "tasbeeh",
      "tasbih counter",
      "online tasbih",
      "tasbih online",
      "digital tasbih counter",
      "dhikr counter",
      "misbaha",
      "Islamic prayer beads",
      "Tasbih meaning",
      "Tasbih after Salah",
    ],
    intent: "Learn the meaning of tasbih and count dhikr with a free online counter",
    title: "Tasbih – Meaning, Islamic Guide & Online Tasbih Counter",
    description:
      "Explore Tasbih, its meaning and significance in Islam. Use our free online Tasbih counter for Dhikr, discover Islamic prayer beads and learn authentic daily adhkar.",
    h1: "Tasbih: Meaning, Islamic Significance and Free Online Counter",
    h2: [
      "Free Online Tasbih Counter",
      "What Is Tasbih?",
      "The Islamic Significance of Tasbih",
      "History of Tasbih and Islamic Prayer Beads",
      "Different Types of Tasbih",
      "Tasbih After Salah",
      "Tasbih, Tasbeeh, Misbaha and Subha: What Is the Difference?",
      "How to Use an Online Tasbih Counter",
      "Explore More About Tasbih and Dhikr",
      "Frequently Asked Questions About Tasbih",
      "Make Dhikr Part of Your Daily Life",
    ],
  },
  {
    path: "/istighfar-counter",
    primary: "istighfar counter",
    secondary: ["astaghfirullah counter", "istighfar online", "count istighfar"],
    intent: "Count istighfar",
    title: "Istighfar Counter – Count Astaghfirullah Online | Tasbih Hub",
    description:
      "Count Astaghfirullah with a free istighfar counter. Arabic, meaning and a guided istighfar routine. Your count stays on this device.",
    h1: "Istighfar Counter",
    h2: ["What is istighfar?", "A simple istighfar routine"],
  },
  {
    path: "/durood-counter",
    primary: "durood counter",
    secondary: ["salawat counter", "durood sharif counter", "count durood"],
    intent: "Count durood and salawat",
    title: "Durood Counter – Count Salawat Online | Tasbih Hub",
    description:
      "Count durood and salawat with a free online counter. Recite blessings upon the Prophet with a clear target and private local progress.",
    h1: "Durood Counter",
    h2: ["What is durood?", "A salawat routine"],
  },
  {
    path: "/morning-adhkar",
    primary: "morning adhkar",
    secondary: ["morning dhikr", "adhkar al sabah", "morning duas"],
    intent: "Learn and recite morning adhkar",
    title: "Morning Adhkar – Complete Morning Dhikr & Duas | Tasbih Hub",
    description:
      "Explore authentic morning adhkar with Arabic, transliteration, meanings, repetition counts and an interactive routine to help you complete your morning dhikr.",
    h1: "Morning Adhkar: Complete Morning Dhikr & Duas",
    h2: ["What are morning adhkar?", "When to recite them", "Complete morning adhkar"],
  },
  {
    path: "/evening-adhkar",
    primary: "evening adhkar",
    secondary: ["evening dhikr", "adhkar al masa", "evening duas"],
    intent: "Learn and recite evening adhkar",
    title: "Evening Adhkar – Evening Dhikr & Duas | Tasbih Hub",
    description:
      "Read evening adhkar with Arabic, transliteration and meaning, then follow a guided routine for the remembrances reported for the evening.",
    h1: "Evening Adhkar: Evening Dhikr & Protection",
    h2: ["What changes in the evening?", "Evening adhkar to recite"],
  },
  {
    path: "/dhikr-after-salah",
    primary: "dhikr after salah",
    secondary: ["tasbih after prayer", "dhikr after namaz", "after salah adhkar"],
    intent: "Learn and complete post-prayer dhikr",
    title: "Dhikr After Salah – Post-Prayer Tasbih Guide | Tasbih Hub",
    description:
      "Learn what to recite after salah, with Arabic, transliteration, counts and sources, then start a guided after-prayer dhikr routine.",
    h1: "Dhikr After Salah",
    h2: ["What to recite after the prayer", "The 33-33-34 tasbih"],
  },
  {
    path: "/dhikr-before-sleep",
    primary: "dhikr before sleep",
    secondary: ["bedtime adhkar", "night dhikr", "dua before sleeping"],
    intent: "Learn bedtime remembrance",
    title: "Dhikr Before Sleep – Bedtime Adhkar | Tasbih Hub",
    description:
      "Bedtime adhkar with Arabic, transliteration, meanings and a short routine for the remembrances taught for the end of the night.",
    h1: "Dhikr Before Sleep",
    h2: ["What to recite before sleeping", "A bedtime routine"],
  },
  {
    path: "/dhikr-after-waking",
    primary: "dhikr after waking",
    secondary: ["dua when waking up", "morning dhikr after sleep", "waking adhkar"],
    intent: "Learn the remembrance said upon waking",
    title: "Dhikr After Waking – Dua When You Wake | Tasbih Hub",
    description:
      "The remembrance to say when you wake, with Arabic and meaning, plus a short routine that leads into the morning adhkar.",
    h1: "Dhikr After Waking",
    h2: ["What to say when you wake", "Then begin morning adhkar"],
  },
  {
    path: "/dhikr",
    primary: "dhikr",
    secondary: ["dhikr list", "islamic remembrance", "adhkar list"],
    intent: "Browse a library of dhikr",
    title: "Dhikr Library – Arabic, Meaning & Counts | Tasbih Hub",
    description:
      "Browse dhikr for morning, evening, after salah, sleep and istighfar. Each entry includes Arabic, transliteration, meaning and a way to count it.",
    h1: "Dhikr Library",
    h2: ["Search dhikr", "Categories"],
  },
  {
    path: "/adhkar",
    primary: "adhkar",
    secondary: ["daily adhkar", "morning and evening adhkar", "adhkar list"],
    intent: "Find daily adhkar collections",
    title: "Adhkar – Morning, Evening & Daily Remembrance | Tasbih Hub",
    description:
      "A home for daily adhkar: morning, evening, after salah, before sleep and after waking, each with a guided routine.",
    h1: "Daily Adhkar",
    h2: ["Morning and evening", "Around salah and sleep"],
  },
  {
    path: "/asmaul-husna",
    primary: "99 names of Allah",
    secondary: ["asmaul husna", "names of Allah", "99 names with meaning"],
    intent: "Learn the 99 Names",
    title: "99 Names of Allah (Asmaul Husna) with Meanings | Tasbih Hub",
    description:
      "Read the 99 Names of Allah in Arabic with transliteration and English meaning. Search the list and open any name for a fuller explanation.",
    h1: "Asmaul Husna – The 99 Beautiful Names of Allah",
    h2: ["What is Asmaul Husna?", "Complete list"],
  },
  {
    path: "/id/tasbih-counter",
    primary: "tasbih digital online",
    secondary: ["counter dzikir", "tasbih online gratis", "dzikir counter"],
    intent: "Indonesian users looking for a free online tasbih",
    title: "Tasbih Digital Online Gratis – Counter Dzikir | Tasbih Hub",
    description:
      "Tasbih digital gratis di browser. Hitung Subhanallah, Alhamdulillah, Allahu Akbar dan dzikir lain tanpa aplikasi dan tanpa akun.",
    h1: "Tasbih Digital Online Gratis",
    h2: ["Cara memakai counter", "Dzikir yang bisa dihitung"],
  },
  {
    path: "/id/dzikir-pagi",
    primary: "dzikir pagi",
    secondary: ["bacaan dzikir pagi", "dzikir pagi dan petang", "doa pagi"],
    intent: "Read and practice morning dhikr in Indonesian",
    title: "Dzikir Pagi – Bacaan, Arti, dan Hitungan | Tasbih Hub",
    description:
      "Dzikir pagi lengkap dengan teks Arab, latin, arti, jumlah bacaan, dan rutinitas yang bisa diikuti langkah demi langkah.",
    h1: "Dzikir Pagi",
    h2: ["Kapan dzikir pagi dibaca?", "Bacaan dzikir pagi"],
  },
  {
    path: "/id/dzikir-pagi-sesuai-sunnah",
    primary: "dzikir pagi sesuai sunnah",
    secondary: ["dzikir pagi setelah subuh", "waktu dzikir pagi", "sunnah dzikir pagi"],
    intent: "Morning dhikr with emphasis on timing and reported practice",
    title: "Dzikir Pagi Sesuai Sunnah – Waktu dan Bacaan | Tasbih Hub",
    description:
      "Penjelasan waktu dzikir pagi dan bacaan yang diriwayatkan, dengan Arab, latin, arti, serta tautan ke rutinitas dzikir pagi.",
    h1: "Dzikir Pagi Sesuai Sunnah",
    h2: ["Waktu yang dilaporkan", "Bacaan yang diriwayatkan"],
  },
  {
    path: "/id/dzikir-petang",
    primary: "dzikir petang",
    secondary: ["bacaan dzikir petang", "dzikir sore", "doa petang"],
    intent: "Evening dhikr in Indonesian",
    title: "Dzikir Petang – Bacaan, Arti, dan Hitungan | Tasbih Hub",
    description:
      "Dzikir petang dengan teks Arab, latin, arti, sumber, dan rutinitas petang. Bukan salinan dzikir pagi.",
    h1: "Dzikir Petang",
    h2: ["Kapan dzikir petang dibaca?", "Bacaan dzikir petang"],
  },
  {
    path: "/id/zikir-subuh",
    primary: "zikir subuh",
    secondary: ["dzikir setelah subuh", "wirid subuh", "dzikir setelah sholat subuh"],
    intent: "Dhikr after Fajr prayer",
    title: "Zikir Subuh – Wirid Setelah Sholat Subuh | Tasbih Hub",
    description:
      "Zikir setelah sholat Subuh: istighfar, tasbih 33-33-34, dan lanjutan dzikir pagi. Arab, latin, arti, dan counter.",
    h1: "Zikir Subuh",
    h2: ["Setelah salam Subuh", "Lanjut ke dzikir pagi"],
  },
  {
    path: "/about",
    primary: "free online tasbih counter",
    secondary: ["digital tasbih", "dhikr counter", "istighfar counter", "durood counter", "zikr counter"],
    intent: "Learn what Tasbih Hub is and which free counters it offers",
    title: "About Tasbih Hub | Free Online Tasbih & Dhikr Counter",
    description:
      "Tasbih Hub is a free online tasbih counter for dhikr, istighfar, and durood. No account. Your count stays on this device. Made by Muhammad Suleman.",
    h1: "About Tasbih Hub",
    h2: ["What Tasbih Hub is", "Free counters and guides", "How the digital tasbih works"],
  },
];

export function getKeywordEntry(path: string) {
  return KEYWORD_MAP.find((entry) => entry.path === path);
}

export function pageMetadata(path: string, extra?: Metadata): Metadata {
  const entry = getKeywordEntry(path);
  if (!entry) return extra ?? {};
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title: entry.title,
    description: entry.description,
    keywords: [entry.primary, ...entry.secondary],
    alternates: { canonical: url },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url,
      siteName: "Tasbih Hub",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
    },
    ...extra,
  };
}
