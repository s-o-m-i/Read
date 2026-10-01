import BlogIndex from "@/components/blog/BlogIndex";
import { blogs } from "@/lib/blogs";
import { blogCardMeta } from "@/lib/blog/meta";

export const metadata = {
  title: "Blog – Dhikr, Adhkar and Remembrance | Tasbih Hub",
  description: "Articles on dhikr, morning and evening adhkar, istighfar, durood, Ramadan, and the 99 Names, each linked to a free counter.",
  alternates: { canonical: "https://tasbihhub.com/blog" },
};

export default function BlogPage() {
  const cards = blogs.map((blog) => {
    const meta = blogCardMeta(blog);
    return {
      slug: blog.slug,
      title: blog.title,
      description: blog.description,
      image: blog.image,
      datePublished: blog.datePublished,
      category: meta.category,
      readingTime: meta.readingTime,
    };
  });

  return <BlogIndex cards={cards} />;
}
