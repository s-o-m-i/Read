import Link from "next/link";

export const metadata = {
  title: "Free Online Tasbih & Zikr Counters – Digital Islamic Tools",
  description:
    "Free online tasbih, istighfar, dhikr, and durood counters. Simple, mobile-friendly Islamic tools to track your daily zikr.",
};

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center space-y-4">
        <h1 className="text-4xl font-bold dark:text-gray-300">
          Free Online Tasbih & Zikr Counters
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Simple and free digital tasbih tools to help you track zikr, dhikr,
          istighfar, and durood online. No registration required.
        </p>
      </section>

      {/* TOOLS GRID */}
      <section className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ToolCard
          title="Tasbih Counter"
          description="Count tasbeeh, zikr, and dhikr easily with our digital tasbih counter."
          href="/online-tasbih-counter"
        />

        <ToolCard
          title="Istighfar Counter"
          description="Track istighfar recitations and stay consistent in daily zikr."
          href="/istighfar-counter"
        />

        <ToolCard
          title="Dhikr Counter"
          description="A simple digital dhikr counter for all types of remembrance."
          href="/dhikr-counter"
        />

        <ToolCard
          title="Durood Counter"
          description="Count durood sharif recitations easily online."
          href="/durood-counter"
        />
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-5xl mx-auto px-4 py-12 space-y-6 text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold">
          Why Use Our Digital Tasbih Tools?
        </h2>

        <p>
          Our free online tasbih and zikr counters are designed for Muslims who
          want a simple and reliable way to track daily remembrance. These tools
          work directly in your browser and save your progress automatically.
        </p>

        <p>
          Whether you are counting tasbeeh after salah or completing daily
          istighfar and durood, our digital zikr counters help you stay focused
          without distractions.
        </p>
      </section>
    </main>
  );
}

/* Reusable Tool Card */
function ToolCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-md transition"
    >
      <h3 className="text-xl font-semibold text-emerald-600 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
    </Link>
  );
}
