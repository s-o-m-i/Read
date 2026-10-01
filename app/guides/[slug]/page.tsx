import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/content/PageShell";
import JsonLd from "@/components/seo/JsonLd";
import { GUIDES, getGuide } from "@/lib/content/guides";
import { SITE_URL } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | Tasbih Hub`,
    description: guide.description,
    alternates: { canonical: `${SITE_URL}/guides/${slug}` },
    openGraph: { title: guide.title, description: guide.description, type: "article", url: `${SITE_URL}/guides/${slug}` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: guide.title }]}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          author: { "@type": "Organization", name: "Tasbih Hub" },
          publisher: { "@type": "Organization", name: "Tasbih Hub" },
          mainEntityOfPage: `${SITE_URL}/guides/${slug}`,
        }}
      />
      <h1 className="font-display text-4xl sm:text-5xl">{guide.title}</h1>
      <p className="text-[var(--muted)]">{guide.description}</p>
      {guide.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <ul className="list-disc space-y-2 pl-5">
        {guide.links.map((link) => (
          <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
        ))}
      </ul>
    </PageShell>
  );
}
