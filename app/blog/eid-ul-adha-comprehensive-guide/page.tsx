// app/blog/eid-ul-adha-comprehensive-guide/page.tsx
import Link from 'next/link';
import { blogs } from '../../../lib/blogs';

export const metadata = {
  title: 'Eid ul-Adha 2024: Complete Guide to the Festival of Sacrifice | Tasbih Hub',
  description: 'Discover Eid ul-Adha traditions, Islamic significance, Quranic verses, Hadith, and how Muslims celebrate this sacred festival across Saudi Arabia, UAE, Pakistan, Egypt, Indonesia, Malaysia, Turkey, and more.',
  keywords: 'Eid ul-Adha, Eid al-Adha, Festival of Sacrifice, Bakri Eid, Qurbani, Muslim celebration, Islamic festival, how to celebrate Eid ul-Adha',
  authors: [{ name: 'Tasbih Hub' }],
  openGraph: {
    title: 'Eid ul-Adha 2024: Complete Guide to the Festival of Sacrifice',
    description: 'Comprehensive guide to Eid ul-Adha with Quranic verses, Hadith, and celebrations across Muslim countries.',
    type: 'article',
    publishedTime: '2026-03-25',
    url: 'https://tasbih-counter.vercel.app/blog/eid-ul-adha-comprehensive-guide',
  },
};

export default function EidUlAdhaPage() {
  const blog = blogs.find((b) => b.slug === 'eid-ul-adha-comprehensive-guide');

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <article
        className="mx-auto max-w-3xl px-4 py-10
                   text-gray-900 dark:text-gray-100"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* Back to Blog Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-emerald-600 hover:underline font-medium"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            itemProp="headline"
          >
            {blog.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4" itemProp="description">
            {blog.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <time
              dateTime={blog.datePublished}
              itemProp="datePublished"
            >
              Published: {new Date(blog.datePublished).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {blog.dateModified && (
              <time
                dateTime={blog.dateModified}
                itemProp="dateModified"
              >
                Updated: {new Date(blog.dateModified).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {blog.image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover"
              itemProp="image"
            />
          </div>
        )}

        {/* Article Content */}
        <div
          className="prose dark:prose-invert max-w-none
                     prose-p:text-base prose-p:leading-relaxed
                     prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                     prose-h2:text-2xl prose-h2:md:text-3xl
                     prose-h3:text-xl prose-h3:md:text-2xl
                     prose-li:text-base prose-li:leading-relaxed
                     prose-a:text-emerald-600 hover:prose-a:underline
                     prose-strong:font-semibold"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: blog.content || '' }}
        />

        {/* Related Tools Section */}
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Enhance Your Worship</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Use our free Islamic tools to complement your spiritual practice:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/tasbih-counter"
              className="p-4 rounded-lg border border-emerald-200 dark:border-emerald-800
                         hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition"
            >
              <h3 className="font-semibold text-emerald-600 mb-2">Tasbih Counter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Track your daily glorification of Allah
              </p>
            </Link>
            <Link
              href="/dhikr-counter"
              className="p-4 rounded-lg border border-emerald-200 dark:border-emerald-800
                         hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition"
            >
              <h3 className="font-semibold text-emerald-600 mb-2">Dhikr Counter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Count your remembrance of Allah
              </p>
            </Link>
            <Link
              href="/durood-counter"
              className="p-4 rounded-lg border border-emerald-200 dark:border-emerald-800
                         hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition"
            >
              <h3 className="font-semibold text-emerald-600 mb-2">Durood Counter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Send blessings upon the Prophet
              </p>
            </Link>
          </div>
        </section>

        {/* Back to Blog Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-2 rounded-lg bg-emerald-600
                       hover:bg-emerald-700 text-white font-medium transition"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
