import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/lib/blogs";
import { blogCardMeta, blogExtra, headingLinks, withHeadingIds } from "@/lib/blog/meta";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SITE_URL } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Tasbih Hub`,
    description: blog.description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      url: `${SITE_URL}/blog/${slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) notFound();

  const meta = blogCardMeta(blog);
  const extra = blogExtra(blog.slug);
  const toc = headingLinks(blog.content || "");
  const html = withHeadingIds(blog.content || "");
  const related = extra.related
    .map((relatedSlug) => blogs.find((item) => item.slug === relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    datePublished: blog.datePublished,
    dateModified: blog.dateModified,
    url: `${SITE_URL}/blog/${blog.slug}`,
    author: { "@type": "Organization", name: "Tasbih Hub", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Tasbih Hub", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${blog.slug}`,
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: blog.title }]} />
      <article className="mt-6">
        <p className="text-xs uppercase tracking-wide text-[var(--gold)]">{meta.category}</p>
        <h1 className="font-display mt-2 text-4xl leading-tight">{blog.title}</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">
          Published by Tasbih Hub · {blog.datePublished}
          {blog.dateModified !== blog.datePublished ? ` · Updated ${blog.dateModified}` : ""} · {meta.readingTime} min read
        </p>
        {toc.length > 2 && (
          <nav aria-label="Table of contents" className="mt-6 rounded-2xl border border-[var(--line)] p-4">
            <p className="text-sm font-semibold">On this page</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
              {toc.map((item) => (
                <li key={item.id}><a href={`#${item.id}`}>{item.text}</a></li>
              ))}
            </ol>
          </nav>
        )}
        <div
          className="prose prose-lg mt-8 max-w-none dark:prose-invert prose-a:text-emerald-700 prose-headings:font-semibold"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <aside className="mt-10 space-y-4 border-t border-[var(--line)] pt-6">
        <p>
          Practice this with the <Link href={meta.tool} className="underline">related tool</Link>.
        </p>
        {related.length > 0 && (
          <div>
            <h2 className="font-display text-2xl">Related articles</h2>
            <ul className="mt-2 space-y-2">
              {related.map((item) => (
                <li key={item.slug}><Link href={`/blog/${item.slug}`}>{item.title}</Link></li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </div>
  );
}
