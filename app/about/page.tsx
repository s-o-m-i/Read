import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tasbih Hub – Free Online Tasbih & Zikr Counters",
  description:
    "Learn about Tasbih Hub, the free online Islamic tools to track daily tasbih, istighfar, dhikr, and durood. Mobile-friendly, fast, and easy to use.",
  openGraph: {
    title: "About Tasbih Hub – Free Online Tasbih & Zikr Counters",
    description:
      "Tasbih Hub provides free online tasbih, istighfar, dhikr, and durood counters. Learn more about our mission and tools.",
    url: "https://tasbihhub.com/about",
    type: "website",
    siteName: "Tasbih Hub",
    images: [
      {
        url: "https://tasbihhub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tasbih Hub - Online Tasbih & Zikr Counters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tasbih Hub – Free Online Tasbih & Zikr Counters",
    description:
      "Discover Tasbih Hub, the free online tasbih, istighfar, dhikr, and durood counters. Mobile-friendly Islamic tools for daily zikr.",
    images: ["https://tasbihhub.com/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center space-y-4">
        <h1 className="text-4xl font-bold dark:text-gray-300">
          About Tasbih Hub – Free Online Tasbih & Zikr Counters
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Tasbih Hub is dedicated to providing free and easy-to-use online
          tasbih, istighfar, dhikr, and durood counters. Track your daily
          remembrance digitally, fast, and mobile-friendly.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-5xl mx-auto px-4 py-10 space-y-6 text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p>
          Our mission is to make daily zikr and tasbeeh simple and accessible
          online for Muslims worldwide. Whether at home, work, or on the go,
          our tools help you stay consistent in your daily remembrance.
        </p>

        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p>
          We envision a world where every Muslim can easily track and maintain
          their daily zikr without needing physical tasbih counters, apps, or
          distractions.
        </p>

        <h2 className="text-2xl font-semibold">Our Tools</h2>
        <p>
          Tasbih Hub offers four free digital counters:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/online-tasbih-counter" className="text-emerald-600 hover:underline">
              Tasbih Counter
            </Link>{" "}
            – Count tasbeeh and daily dhikr easily online.
          </li>
          <li>
            <Link href="/istighfar-counter" className="text-emerald-600 hover:underline">
              Istighfar Counter
            </Link>{" "}
            – Track your istighfar recitations consistently.
          </li>
          <li>
            <Link href="/dhikr-counter" className="text-emerald-600 hover:underline">
              Dhikr Counter
            </Link>{" "}
            – Count all types of dhikr digitally.
          </li>
          <li>
            <Link href="/durood-counter" className="text-emerald-600 hover:underline">
              Durood Counter
            </Link>{" "}
            – Easily count Durood Sharif recitations online.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Why Choose Tasbih Hub?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Free, fast, and mobile-friendly counters</li>
          <li>No registration or login required</li>
          <li>Anonymous progress tracking in your browser</li>
          <li>Accessible from any device, anywhere</li>
          <li>Simple, distraction-free design</li>
        </ul>

        <h2 className="text-2xl font-semibold">Learn & Practice Together</h2>
        <p>
          Beyond our tools, we create educational content on Islamic remembrance.{" "}
          <Link href="/blog" className="text-emerald-600 hover:underline">Read our blog articles</Link> to deepen your understanding of zikr, istighfar, and Durood Sharif,{" "}
          then use our digital counters to practice consistently.
        </p>

        <h2 className="text-2xl font-semibold">Connect With Us</h2>
        <p>
          Tasbih Hub is made by Muhammad Suleman. For questions, a correction, or a suggestion, write to{" "}
          <a href="mailto:sulemandevofficial@gmail.com" className="text-emerald-600 hover:underline">sulemandevofficial@gmail.com</a>{" "}
          or use the{" "}
          <Link href="/contact" className="text-emerald-600 hover:underline">
            contact page
          </Link>.
        </p>
      </section>
    </main>
  );
}
