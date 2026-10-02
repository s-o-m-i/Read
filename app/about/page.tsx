import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqList from "@/components/content/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/i18n/locales";
import { pageMetadata } from "@/lib/seo/keywordMap";
import { SITE_EMAIL, SITE_INSTAGRAM, SITE_OWNER } from "@/lib/site";

export const metadata = pageMetadata("/about");

const tools = [
  {
    href: "/tasbih-counter",
    title: "Online tasbih counter",
    text: "Count SubhanAllah, Alhamdulillah, Allahu Akbar, and any other phrase. Set 33, 66, 99, or your own target.",
  },
  {
    href: "/digital-tasbih",
    title: "Digital tasbih",
    text: "The same count in the browser, with a ring, a target, and a reset that only clears this round.",
  },
  {
    href: "/dhikr-counter",
    title: "Dhikr counter",
    text: "A general remembrance counter for the phrases in the library, including a custom dhikr you add yourself.",
  },
  {
    href: "/zikr-counter",
    title: "Zikr counter",
    text: "Zikr and dhikr are two spellings of the same practice. This page is the same kind of free counter.",
  },
  {
    href: "/istighfar-counter",
    title: "Istighfar counter",
    text: "Count Astaghfirullah, including a longer target when you want one, without a locked list.",
  },
  {
    href: "/durood-counter",
    title: "Durood counter",
    text: "Count salawat on the Prophet, peace be upon him, with the short form ready to start.",
  },
  {
    href: "/dhikr-after-salah",
    title: "Tasbih after salah",
    text: "After the taslim: forgiveness three times, then SubhanAllah 33, Alhamdulillah 33, and Allahu Akbar 34.",
  },
  {
    href: "/morning-adhkar",
    title: "Morning adhkar",
    text: "The morning set in Arabic, transliteration, and English, with the count that belongs to each line.",
  },
  {
    href: "/evening-adhkar",
    title: "Evening adhkar",
    text: "The evening wording, including the lines that are not the same as the morning.",
  },
  {
    href: "/dhikr-before-sleep",
    title: "Dhikr before sleep",
    text: "What is reported when lying down, including Ayat al-Kursi and the sleep dua.",
  },
  {
    href: "/asmaul-husna",
    title: "99 Names of Allah",
    text: "The names with Arabic, transliteration, and a short English meaning, each with its own page.",
  },
  {
    href: "/dhikr",
    title: "Dhikr library",
    text: "Search phrases by time of day. Open a name, read the meaning, then count it.",
  },
];

const values = [
  {
    title: "Free",
    text: "The counters, routines, and reading pages do not sit behind a paywall. Nothing on the counter is locked.",
  },
  {
    title: "No account",
    text: "You open a page and start. There is no sign-up, no profile, and no password to remember.",
  },
  {
    title: "Private count",
    text: "The count, streak, and finished routines stay in this browser. They are not uploaded as a dhikr history.",
  },
  {
    title: "Careful wording",
    text: "Phrase pages give Arabic, transliteration, and English, and name the source when the site has one. A mistake can still be reported.",
  },
  {
    title: "Simple to finish",
    text: "One large button, a visible target, and a sunnah mode that keeps 33, 33, then 34. The point is to finish the words.",
  },
  {
    title: "Open to correction",
    text: "If an Arabic line or a translation looks wrong, write to the address on the contact page. That note is read by the person who built the site.",
  },
];

const faqs = [
  {
    question: "What is Tasbih Hub?",
    answer:
      "Tasbih Hub is a free online tasbih counter for dhikr, istighfar, and durood. It also has morning and evening adhkar, the tasbih after salah, and the 99 Names of Allah. You use it in the browser.",
  },
  {
    question: "Is the online tasbih counter free?",
    answer: "Yes. The counters, routines, and reading pages are free. There is no paid tier and no locked phrase.",
  },
  {
    question: "Do I need an account or an app?",
    answer: "No. There is no account. You do not install an app. The page works in a phone or desktop browser, and the count stays on that device.",
  },
  {
    question: "What is a digital tasbih?",
    answer:
      "A digital tasbih is a counter on a screen instead of beads. On Tasbih Hub you tap once for each repetition, see the count against a target such as 33 or 99, and reset when the round is done.",
  },
  {
    question: "Does a digital counter replace tasbih beads?",
    answer:
      "No. Beads are still a normal way to count. The site is there when you do not have beads with you, or when you want the after-salah set and the adhkar pages in one place.",
  },
  {
    question: "Who runs Tasbih Hub?",
    answer: `${SITE_OWNER} made Tasbih Hub and reads messages sent to ${SITE_EMAIL}.`,
  },
];

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Tasbih Hub",
          url: `${SITE_URL}/about`,
          description:
            "Tasbih Hub is a free online tasbih counter for dhikr, istighfar, and durood. Counts stay on the device.",
          mainEntity: {
            "@type": "Organization",
            name: "Tasbih Hub",
            url: SITE_URL,
            email: SITE_EMAIL,
            sameAs: [SITE_INSTAGRAM],
            founder: { "@type": "Person", name: SITE_OWNER, email: SITE_EMAIL },
          },
        }}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />

      <header className="mx-auto mt-8 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">Tasbih Hub</p>
        <h1 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">About Tasbih Hub</h1>
        <p className="mt-4 text-lg">
          A free online tasbih counter for daily dhikr. Count tasbih, istighfar, and durood in the browser, read the morning and evening adhkar, and keep the number on this device.
        </p>
      </header>

      <section className="mx-auto mt-8 max-w-3xl rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6 text-center">
        <h2 className="font-display text-3xl">What Tasbih Hub is</h2>
        <p className="mt-3">
          Tasbih is the counted remembrance of Allah: phrases such as SubhanAllah, Alhamdulillah, and Allahu Akbar, often in sets of 33, 99, or 100. Tasbih Hub is the digital form of that count. It is not a course, a fatwa service, or a social network. You open the <Link href="/tasbih-counter" className="underline">tasbih counter</Link>, say the words, and tap once for each repetition.
        </p>
        <p className="mt-3">
          Dhikr and zikr are two spellings of the same practice. The <Link href="/dhikr-counter" className="underline">dhikr counter</Link> and the <Link href="/zikr-counter" className="underline">zikr counter</Link> are the same kind of tool. Istighfar and durood have their own pages so a search for those counts lands on the right phrase.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-center text-3xl">Our mission</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center">
          Make a daily tasbih possible on a phone without an account, an install, or a locked list of phrases. The count should be easy to finish, and the Arabic on the page should be something you can check.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-center text-3xl">Free counters and guides</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center">
          Each card opens a real page. The counter pages start a count. The reading pages give the Arabic, the meaning, and the usual number.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <li key={tool.href} className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5">
              <h3 className="text-lg font-semibold">
                <Link href={tool.href} className="underline decoration-[var(--gold)] underline-offset-4">{tool.title}</Link>
              </h3>
              <p className="mt-2 text-sm">{tool.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-center text-3xl">How the digital tasbih works</h2>
        <ol className="mx-auto mt-6 max-w-3xl list-decimal space-y-3 pl-5">
          <li>Choose a phrase, or stay on the one already showing. In Manual mode you can tap “Tap to change” and pick another dhikr, including one you add yourself.</li>
          <li>Set a target: 33, 66, 99, another number, or no limit. Sunnah mode keeps the after-prayer set at 33, 33, then 34.</li>
          <li>Tap the gold button once for each repetition. Space or Enter does the same on a keyboard. Minus removes one if you tapped too soon.</li>
          <li>Reset ends this round. The lifetime total on the device is separate from that round.</li>
          <li>Focus mode darkens the screen so only the count, the phrase, and the buttons remain. Full screen is separate: it asks the browser to hide its own bar and does not change the counter.</li>
        </ol>
        <p className="mx-auto mt-4 max-w-3xl">
          After the prayer, start from <Link href="/dhikr-after-salah" className="underline">dhikr after salah</Link>. For the start and end of the day, use <Link href="/morning-adhkar" className="underline">morning adhkar</Link> and <Link href="/evening-adhkar" className="underline">evening adhkar</Link>. Longer reading sits on the <Link href="/blog" className="underline">blog</Link> and in the <Link href="/guides" className="underline">guides</Link>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-center text-3xl">What we keep private</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <li key={value.title} className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm">{value.text}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm">
          Details are on the <Link href="/privacy-policy" className="underline">privacy policy</Link>. Wording limits are on the <Link href="/disclaimer" className="underline">disclaimer</Link>.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6">
        <h2 className="font-display text-3xl">Who made it</h2>
        <p className="mt-3">
          {SITE_OWNER} built Tasbih Hub so a tasbih count would be available in the browser: after salah, during a commute, or when the beads are in another room. The site stays small on purpose. There is no membership, and a custom phrase is not a paid feature.
        </p>
        <p className="mt-3">
          Corrections and questions go to <a className="underline" href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>, or through the <Link href="/contact" className="underline">contact page</Link>. A message does not include the count stored on your device. Instagram, for now, is <a className="underline" href={SITE_INSTAGRAM} rel="me noopener noreferrer" target="_blank">this profile</a>.
        </p>
      </section>

      <section className="mt-12">
        <FaqList items={faqs} title="Questions about Tasbih Hub" />
      </section>

      <section className="band-on-green mt-12 rounded-3xl bg-[var(--green)] px-6 py-10 text-center">
        <h2 className="font-display text-3xl">Start a count</h2>
        <p className="mx-auto mt-3 max-w-xl">
          Open the free tasbih counter and begin with the phrase already on the screen, or change it before the first tap.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/tasbih-counter" className="rounded-full bg-[#f7f3ea] px-5 py-3 text-sm font-semibold text-[var(--green)]">Open the tasbih counter</Link>
          <Link href="/contact" className="rounded-full border border-[#f7f3ea] px-5 py-3 text-sm font-semibold text-[#f7f3ea]">Contact</Link>
        </div>
      </section>
    </article>
  );
}
