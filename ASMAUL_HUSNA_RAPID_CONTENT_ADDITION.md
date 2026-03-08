# ASMAUL HUSNA - EXACT DATA STRUCTURE FOR RAPID POPULATION

## Copy-Paste Template

Use this exact structure to add the remaining 89 names. Simply:
1. Copy the template below
2. Fill in bracketed [values]
3. Paste into `asmaulHusnaExtended.ts`
4. Test in browser

---

## TEMPLATE: COMPLETE NAME ENTRY

```typescript
"[SLUG-HERE]": {
  id: [NUMBER],
  slug: "[SLUG-HERE]",
  
  // 2-3 UNIQUE PARAGRAPHS (NOT GENERIC, SPECIFIC TO THIS ATTRIBUTE)
  extendedMeaning: `[PARAGRAPH 1: Etymology/Root meaning]
[PARAGRAPH 2: How this attribute differs from similar names or complements others]
[PARAGRAPH 3: How this attribute provides spiritual value to believers]`,

  // SPECIFIC QURANIC VERSE (REAL, VALIDATED, AUTHENTICATED TRANSLATION)
  quranicReference: {
    verse: "[XX:YY]",  // e.g., "59:22"
    surah: "[Surah Name]",  // e.g., "Al-Hashr"
    text: "[Exact or close-to-exact Quranic text mentioning/implying this name]"
  },

  // 3-5 NAME-SPECIFIC BENEFITS (UNIQUE, NOT GENERIC)
  nameSpecificBenefits: [
    "[Concrete benefit #1 specific to this name's unique quality]",
    "[Concrete benefit #2 addressing a spiritual need this attribute fulfills]",
    "[Concrete benefit #3 showing real-world application of this attribute]",
    "[Concrete benefit #4 (optional but recommended)]",
    "[Concrete benefit #5 (optional)]"
  ],

  // ACTIONABLE, SPECIFIC REFLECTION/PRACTICE TIP
  reflectionTip: `[Narrative explanation of how to contemplate/practice this name]
[Specific daily practice: e.g., "Recite X times before Y action"]
[Expected transformation: what internal change will occur]`,

  // 1-2 SEMANTICALLY RELATED NAMES (FROM SAME CATEGORY)
  relatedNames: [
    "[slug-of-related-attribute]",
    "[slug-of-another-related-attribute]"
  ],

  // 2-3 FAQ ENTRIES (NAME-SPECIFIC, NOT GENERIC)
  faqs: [
    {
      question: "[Q1: What does [Name] mean in practical terms?]",
      answer: "[2-3 sentence answer explaining practical meaning and application]"
    },
    {
      question: "[Q2: How is [Name] different from [Related Name]?]",
      answer: "[Comparison showing distinction and why both are important]"
    },
    {
      question: "[Q3: How can I apply [Name] to [relevant life situation]?]",
      answer: "[Actionable advice for using this attribute daily]"
    }
  ]
}
```

---

## REAL EXAMPLE: AL-MALIK (The King)

```typescript
"al-malik": {
  id: 3,
  slug: "al-malik",
  
  extendedMeaning: `Al-Malik literally means 'The King' or 'The Sovereign.' But unlike earthly kings who inherit thrones, fear rivals, or lose power, Al-Malik's dominion is intrinsic, eternal, and unquestionable. This name addresses humanity's deepest confusion: Who truly holds authority? The answer: Only Allah. Your boss, the government, the wealthy—all possess borrowed power that exists only by Allah's permission and can be revoked instantly.

Al-Malik establishes a fundamental hierarchy of reality. When believers forget Al-Malik, they become enslaved to worldly rulers and temporal powers. They fear job loss, government persecution, social rejection. But when they remember Al-Malik, these fears dissolve because they recognize they ultimately serve one Master whose kingdom is indestructible.

For those crushed by unjust earthly authority, Al-Malik provides profound relief. Your oppressor does not rule the universe; their reach is limited by invisible boundaries Allah has set. Meanwhile, you serve the One whose authority has no limits and whose justice is certain. This is both a comfort and a call to realign your life.`,

  quranicReference: {
    verse: "23:116",
    surah: "Al-Mu'minun",
    text: "So exalted is Allah, Al-Malik (The True King)—there is no god except Him. Everything will perish except Him."
  },

  nameSpecificBenefits: [
    "Liberates you from human fear by revealing that earthly authorities are servants serving a Master above them",
    "Clarifies your life purpose: If Allah is the True King, then wealth, status, and position are temporary loans, not permanent identities",
    "Builds unshakeable resilience: Losing a job, social status, or earthly power is returning what was never truly yours",
    "Strengthens moral courage: You answer to Al-Malik's kingdom law, not to approval-seeking from temporal rulers",
    "Unifies your life purpose: All competing loyalties collapse into one—serving the only King whose rule is eternal"
  ],

  reflectionTip: `For 3 days, audit your decisions by asking: Whose kingdom am I serving right now? When you seek approval, money, or status, notice if you've temporarily forgotten Al-Malik. Recite 'Ya Al-Malik' 100 times and observe: Your anxiety about earthly rulership dissolves. The job threat remains. The government still has power. But your foundation shifts from sand to bedrock—you remember you serve the King of Kings. By day 3, you'll notice yourself making decisions differently, with less desperation and more peace.`,

  relatedNames: [
    "al-quddus",  // The Most Holy (His authority is beyond all deficiency)
    "al-aziz",    // The Almighty (possesses invincible power)
    "al-aliy"     // The Most High (exalted above all)
  ],

  faqs: [
    {
      question: "If Allah is Al-Malik, why do corrupt rulers stay in power?",
      answer: "Al-Malik permits temporary authority to corrupt rulers as a test for believers and a rope for the rulers' self-destruction. The Quran shows this pattern repeatedly—tyrants are allowed to rule briefly, then Allah's judgment reverses everything. The key: Al-Malik's final judgment is certain, even if earthly justice is delayed."
    },
    {
      question: "How should knowing Al-Malik change how I work and earn money?",
      answer: "Recognize your job, income, and livelihood as permissions from Al-Malik. You're not enslaved to an employer's whims or desperation for money. Work with excellence and integrity because you serve Allah through your work, not for the approval or paychecks of temporal rulers. This paradoxically makes you more successful—less desperate seeking shows, more authentic excellence."
    },
    {
      question: "What does Al-Malik mean for my rights and possessions?",
      answer: "Nothing you own is ultimately yours. You're a steward of Al-Malik's property. This is why Islamic law emphasizes wealth redistribution, inheritance, and charity. Your wealth is a trust. At death, you return it. This lifetime, you're accountable for how you used Al-Malik's trust. This understanding shifts greed into stewardship and hoarding into generosity."
    }
  ]
}
```

---

## MINIMAL TEMPLATE (FASTEST)

If time is limited, use this minimal structure (will still display correctly):

```typescript
"[slug]": {
  id: [num],
  slug: "[slug]",
  extendedMeaning: "[3 paragraphs about this specific attribute—NOT generic]",
  quranicReference: { 
    verse: "[XX:YY]", 
    surah: "[Name]", 
    text: "[Verse text]" 
  },
  nameSpecificBenefits: [
    "[Benefit 1 - unique to this name]",
    "[Benefit 2 - unique to this name]",
    "[Benefit 3 - unique to this name]"
  ],
  reflectionTip: "[Actionable practice specific to this name]",
  relatedNames: ["[related-slug-1]"],
  faqs: [
    {
      question: "[Q - what does [Name] mean?]",
      answer: "[A - 2-3 sentences]"
    }
  ]
}
```

---

## DO's AND DON'Ts

### ✅ DO:
```typescript
// ✅ GOOD: Specific to Al-Adl
{
  question: "If Allah is Al-Adl, why do the wicked prosper?",
  answer: "Prosperity in this life is a test, not a reward. Al-Adl's perfect judgment is in the Hereafter..."
}

// ✅ GOOD: Unique benefit
nameSpecificBenefits: [
  "Prevents bitter revenge-seeking by releasing grievance to Al-Adl's perfect judgment"
]

// ✅ GOOD: Real Quranic reference
{ 
  verse: "6:115",
  surah: "Al-An'am",
  text: "And the word of your Lord is complete in truth and justice..."
}
```

### ❌ DON'T:
```typescript
// ❌ BAD: Generic (copy-pasted from another name)
{
  question: "What are the benefits of this name?",
  answer: "Many benefits include spiritual awareness and peace."
}

// ❌ BAD: Generic benefit (on every name)
nameSpecificBenefits: [
  "Softens the heart and increases spiritual awareness"
]

// ❌ BAD: Vague reference
{
  verse: "6",
  surah: "Al-An'am",
  text: "Allah is just..."  // Not actual Quranic text
}

// ❌ BAD: Not actionable
{
  reflectionTip: "Contemplate this name and feel its power."
}
```

---

## QUICK REFERENCE: RELATED NAMES BY THEME

Use these groupings to populate `relatedNames`:

### MERCY CLUSTER
- ar-rahman, ar-rahim, al-ghafur, at-tawwab, ar-rauf, al-wadud, al-afuww

### JUSTICE CLUSTER
- al-adl, al-hakam, ash-shahid, as-sami, al-bashir, al-muqsith

### POWER CLUSTER
- al-aziz, al-jabbar, al-qahhar, al-qawiyyu, al-matin, al-muqtadir

### KNOWLEDGE CLUSTER
- al-alim, al-khabir, al-hafizh, al-muhshi, al-lathif

### CREATION CLUSTER
- al-khaliq, al-bari, al-mushawwir, al-mubdi, al-mu'id, al-muhyi, al-mumit

### GUIDANCE CLUSTER
- an-nur, al-hadi, al-hakim, al-waliyy, al-mujib, al-sami

### TRANSCENDENCE CLUSTER
- al-malik, al-quddus, as-salam, al-aliy, al-kabir, al-azhim

---

## AUTOMATED CONTENT GENERATION HINTS

If using AI to help generate extended content:

### Prompt Template:
```
You are an Islamic scholar writing about the divine attribute [NAME - MEANING].

Write the following maintaining accuracy to Islamic theology:

1. EXTENDED MEANING (150-200 words):
   - Etymology and core concept
   - How this attribute differs from similar names
   - Why this attribute matters spiritually
   - Do NOT be generic; be specific to [NAME]

2. QURANIC REFERENCE:
   - Find a real Quranic verse mentioning/implying [NAME]
   - Format: Surah Name (XX:YY)
   - Provide actual verse text

3. NAME-SPECIFIC BENEFITS (3-5 unique benefits):
   - Each benefit must be specific to [NAME], not generic
   - Address how this attribute solves a human spiritual problem
   - Make concrete, not abstract

4. REFLECTION TIP:
   - Provide actionable, specific daily practice
   - Make it applicable to modern believer
   - Include concrete numbers (recite X times) or scenarios

5. RELATED NAMES (1-2 semantically linked names):
   - Names that complement or contrast with [NAME]
   - Recommend names from the same thematic cluster

6. FAQs (2-3 unique theological questions):
   - Q1: What does [NAME] mean practically?
   - Q2: How does [NAME] differ from __? OR How do apply [NAME]?
   - Q3: Address a common misconception or challenge

Ensure all content is theologically sound, grounded in Quranic/Hadith sources, and specific to [NAME].
```

---

## CONTENT QUALITY CHECKLIST

Before saving any name entry, verify:

- [ ] Extended meaning is 2-3 paragraphs (not 1, not 5+)
- [ ] Extended meaning is SPECIFIC to this name (not generic template)
- [ ] Quranic reference has real Surah, verse number, actual text
- [ ] NAME appears or is clearly implied in the Quranic verse
- [ ] Each benefit is unique (not repeated from other names)
- [ ] Each benefit is CONCRETE not abstract (avoid "increases awareness")
- [ ] Reflection tip is ACTIONABLE (includes an actual practice/meditation)
- [ ] Related names are semantically appropriate (same theme)
- [ ] Q1 addresses "What does [Name] mean?" in practical terms
- [ ] Q2 either contrasts with related name OR addresses application
- [ ] Q3 addresses a real theological question/misconception
- [ ] Reading the entry, it feels written by a different Islamic scholar

---

## BATCH ADDITION WORKFLOW

### For rapid population of remaining 89 names:

1. **Create CSV spreadsheet** with columns:
   - ID, Slug, English Name, Meaning
   - Extended Meaning (copy from Islamic reference)
   - Quranic Verse (XX:YY)
   - Related Names (comma-separated slugs)

2. **Use template for each row:**
   - Extended Meaning: Paste/adapt from research
   - Quranic Reference: Validate verse exists
   - Benefits: Generate 3-5 unique benefits from Name's meaning
   - Reflection Tip: Create actionable practice
   - FAQs: Generate 2-3 Q&A from theological implications

3. **Validate:**
   - No copy-paste between names
   - Each entry is specific, not generic
   - All Quranic references are real

4. **Add to TypeScript:**
   - Convert spreadsheet to TypeScript object
   - Format with proper quotes and escaping

---

## ESTIMATED TIME PER NAME

- **Research:** 5 minutes (find Quranic verse, reference meanings)
- **Writing:** 10 minutes (extended meaning, benefits, reflection)
- **FAQ:** 5 minutes (generate 2-3 Q&A)
- **Validation:** 2 minutes (check for uniqueness, accuracy)

**Total per name:** ~20-25 minutes
**For remaining 89 names:** ~30-35 hours

---

## SUBMIT FOR REVIEW

Before adding to extended data, have reviewed:
- [ ] Islamic accuracy (scholar review recommended)
- [ ] Quranic verse authenticity (cross-check translation)
- [ ] Content uniqueness (no copy-paste)
- [ ] Theological soundness

---

**Last Updated:** February 8, 2026
**Status:** Ready for Production Content Addition
