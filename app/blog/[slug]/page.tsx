// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import React from 'react';
import { blogs } from '../../../lib/blogs';

/**
 * Blog page (static for now)
 * -------------------------
 * - Blog data is imported from /libs/blogs
 * - Later this can be replaced with a WordPress API
 *   without changing routes or slugs
 */

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <article
        className="mx-auto max-w-4xl px-4 py-12
                   text-gray-900 dark:text-gray-100"
      >
        {/* Blog Content */}
        <h1 className='text-4xl mb-2'>{blog.title}</h1>
        <div
          className="prose prose-lg prose-gray max-w-none
                     dark:prose-invert
                     prose-headings:font-semibold
                     prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-0
                     prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                     prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                     prose-p:text-base prose-p:leading-relaxed prose-p:mb-4
                     prose-strong:text-gray-900 dark:prose-strong:text-gray-100
                     prose-em:text-gray-700 dark:prose-em:text-gray-300
                     prose-ul:my-6 prose-ul:space-y-2
                     prose-li:text-base prose-li:leading-relaxed
                     prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
                     dark:prose-a:text-emerald-500"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </div>
  );
}
