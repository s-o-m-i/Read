import type { Metadata } from "next";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContactForm from "@/components/contact/ContactForm";
import FaqList from "@/components/content/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/i18n/locales";
import { SITE_EMAIL, SITE_INSTAGRAM, SITE_OWNER } from "@/lib/site";

const title = "Contact Tasbih Hub";
const description = `Write to ${SITE_OWNER} about a dhikr correction, a counter, or a translation. Messages go to ${SITE_EMAIL}. Your counts stay on your device.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/contact`,
    type: "website",
    siteName: "Tasbih Hub",
  },
};

const faqs = [
  {
    question: "Who reads messages sent to Tasbih Hub?",
    answer: `${SITE_OWNER} reads them. Tasbih Hub does not use a support team or a ticket inbox.`,
  },
  {
    question: "Does the contact form include my dhikr count?",
    answer: "No. The count, streak, and routines stay in this browser. A message only contains what you type: your name, email, subject, and message.",
  },
  {
    question: "How should I report a wrong translation or Arabic line?",
    answer: "Choose “A correction on a page”, paste the page address, and say what looks wrong. That is enough to check the line.",
  },
  {
    question: "Do I need an account to write?",
    answer: "No. The counters do not use accounts, and the form does not create one.",
  },
  {
    question: "What if the form does not send?",
    answer: `Email ${SITE_EMAIL} directly. The same person reads that address.`,
  },
];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ sent?: string }> }) {
  const { sent } = await searchParams;
  return (
    <article className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: title,
          description,
          url: `${SITE_URL}/contact`,
          mainEntity: {
            "@type": "Person",
            name: SITE_OWNER,
            email: SITE_EMAIL,
            url: SITE_URL,
            sameAs: [SITE_INSTAGRAM],
            jobTitle: "Creator of Tasbih Hub",
            worksFor: { "@type": "Organization", name: "Tasbih Hub", url: SITE_URL },
          },
        }}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <header className="mt-6 max-w-2xl">
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">Contact Tasbih Hub</h1>
        <p className="mt-4 text-lg">
          {SITE_OWNER} built Tasbih Hub and reads every message. Use the form for a correction, a counter problem, or a question about a page.
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-4">
          <section className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5">
            <h2 className="font-display text-2xl">Write directly</h2>
            <p className="mt-2">The address below is the working inbox. There is no separate tasbihhub.com mailbox yet.</p>
            <a href={`mailto:${SITE_EMAIL}`} className="mt-4 flex items-center gap-3 rounded-2xl border border-[var(--line)] px-3 py-3 text-sm font-medium text-[var(--ink)]">
              <Mail size={18} />
              {SITE_EMAIL}
            </a>
            <a href={SITE_INSTAGRAM} className="mt-2 flex items-center gap-3 rounded-2xl border border-[var(--line)] px-3 py-3 text-sm font-medium text-[var(--ink)]" rel="me noopener noreferrer" target="_blank">
              <Instagram size={18} />
              Instagram
            </a>
          </section>
          <section className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5">
            <h2 className="font-display text-2xl">Useful before you write</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/dhikr" className="underline">Dhikr library</Link> for the Arabic, meaning, and count of a phrase.</li>
              <li><Link href="/disclaimer" className="underline">Disclaimer</Link> on wording, sources, and what the site does not claim.</li>
              <li><Link href="/tasbih-counter" className="underline">Tasbih counter</Link> if the question is about counting.</li>
              <li><Link href="/privacy-policy" className="underline">Privacy policy</Link> for what stays on the device.</li>
            </ul>
          </section>
        </div>
        <ContactForm sent={sent === "1"} />
      </div>

      <div className="mt-12">
        <FaqList items={faqs} title="Contact questions" />
      </div>
    </article>
  );
}
