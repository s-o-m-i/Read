/**
 * Localization registry.
 * English and Indonesian have real pages. Other locales are reserved so
 * routing and hreflang can grow without publishing machine-translated URLs.
 */
export const LIVE_LOCALES = ["en", "id"] as const;

export const PLANNED_LOCALES = [
  { code: "ar", name: "Arabic", dir: "rtl" },
  { code: "ru", name: "Russian", dir: "ltr" },
  { code: "tr", name: "Turkish", dir: "ltr" },
  { code: "fr", name: "French", dir: "ltr" },
  { code: "de", name: "German", dir: "ltr" },
  { code: "es", name: "Spanish", dir: "ltr" },
] as const;

export const SITE_URL = "https://tasbihhub.com";

export function localePath(locale: string, path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return clean;
  return `/${locale}${clean}`;
}
