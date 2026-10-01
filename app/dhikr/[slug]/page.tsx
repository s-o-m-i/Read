import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell, { TextLink } from "@/components/content/PageShell";
import FaqList from "@/components/content/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import { DHIKR_ARTICLES, getDhikrArticle } from "@/lib/dhikr/articles";
import { getDhikr, getDhikrBySlug } from "@/lib/dhikr/catalog";
import { SITE_URL } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return Object.keys(DHIKR_ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getDhikrArticle(slug);
  const dhikr = getDhikrBySlug(slug);
  if (!article || !dhikr) return {};
  const title = `${article.h1} | Tasbih Hub`;
  const description = `${dhikr.translation} Read the Arabic, transliteration, when to recite it, and count it on Tasbih Hub.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/dhikr/${slug}` },
    openGraph: { title, description, url: `${SITE_URL}/dhikr/${slug}`, type: "article" },
  };
}

export default async function DhikrDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getDhikrArticle(slug);
  const dhikr = getDhikrBySlug(slug);
  if (!article || !dhikr) notFound();

  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Dhikr", href: "/dhikr" }, { name: dhikr.transliteration }]}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.h1,
          description: dhikr.translation,
          author: { "@type": "Organization", name: "Tasbih Hub" },
          publisher: { "@type": "Organization", name: "Tasbih Hub", url: SITE_URL },
          mainEntityOfPage: `${SITE_URL}/dhikr/${slug}`,
        }}
      />
      <header>
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">{article.h1}</h1>
        <p className="font-arabic mt-6 text-4xl leading-relaxed text-[var(--green)] dark:text-[var(--gold)]" dir="rtl" lang="ar">{dhikr.arabic}</p>
        <p className="mt-4 text-xl">{dhikr.transliteration}</p>
        <p className="mt-2 text-[var(--muted)]">{dhikr.translation}</p>
      </header>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">When to recite it</h2>
        <ul className="list-disc space-y-2 pl-5">{article.when.map((line) => <li key={line}>{line}</li>)}</ul>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Meaning and practice</h2>
        {article.explanation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p className="text-sm text-[var(--muted)]">Source note: {dhikr.source}. Recommended count: {dhikr.recommendedCount ?? "once"}.</p>
      </section>
      <p>
        <Link href={`/dhikr-counter?dhikr=${dhikr.id}`} className="inline-flex rounded-full bg-[var(--green)] px-5 py-3 text-[#f7f3ea] dark:text-[#14241c]">
          Count this dhikr
        </Link>
      </p>
      <section>
        <h2 className="font-display text-3xl">Related dhikr</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {article.related.map((id) => {
            const related = getDhikr(id);
            if (!related?.slug) return null;
            return <li key={id}><TextLink href={`/dhikr/${related.slug}`}>{related.transliteration}</TextLink></li>;
          })}
          <li><TextLink href="/dhikr-after-salah">Dhikr after salah</TextLink></li>
          <li><TextLink href="/tasbih-counter">Tasbih counter</TextLink></li>
        </ul>
      </section>
      <FaqList items={article.faqs} />
    </PageShell>
  );
}
