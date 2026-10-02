import Link from "next/link";
import { Suspense } from "react";
import DhikrCounter from "@/components/dhikr/DhikrCounter";
import DailyDashboard from "@/components/dhikr/DailyDashboard";
import FaqList from "@/components/content/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { SITE_URL } from "@/lib/i18n/locales";
import { ROUTINES } from "@/lib/dhikr/routines";
import { blogs } from "@/lib/blogs";
import { blogCardMeta } from "@/lib/blog/meta";

export const metadata = pageMetadata("/");

const popular = [
  { href: "/dhikr/subhanallah", arabic: "سُبْحَانَ اللَّهِ", name: "SubhanAllah" },
  { href: "/dhikr/alhamdulillah", arabic: "الْحَمْدُ لِلَّهِ", name: "Alhamdulillah" },
  { href: "/dhikr/allahu-akbar", arabic: "اللَّهُ أَكْبَرُ", name: "Allahu Akbar" },
  { href: "/dhikr/la-ilaha-illallah", arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ", name: "La ilaha illallah" },
  { href: "/dhikr/astaghfirullah", arabic: "أَسْتَغْفِرُ اللَّهَ", name: "Astaghfirullah" },
  { href: "/dhikr/salawat", arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ", name: "Salawat" },
];

const quick = ROUTINES.filter((routine) =>
  ["after-salah", "morning-adhkar", "evening-adhkar", "before-sleep"].includes(routine.id),
);

export default function HomePage() {
  const latest = blogs.slice(0, 3).map((blog) => ({ ...blog, ...blogCardMeta(blog) }));

  return (
    <div className="pb-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Tasbih Hub",
          url: SITE_URL,
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Free online tasbih and dhikr counter. Progress stays on your device.",
        }}
      />
      <h1 className="sr-only">Free Online Tasbih Counter & Digital Dhikr</h1>
      <section className="mx-auto max-w-5xl px-4 pt-6" aria-label="Tasbih counter">
        <Suspense fallback={<div className="mx-auto h-[560px] max-w-xl rounded-[28px] bg-[var(--bg-elevated)]" />}>
          <DhikrCounter storageKey="home" initialDhikrId="subhanallah" title="Tasbih Counter" />
        </Suspense>
      </section>
      <section className="mx-auto mt-14 max-w-5xl px-4">
        <h2 className="font-display text-3xl">Popular dhikr</h2>
        <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
          {popular.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] p-4 hover:border-[var(--gold)]">
                <span className="font-arabic block text-2xl text-[var(--green)] dark:text-[var(--gold)]" dir="rtl" lang="ar">{item.arabic}</span>
                <span className="mt-2 block text-sm">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto mt-14 max-w-5xl px-4">
        <h2 className="font-display text-3xl">Quick start routines</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {quick.map((routine) => (
            <li key={routine.id}>
              <Link href={routine.href} className="block rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5">
                <h3 className="font-display text-2xl">{routine.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{routine.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto mt-14 max-w-5xl px-4">
        <DailyDashboard />
      </section>
      <section className="mx-auto mt-14 max-w-5xl px-4">
        <h2 className="font-display text-3xl">Why Tasbih Hub</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Free", "The counters and routines cost nothing."],
            ["No login", "Open a page and start. There is no account to create."],
            ["Private", "Counts, streaks, and finished routines stay in this browser."],
            ["Mobile", "The main button is sized for one thumb."],
            ["Works after loading", "Once the page is open, counting uses this device, including when the connection drops."],
            ["Guided", "After salah, morning, and evening each have their own routine."],
          ].map(([title, copy]) => (
            <li key={title} className="rounded-2xl border border-[var(--line)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{copy}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto mt-14 grid max-w-5xl gap-4 px-4 md:grid-cols-3">
        <Link href="/dhikr" className="rounded-3xl bg-[var(--green)] p-6 text-[#f7f3ea]">
          <h2 className="font-display text-3xl">Dhikr library</h2>
          <p className="mt-2 text-sm text-[#f7f3ea]/80">Search phrases by time of day, with Arabic, meaning, and a count.</p>
        </Link>
        <Link href="/morning-adhkar" className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6">
          <h2 className="font-display text-3xl">Morning and evening</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">Separate pages for the morning set and the evening set, including the phrases that are not shared.</p>
        </Link>
        <Link href="/dhikr-after-salah" className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6">
          <h2 className="font-display text-3xl">After salah</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">Istighfar, then the 33, 33, and 34, with the sources named.</p>
        </Link>
      </section>
      <section className="mx-auto mt-14 max-w-5xl px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl">99 Names of Allah</h2>
          <Link href="/asmaul-husna" className="text-sm text-[var(--green-2)]">Open the list</Link>
        </div>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">Arabic, transliteration, and English meaning for each name, with a page you can read before you recite.</p>
      </section>
      <section className="mx-auto mt-14 max-w-5xl px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl">Latest guides</h2>
          <Link href="/blog" className="text-sm text-[var(--green-2)]">All articles</Link>
        </div>
        <ul className="mt-5 grid gap-3 md:grid-cols-3">
          {latest.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/blog/${blog.slug}`} className="block h-full rounded-2xl border border-[var(--line)] p-4">
                <p className="text-xs uppercase tracking-wide text-[var(--gold)]">{blog.category}</p>
                <h3 className="mt-2 font-semibold">{blog.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{blog.readingTime} min read</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto mt-14 max-w-3xl px-4">
        <FaqList
          items={[
            {
              question: "Is Tasbih Hub free?",
              answer: "Yes. The counters, routines, and reading pages are free to use in the browser.",
            },
            {
              question: "Do I need an account?",
              answer: "No. Your count, settings, and finished routines are stored locally on this device.",
            },
            {
              question: "Does my progress sync to my phone and laptop?",
              answer: "No. There is no cross-device sync. A count on one browser stays on that browser.",
            },
            {
              question: "What is the difference between dhikr and zikr?",
              answer: "They are two spellings of the same Arabic word. The dhikr counter and the zikr counter are the same kind of tool.",
            },
          ]}
        />
      </section>
    </div>
  );
}
