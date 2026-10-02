export type InspirationCard = {
  arabic: string;
  english: string;
  source: string;
  note: string;
};

export type DailyInspiration = {
  hadith: InspirationCard;
  quran: InspirationCard;
};

const DAYS: DailyInspiration[] = [
  {
    hadith: {
      arabic: "لَيْسَ الْغِنَىٰ عَنْ كَثْرَةِ الْعَرَضِ، وَلَكِنَّ الْغِنَىٰ غِنَى النَّفْسِ",
      english: "Richness is not in the abundance of possessions; true richness is the richness of the soul.",
      source: "Bukhari & Muslim",
      note: "Contentment is a state of the heart. What you own does not decide how rich you are.",
    },
    quran: {
      arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
      english: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
      source: "Al-Baqarah 2:152",
      note: "Remembrance is answered. Gratitude keeps the heart from turning away.",
    },
  },
  {
    hadith: {
      arabic: "مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لَا يَذْكُرُ رَبَّهُ، مَثَلُ الْحَيِّ وَالْمَيِّتِ",
      english: "The one who remembers his Lord and the one who does not are like the living and the dead.",
      source: "Bukhari & Muslim",
      note: "Dhikr is life for the heart. A day without remembrance is a day left still.",
    },
    quran: {
      arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
      english: "Unquestionably, by the remembrance of Allah hearts find rest.",
      source: "Ar-Ra'd 13:28",
      note: "Peace is not the absence of worry. It is the heart settling on Allah.",
    },
  },
  {
    hadith: {
      arabic: "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَٰنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
      english: "Two phrases are light on the tongue, heavy on the Scale, and beloved to the Most Merciful: Glory and praise be to Allah, Glory be to Allah the Magnificent.",
      source: "Bukhari & Muslim",
      note: "Two short phrases: easy to say, heavy on the Scale, and beloved to the Most Merciful.",
    },
    quran: {
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا",
      english: "O you who believe, remember Allah with much remembrance, and exalt Him morning and evening.",
      source: "Al-Ahzab 33:41–42",
      note: "The day is framed by dhikr: begin it with tasbih, and close it the same way.",
    },
  },
  {
    hadith: {
      arabic: "مَنْ قَالَ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ فِي يَوْمٍ مِائَةَ مَرَّةٍ حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ",
      english: "Whoever says 'Glory and praise be to Allah' one hundred times in a day, his sins are removed even if they are like the foam of the sea.",
      source: "Bukhari & Muslim",
      note: "One hundred times in a day is enough for sins as vast as the sea’s foam to be lifted.",
    },
    quran: {
      arabic: "وَاذْكُرْ رَبَّكَ كَثِيرًا وَسَبِّحْ بِالْعَشِيِّ وَالْإِبْكَارِ",
      english: "And remember your Lord much, and exalt Him in the evening and the morning.",
      source: "Aal Imran 3:41",
      note: "Morning and evening are the two edges of the day set aside for tasbih.",
    },
  },
];

export function inspirationForToday(date = new Date()) {
  const day = Math.floor(date.getTime() / 86_400_000);
  return DAYS[((day % DAYS.length) + DAYS.length) % DAYS.length];
}
