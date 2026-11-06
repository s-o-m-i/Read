import Link from "next/link";
import DhikrCounter from "@/components/dhikr/DhikrCounter";
import RoutinePlayer from "@/components/dhikr/RoutinePlayer";
import IstighfarArticle from "@/components/content/IstighfarArticle";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { SITE_URL } from "@/lib/i18n/locales";

export const metadata = pageMetadata("/istighfar-counter", {
  openGraph: {
    title: "Online Istighfar Counter – Count Astaghfirullah | TasbihHub",
    description:
      "Use our free online Istighfar counter to count Astaghfirullah easily. Track your daily dhikr, set recitation goals, and stay consistent with your remembrance of Allah.",
    url: `${SITE_URL}/istighfar-counter`,
    type: "website",
    siteName: "Tasbih Hub",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        alt: "Online Istighfar Counter – Tasbih Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Istighfar Counter – Count Astaghfirullah | TasbihHub",
    description:
      "Use our free online Istighfar counter to count Astaghfirullah easily. Track your daily dhikr, set recitation goals, and stay consistent with your remembrance of Allah.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: `${SITE_URL}/istighfar-counter`,
  },
});

export default function IstighfarPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <h1 className="sr-only">Online Istighfar Counter</h1>

      <section id="istighfar-counter" aria-label="Istighfar Counter Tool">
        <DhikrCounter storageKey="istighfar" initialDhikrId="astaghfirullah" title="Istighfar Counter" hero />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-8" aria-label="Istighfar routine">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100">Istighfar routine</h2>
        <p className="mb-4 text-center text-sm text-gray-600 dark:text-gray-300">
          One hundred short istighfar, then Sayyid al-Istighfar once. Read the wording on{" "}
          <Link className="text-emerald-700 underline" href="/dhikr/astaghfirullah">
            Astaghfirullah
          </Link>{" "}
          and{" "}
          <Link className="text-emerald-700 underline" href="/dhikr/sayyid-al-istighfar">
            Sayyid al-Istighfar
          </Link>
          .
        </p>
        <RoutinePlayer routineId="istighfar" />
      </section>

      <IstighfarArticle />
    </main>
  );
}
