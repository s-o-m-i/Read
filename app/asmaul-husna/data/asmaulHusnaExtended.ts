/**
 * Extended Asmaul Husna Data with Unique Content Per Name
 * This file contains detailed, name-specific content to avoid templating
 * Each name has:
 * - Extended meaning (2-3 sentences unique to that attribute)
 * - Quranic reference (specific verse)
 * - Name-specific benefits (3-5 unique bullets)
 * - Reflection tip (unique, actionable)
 * - Related names (for semantic linking)
 * - FAQs (2-3 per name)
 */

export interface DhikrVariation {
  count: number;
  time: string; // e.g., "After Fajr", "Before sleep"
  intent: string; // e.g., "Gratitude", "Repentance"
}

export interface AsmaulHusnaExtended {
  id: number;
  slug: string;
  extendedMeaning: string; // 2-3 sentences explaining the name in real-life context
  quranicReference: {
    verse: string; // e.g., "59:22"
    surah: string; // e.g., "Al-Hashr"
    text: string; // e.g., "He is Allah, Ar-Rahman..."
  };
  nameSpecificBenefits: string[]; // 3-5 unique benefits (not generic)
  reflectionTip: string; // Unique, actionable practice tip
  relatedNames: string[]; // Slugs of 1-2 semantically related names
  dhikrVariation: DhikrVariation; // Unique dhikr count, time, intent per name
  contrastParagraph: string; // Semantic contrast paragraph distinguishing from other divine names
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const asmaulHusnaExtended: Record<string, AsmaulHusnaExtended> = {
  "ar-rahman": {
    id: 1,
    slug: "ar-rahman",
    extendedMeaning:
      "Ar-Rahman is derived from 'Rahma' which means 'mercy' in Arabic. This name emphasizes Allah's vast, boundless mercy that precedes His justice and encompasses all of creation. Unlike Az-Zalim (the Unjust), Ar-Rahman's mercy is not withheld even from those who disobey—it is the foundation of His interaction with His creation. The Quran opens with 'Bismillah ar-Rahman ar-Rahim,' indicating that mercy is the gateway to all divine knowledge and guidance.",
    quranicReference: {
      verse: "59:22",
      surah: "Al-Hashr",
      text: "He is Allah, other than whom there is no deity, Ar-Rahman (The Most Gracious), Ar-Rahim (The Most Merciful). Everything in the heavens and on earth glorifies Him—He is the Almighty, the Wise.",
    },
    nameSpecificBenefits: [
      "Increases gratitude for undeserved blessings, recognizing that provision and life itself are acts of mercy",
      "Dispels despair by reminding us that Allah's mercy encompasses human weakness and sin",
      "Softens the heart toward others, inspiring compassion as a reflection of divine mercy",
      "Strengthens hope in difficult times—even when you feel undeserving, Ar-Rahman's mercy is universal",
      "Clarifies divine wisdom: mercy is primary, justice is secondary in Allah's relationship with creation",
    ],
    reflectionTip:
      "When facing hardship or guilt, pause and acknowledge one undeserved mercy from today—a safe commute, a kind word, breath itself. Recite 'Ya Ar-Rahman' 100 times while reflecting on how many of your blessings are unearned. This bridges the gap between intellectual belief and emotional transformation.",
    relatedNames: ["ar-rahim", "al-ghafur", "at-tawwab"],
    dhikrVariation: {
      count: 300,
      time: "After Fajr prayer",
      intent: "Gratitude for undeserved blessings"
    },
    contrastParagraph: "Unlike divine names that emphasize justice or accountability, Ar-Rahman uniquely focuses on Allah's unearned, universal mercy — mercy that exists even before obedience. This name reshapes faith from fear-based obedience into gratitude-driven devotion.",
    faqs: [
      {
        question: "What is the difference between Ar-Rahman and Ar-Rahim?",
        answer:
          "Ar-Rahman refers to Allah's vast, universal mercy extended to all creatures (believers and non-believers). Ar-Rahim (The Most Merciful) refers to His special, protective mercy toward believers in the Hereafter. Ar-Rahman is the overwhelming majority of Allah's mercy; Ar-Rahim is mercy concentrated on those who turn to Him.",
      },
      {
        question: "Why does every Surah start with 'Bismillah ar-Rahman ar-Rahim'?",
        answer:
          "The Quran begins with Ar-Rahman because mercy is the lens through which all Islamic teachings should be understood. Approaching Quranic guidance without recognizing Allah's mercy leads to despair; approaching it through mercy leads to hope and transformation. It sets the spiritual tone for understanding divine law.",
      },
      {
        question: "How can I feel Ar-Rahman's mercy in my daily life?",
        answer:
          "Start by counting your blessings before sleep: safety, health, family, provision. Most cannot be earned—they are pure mercy. Recite 'Ya Ar-Rahman' when experiencing loss or difficulty, affirming that His mercy still surrounds you in ways unseen. This practice shifts perspective from what was lost to what remains.",
      },
    ],
  },

  "ar-rahim": {
    id: 2,
    slug: "ar-rahim",
    extendedMeaning:
      "Ar-Rahim refers to Allah's tender, intimate mercy—the kind that responds to sincere hearts. While Ar-Rahman's mercy is general and universal, Ar-Rahim's mercy is relational. It is the mercy that responds to repentance, comforts the grieving believer, and provides special protection to the righteous. Ar-Rahim is mercy that sees your struggle and meets you where you are.",
    quranicReference: {
      verse: "3:31",
      surah: "Al-Imran",
      text: "Say, 'If you love Allah, then follow me. Allah will love you and forgive your sins—and Allah is Ar-Rahim (The Most Merciful).'",
    },
    nameSpecificBenefits: [
      "Creates a direct relationship with Allah: His mercy is not distant but responsive to your sincerity",
      "Provides emotional comfort during grief—a mercy that understands human suffering",
      "Motivates repentance by showing that mercy awaits the one who returns to Allah",
      "Protects believers from despair about past mistakes—Ar-Rahim's mercy erases sins, not just forgives them",
      "Strengthens faith: believers experience Ar-Rahim's mercy through answered prayers and unexpected help",
    ],
    reflectionTip:
      "Think of a time you felt truly understood by someone who cared. That moment reveals how Ar-Rahim operates—Allah sees your intention, your struggle, and your sincerity in a way no human can. Recite 'Ya Ar-Rahim' when you've made a sincere mistake, fully surrendering to His understanding. Feel the difference between forgiveness (removal of punishment) and mercy (someone who loves you despite your failure).",
    relatedNames: ["ar-rahman", "al-ghafur", "al-wadud"],
    dhikrVariation: {
      count: 100,
      time: "Before sleep, after repenting from a mistake",
      intent: "Repentance and emotional closeness"
    },
    contrastParagraph: "Unlike names that describe Allah's universal attributes, Ar-Rahim highlights a personal, responsive mercy — a mercy experienced through repentance, sincerity, and emotional closeness to Allah.",
    faqs: [
      {
        question: "Does Ar-Rahim's mercy only apply to believers?",
        answer:
          "While Ar-Rahman's mercy extends to all creation, Ar-Rahim's mercy is specifically tied to the believer's relationship with Allah. However, Allah's offer of Ar-Rahim's mercy is available to anyone who turns to Him—even moments before death, sincere repentance invokes His mercy.",
      },
      {
        question: "What is the connection between love and Ar-Rahim?",
        answer:
          "Ar-Rahim is a mercy rooted in love. When Allah loves a servant, He becomes merciful to them—answering their prayers, protecting them from harm they don't see, and forgiving their lapses. This mercy is personal, not transactional.",
      },
      {
        question: "How do I know I've received Ar-Rahim's mercy?",
        answer:
          "Signs include: strength to repent, relief after hardship, answered prayers, unexpected help during crisis, and a softened heart toward forgiveness of others. These are indications that Ar-Rahim has turned His face toward you.",
      },
    ],
  },

  "al-malik": {
    id: 3,
    slug: "al-malik",
    extendedMeaning:
      "Al-Malik is the absolute sovereign—not a ruler dependent on subjects or resources, but one whose dominion is intrinsic and eternal. Unlike human kings who inherit, lose, or are deposed, Al-Malik owns and controls everything without question or opposition. This name addresses the existential question: Who truly holds authority? The answer: Only Allah. Every other authority—yours, the government's, the wealthy's—is delegated permission that can be revoked instantly.",
    quranicReference: {
      verse: "23:116",
      surah: "Al-Mu'minun",
      text: "So exalted is Allah, Al-Malik (The True King)—there is no god except Him. Everything will perish except Him.",
    },
    nameSpecificBenefits: [
      "Liberates from human fear: When you recognize Allah as Al-Malik, fear of people dissolves because their power is illusion",
      "Clarifies life priorities: If Allah is the true king, then wealth, status, and worldly position are temporary loans",
      "Builds resilience in loss: When you lose something, you're returning what never truly belonged to you",
      "Strengthens integrity: You answer to Al-Malik's kingdom, not the approval of temporal rulers",
      "Unifies purpose: All actions become oriented toward serving the True King, eliminating conflicting masters",
    ],
    reflectionTip:
      "For one full day, consciously audit your decisions: Whose kingdom am I serving? When you feel anxious about approval, money, or status, recite 'Ya Al-Malik' and recall that the Ultimate Kingdom is not of this world. Notice how this shifts your choices—you become a servant of the Eternal, not of the moment.",
    relatedNames: ["al-quddus", "al-aziz", "al-aliy"],
    dhikrVariation: {
      count: 99,
      time: "During moments of financial anxiety or worldly pressure",
      intent: "Surrender of control and recognition of Allah's sovereignty"
    },
    contrastParagraph: "Unlike divine names that emphasize forgiveness or compassion, Al-Malik centers on absolute authority and ownership, reminding believers that all power, wealth, and control ultimately belong to Allah alone.",
    faqs: [
      {
        question: "If Allah is Al-Malik, why do corrupt rulers rule?",
        answer:
          "Al-Malik allows temporary authority to unjust rulers as a test for believers and a rope for their self-destruction. The Quran repeatedly shows that tyranny is permitted, not approved. Allah's kingdom includes the permission for temporary injustice—but His final judgment reverses it entirely.",
      },
      {
        question: "How should the concept of Al-Malik change how I work?",
        answer:
          "Recognize that your employment, income, and livelihood are permissions from Al-Malik. You are not enslaved to an employer's whims but serve Allah first. This doesn't mean laziness—it means excellence in work without desperation or despair about income.",
      },
      {
        question: "What does Al-Malik mean for inheritance and wealth?",
        answer:
          "Nothing you own is ultimately yours—you are a steward of Al-Malik's property. This is why Islamic inheritance laws redistribute wealth and why hoarding is discouraged. Your wealth is a trust that will be accounted for on the Day of Judgment.",
      },
    ],
  },

  "al-quddus": {
    id: 4,
    slug: "al-quddus",
    extendedMeaning:
      "Al-Quddus means 'The Most Holy'—pure from every imperfection, flaw, creature-like attribute, and need. While humans are created with inherent limitations (forgetting, weakness, error), Al-Quddus is utterly transcendent. This name teaches that holiness is not about ritual purity alone, but about being completely free from deficiency. Understanding Al-Quddus prevents the grave error of anthropomorphizing Allah—giving Him human qualities.",
    quranicReference: {
      verse: "62:1",
      surah: "Al-Jumu'ah",
      text: "Everything in the heavens and on earth glorifies Allah, Al-Quddus (The Most Holy), the Almighty, the All-Wise.",
    },
    nameSpecificBenefits: [
      "Purifies theology: Protects the mind from imagining Allah as needing, suffering, or being created",
      "Elevates worship: When you recognize complete holiness, you approach Allah with appropriate awe, not casual familiarity",
      "Clarifies prayer: Realizing Allah is Al-Quddus means your imperfect prayers are still accepted—holiness doesn't demand human perfection",
      "Removes idolatry of creation: If you over-reverence a scholar, saint, or leader, Al-Quddus reminds you only He is truly pure",
      "Creates healthy humility: Awareness of your imperfection against His holiness generates sincere repentance",
    ],
    reflectionTip:
      "Study the Islamic teaching on Allah's attributes (Tawheed). Spend 10 minutes contemplating one human weakness you experience—fatigue, forgetfulness, anger. Then reflect: Allah is not like this, not even remotely. He has never had a moment of confusion, weakness, or need. This is Al-Quddus. From this clarity, holiness becomes a relational concept—not human perfection, but surrendering to His perfect nature.",
    relatedNames: ["al-aliy", "al-kabir", "al-azhim"],
    dhikrVariation: {
      count: 33,
      time: "During moments of proud thoughts or self-righteousness",
      intent: "Humility and recognition of Allah's transcendence"
    },
    contrastParagraph: "Unlike divine names that describe mercy or forgiveness, Al-Quddus emphasizes absolute purity and transcendence — a holiness so perfect it is entirely free from any human-like limitation or need, reshaping how we understand divine nature itself.",
    faqs: [
      {
        question: "What does it mean that creation glorifies Al-Quddus?",
        answer:
          "Every atom in creation testifies to Allah's holiness through order, design, and harmony. When you see a sunset, feel your heartbeat, or harvest a crop, you're witnessing Al-Quddus—the One who created without need, for wisdom beyond our comprehension.",
      },
      {
        question: "If Allah is Al-Quddus, how can He be near to us?",
        answer:
          "His transcendence (being beyond creation) and His immanence (being near) are not contradictions. Al-Quddus is so perfect that He can be intimately aware of a sparrow while remaining utterly beyond creation's limitations. Think of mind and body—your thoughts are non-physical yet affect your body.",
      },
      {
        question: "Is calling myself 'holy' or 'saint' disrespectful to Al-Quddus?",
        answer:
          "Yes, in Islamic tradition, no human is truly holy—only relatively free from sin through Allah's grace. We can be 'purified' but never 'pure.' This is why the Prophet ﷺ said 'All of you are sinners' and why Islamic theology rejects the concept of immaculate humans.",
      },
    ],
  },

  "as-salam": {
    id: 5,
    slug: "as-salam",
    extendedMeaning:
      "As-Salam is not merely absence of conflict—it is wholeness, integration, and safety at the deepest level. A person at peace with Allah is As-Salam'd: their identity is intact, their direction is clear, and they fear no harm beyond Allah's permission. This name also means Allah is free from deficiency—whole, complete, needing nothing. When you recite Ya As-Salam, you're asking for inner peace that transcends circumstances.",
    quranicReference: {
      verse: "48:4",
      surah: "Al-Fath",
      text: "It is He who sent down Sakina (tranquility) into the hearts of believers to increase their belief [knowing] that As-Salam's (Allah's) authority and might is in the heavens and earth.",
    },
    nameSpecificBenefits: [
      "Brings peace amid chaos: Not the peace of ignoring problems, but profound safety through surrendering to Allah",
      "Heals internal conflict: When identity, values, and faith align, inner peace follows naturally",
      "Protects from anxiety about the future: As-Salam's permission and protection extend beyond your sight",
      "Creates community peace: Those at internal peace with Allah naturally reduce conflict with others",
      "Offers shelter: In times of persecution, loss, or fear, As-Salam is the ultimate refuge",
    ],
    reflectionTip:
      "Notice your anxiety's true source: Is it external circumstance (which you can't control) or internal misalignment (values vs. actions, or disconnection from Allah)? Recite 'Ya As-Salam' and commit to one action aligned with your faith today. Watch how internal peace, not external circumstance, shifts. The job threat remains, but your peace cannot be threatened if it's anchored in Allah.",
    relatedNames: ["al-mumin", "ar-raqib", "al-hadi"],
    dhikrVariation: {
      count: 100,
      time: "During anxiety or before difficult conversations",
      intent: "Inner peace and freedom from fear"
    },
    contrastParagraph: "Unlike divine names that emphasize justice or accountability, As-Salam focuses on complete wholeness and interior peace — a tranquility rooted not in external circumstances but in conscious surrender to Allah's protection.",
    faqs: [
      {
        question: "Does As-Salam mean nothing bad will happen to me?",
        answer:
          "No. As-Salam doesn't guarantee comfort—it guarantees that nothing reaches you except through Allah's knowledge and wisdom. Pain, loss, and hardship may come, but the believer at peace knows every trial serves purpose. This is why the Prophet ﷺ experienced suffering yet was called 'peaceful'—his peace was in surrender, not circumstances.",
      },
      {
        question: "How do I find peace when I'm grieving or afraid?",
        answer:
          "Recite As-Salam and acknowledge your grief—Islamic peace doesn't deny pain. Then surrender: 'Allah knows my loss. Allah is in control.' This act of surrender, not denial, creates the peace that As-Salam provides. Seek community; grief alone is burden; grief with believers who practice As-Salam is healing.",
      },
      {
        question: "Can I have peace with people who wronged me?",
        answer:
          "As-Salam in relationships starts with releasing the demand that others compensate your pain. When you surrender the wound to Allah, you can either forgive and reconcile, or forgive and distance—both become possible. This is the peace As-Salam offers.",
      },
    ],
  },

  "al-adl": {
    id: 29,
    slug: "al-adl",
    extendedMeaning:
      "Al-Adl is absolute justice that never errs, never plays favorites, and never overcorrects. Unlike human judges constrained by evidence and bias, Al-Adl sees the innermost intentions. A person crushed by injustice finds hope in Al-Adl: nothing escapes His attention, and every wrong will be accounted for. Yet Al-Adl is different from Ar-Rahman—justice without mercy is tyranny, but justice infused with mercy is redemption.",
    quranicReference: {
      verse: "6:115",
      surah: "Al-An'am",
      text: "And the word of your Lord is complete in truth and justice. There is nothing that changes His words. And He is the All-Hearing, the All-Knowing.",
    },
    nameSpecificBenefits: [
      "Restores hope when wronged: No injustice is hidden from Allah's sight—even silent sufferings will be witnessed",
      "Motivates righteousness: Al-Adl's perfect judgment means every good deed is weighed fairly, every harm prevented fairly",
      "Prevents bitterness: Releasing grievance to Al-Adl frees you from toxic burden of seeking revenge",
      "Clarifies moral orientation: You're not accountable to human opinion but to Al-Adl's standard",
      "Protects the vulnerable: Those without earthly power or voice have Al-Adl as their ultimate court",
    ],
    reflectionTip:
      "If you've been wronged and denied justice, write down the injustice. Then write: 'Al-Adl sees this. Al-Adl will judge fairly.' Recite 'Ya Al-Adl' 100 times, surrendering the wound to His justice. This doesn't erase the harm, but it stops the hemorrhage of bitterness by transferring the burden to the Only Judge who will never err.",
    relatedNames: ["al-hakam", "al-haqq", "ash-shahid"],
    dhikrVariation: {
      count: 100,
      time: "When experiencing or witnessing injustice",
      intent: "Trust in Allah's ultimate judgment"
    },
    contrastParagraph: "Unlike divine names that emphasize forgiveness or compassion, Al-Adl centers on perfect, unwavering justice — a judgment so fair and absolute that even silent sufferings and hidden wrongs receive complete accountability.",
    faqs: [
      {
        question: "If Allah is Al-Adl, why do the wicked prosper while the righteous suffer?",
        answer:
          "Prosperity and suffering are tests, not rewards or punishments in this life. Al-Adl's perfect judgment is on the Day when all hidden things are revealed. Many tyrants face destruction in this world too, but more importantly, not a single atom of harm or good is missed in the Hereafter. This life is the test; the Hereafter is the verdict.",
      },
      {
        question: "How do I practice Al-Adl in my own judgment of others?",
        answer:
          "Assume good intentions, seek hidden context, and never judge without full knowledge. When you're tempted to condemn, recite Al-Adl and remember that you don't know hearts. This practice aligns your justice with His—incomplete, but humble.",
      },
      {
        question: "Does believing in Al-Adl mean I shouldn't seek legal justice?",
        answer:
          "No. Seeking justice through proper channels is obedience—it shows you value Al-Adl's justice enough to pursue it structurally. However, if justice is denied, you release the outcome to Al-Adl while continuing to live righteously. Both effort and surrender are required.",
      },
    ],
  },

  "al-ghafur": {
    id: 34,
    slug: "al-ghaffar",
    extendedMeaning:
      "Al-Ghafur is not merely an eraser of sin; the name implies that Allah, knowing you'll sin, forgives in advance if you return to Him. Ghafara means 'to cover'—Allah covers your sin so it doesn't expose you on the Day of Judgment. This differs from At-Tawwab (Acceptor of Repentance): Al-Ghafur forgives the deserving sinner; At-Tawwab receives the one who repents. Together, they show mercy from both directions.",
    quranicReference: {
      verse: "9:104",
      surah: "At-Tawbah",
      text: "Do they not know that Allah accepts repentance from His servants and takes in charity, and that Allah is Al-Ghafur (The Forgiving), Ar-Rahim (The Merciful)?",
    },
    nameSpecificBenefits: [
      "Shatters despair about past sins: No matter how grave, Al-Ghafur's forgiveness is greater",
      "Encourages immediate repentance: The door is open—return now, not tomorrow, to erase shame",
      "Prevents shame-based isolation: Many hide their struggles from community, but Al-Ghafur knows and forgives",
      "Creates cycles of goodness: Forgiveness instills gratitude, which motivates avoiding the sin again",
      "Establishes mercy as the norm: Your baseline relationship with Allah is one of forgiveness, not punishment",
    ],
    reflectionTip:
      "List three sins you harbor shame about—secret ones you've never confessed. Now recite: 'Ya Al-Ghafur, I return to You with these sins.' Feel the weight lift. Shame thrives in secrecy; Al-Ghafur's forgiveness thrives in confession and return. Tell one trusted person about one past failure—the act of un-hiding robs shame of its power. This is how Al-Ghafur's forgiveness becomes lived, not theoretical.",
    relatedNames: ["at-tawwab", "al-afuww", "ar-rahim"],
    dhikrVariation: {
      count: 70,
      time: "During moments of guilt or shame about past mistakes",
      intent: "Erasing shame and seeking cleansing"
    },
    contrastParagraph: "Unlike names that emphasize power or justice, Al-Ghafur focuses on repeated forgiveness, assuring believers that no sin is too frequent or too heavy when repentance is sincere and turning back is genuine.",
    faqs: [
      {
        question: "How many times can I be forgiven for the same sin?",
        answer:
          "Al-Ghafur's forgiveness is unlimited—but there's a condition: sincere repentance means intention not to repeat. If you keep committing the same sin seeking forgiveness repeatedly, you're mocking Al-Ghafur, not invoking Him. However, if you genuinely struggle and keep trying, Al-Ghafur's mercy extends each time.",
      },
      {
        question: "Does Al-Ghafur forgive sins against others, like theft or slander?",
        answer:
          "Al-Ghafur forgives even these sins if you repent—but repentance includes restitution or reconciliation. You can't invoke Al-Ghafur while refusing to face harm caused. True repentance means 'I was wrong to the person and to Allah, and I will fix it.'",
      },
      {
        question: "What if I repent but keep falling into the same pattern?",
        answer:
          "Al-Ghafur forgives the pattern itself. However, seek help: confide in a mentor, change your environment, or abandon the trigger. Forgiveness is Al-Ghafur's job; breaking the cycle is your effort. Both together create lasting change.",
      },
    ],
  },

  "an-nur": {
    id: 93,
    slug: "an-nur",
    extendedMeaning:
      "An-Nur (The Light) doesn't only mean literal illumination—it means clarity, guidance, truth, and the removal of confusion. A lost person in darkness cannot find the path; a person in spiritual darkness cannot distinguish right from wrong. An-Nur provides both: intellectual clarity (understanding truth) and emotional illumination (seeing the beauty in submission). Without An-Nur, knowledge becomes fragmented and spirituality becomes drowsy.",
    quranicReference: {
      verse: "24:35",
      surah: "An-Nur",
      text: "Allah is An-Nur of the heavens and the earth. The example of His Light is a niche where a lamp is placed. The lamp is in glass, the glass as if it were a star lit from a blessed tree—neither of the east nor of the west, whose oil would almost glow even if untouched by fire. Light upon light. Allah guides to His Light whom He wills.",
    },
    nameSpecificBenefits: [
      "Clarifies confusion: When you don't know the right choice, An-Nur reveals the path",
      "Awakens spiritual dormancy: Many practice Islam as habit; An-Nur transforms it to lived, radiant faith",
      "Provides intellectual safety: Truth recognized stops the soul from being led astray by falsehood",
      "Creates radiance in countenance: Believers guided by An-Nur are spiritually luminous—others sense their peace",
      "Unifies fragmented knowledge: An-Nur connects scientific knowledge with Quranic wisdom into coherent understanding",
    ],
    reflectionTip:
      "In complete darkness (your room at midnight), sit for 5 minutes. Notice how disorienting darkness is—you hesitate, unsure of space. Then turn on one light. Everything becomes clear and safe. This is An-Nur spiritually. Recite 'Ya An-Nur' and ask for clarity on one decision. Wait for the light to dawn in your heart—sometimes immediate, sometimes gradual, but unmistakable. That is An-Nur's guidance.",
    relatedNames: ["al-hadi", "al-alim", "al-hakim"],
    dhikrVariation: {
      count: 100,
      time: "At dawn, when light physically appears",
      intent: "Clarity and spiritual illumination"
    },
    contrastParagraph: "Unlike divine names that describe power or majesty, An-Nur emphasizes illumination and clarity — a light that penetrates confusion, awakens spiritual dormancy, and reveals truth at every level of existence.",
    faqs: [
      {
        question: "How is An-Nur different from Al-Hadi (The Guide)?",
        answer:
          "An-Nur is the light itself—truth, clarity, illumination. Al-Hadi is the One who guides you to walk on that light. An-Nur shows the path; Al-Hadi shows you how to walk it. You need both: insight into truth and support to follow it.",
      },
      {
        question: "Why does the Quran describe An-Nur as 'light upon light'?",
        answer:
          "This means layers of guidance: Quranic guidance (light), the Prophet's example (light), your conscience (light), and natural understanding (light) all converge. When these layers align, you experience 'light upon light'—overwhelming clarity and certainty.",
      },
      {
        question: "If Allah is An-Nur, why are believers still confused?",
        answer:
          "An-Nur is eternally shining, but some choose darkness—ignoring conscience, rejecting knowledge, following desire over truth. Others stand in shadow because they haven't positioned themselves to receive the light. Seeking An-Nur means opening yourself: studying, asking, listening, and obeying.",
      },
    ],
  },

  "al-hadi": {
    id: 94,
    slug: "al-hadi",
    extendedMeaning:
      "Al-Hadi is the Guide who not only shows the truth but holds your hand on the path. While knowledge is one thing, following it is another. Al-Hadi provides the strength, wisdom, and circumstances needed to walk the straight path. A lost traveler needs a map, but a weary traveler needs a guide who walks beside them, correcting course and providing sustenance. This is Al-Hadi.",
    quranicReference: {
      verse: "16:121",
      surah: "An-Nahl",
      text: "Indeed, Ibrahim was a leader [of men] obeying Allah, having been a monotheist. And he was not of those who associate partners with Allah. Grateful for His favors—Al-Hadi chose him and guided him on a straight path.",
    },
    nameSpecificBenefits: [
      "Provides perseverance on the right path: Not just knowing right, but staying on it despite trials",
      "Removes confusion at decision points: When multiple paths seem reasonable, Al-Hadi clarifies the best",
      "Creates trust in provision: If Allah guides you, He'll provide what you need to follow that guidance",
      "Corrects course when you stray: guidance isn't one-time; Al-Hadi continuously redirects the seeker",
      "Establishes personal relationship: Guidance is relational—Al-Hadi knows your unique struggles and context",
    ],
    reflectionTip:
      "Choose one area where you know the right path but struggle to follow it (health, honesty, family, prayer). For one week, each time you're tempted to stray, recite 'Ya Al-Hadi' and pause. This isn't just intellectual assent to correct knowledge; it's invocation of divine support to walk it. Notice how guidance becomes stronger when you engage it actively.",
    relatedNames: ["an-nur", "al-hakim", "as-sami"],
    dhikrVariation: {
      count: 99,
      time: "When at a crossroads or facing an important life decision",
      intent: "True guidance on the right path"
    },
    contrastParagraph: "Unlike divine names that emphasize knowledge or truth, Al-Hadi emphasizes active guidance — not just showing the path but supporting the guided one to actually walk it with courage and clarity.",
    faqs: [
      {
        question: "Does Al-Hadi guide only believers, or everyone?",
        answer:
          "The Quran says Al-Hadi 'guides whom He wills.' This suggests that guidance is contingent on seeking. Those who seek truth with sincere hearts are guided, even before accepting Islam. Those who pride themselves on knowledge and refuse to seek further remain without guidance. The condition is openness.",
      },
      {
        question: "What if I ask Al-Hadi for guidance but still make mistakes?",
        answer:
          "Mistakes and guidance aren't opposites. Al-Hadi guides you through mistakes—they become lessons. If you're genuinely seeking and fall, Al-Hadi immediately corrects your course. But if you ignore the correction, that's rejection, not lack of guidance.",
      },
      {
        question: "How do I know if a door is guidance from Al-Hadi or just coincidence?",
        answer:
          "True guidance aligns with Quranic principles, feels light in conscience, produces good outcomes over time, and increases you in faith. Coincidence is random; guidance is purposeful. When doors align with your intention to follow Allah, and they produce nearness to Him, that's Al-Hadi.",
      },
    ],
  },
};

// Helper function to get extended content
export function getExtendedAsmaulHusna(slug: string): AsmaulHusnaExtended | undefined {
  return asmaulHusnaExtended[slug];
}

// Helper to check if extended data exists
export function hasExtendedContent(slug: string): boolean {
  return slug in asmaulHusnaExtended;
}
