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
    primary: "online tasbih counter",
    secondary: ["digital dhikr", "free tasbih counter", "dhikr counter"],
    intent: "Use a free digital counter for daily dhikr",
    title: "Free Online Tasbih Counter & Digital Dhikr | Tasbih Hub",
    description:
      "Count tasbih, dhikr, istighfar and durood online with a free digital counter. No login or app required. Your progress stays on your device.",
    h1: "Free Online Tasbih Counter & Digital Dhikr",
    h2: ["Popular dhikr", "Quick start routines", "Your dhikr today"],
  },
  {
    path: "/tasbih-counter",
    primary: "online tasbih counter",
    secondary: ["digital tasbeeh", "tasbih counter free", "subhanallah counter"],
    intent: "Open a dedicated online tasbih counter",
    title: "Online Tasbih Counter – Free Digital Tasbeeh | Tasbih Hub",
    description:
      "Use a free online tasbih counter to count SubhanAllah, Alhamdulillah, Allahu Akbar and other dhikr. Mobile-friendly, private and easy to use.",
    h1: "Free Online Tasbih Counter",
    h2: ["What is a digital tasbih?", "How to use the counter"],
  },
  {
    path: "/digital-tasbih",
    primary: "digital tasbih",
    secondary: ["digital tasbeeh", "tasbih app online", "electronic tasbih"],
    intent: "Understand and use a digital tasbih",
    title: "Digital Tasbih – Free Online Tasbeeh Counter | Tasbih Hub",
    description:
      "A digital tasbih for counting dhikr in your browser. Choose a phrase, set a goal, and keep your count on this device. No account required.",
    h1: "Digital Tasbih for Daily Dhikr",
    h2: ["How a digital tasbih works", "When people use it"],
  },
  {
    path: "/dhikr-counter",
    primary: "online dhikr counter",
    secondary: ["dhikr counter", "digital dhikr counter", "count dhikr"],
    intent: "Count dhikr online",
    title: "Online Dhikr Counter – Count Remembrance Free | Tasbih Hub",
    description:
      "Count dhikr online with Arabic, transliteration and meaning. Set a target, use focus mode, and keep your count privately on this device.",
    h1: "Online Dhikr Counter",
    h2: ["Choose a dhikr", "Count with a target"],
  },
  {
    path: "/zikr-counter",
    primary: "online zikr counter",
    secondary: ["zikr counter", "tasbeeh counter", "count zikr"],
    intent: "Count zikr, the same practice searched with the zikr spelling",
    title: "Online Zikr Counter – Free Digital Remembrance | Tasbih Hub",
    description:
      "A free online zikr counter for daily remembrance. Zikr and dhikr are the same practice. Count privately in your browser, with no login.",
    h1: "Online Zikr Counter",
    h2: ["Zikr and dhikr", "How to count zikr"],
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
];

export function getKeywordEntry(path: string) {
  return KEYWORD_MAP.find((entry) => entry.path === path);
}

export function pageMetadata(path: string, extra?: Metadata): Metadata {
  const entry = getKeywordEntry(path);
  if (!entry) return extra ?? {};
  return {
    title: entry.title,
    description: entry.description,
    keywords: [entry.primary, ...entry.secondary],
    alternates: { canonical: `${SITE_URL}${path === "/" ? "" : path}` },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      siteName: "Tasbih Hub",
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
