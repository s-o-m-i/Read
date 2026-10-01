export const BLOG_CATEGORIES = [
  "Dhikr",
  "Adhkar",
  "Tasbih",
  "Istighfar",
  "Durood",
  "Ramadan",
  "Islamic Remembrance",
  "99 Names of Allah",
] as const;

type Extra = {
  category: (typeof BLOG_CATEGORIES)[number];
  tool: string;
  related: string[];
};

const extras: Record<string, Extra> = {
  "islamic-perspective-body-health": {
    category: "Islamic Remembrance",
    tool: "/dhikr-counter",
    related: ["how-small-acts-of-dhikr-transform-the-heart", "benefits-of-istighfar"],
  },
  "1000-istighfar-ramadan": {
    category: "Ramadan",
    tool: "/istighfar-counter",
    related: ["benefits-of-istighfar", "what-to-read-in-ramadan"],
  },
  "benefits-of-istighfar": {
    category: "Istighfar",
    tool: "/istighfar-counter",
    related: ["1000-istighfar-ramadan", "how-small-acts-of-dhikr-transform-the-heart"],
  },
  "benefits-of-durood-sharif": {
    category: "Durood",
    tool: "/durood-counter",
    related: ["benefits-of-istighfar", "digital-tasbih-counter-why-switching"],
  },
  "how-small-acts-of-dhikr-transform-the-heart": {
    category: "Dhikr",
    tool: "/dhikr-counter",
    related: ["benefits-of-istighfar", "digital-tasbih-counter-why-switching"],
  },
  "digital-tasbih-counter-why-switching": {
    category: "Tasbih",
    tool: "/tasbih-counter",
    related: ["how-small-acts-of-dhikr-transform-the-heart", "benefits-of-durood-sharif"],
  },
  "what-to-read-in-ramadan": {
    category: "Ramadan",
    tool: "/morning-adhkar",
    related: ["laylatul-qadr-dua", "1000-istighfar-ramadan"],
  },
  "laylatul-qadr-dua": {
    category: "Ramadan",
    tool: "/dhikr-counter",
    related: ["what-to-read-in-ramadan", "1000-istighfar-ramadan"],
  },
  "eid-ul-adha-comprehensive-guide": {
    category: "Islamic Remembrance",
    tool: "/dhikr-after-salah",
    related: ["what-to-read-in-ramadan", "benefits-of-istighfar"],
  },
};

export function readingTime(html: string) {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function headingLinks(html: string) {
  const matches = [...html.matchAll(/<h2>(.*?)<\/h2>/g)];
  return matches.map((match) => {
    const text = match[1].replace(/<[^>]+>/g, "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return { id, text };
  });
}

export function withHeadingIds(html: string) {
  return html.replace(/<h2>(.*?)<\/h2>/g, (_, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return `<h2 id="${id}">${inner}</h2>`;
  });
}

export function blogExtra(slug: string): Extra {
  return extras[slug] ?? {
    category: "Islamic Remembrance",
    tool: "/tasbih-counter",
    related: ["benefits-of-istighfar", "how-small-acts-of-dhikr-transform-the-heart"],
  };
}

export function blogCardMeta(blog: { slug: string; content?: string }) {
  const extra = blogExtra(blog.slug);
  return {
    category: extra.category,
    tool: extra.tool,
    related: extra.related,
    readingTime: readingTime(blog.content || ""),
  };
}
