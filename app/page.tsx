import TasbihCounter from "@/components/TasbihCounter";
import Link from "next/link";

export const metadata = {
  title: "Ramadan Dhikr & Asmaul Husna Guide | TasbihHub",
  description:
    "Free online tasbih, istighfar, dhikr, and durood counters. Simple, mobile-friendly Islamic tools to track your daily zikr.",
};

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center space-y-4">
        <TasbihCounter />
        <h1 className="text-4xl text-[#364153] font-bold dark:text-gray-300">
          Free Online Tasbih Counter & Digital Zikr Tools
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            TasbihHub provides free online tasbih counters and digital zikr
            tools for Muslims who want a simple way to track daily dhikr,
            istighfar, durood, and tasbeeh without using a physical tasbih.
          </p>
        </p>

        {/* AI FEATURE ANNOUNCEMENT */}
        <div className="mt-6 inline-block">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 rounded-lg px-6 py-4 shadow-sm">
            <p className="text-emerald-800 dark:text-emerald-300 font-medium text-sm sm:text-base">
              <span className="font-semibold">Coming Soon:</span> AI-Powered
              Zikr Suggestions – Get personalized Islamic remembrance
              recommendations tailored to your spiritual journey
            </p>
          </div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="max-w-5xl mx-auto px-4 py-10 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 text-center">
          Free Online Tasbih & Zikr Counters
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Simple and free digital tasbih tools to help you track zikr, dhikr,
          istighfar, and durood online. No registration required.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ToolCard
            title="Tasbih Counter"
            description="Count tasbeeh, zikr, and dhikr easily with our digital tasbih counter."
            href="/tasbih-counter"
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
        </div>
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
          without distractions. To deepen your spiritual practice, <Link href="/blog/benefits-of-istighfar" className="text-emerald-600 hover:underline">explore the Islamic benefits of zikr</Link> in our comprehensive guides.
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
