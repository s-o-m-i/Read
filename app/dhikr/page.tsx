import { Suspense } from "react";
import PageShell from "@/components/content/PageShell";
import DhikrLibrary from "@/components/dhikr/DhikrLibrary";
import { pageMetadata } from "@/lib/seo/keywordMap";

export const metadata = pageMetadata("/dhikr");

export default function DhikrLibraryPage() {
  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Dhikr" }]}>
      <header>
        <h1 className="font-display text-4xl sm:text-5xl">Dhikr Library</h1>
        <p className="mt-4 text-[var(--muted)]">
          A reading list of remembrance you can use without opening the counter. Search by meaning, or filter by the part of the day the phrase belongs to.
        </p>
      </header>
      <Suspense>
        <DhikrLibrary />
      </Suspense>
    </PageShell>
  );
}
