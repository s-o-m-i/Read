import type { FaqItem } from "./types";

export type DhikrArticle = {
  slug: string;
  h1: string;
  when: string[];
  explanation: string[];
  faqs: FaqItem[];
  related: string[];
};

export const DHIKR_ARTICLES: Record<string, DhikrArticle> = {
  subhanallah: {
    slug: "subhanallah",
    h1: "SubhanAllah — Meaning and How to Recite It",
    when: [
      "After the obligatory prayer, as the first third of the well-known tasbih.",
      "Throughout the day, whenever you want to declare that Allah is free of every defect.",
      "In the bedtime count reported from Ali and Fatimah, thirty-three times before sleep.",
    ],
    explanation: [
      "SubhanAllah is a declaration that Allah is perfect and far above every shortcoming. It is not a vague word of praise. It clears the heart of the idea that anything in creation shares His perfection.",
      "In the post-prayer dhikr collected in Sahih Muslim, the Prophet, peace be upon him, counted SubhanAllah thirty-three times, Alhamdulillah thirty-three times, and Allahu Akbar thirty-four times. That set is the backbone of Tasbih Hub's after-salah routine.",
      "You can recite it on beads, on your fingers, or with a digital counter. The count is a servant of the remembrance, not a replacement for attention. Say the phrase, then tap.",
    ],
    faqs: [
      {
        question: "What does SubhanAllah mean?",
        answer: "It means glory be to Allah, declaring Him free of every imperfection.",
      },
      {
        question: "How many times is SubhanAllah said after salah?",
        answer: "The widely reported count is thirty-three, followed by Alhamdulillah thirty-three times and Allahu Akbar thirty-four times.",
      },
    ],
    related: ["alhamdulillah", "allahu-akbar", "astaghfirullah"],
  },
  alhamdulillah: {
    slug: "alhamdulillah",
    h1: "Alhamdulillah — Meaning and How to Recite It",
    when: [
      "After SubhanAllah in the post-prayer tasbih.",
      "After eating, drinking, and any blessing you notice.",
      "On waking, inside the longer praise reported in Sahih al-Bukhari.",
    ],
    explanation: [
      "Alhamdulillah gathers every form of praise and returns it to Allah. Gratitude here is not only for a pleasant event. It is a way of seeing that the blessing, and the ability to notice it, both come from Him.",
      "After salah it is the middle phrase of the thirty-three, thirty-three, thirty-four count. Before sleep it appears in the same pattern in the report given to Fatimah, may Allah be pleased with her.",
      "If you lose the number, start the set again or continue from the last number you are sure of. The point is presence, and a counter simply keeps the number honest.",
    ],
    faqs: [
      {
        question: "What does Alhamdulillah mean?",
        answer: "All praise and thanks belong to Allah.",
      },
      {
        question: "Is Alhamdulillah only said after good news?",
        answer: "No. It is said for blessings, after relief, and as a regular dhikr, including after the prayer.",
      },
    ],
    related: ["subhanallah", "allahu-akbar", "salawat"],
  },
  "allahu-akbar": {
    slug: "allahu-akbar",
    h1: "Allahu Akbar — Meaning and How to Recite It",
    when: [
      "As the closing phrase of the tasbih after salah, thirty-four times in the narration that completes one hundred.",
      "At the opening of the prayer, and whenever you need to put a worry back in proportion.",
    ],
    explanation: [
      "Allahu Akbar means Allah is greater than whatever is being compared with Him, whether that is named or left unspoken. In dhikr it pulls attention off the size of a problem and back to the size of the One being remembered.",
      "Some reports of the after-prayer tasbih give thirty-three for each of the three phrases. Another gives thirty-four takbirs so the total reaches one hundred. Tasbih Hub's guided routine uses three, then thirty-three, thirty-three, and thirty-four, which is a sound and widely taught form.",
      "Say it with a still tongue and a clear count. The counter's target marker is there so you can stop at the reported number without watching a second screen.",
    ],
    faqs: [
      {
        question: "Why is Allahu Akbar sometimes counted 34 times?",
        answer: "One authentic form of the after-prayer dhikr uses 33 SubhanAllah, 33 Alhamdulillah, and 34 Allahu Akbar, completing 100.",
      },
      {
        question: "Does the counter replace saying the words?",
        answer: "No. Tap only after you have said the phrase.",
      },
    ],
    related: ["subhanallah", "alhamdulillah"],
  },
  "la-ilaha-illallah": {
    slug: "la-ilaha-illallah",
    h1: "La ilaha illallah — Meaning and How to Recite It",
    when: [
      "As the statement of tawhid, on its own or in the longer formula that adds wahdahu la sharika lah.",
      "In morning and evening adhkar, where the longer form is reported ten times, and in some narrations more often.",
    ],
    explanation: [
      "La ilaha illallah is the foundation of Islam: nothing deserves worship except Allah. The short form is a complete declaration. The longer form adds that He has no partner, that the dominion and the praise are His, and that He has power over everything.",
      "It is recorded in Sahih al-Bukhari and Sahih Muslim among the remembrances of the morning and evening, and also after the prayer. Reciting it is an act of renewal, not a slogan.",
      "On Tasbih Hub, choose the short declaration when you want a steady daily count, and use the longer tawhid phrase from the library when you are following the morning or evening wording.",
    ],
    faqs: [
      {
        question: "What does La ilaha illallah mean?",
        answer: "There is no god worthy of worship except Allah.",
      },
      {
        question: "Is the longer version a different dhikr?",
        answer: "It begins with the same declaration and then adds phrases reported in the morning, evening, and post-prayer adhkar.",
      },
    ],
    related: ["subhanallah", "astaghfirullah", "ayat-al-kursi"],
  },
  astaghfirullah: {
    slug: "astaghfirullah",
    h1: "Astaghfirullah — Meaning, Practice and How to Recite It",
    when: [
      "Immediately after the taslim, three times, before the rest of the post-prayer dhikr.",
      "Whenever you remember a wrong, or want to keep a habit of asking for forgiveness.",
      "As a longer daily count, often one hundred, for people building a fixed istighfar practice.",
    ],
    explanation: [
      "Astaghfirullah means I seek Allah's forgiveness. It is short enough to repeat and wide enough to cover a sin you can name and the faults you cannot see.",
      "Sahih Muslim records that the Prophet, peace be upon him, sought forgiveness three times when he finished the prayer. That is why the after-salah routine on this site begins with three, and does not skip ahead into the tasbih.",
      "The master formula, Sayyid al-Istighfar, is a different and longer supplication reported in Sahih al-Bukhari. Use the short phrase for counted repetition. Use the longer one once, with attention, especially in the morning.",
      "Nothing in a count guarantees a particular worldly result. Forgiveness is asked of Allah. The counter only helps you keep the number you intended.",
    ],
    faqs: [
      {
        question: "How many times should Astaghfirullah be said after salah?",
        answer: "The reported practice at the end of the prayer is three times, then the other adhkar.",
      },
      {
        question: "Can I count a larger number during the day?",
        answer: "Yes. Many people keep a separate daily count. A hundred is a clear, common target, not a limit.",
      },
    ],
    related: ["sayyid-al-istighfar", "subhanallah", "alhamdulillah"],
  },
  "sayyid-al-istighfar": {
    slug: "sayyid-al-istighfar",
    h1: "Sayyid al-Istighfar — The Master Plea for Forgiveness",
    when: [
      "Once in the morning, and it may also be said in the evening.",
      "Whenever you want to ask for forgiveness with the wording the Prophet, peace be upon him, singled out.",
    ],
    explanation: [
      "Sayyid al-Istighfar is the supplication beginning Allahumma anta Rabbi la ilaha illa ant. In Sahih al-Bukhari it is described as the foremost way of seeking forgiveness. The person who says it with certainty in the daytime and dies before evening, or says it at night and dies before morning, is among the people of Paradise — as the hadith itself states.",
      "It is one recitation, not a hundred. The value is in the meaning: you affirm that Allah is your Lord, that you are His servant, that you fall short, and that only He forgives.",
      "Read the Arabic slowly if you are still learning it. The transliteration on this page is a support, not a substitute for learning the words.",
    ],
    faqs: [
      {
        question: "Do I repeat Sayyid al-Istighfar 100 times?",
        answer: "The report is about saying it in the morning or the evening, not about a hundred repetitions. The short Astaghfirullah is the phrase people usually count in larger numbers.",
      },
      {
        question: "Where is this dua recorded?",
        answer: "It is in Sahih al-Bukhari, on the authority of Shaddad ibn Aws.",
      },
    ],
    related: ["astaghfirullah", "subhanallah"],
  },
  salawat: {
    slug: "salawat",
    h1: "Salawat and Durood — Meaning and How to Recite Them",
    when: [
      "Whenever the Prophet, peace be upon him, is mentioned.",
      "On Friday, and as a daily counted practice.",
      "Inside the prayer, in the tashahhud, in the fuller form taught when the companions asked how to send blessings.",
    ],
    explanation: [
      "Salawat, often called durood in South Asian usage, is the act of asking Allah to bless the Prophet Muhammad, peace be upon him. The Quran tells those who believe to do this in Surah al-Ahzab, verse 56.",
      "The short phrase on the counter, Allahumma salli 'ala Muhammad, is a clear and valid way to begin. The Ibrahimic formula used in the prayer is longer and is the one the Prophet taught when he was asked how to send blessings upon him. Use the short form for a counted session. Learn the longer form for the prayer.",
      "A round of ten is easy to keep after salah. A round of one hundred suits a dedicated salawat sitting. Neither number is a tax. They are targets you can finish.",
    ],
    faqs: [
      {
        question: "Are durood and salawat the same?",
        answer: "In practice, yes. Durood is the common Urdu and Hindi name for salawat, the blessings sent upon the Prophet.",
      },
      {
        question: "Which wording should I count?",
        answer: "The counter uses Allahumma salli 'ala Muhammad. You may recite a fuller durood you already know and tap once for each complete recitation.",
      },
    ],
    related: ["astaghfirullah", "subhanallah"],
  },
  "ayat-al-kursi": {
    slug: "ayat-al-kursi",
    h1: "Ayat al-Kursi — When to Recite It",
    when: [
      "After the obligatory prayers.",
      "Before sleep.",
      "In the morning and the evening adhkar.",
    ],
    explanation: [
      "Ayat al-Kursi is verse 255 of Surah al-Baqarah. It names Allah as the Ever-Living, the Sustainer, and it denies drowsiness, sleep, and any partner in His dominion. It is one verse, recited once in each of these settings, not a phrase you rush through a hundred times.",
      "Sahih al-Bukhari includes the report in which reciting it when lying down is tied to a guardian from Allah until morning. It is also among the remembrances people are taught to say after the prayer. The counter step for Ayat al-Kursi is therefore a single tap after you have finished the verse, so the routine can move on.",
      "If you do not yet have the verse memorised, read it from a mushaf and tap only when the recitation is complete.",
    ],
    faqs: [
      {
        question: "How many times is Ayat al-Kursi recited?",
        answer: "Once after the prayer, once before sleep, and once among the morning and evening adhkar.",
      },
      {
        question: "Why does the routine ask for only one count?",
        answer: "Because the sunnah here is to recite the verse, not to repeat a short phrase dozens of times. One tap means you have finished that recitation.",
      },
    ],
    related: ["la-ilaha-illallah", "subhanallah", "al-ikhlas"],
  },
};

export function getDhikrArticle(slug: string) {
  return DHIKR_ARTICLES[slug];
}
