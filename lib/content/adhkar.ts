import type { AdhkarBlock, FaqItem } from "@/lib/dhikr/types";

export const morningBlocks: AdhkarBlock[] = [
  {
    dhikrId: "ayat-al-kursi",
    heading: "Ayat al-Kursi",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum",
    meaning: "Allah — there is no god except Him, the Ever-Living, the Sustainer of all.",
    countLabel: "Once",
    source: "Quran 2:255. Recited after the prayer and among the morning remembrances.",
  },
  {
    dhikrId: "al-ikhlas",
    heading: "Al-Ikhlas, Al-Falaq and An-Nas",
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    transliteration: "Qul Huwallahu Ahad",
    meaning: "Say: He is Allah, the One. Recite the three surahs in order.",
    countLabel: "Three times each",
    source: "Quran 112–114. Reported for the morning and the evening in Abu Dawud and Tirmidhi.",
  },
  {
    dhikrId: "sayyid-al-istighfar",
    heading: "Sayyid al-Istighfar",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ",
    transliteration: "Allahumma anta Rabbi la ilaha illa ant",
    meaning: "O Allah, You are my Lord. None has the right to be worshipped except You.",
    countLabel: "Once",
    source: "Sahih al-Bukhari",
  },
  {
    dhikrId: "allahumma-bika-asbahna",
    heading: "Entering the morning",
    arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا",
    transliteration: "Allahumma bika asbahna wa bika amsayna",
    meaning: "O Allah, by You we enter the morning and by You we enter the evening.",
    countLabel: "Once",
    source: "Abu Dawud and Tirmidhi. The evening uses amsayna first.",
    note: "This wording belongs to the morning. Do not swap it into the evening routine.",
  },
  {
    dhikrId: "subhanallahi-wa-bihamdihi",
    heading: "SubhanAllahi wa bihamdih",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subhanallahi wa bihamdih",
    meaning: "Glory be to Allah and praise is His.",
    countLabel: "100 times",
    source: "Sahih Muslim",
  },
  {
    dhikrId: "hasbiyallah",
    heading: "Hasbiyallah",
    arabic: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ",
    transliteration: "Hasbiyallahu la ilaha illa Huwa",
    meaning: "Allah is sufficient for me. None has the right to be worshipped except Him.",
    countLabel: "Seven times",
    source: "Abu Dawud. The phrase also echoes Quran 9:129.",
  },
];

export const eveningBlocks: AdhkarBlock[] = [
  {
    dhikrId: "allahumma-bika-amsayna",
    heading: "Entering the evening",
    arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا",
    transliteration: "Allahumma bika amsayna wa bika asbahna",
    meaning: "O Allah, by You we enter the evening and by You we enter the morning, and to You is the return.",
    countLabel: "Once",
    source: "Abu Dawud and Tirmidhi, the evening wording.",
    note: "The morning dua ends with the resurrection. This one ends with the return.",
  },
  {
    dhikrId: "ayat-al-kursi",
    heading: "Ayat al-Kursi",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum",
    meaning: "Allah — there is no god except Him, the Ever-Living, the Sustainer.",
    countLabel: "Once",
    source: "Quran 2:255",
  },
  {
    dhikrId: "al-ikhlas",
    heading: "The three short surahs",
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ · قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ · قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    transliteration: "Al-Ikhlas, Al-Falaq, An-Nas",
    meaning: "The surahs of sincerity and of seeking refuge, recited as protection for the night ahead.",
    countLabel: "Three times each",
    source: "Abu Dawud and Tirmidhi",
  },
  {
    dhikrId: "audhu-bikalimatillah",
    heading: "Refuge in Allah's words",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq",
    meaning: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    countLabel: "Three times",
    source: "Sahih Muslim. This is an evening protection, not a morning phrase.",
  },
];

export const afterSalahBlocks: AdhkarBlock[] = [
  {
    dhikrId: "astaghfirullah",
    heading: "Istighfar",
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    transliteration: "Astaghfirullah",
    meaning: "I seek Allah's forgiveness.",
    countLabel: "Three times",
    source: "Sahih Muslim, immediately after the taslim.",
  },
  {
    dhikrId: "antas-salam",
    heading: "Allahumma antas-salam",
    arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ",
    transliteration: "Allahumma antas-salamu wa minkas-salam, tabarakta ya Dhal-Jalali wal-Ikram",
    meaning: "O Allah, You are Peace and from You is peace. Blessed are You, Owner of majesty and honour.",
    countLabel: "Once",
    source: "Sahih Muslim",
  },
  {
    dhikrId: "subhanallah",
    heading: "The tasbih",
    arabic: "سُبْحَانَ اللَّهِ · الْحَمْدُ لِلَّهِ · اللَّهُ أَكْبَرُ",
    transliteration: "SubhanAllah, Alhamdulillah, Allahu Akbar",
    meaning: "Glory be to Allah. All praise is for Allah. Allah is the Greatest.",
    countLabel: "33, then 33, then 34",
    source: "Sahih Muslim. Another narration gives 33 of each.",
  },
  {
    dhikrId: "tawhid-long",
    heading: "The declaration after the hundred",
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    transliteration: "La ilaha illallahu wahdahu la sharika lah",
    meaning: "None has the right to be worshipped except Allah, alone, without partner.",
    countLabel: "Once",
    source: "Sahih Muslim, after completing the tasbih.",
  },
  {
    dhikrId: "ayat-al-kursi",
    heading: "Ayat al-Kursi",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    transliteration: "Ayat al-Kursi",
    meaning: "Recite the verse of the Throne once after the obligatory prayer.",
    countLabel: "Once",
    source: "Quran 2:255. Reported among the adhkar after the prayer.",
  },
];

export const sleepBlocks: AdhkarBlock[] = [
  {
    dhikrId: "ayat-al-kursi",
    heading: "Ayat al-Kursi when you lie down",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    transliteration: "Ayat al-Kursi",
    meaning: "Recite the full verse before sleep.",
    countLabel: "Once",
    source: "Sahih al-Bukhari",
  },
  {
    dhikrId: "baqarah-closing",
    heading: "The last two verses of Al-Baqarah",
    arabic: "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ",
    transliteration: "Amanar-Rasulu bima unzila ilayhi mir-Rabbihi...",
    meaning: "The Messenger has believed in what was revealed to him from his Lord, and so have the believers.",
    countLabel: "Once",
    source: "Quran 2:285–286. Sahih al-Bukhari.",
  },
  {
    dhikrId: "subhanallah",
    heading: "The bedtime tasbih",
    arabic: "سُبْحَانَ اللَّهِ · الْحَمْدُ لِلَّهِ · اللَّهُ أَكْبَرُ",
    transliteration: "SubhanAllah 33, Alhamdulillah 33, Allahu Akbar 34",
    meaning: "The count taught in the household of the Prophet before sleep.",
    countLabel: "33, 33, then 34",
    source: "Sahih al-Bukhari, the report of Ali and Fatimah",
  },
  {
    dhikrId: "sleep-dua",
    heading: "The dua for lying down",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya",
    meaning: "In Your name, O Allah, I die and I live.",
    countLabel: "Once",
    source: "Sahih al-Bukhari",
  },
];

export const wakingBlocks: AdhkarBlock[] = [
  {
    dhikrId: "waking-dua",
    heading: "When you wake",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration: "Alhamdulillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
    meaning: "All praise is for Allah who gave us life after having taken it from us, and to Him is the resurrection.",
    countLabel: "Once, as you wake",
    source: "Sahih al-Bukhari",
  },
  {
    dhikrId: "allahumma-bika-asbahna",
    heading: "Then the morning entrance",
    arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا",
    transliteration: "Allahumma bika asbahna",
    meaning: "O Allah, by You we enter the morning.",
    countLabel: "Once, when the morning has begun",
    source: "Abu Dawud and Tirmidhi",
    note: "The wider morning adhkar continue from here. Waking is the doorway, not the whole set.",
  },
];

export const morningFaqs: FaqItem[] = [
  {
    question: "When should morning adhkar be recited?",
    answer: "After Fajr and through the morning, before the sun reaches its height. If you wake late, recite what you can rather than skipping the day.",
  },
  {
    question: "Do I have to finish every phrase for the adhkar to count?",
    answer: "No. A shorter sincere set is better than a rushed one you do not understand. The routine on this page is a practical selection, not the only authentic list.",
  },
  {
    question: "Are morning and evening adhkar the same?",
    answer: "Several phrases are shared, including Ayat al-Kursi and the three short surahs. The entrance dua and the evening refuge in Allah's words are not interchangeable.",
  },
];

export const eveningFaqs: FaqItem[] = [
  {
    question: "When does the evening adhkar begin?",
    answer: "After Asr, and they remain fitting after Maghrib. The evening wording is the one that begins with amsayna.",
  },
  {
    question: "Why is A'udhu bikalimatillah in the evening and not the morning?",
    answer: "The report in Sahih Muslim places this refuge with the evening, as protection from harm during the night.",
  },
];

export const salahFaqs: FaqItem[] = [
  {
    question: "What is the difference between 33 and 34?",
    answer: "One authentic form is 33 SubhanAllah, 33 Alhamdulillah and 34 Allahu Akbar. Another is 33 of each. Both are reported. This routine uses the form that completes one hundred.",
  },
  {
    question: "Do I count with my fingers or a digital tasbih?",
    answer: "Counting on the fingers is reported. A digital counter is a tool for the same count. Say the phrase, then tap.",
  },
];

export const sleepFaqs: FaqItem[] = [
  {
    question: "Is the bedtime tasbih the same as the one after salah?",
    answer: "The numbers match a familiar pattern, but the setting is different. The bedtime report is the one given to Ali and Fatimah, may Allah be pleased with them.",
  },
  {
    question: "What if I fall asleep before the end?",
    answer: "Recite Ayat al-Kursi and the sleep dua if those are all you can manage. Continue the rest when you are safe to stay awake.",
  },
];

export const wakingFaqs: FaqItem[] = [
  {
    question: "Is the waking dua the same as morning adhkar?",
    answer: "No. The waking dua is said as you come out of sleep. Morning adhkar are the wider set after Fajr.",
  },
  {
    question: "What if I wake after sunrise?",
    answer: "Still say the waking praise. Then pray Fajr if it is still due, and recite the morning adhkar you can.",
  },
];
