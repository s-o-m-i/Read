/**
 * SEO Helper Functions for Asmaul Husna
 * Generates JSON-LD schemas, internal links, and related content
 */

import { asmaulHusnaData } from "../data/asmaulHusna";
import { asmaulHusnaExtended } from "../data/asmaulHusnaExtended";

type SchemaType = "FAQPage" | "Article" | "BreadcrumbList";

interface FAQSchema {
  "@context": string;
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

interface ArticleSchema {
  "@context": string;
  "@type": "Article";
  headline: string;
  description: string;
  keywords: string;
  author: {
    "@type": "Organization";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
  };
  articleSection: string;
  inLanguage: string;
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
  about: {
    "@type": "Thing";
    name: string;
    description: string;
  };
}

interface BreadcrumbSchema {
  "@context": string;
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * Generate FAQ Schema for a specific Asmaul Husna name
 */
export function generateFAQSchema(slug: string): FAQSchema | null {
  const name = asmaulHusnaExtended[slug];

  if (!name || !name.faqs || name.faqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: name.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Article Schema for a specific name page
 */
export function generateArticleSchema(
  slug: string,
  nameLatin: string,
  meaning: string,
  desc: string,
  canonicalUrl: string
): ArticleSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${nameLatin} - ${meaning} | Asmaul Husna`,
    description: desc,
    keywords: `${nameLatin}, 99 names of Allah, Asmaul Husna, Islamic names, ${meaning}`,
    author: {
      "@type": "Organization",
      name: "TasbihHub",
    },
    publisher: {
      "@type": "Organization",
      name: "TasbihHub",
    },
    articleSection: "Asmaul Husna",
    inLanguage: "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    about: {
      "@type": "Thing",
      name: `${nameLatin} - ${meaning}`,
      description: `One of the 99 Beautiful Names of Allah (Asmaul Husna)`,
    },
  };
}

/**
 * Generate Breadcrumb Schema
 */
export function generateBreadcrumbSchema(nameLatin: string): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tasbihhub.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Asmaul Husna",
        item: "https://tasbihhub.com/asmaul-husna",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: nameLatin,
        item: `https://tasbihhub.com/asmaul-husna/${asmaulHusnaData.find((n) => n.nameLatin === nameLatin)?.slug}`,
      },
    ],
  };
}

/**
 * Get related names for internal linking
 * Returns related names with their data
 */
export function getRelatedNames(slug: string) {
  const extended = asmaulHusnaExtended[slug];

  if (!extended || !extended.relatedNames) {
    return [];
  }

  return extended.relatedNames
    .map((relatedSlug) => {
      const nameData = asmaulHusnaData.find((n) => n.slug === relatedSlug);
      return nameData ? { ...nameData } : null;
    })
    .filter((name) => name !== null);
}

/**
 * Generate Schema.org markup JSON string
 */
export function generateSchemaJSON(schema: FAQSchema | ArticleSchema | BreadcrumbSchema): string {
  return JSON.stringify(schema, null, 2);
}

/**
 * Get enriched metadata for a name
 */
export interface EnrichedMetadata {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
  keywords: string[];
  extendedMeaning: string | null;
  quranicReference: { verse: string; surah: string; text: string } | null;
}

export function getEnrichedMetadata(
  slug: string,
  nameLatin: string,
  nameArabic: string,
  meaningEn: string,
  baseDomain: string = "https://tasbihhub.com"
): EnrichedMetadata {
  const extended = asmaulHusnaExtended[slug];

  return {
    title: `${nameLatin} - ${meaningEn} | Asmaul Husna | TasbihHub`,
    description: `Learn the meaning of ${nameLatin}, benefits of reciting ${nameLatin}, and how to practice this divine attribute. Include Quranic references and dhikr guide.`,
    ogTitle: `${nameLatin} (${nameArabic}) - ${meaningEn}`,
    ogDescription: `Discover the spiritual and Islamic significance of the name ${nameLatin}.`,
    canonicalUrl: `${baseDomain}/asmaul-husna/${slug}`,
    keywords: [
      nameLatin,
      `${nameLatin} meaning`,
      `99 names of Allah`,
      `Asmaul Husna`,
      `${nameLatin} benefits`,
      `${nameLatin} dhikr`,
      meaningEn,
    ],
    extendedMeaning: extended?.extendedMeaning || null,
    quranicReference: extended?.quranicReference || null,
  };
}

/**
 * Helper to check if a name has premium content (extended data)
 */
export function isPremiumContent(slug: string): boolean {
  return slug in asmaulHusnaExtended;
}

/**
 * Generate internal link suggestions based on semantic relevance
 */
export function getInternalLinkSuggestions(slug: string) {
  const name = asmaulHusnaData.find((n) => n.slug === slug);
  if (!name) return [];

  // For names without extended content, suggest related by theme
  const thematicGroups: Record<string, string[]> = {
    mercy: ["ar-rahman", "ar-rahim", "al-ghafur", "at-tawwab", "ar-rauf"],
    power: ["al-aziz", "al-jabbar", "al-qahhar", "al-qawiyyu", "al-matin"],
    knowledge: ["al-alim", "al-khabir", "ash-shahid", "al-hafizh", "al-muhshi"],
    justice: ["al-adl", "al-hakam", "as-sami", "al-bashir", "ash-shahid"],
    protection: ["al-waliyy", "al-mohyi", "al-hafizh", "al-muqaddim", "al-muakhkhir"],
  };

  for (const [theme, slugs] of Object.entries(thematicGroups)) {
    if (slugs.includes(slug)) {
      return slugs
        .filter((s) => s !== slug)
        .slice(0, 2)
        .map((s) => asmaulHusnaData.find((n) => n.slug === s))
        .filter((n) => n !== undefined);
    }
  }

  return [];
}
/**
 * Generate dynamically rotating H1 title variants to prevent SERP footprint duplication
 * Rotates through 4 different title patterns based on id % 4
 */
export function getH1Variant(id: number, nameLatin: string, meaningEn: string): string {
  const variants = [
    `${nameLatin}: Meaning & Spiritual Benefits with Dhikr Guide`, // variant 0
    `What Does ${nameLatin} Mean? Benefits, Reflection & How to Recite`, // variant 1
    `${nameLatin} in Islam: Divine Attribute, Meaning & Dhikr`, // variant 2
    `${nameLatin} – Divine Attribute Explained with Spiritual Benefits`, // variant 3
  ];
  
  const index = id % 4;
  return variants[index];
}

/**
 * Get the metadata title (different from H1 for SEO variety)
 * Also rotates but uses different pattern than H1
 */
export function getMetadataTitle(nameLatin: string, meaningEn: string): string {
  return `${nameLatin} - ${meaningEn} | Asmaul Husna | TasbihHub`;
}

/**
 * Get the contrast paragraph that distinguishes this name from other divine attributes
 * These paragraphs create semantic contrast for Google to differentiate pages
 */
export function getContrastParagraph(slug: string): string | null {
  const extended = asmaulHusnaExtended[slug];
  return extended?.contrastParagraph || null;
}

/**
 * Get the dhikr method variation (count, time, intent) for this specific name
 */
export function getDhikrMethodVariation(slug: string): { count: number; time: string; intent: string } | null {
  const extended = asmaulHusnaExtended[slug];
  if (!extended?.dhikrVariation) {
    // Fallback for names without extended data
    return {
      count: 100,
      time: "After Fajr or anytime during the day",
      intent: "Remembrance and connection with Allah's attribute"
    };
  }
  return extended.dhikrVariation;
}