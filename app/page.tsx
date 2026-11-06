import Link from "next/link";
import { type ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BookMarked,
  BookOpen,
  CircleDot,
  Clock,
  Gauge,
  Globe,
  History,
  Info,
  LayoutGrid,
  ListChecks,
  MonitorSmartphone,
  MousePointerClick,
  Play,
  Plus,
  RotateCcw,
  Scale,
  Sparkles,
  Sunrise,
  Target,
} from "lucide-react";
import DailyDashboard from "@/components/dhikr/DailyDashboard";
import HomeCounter from "@/components/home/HomeCounter";
import JsonLd from "@/components/seo/JsonLd";
import FaqAccordion from "@/components/home/FaqAccordion";
import ScrollRail from "@/components/home/ScrollRail";
import {
  BeadRingDecoration,
  BeadStrandsIllustration,
  BeadsArt,
  BrowserArt,
  DeviceArt,
  FingerArt,
  RingArt,
} from "@/components/home/Illustrations";
import { ButtonLink, Container, Eyebrow, SectionHeader, textLink } from "@/components/home/ui";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { SITE_URL } from "@/lib/i18n/locales";
import { blogs } from "@/lib/blogs";
import { blogCardMeta } from "@/lib/blog/meta";
import { SITE_EMAIL, SITE_OWNER } from "@/lib/site";

export const metadata = pageMetadata("/", {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
});

const phrases = [
  {
    href: "/dhikr/subhanallah",
    name: "SubhanAllah",
    arabic: "سُبْحَانَ اللَّهِ",
    meaning: "Glory be to Allah.",
    body: "An expression declaring Allah's perfection and freedom from every imperfection.",
  },
  {
    href: "/dhikr/alhamdulillah",
    name: "Alhamdulillah",
    arabic: "الْحَمْدُ لِلَّهِ",
    meaning: "All praise belongs to Allah.",
    body: "A declaration of gratitude and praise for Allah.",
  },
  {
    href: "/dhikr/allahu-akbar",
    name: "Allahu Akbar",
    arabic: "اللَّهُ أَكْبَرُ",
    meaning: "Allah is the Greatest.",
    body: "An expression affirming Allah's greatness above everything.",
  },
  {
    href: "/dhikr/astaghfirullah",
    name: "Astaghfirullah",
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    meaning: "I seek forgiveness from Allah.",
    body: "A phrase used when seeking Allah's forgiveness.",
  },
  {
    href: "/dhikr/la-ilaha-illallah",
    name: "La ilaha illallah",
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
    meaning: "There is no deity worthy of worship except Allah.",
    body: "The declaration of Islamic monotheism.",
  },
  {
    href: "/dhikr/salawat",
    name: "Allahumma Salli Ala Muhammad",
    arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ",
    meaning: "O Allah, send blessings upon Muhammad.",
    body: "An expression of sending blessings upon Prophet Muhammad ﷺ.",
  },
];

const features = [
  { text: "Easy-to-use digital counting interface.", Icon: MousePointerClick },
  { text: "Manual counting and available Sunnah counting modes.", Icon: ListChecks },
  { text: "Customizable Dhikr sessions and counting targets, where supported.", Icon: Target },
  { text: "Progress tracking during your session.", Icon: Activity },
  { text: "Convenient access from desktop, tablet and mobile devices.", Icon: MonitorSmartphone },
  { text: "Browser-based counting without requiring an account.", Icon: Globe },
];

const history = [
  {
    label: "Counting methods",
    text: "The practice of remembering Allah and counting Dhikr has a long history in Islamic life. Muslims have used different methods to keep track of their recitations, including counting on their fingers and using counting aids.",
  },
  {
    label: "Names",
    text: "Traditional Islamic prayer beads became widely associated with Dhikr and are known by several names, including Misbaha, Subha and Tasbih.",
  },
  {
    label: "Arrangements",
    text: "A traditional string of prayer beads commonly contains 33 or 99 beads, although other arrangements also exist. These configurations are often associated with recitation routines and practical counting.",
  },
  {
    label: "Materials",
    text: "Historically, prayer beads have been produced using materials such as wood, stone, seeds, amber and other decorative materials. Their construction and appearance vary across regions and cultural traditions.",
  },
  {
    label: "Today",
    text: "Today, traditional prayer beads continue to be used alongside electronic Tasbih counters and digital counting tools.",
  },
];

const types = [
  {
    title: "Traditional Tasbih Beads",
    body: "Traditional prayer beads consist of a connected string of beads used to count recitations. Common arrangements include 33 and 99 beads. They are made from materials such as wood, stone, seeds and amber.",
    art: <BeadsArt />,
    tint: "bg-[#F3E7D3] dark:bg-[#2a2216]",
  },
  {
    title: "Digital Tasbih Counter",
    body: "A digital Tasbih counter uses an electronic display and counting button to track repetitions. It provides a convenient alternative to traditional beads.",
    art: <DeviceArt />,
    tint: "bg-[#E4E9F1] dark:bg-[#12233d]",
  },
  {
    title: "Electronic Tasbih Ring",
    body: "An electronic Tasbih ring is a wearable digital counter, usually worn on a finger. It allows users to count Dhikr through a small integrated counting mechanism.",
    art: <RingArt />,
    tint: "bg-[#E3ECE6] dark:bg-[#12261e]",
  },
  {
    title: "Finger Counting",
    body: "Counting on one's fingers is an established practice mentioned in Islamic narrations. It is a simple method that requires no additional device.",
    art: <FingerArt />,
    tint: "bg-[#EFE9DC] dark:bg-[#1d1a14]",
  },
  {
    title: "Online Tasbih Counter",
    body: "An online Tasbih counter allows users to track their recitations through a website. TasbihHub provides a browser-based option that can be accessed from different devices.",
    art: <BrowserArt />,
    tint: "bg-[#E9E4F0] dark:bg-[#1b1a2e]",
  },
];

const afterSalah = [
  ["SubhanAllah", "33 times"],
  ["Alhamdulillah", "33 times"],
  ["Allahu Akbar", "33 times"],
  ["La ilaha illallah...", "Once to complete 100"],
];

const differences = [
  ["Tasbih", "The act of glorifying Allah and, commonly, the prayer beads used for counting."],
  ["Tasbeeh", "An alternative English transliteration of the Arabic word Tasbih."],
  ["Misbaha", "A term commonly used for Islamic prayer beads."],
  ["Subha", "Another traditional name for prayer beads."],
  ["Tesbih", "A spelling commonly encountered in Turkish usage."],
  ["Dhikr", "The broader practice of remembering and mentioning Allah."],
];

const steps: { content: ReactNode; Icon: typeof Play }[] = [
  {
    content: (
      <>
        Open the <a href="#counter" className={textLink}>TasbihHub counter</a>.
      </>
    ),
    Icon: MonitorSmartphone,
  },
  { content: "Choose the Dhikr phrase you want to recite, or select your preferred counting mode.", Icon: LayoutGrid },
  { content: "Begin your recitation.", Icon: Play },
  { content: "Tap the counter to record each repetition.", Icon: Plus },
  { content: "Monitor your progress throughout the session.", Icon: Gauge },
  { content: "Reset or begin another session whenever needed.", Icon: RotateCcw },
];

const explore = [
  { href: "#what-is-tasbih", label: "What Is Tasbih? Meaning and Significance", Icon: BookOpen },
  { href: "#history-of-tasbih", label: "History of Islamic Prayer Beads", Icon: History },
  { href: "#types-of-tasbih", label: "Types of Tasbih: 33 and 99 Beads", Icon: CircleDot },
  { href: "#tasbih-and-misbaha", label: "Difference Between Tasbih and Misbaha", Icon: Scale },
  { href: "/dhikr-in-islam", label: "Dhikr and Its Importance in Islam", Icon: Sparkles },
  { href: "/adhkar", label: "Morning and Evening Adhkar", Icon: Sunrise },
  { href: "/asmaul-husna", label: "99 Names of Allah and Their Meanings", Icon: BookMarked },
  { href: "/dhikr-after-salah", label: "Authentic Dhikr After Salah", Icon: Clock },
];

const faqs = [
  {
    question: "What does Tasbih mean?",
    answer: "Tasbih means glorifying Allah and declaring Him free from imperfection. It is commonly associated with the recitation of SubhanAllah and other expressions of remembrance.",
  },
  {
    question: "What is a Tasbih used for?",
    answer: "A Tasbih is commonly used to count Dhikr recitations. Traditional prayer beads, fingers and digital counters can all help keep track of repetitions.",
  },
  {
    question: "How many beads are in a traditional Tasbih?",
    answer: "Traditional Tasbih arrangements commonly contain 33 or 99 beads. Other configurations are also available depending on cultural traditions and personal preferences.",
  },
  {
    question: "What is the difference between Tasbih and Dhikr?",
    answer: "Tasbih specifically refers to glorifying Allah, while Dhikr is a broader term for remembering and mentioning Allah through words, supplications and other acts of remembrance.",
  },
  {
    question: "Can I use a digital Tasbih counter?",
    answer: "Yes. A digital counter can be used as a practical counting aid for Dhikr. It is one of several available methods of keeping track of recitations.",
  },
  {
    question: "Is counting Tasbih on fingers Sunnah?",
    answer: "Islamic narrations describe counting Dhikr on the fingers. Finger counting is an established Sunnah practice, and it does not require a physical or electronic counter.",
  },
  {
    question: "What should I recite on a Tasbih?",
    answer: "Common recitations include SubhanAllah, Alhamdulillah, Allahu Akbar, Astaghfirullah and La ilaha illallah. Specific recitation counts should be followed according to reliable Islamic evidence.",
  },
  {
    question: "What is a Misbaha?",
    answer: "A Misbaha is a traditional string of Islamic prayer beads used to count Dhikr. It is also known by names such as Subha and Tasbih.",
  },
  {
    question: "Is an online Tasbih counter free?",
    answer: "TasbihHub offers a free browser-based counting tool that allows users to track their Dhikr without purchasing physical prayer beads or an electronic counter.",
  },
  {
    question: "Can I use TasbihHub on my phone?",
    answer: "Yes. The website is designed to be accessible through mobile and desktop browsers, allowing users to count their Dhikr from different devices.",
  },
];

const pillars = [
  { href: "#counter", label: "Use", Icon: Plus },
  { href: "#what-is-tasbih", label: "Learn", Icon: BookOpen },
  { href: "#explore", label: "Explore", Icon: BookMarked },
];

export default function HomePage() {
  const latest = blogs.slice(0, 3).map((blog) => ({ ...blog, ...blogCardMeta(blog) }));

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Tasbih Hub",
          url: SITE_URL,
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Web",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          publisher: { "@type": "Organization", name: "Tasbih Hub", url: SITE_URL },
          description:
            "Explore Tasbih, its meaning and significance in Islam. Use our free online Tasbih counter for Dhikr, discover Islamic prayer beads and learn authentic daily adhkar.",
        }}
      />

      {/* Hero and counter */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_20%,rgba(201,169,97,0.18),transparent_70%),radial-gradient(50%_60%_at_0%_100%,rgba(11,37,69,0.07),transparent_70%)]" />
        <div aria-hidden className="geo-pattern-light pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <Container className="relative grid gap-x-10 gap-y-8 py-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,464px)] lg:py-16 xl:gap-x-16">
          <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg-elevated)]/80 px-3 py-1.5">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--gold-soft)]" />
              TasbihHub
            </span>
            <h1 id="hero-title" className="mt-5 font-display text-[2.15rem] leading-[1.08] sm:text-5xl lg:text-[2.85rem] xl:text-[3.35rem]">
              Free Online Tasbih Counter for Daily Dhikr
            </h1>
            <p className="ink mt-5 max-w-2xl text-[1.05rem] leading-8 sm:text-lg">
              Count SubhanAllah, Alhamdulillah, Astaghfirullah and other forms of Dhikr with a free online Tasbih counter. Choose your preferred phrase, set a target and keep track of your daily remembrance.
            </p>
          </div>

          <HomeCounter />

          <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
            <p className="ink max-w-2xl text-[1.05rem] leading-8 sm:text-lg">
              Tasbih is an important practice of remembering and glorifying Allah through words of praise, gratitude and remembrance. Muslims around the world recite phrases such as SubhanAllah, Alhamdulillah and Allahu Akbar as part of their daily Dhikr. Whether you use traditional prayer beads, count on your fingers or prefer a digital counter, TasbihHub makes it easier to maintain your remembrance. Explore the meaning of Tasbih, learn about its significance in Islam and use our free online Tasbih counter to keep track of your Dhikr anytime, anywhere.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#counter" icon={<ArrowRight size={16} />}>Start Counting Dhikr</ButtonLink>
              <ButtonLink href="#what-is-tasbih" variant="secondary">Learn About Tasbih</ButtonLink>
            </div>
            <nav aria-label="Homepage sections" className="mt-8">
              <ul className="flex flex-wrap gap-2">
                {pillars.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a href={href} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg-elevated)]/70 px-4 py-2 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--gold-soft)]">
                      <Icon aria-hidden size={15} className="text-[var(--sage)]" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </section>

      {/* Counter overview and activity */}
      <section id="free-tasbih-counter" aria-labelledby="free-counter-title" className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--bg-elevated)] py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeader id="free-counter-title" eyebrow="Use" title="Free Online Tasbih Counter" subtitle="Remember Allah with a Simple Online Tasbih Counter" />
            <p className="mt-5 leading-7">
              Make your daily Dhikr easier with the free Tasbih counter at TasbihHub. Count your recitations directly from your browser without needing physical prayer beads or a separate electronic device.
            </p>
            <p className="mt-4 leading-7">
              Whether you are reciting SubhanAllah after Salah, practising Istighfar or following your daily remembrance routine, the digital counter helps you keep track of every repetition.
            </p>
            <p className="ink mt-6 font-medium">Start your remembrance whenever and wherever you choose.</p>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="#counter" icon={<ArrowRight size={16} />}>Open Tasbih Counter</ButtonLink>
              <a href="#counter" className={`${textLink} text-sm`}>Open the dedicated tasbih counter page</a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="ink font-semibold">Features include:</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map(({ text, Icon }) => (
                <li key={text} className="flex items-start gap-3 rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-4 text-sm leading-6">
                  <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--navy)] text-[#e3c77f]">
                    <Icon size={17} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <DailyDashboard />
            </div>
          </div>
        </Container>
      </section>

      {/* What is Tasbih */}
      <section id="what-is-tasbih" aria-labelledby="what-is-tasbih-title" className="scroll-mt-20 py-16 sm:py-24">
        <Container className="grid gap-x-16 gap-y-8 lg:grid-cols-12 lg:gap-y-4">
          <div className="lg:col-span-7 lg:row-start-1">
            <SectionHeader id="what-is-tasbih-title" eyebrow="Learn" title="What Is Tasbih?" subtitle="Understanding the Meaning of Tasbih in Islam" />
            <div className="mt-6 max-w-[68ch] space-y-4 text-[1.05rem] leading-8">
              <p>
                Tasbih (<span lang="ar" dir="rtl" className="font-arabic">تَسْبِيح</span>) is an Arabic term referring to the glorification and declaration of Allah&apos;s perfection. It comes from the Arabic root <span lang="ar" dir="rtl" className="font-arabic whitespace-nowrap">س ب ح</span>, associated with the idea of declaring Allah free from imperfection.
              </p>
              <p>In Islamic practice, Tasbih commonly refers to remembering Allah through expressions of glorification, particularly the phrase:</p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="on-navy relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-[2rem] bg-[var(--navy-deep)] px-6 py-12 text-center sm:min-h-[380px] sm:px-10">
              <div aria-hidden className="geo-pattern pointer-events-none absolute inset-0 opacity-[0.12]" />
              <BeadRingDecoration className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-auto -translate-x-1/2 -translate-y-1/2 opacity-70" />
              <div className="relative">
                <div className="font-arabic text-5xl leading-[1.7] sm:text-6xl" dir="rtl" lang="ar">سُبْحَانَ اللَّهِ</div>
                <p className="gold mt-4 font-display text-2xl">SubhanAllah</p>
                <p className="dim mt-2">Meaning: Glory be to Allah.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:row-start-2">
            <div className="max-w-[68ch] space-y-4 text-[1.05rem] leading-8">
              <p>
                The term is also commonly used for the prayer beads or counting device that Muslims may use to keep track of their recitations. These meanings are related, but they are not identical. Tasbih is fundamentally an act of remembrance, while a physical Tasbih is one possible counting aid.
              </p>
              <p>
                Dhikr can be performed through the heart and tongue, and remembering Allah is encouraged throughout the Qur&apos;an. In <a className={textLink} href="https://quran.com/33/41">Surah Al-Ahzab (33:41)</a>, believers are instructed to remember Allah frequently.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Significance and common phrases */}
      <section id="tasbih-significance" aria-labelledby="significance-title" className="relative scroll-mt-20 overflow-hidden bg-[var(--band)] py-16 sm:py-24">
        <div aria-hidden className="geo-pattern-light pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeader id="significance-title" eyebrow="Remembrance" title="The Islamic Significance of Tasbih" subtitle="Why Do Muslims Perform Tasbih?" />
            </div>
            <div className="lg:col-span-5">
              <p className="leading-7">
                Remembering Allah is an important part of a Muslim&apos;s spiritual life. Through Dhikr, Muslims express gratitude, glorify their Creator, seek forgiveness and remain mindful of their relationship with Allah.
              </p>
              <p className="ink mt-4 font-medium">Some commonly recited expressions include:</p>
            </div>
          </div>

          <div className="mt-10">
            <ScrollRail label="Commonly recited expressions" listClassName="md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {phrases.map((phrase, index) => (
                <li key={phrase.href} className="shrink-0 basis-[86%] snap-start sm:basis-[60%] md:basis-auto">
                  <article className="group relative flex h-full flex-col rounded-[1.75rem] border border-[var(--line)] bg-[var(--bg-elevated)] p-6 shadow-[0_1px_0_rgba(11,37,69,0.04)] transition-[transform,box-shadow,border-color] duration-300 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-[var(--gold)] hover:border-[var(--gold-soft)] hover:shadow-[0_24px_50px_-28px_rgba(11,37,69,0.45)] motion-safe:hover:-translate-y-1 sm:p-7">
                    <div className="flex items-center justify-between">
                      <span aria-hidden className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--navy)] font-display text-sm text-[#e3c77f]">
                        {index + 1}
                      </span>
                      <ArrowUpRight aria-hidden size={18} className="text-[var(--muted)] transition-colors group-hover:text-[var(--gold)]" />
                    </div>
                    <h3 className="mt-5 text-center">
                      <Link href={phrase.href} className="flex flex-col-reverse focus-visible:outline-none after:absolute after:inset-0 after:rounded-[1.75rem]">
                        <span className="mt-1 block font-display text-xl">{phrase.name}</span>
                        <span className="block">
                          <span className="sr-only">{" ("}</span>
                          <span className={`font-arabic block leading-[1.9] text-[var(--ink)] ${phrase.arabic.length > 20 ? "text-[1.75rem]" : "text-[2.15rem]"}`} dir="rtl" lang="ar">
                            {phrase.arabic}
                          </span>
                          <span className="sr-only">)</span>
                        </span>
                      </Link>
                    </h3>
                    <div aria-hidden className="my-5 flex items-center justify-center gap-3">
                      <span className="h-px w-10 bg-[var(--line)]" />
                      <span className="h-1.5 w-1.5 rotate-45 bg-[var(--gold-soft)]" />
                      <span className="h-px w-10 bg-[var(--line)]" />
                    </div>
                    <p className="ink text-center font-medium">Meaning: {phrase.meaning}</p>
                    <p className="mt-3 text-center text-sm leading-6">{phrase.body}</p>
                  </article>
                </li>
              ))}
            </ScrollRail>
          </div>
          <p className="mt-10 text-center">Each expression has its own meaning and place in Islamic remembrance.</p>
        </Container>
      </section>

      {/* History */}
      <section id="history-of-tasbih" aria-labelledby="history-title" className="scroll-mt-20 py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeader id="history-title" eyebrow="Heritage" title="History of Tasbih and Islamic Prayer Beads" subtitle="How Did Traditional Tasbih Develop?" />
              <figure className="mt-8 rounded-[2rem] border border-[var(--line)] bg-[var(--bg-elevated)] p-6 sm:p-8">
                <BeadStrandsIllustration />
                <figcaption className="mt-4 text-center text-sm">Illustration: a traditional 33-bead Tasbih and a 99-bead Tasbih.</figcaption>
              </figure>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ol className="relative space-y-8 border-l border-[var(--line)] pl-8 sm:pl-10">
              {history.map((item) => (
                <li key={item.label} className="relative">
                  <span aria-hidden className="absolute -left-[2.3rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--gold-soft)] bg-[var(--bg)] sm:-left-[2.8rem]" />
                  <span className="eyebrow">{item.label}</span>
                  <p className="mt-2 text-[1.05rem] leading-8">{item.text}</p>
                </li>
              ))}
            </ol>
            <aside className="mt-10 flex gap-4 rounded-[1.5rem] border border-[var(--line)] border-l-4 border-l-[var(--gold-soft)] bg-[var(--bg-elevated)] p-6">
              <Info aria-hidden size={20} className="mt-1 shrink-0 text-[var(--gold)]" />
              <p className="ink leading-7">
                It is important to distinguish the history of physical prayer beads from the religious practice of Dhikr itself. The remembrance of Allah is established through Islamic teachings, while the materials, designs and historical development of counting aids have evolved over time.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      {/* Types */}
      <section id="types-of-tasbih" aria-labelledby="types-title" className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--bg-elevated)] py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeader id="types-title" eyebrow="Methods" title="Different Types of Tasbih" subtitle="Traditional Prayer Beads, Digital Counters and Finger Counting" />
            </div>
            <p className="leading-7 lg:col-span-5">Muslims use different methods to keep track of their Dhikr. Each method offers a different practical experience.</p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {types.map((type, index) => (
              <li key={type.title} className={index < 3 ? "lg:col-span-2" : index === 4 ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-3"}>
                <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--bg)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-30px_rgba(11,37,69,0.4)]">
                  <div className={`flex h-40 items-center justify-center ${type.tint}`}>{type.art}</div>
                  <div className="flex-1 p-6 sm:p-7">
                    <h3 className="font-display text-xl">{type.title}</h3>
                    <p className="mt-2 leading-7">{type.body}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* After Salah */}
      <section id="tasbih-after-salah" aria-labelledby="after-salah-title" className="scroll-mt-20 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeader id="after-salah-title" eyebrow="After prayer" title="Tasbih After Salah" subtitle="Common Dhikr Recitations After Prayer" />
            <p className="mt-5 leading-7">
              Many Muslims perform Dhikr after completing their obligatory Salah. One well-known post-prayer practice involves reciting SubhanAllah, Alhamdulillah and Allahu Akbar.
            </p>
            <p className="ink mt-6 font-medium">A commonly narrated arrangement is:</p>
            <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg-elevated)]">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">A commonly narrated post-prayer dhikr arrangement</caption>
                <thead className="bg-[var(--band)]">
                  <tr>
                    <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Dhikr</th>
                    <th scope="col" className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Recitation</th>
                  </tr>
                </thead>
                <tbody>
                  {afterSalah.map(([name, count], index) => (
                    <tr key={name} className="border-t border-[var(--line)]">
                      <th scope="row" className="px-5 py-4 font-medium text-[var(--ink)]">
                        <span className="flex items-center gap-3">
                          <span aria-hidden className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-xs text-[#e3c77f]">{index + 1}</span>
                          {name}
                        </span>
                      </th>
                      <td className="px-5 py-4 text-right text-[var(--muted)]">{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div aria-hidden className="mt-4 flex h-2 overflow-hidden rounded-full">
              <span className="w-[33%] bg-[var(--navy)]" />
              <span className="ml-0.5 w-[33%] bg-[var(--sage)]" />
              <span className="ml-0.5 w-[33%] bg-[var(--gold-soft)]" />
              <span className="ml-0.5 w-[1%] bg-[var(--ink)]" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:self-center">
            <div className="on-navy relative overflow-hidden rounded-[2rem] bg-[var(--navy-deep)] px-6 py-10 sm:px-10 sm:py-12">
              <div aria-hidden className="geo-pattern pointer-events-none absolute inset-0 opacity-[0.1]" />
              <div className="relative">
                <p className="gold text-xs font-semibold uppercase tracking-[0.16em]">The final declaration is:</p>
                <div className="font-arabic mt-6 text-center text-[1.75rem] leading-[2.1] sm:text-[2.1rem]" dir="rtl" lang="ar">
                  لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
                </div>
                <div aria-hidden className="mx-auto my-6 h-px w-24 bg-white/20" />
                <p className="text-center italic leading-7">
                  La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa ala kulli shay&apos;in qadir.
                </p>
                <p className="dim mt-4 text-center leading-7">
                  Meaning: There is no deity worthy of worship except Allah alone, without partner. To Him belongs the dominion and all praise, and He has power over all things.
                </p>
              </div>
            </div>
          </div>

          <aside className="flex gap-4 rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg-elevated)] p-6 lg:col-span-12">
            <BookOpen aria-hidden size={20} className="mt-1 shrink-0 text-[var(--gold)]" />
            <p className="leading-7">
              This is one established narrated form of post-prayer Dhikr. The thirty-three, thirty-three, and thirty-three count, completed once by this declaration, is reported in <a className={textLink} href="https://sunnah.com/muslim:597a">Sahih Muslim 597a</a>. <a className={textLink} href="https://sunnah.com/bukhari:843">Sahih al-Bukhari 843</a> reports saying SubhanAllah, Alhamdulillah, and Allahu Akbar thirty-three times each after every obligatory prayer, and it also records that some companions differed about saying Allahu Akbar thirty-four times. Other authentic narrations describe different recitation combinations, so Muslims should not assume that every narration prescribes exactly the same arrangement.
            </p>
          </aside>
        </Container>
      </section>

      {/* Terms */}
      <section id="tasbih-and-misbaha" aria-labelledby="terms-title" className="scroll-mt-20 bg-[var(--band)] py-16 sm:py-24">
        <Container className="grid gap-10 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-4">
            <SectionHeader id="terms-title" eyebrow="Terms" title="Tasbih, Tasbeeh, Misbaha and Subha: What Is the Difference?" />
            <p className="mt-5 leading-7">These terms are closely related but have different linguistic and cultural uses.</p>
          </div>
          <div className="xl:col-span-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg-elevated)]">
              <table className="w-full text-left max-sm:block">
                <caption className="sr-only">Tasbih, Tasbeeh, Misbaha, Subha, Tesbih and Dhikr compared</caption>
                <thead className="bg-[var(--bg)] max-sm:sr-only">
                  <tr>
                    <th scope="col" className="w-40 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Term</th>
                    <th scope="col" className="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Meaning</th>
                  </tr>
                </thead>
                <tbody className="max-sm:block">
                  {differences.map(([term, text]) => (
                    <tr key={term} className={`border-t border-[var(--line)] max-sm:block max-sm:px-5 max-sm:py-4 max-sm:first:border-t-0 ${term === "Dhikr" ? "bg-[var(--navy)]/[0.04]" : ""}`}>
                      <th scope="row" className="px-6 py-5 align-top font-display text-lg font-semibold text-[var(--ink)] max-sm:block max-sm:p-0">
                        {term}
                      </th>
                      <td className="px-6 py-5 leading-7 text-[var(--muted)] max-sm:block max-sm:p-0 max-sm:pt-1">{text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 leading-7">
              Although these terms overlap in everyday usage, understanding their differences helps explain the relationship between Islamic remembrance and the tools used for counting.
            </p>
          </div>
        </Container>
      </section>

      {/* How to use */}
      <section id="how-to-use" aria-labelledby="how-to-title" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeader id="how-to-title" eyebrow="Guide" title="How to Use an Online Tasbih Counter" />
            </div>
            <p className="ink font-medium lg:col-span-5">Using a digital counter is simple:</p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ content, Icon }, index) => (
              <li key={index} className="relative flex gap-4 rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg-elevated)] p-6 leading-7">
                <div className="flex shrink-0 flex-col items-center gap-2">
                  <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--navy)] text-[#e3c77f]">
                    <Icon size={20} />
                  </span>
                  <span aria-hidden className="font-display text-sm text-[var(--gold)]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <span className="pt-2">{content}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid gap-6 rounded-[2rem] border border-[var(--line)] bg-[var(--band)] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div>
              <p className="leading-7">
                You can use it for SubhanAllah, Alhamdulillah, Allahu Akbar, Istighfar, Salawat and other forms of <Link href="/dhikr" className={textLink}>Dhikr</Link>.
              </p>
              <p className="ink mt-3 leading-7">
                The counter is a practical counting aid. The purpose of Dhikr remains remembering Allah with sincerity and attention.
              </p>
            </div>
            <div>
              <ButtonLink href="#counter" icon={<ArrowRight size={16} />}>Start Your Dhikr Session</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Explore */}
      <section id="explore" aria-labelledby="explore-title" className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--bg-elevated)] py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeader id="explore-title" eyebrow="Explore" title="Explore More About Tasbih and Dhikr" />
            </div>
            <p className="leading-7 lg:col-span-5">Continue learning with our Islamic remembrance resources:</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {explore.map(({ href, label, Icon }) => {
              const onPage = href.startsWith("#");
              const className =
                "group flex h-full items-center gap-4 rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg)] p-5 transition-[transform,border-color,box-shadow] duration-300 hover:border-[var(--gold-soft)] hover:shadow-[0_20px_40px_-28px_rgba(11,37,69,0.45)] motion-safe:hover:-translate-y-0.5 sm:flex-col sm:items-start sm:p-6";
              const inner = (
                <>
                  <span aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--navy)] text-[#e3c77f]">
                    <Icon size={22} />
                  </span>
                  <span className="flex flex-1 flex-col gap-2">
                    <span className="font-display text-lg leading-snug text-[var(--ink)]">{label}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--sage)]">
                      {onPage ? "On this page" : "Guide"}
                      <ArrowRight aria-hidden size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </>
              );
              return (
                <li key={href}>
                  {onPage ? <a href={href} className={className}>{inner}</a> : <Link href={href} className={className}>{inner}</Link>}
                </li>
              );
            })}
          </ul>
          <p className="mt-8 rounded-2xl bg-[var(--band)] px-5 py-4 text-sm leading-6">
            Morning and evening sets also have their own pages: <Link href="/morning-adhkar" className={textLink}>morning adhkar</Link> and <Link href="/evening-adhkar" className={textLink}>evening adhkar</Link>.
          </p>
          {latest.length > 0 && (
            <div className="mt-14">
              <div className="flex items-end justify-between gap-4">
                <h3 className="font-display text-2xl">Related reading</h3>
                <Link href="/blog" className={`${textLink} text-sm`}>All articles</Link>
              </div>
              <ul className="mt-5 grid gap-4 md:grid-cols-3">
                {latest.map((blog) => (
                  <li key={blog.slug}>
                    <Link href={`/blog/${blog.slug}`} className="group flex h-full flex-col rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg)] p-6 transition-colors hover:border-[var(--gold-soft)]">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--gold)]">{blog.category}</span>
                      <span className="mt-3 flex-1 font-display text-lg leading-snug text-[var(--ink)]">{blog.title}</span>
                      <span className="mt-4 text-sm text-[var(--muted)]">{blog.readingTime} min read</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-title" className="scroll-mt-20 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeader id="faq-title" eyebrow="FAQ" title="Frequently Asked Questions About Tasbih" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section aria-labelledby="closing-title" className="pb-10 sm:pb-16">
        <Container>
          <div className="on-navy relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[var(--navy-deep)] px-6 py-14 text-center sm:px-12 lg:py-20">
            <div aria-hidden className="geo-pattern pointer-events-none absolute inset-0 opacity-[0.12]" />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_70%_at_50%_0%,rgba(227,199,127,0.18),transparent_70%)]" />
            <div className="relative mx-auto max-w-2xl">
              <Eyebrow>TasbihHub</Eyebrow>
              <h2 id="closing-title" className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">Make Dhikr Part of Your Daily Life</h2>
              <p className="dim mt-5 leading-7">
                Remembering Allah is not limited to a particular place or time. Whether you are at home, travelling or taking a quiet moment during your day, you can use TasbihHub to keep track of your remembrance.
              </p>
              <p className="dim mt-4 leading-7">
                Explore Islamic Dhikr resources, learn about the meaning of Tasbih and use our free online counter to support your daily routine.
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink href="#counter" variant="gold" icon={<ArrowRight size={16} />}>Start Counting with TasbihHub</ButtonLink>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-6">
            Written and maintained by {SITE_OWNER} for Tasbih Hub. Post-prayer counts on this page follow <a className={textLink} href="https://sunnah.com/muslim:597a">Sahih Muslim 597a</a> and <a className={textLink} href="https://sunnah.com/bukhari:843">Sahih al-Bukhari 843</a>. The Qur&apos;an reference is <a className={textLink} href="https://quran.com/33/41">Surah Al-Ahzab 33:41</a>. Corrections can be sent to <a className={textLink} href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
          </p>
        </Container>
      </section>
    </div>
  );
}
