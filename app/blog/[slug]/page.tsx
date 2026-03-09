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

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "image": `https://tasbihhub.com${blog.image}`,
    "datePublished": blog.datePublished,
    "dateModified": blog.dateModified,
    "url": `https://tasbihhub.com/blog/${blog.slug}`,
    "author": {
      "@type": "Organization",
      "name": "Tasbih Hub",
      "url": "https://tasbihhub.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tasbih Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasbihhub.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://tasbihhub.com/blog/${blog.slug}`
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
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
                     dark:prose-a:text-emerald-500
                     prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                     prose-img:w-full prose-img:h-auto"
          dangerouslySetInnerHTML={{ __html: blog.content || "" }}
        />
      </article>
    </div>
  );
}
