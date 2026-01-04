// app/blog/page.tsx
import Link from 'next/link';
import React from 'react';
import { blogs } from '../../lib/blogs';

/**
 * Blogs Index Page
 * ----------------
 * - Static, fast, SEO-friendly
 * - Lists all blogs from /libs/blogs
 * - Future-proof: can be replaced with WP API later
 */

export default function BlogIndexPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section
        className="mx-auto max-w-4xl px-4 py-10
                   text-gray-900 dark:text-gray-100"
        aria-label="Blog listing"
      >
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-semibold mb-2">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Articles on tasbih, dhikr, istighfar, and mindful remembrance.
          </p>
        </header>

        {/* Blog List */}
        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li
              key={blog.slug}
              className="rounded-xl border border-gray-200 dark:border-gray-700
                         p-5 hover:bg-gray-50 dark:hover:bg-gray-800
                         transition"
            >
              <Link
                href={`/blog/${blog.slug}`}
                className="block focus:outline-none focus:ring-2
                           focus:ring-emerald-400 rounded-lg"
              >
                <h2 className="text-xl font-medium mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {blog.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
