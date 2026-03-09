import TasbihCounterCompact from "@/components/TasbihCounterCompact";
import Link from "next/link";

export const metadata = {
  title: "Digital Tasbih Counter Online - Free Zikr & Dhikr Tool | TasbihHub",
  description:
    "Free digital tasbih counter online for tracking zikr, dhikr, istighfar, and durood. No login required. Works offline on all devices. Start counting now!",
  keywords: "digital tasbih counter, online tasbih counter, zikr counter, dhikr counter, istighfar counter, durood counter, tasbih online, digital tasbih",
};

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Islamic Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02] pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-pulse">☪️</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse animation-delay-1000">🕌</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-pulse animation-delay-2000">📿</div>
        <div className="absolute bottom-20 right-40 text-6xl animate-pulse animation-delay-1500">✨</div>
      </div>

      {/* HERO - COMPACT */}
      <section className="max-w-5xl mx-auto px-4 pt-6 pb-3 text-center space-y-2 relative">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="text-3xl animate-bounce">📿</span>
          <h1 className="text-4xl text-[#364153] font-bold dark:text-gray-300">
            Digital Tasbih Counter Online (Free Zikr & Dhikr Tool)
          </h1>
          <span className="text-3xl animate-bounce animation-delay-500">🤲</span>
        </div>

        {/* AI FEATURE ANNOUNCEMENT */}
        <div className="mt-3 inline-block">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 rounded-lg px-4 py-2 shadow-sm animate-pulse-slow">
            <p className="text-emerald-800 dark:text-emerald-300 font-medium text-xs flex items-center gap-2 justify-center">
              <span>✨</span>
              <span className="font-semibold">Coming Soon:</span> AI-Powered
              Zikr Suggestions
            </p>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
          <a
            href="#counter"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <span>📿</span>
            Start Digital Tasbih Counter
          </a>
          <a
            href="#tools"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-xl shadow hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <span>🕌</span>
            All Zikr & Dhikr Tools
          </a>
        </div>

        {/* SEO-Rich Paragraph */}
        <div className="max-w-3xl mx-auto pt-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            TasbihHub offers a comprehensive <strong>digital tasbih counter</strong> and <strong>online tasbih counter</strong> designed for Muslims worldwide. 
            Our free platform provides specialized tools including a <strong>zikr counter</strong>, <strong>istighfar counter</strong>, <strong>dhikr counter</strong>, 
            and <strong>durood counter</strong> to help you maintain consistent Islamic remembrance. Whether you're counting <strong>tasbih</strong> after salah, 
            tracking daily istighfar, or reciting durood sharif, our <strong>digital tasbih</strong> tools work seamlessly across all devices without requiring 
            any login or installation.
          </p>
        </div>
      </section>

      {/* MAIN COUNTER & TOOLS - SIDE BY SIDE */}
      <section id="counter" className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Counter - Takes 1 Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <TasbihCounterCompact
                counterName="homepage-tasbih"
                title="Start Counting 📿"
              />
            </div>
          </div>
          
          {/* All Tools Grid - Takes 2 Columns */}
          <div id="tools" className="lg:col-span-2 space-y-6">
            {/* Popular Tools Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="text-3xl">📿</span>
                Popular Digital Tasbih & Zikr Counters
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <IslamicToolCard
                  title="Tasbih Counter"
                  description="Count tasbeeh, zikr, and dhikr easily."
                  href="/tasbih-counter"
                  icon="📿"
                  gradient="from-emerald-500/10 to-teal-500/10"
                  darkGradient="dark:from-emerald-600/20 dark:to-teal-600/20"
                />

                <IslamicToolCard
                  title="Istighfar Counter"
                  description="Track istighfar recitations daily."
                  href="/istighfar-counter"
                  icon="🤲"
                  gradient="from-blue-500/10 to-cyan-500/10"
                  darkGradient="dark:from-blue-600/20 dark:to-cyan-600/20"
                />

                <IslamicToolCard
                  title="Dhikr Counter"
                  description="Simple dhikr counter for all types."
                  href="/dhikr-counter"
                  icon="🌙"
                  gradient="from-purple-500/10 to-pink-500/10"
                  darkGradient="dark:from-purple-600/20 dark:to-pink-600/20"
                />

                <IslamicToolCard
                  title="Durood Counter"
                  description="Count durood sharif recitations."
                  href="/durood-counter"
                  icon="✨"
                  gradient="from-amber-500/10 to-orange-500/10"
                  darkGradient="dark:from-amber-600/20 dark:to-orange-600/20"
                />
              </div>
            </div>

            {/* Islamic Remembrance Tools Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="text-3xl">🕌</span>
                Islamic Remembrance Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <IslamicToolCard
                  title="Zikr Counter"
                  description="General zikr counter for any dhikr."
                  href="/zikr-counter"
                  icon="💫"
                  gradient="from-indigo-500/10 to-violet-500/10"
                  darkGradient="dark:from-indigo-600/20 dark:to-violet-600/20"
                />

                {/* ASMAUL HUSNA - SPECIAL HIGHLIGHT */}
                <Link
                  href="/asmaul-husna"
                  className="group relative block p-4 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 border-2 border-emerald-300 dark:border-emerald-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
                  <div className="relative flex items-start gap-3">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🕋</span>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center gap-2">
                        Asmaul Husna
                        <span className="text-sm">📿</span>
                      </h3>
                      <p className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">
                        99 Beautiful Names of Allah with interactive counters
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & AUTHORITY SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border-2 border-emerald-200 dark:border-emerald-800 shadow-lg">
          <h2 className="text-2xl font-bold text-center text-emerald-800 dark:text-emerald-300 mb-4 flex items-center justify-center gap-2">
            <span>✅</span>
            Trusted Digital Tasbih Tool for Daily Dhikr
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-4xl mb-2">🌍</div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Used Worldwide</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Trusted by Muslims globally</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🔓</div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">No Login Required</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Start counting instantly</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Works Offline</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Count anywhere, anytime</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🔒</div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Privacy First</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your data stays local</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - SEO CRITICAL */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-300 mb-6 flex items-center justify-center gap-2">
          <span>❓</span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <FAQItem
            question="What is a digital tasbih counter?"
            answer="A digital tasbih counter is an online tool that helps Muslims count their dhikr, zikr, and tasbih recitations electronically without using physical prayer beads. It tracks your count automatically and saves your progress."
          />
          <FAQItem
            question="Is using an online tasbih counter allowed in Islam?"
            answer="Yes, using a digital tasbih counter is permissible in Islam. It serves the same purpose as traditional tasbih beads - helping you maintain count during dhikr. The intention and remembrance of Allah are what matter most."
          />
          <FAQItem
            question="How do I count dhikr online?"
            answer="Simply click the count button each time you recite your dhikr. Our digital tasbih counter automatically tracks your progress and saves it in your browser, so you can continue later without losing your count."
          />
          <FAQItem
            question="Can I use TasbihHub on my mobile phone?"
            answer="Yes! TasbihHub works perfectly on all mobile devices, tablets, and computers. No app download is required - just open it in your browser and start counting your zikr instantly."
          />
          <FAQItem
            question="Does the tasbih counter work offline?"
            answer="Yes, once the page loads, our digital tasbih counter works completely offline. Your counts are saved locally on your device, ensuring you can practice dhikr anywhere without internet connection."
          />
          <FAQItem
            question="How accurate is the online tasbih counter?"
            answer="Our digital tasbih counter is 100% accurate. Each click is counted precisely, and your progress is automatically saved to prevent any loss of count during your dhikr practice."
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-6 relative">
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/30 dark:to-cyan-950/30 rounded-3xl p-6 border border-emerald-200 dark:border-emerald-800 shadow-lg relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-2 right-2 text-2xl opacity-20 animate-spin-slow">✨</div>
          <div className="absolute bottom-2 left-2 text-2xl opacity-20 animate-pulse">🌙</div>
          
          <div className="relative space-y-3 text-gray-700 dark:text-gray-300">
            <h2 className="text-xl font-bold text-center text-emerald-800 dark:text-emerald-300 flex items-center justify-center gap-2">
              <span>🕌</span>
              Why Use Our Digital Tasbih Tools?
              <span>📿</span>
            </h2>

            <p className="text-sm text-center max-w-3xl mx-auto">
              Our free online tasbih and zikr counters are designed for Muslims who
              want a simple and reliable way to track daily remembrance. These tools
              work directly in your browser and save your progress automatically.
            </p>

            <p className="text-sm text-center max-w-3xl mx-auto">
              Whether you are counting tasbeeh after salah or completing daily
              istighfar and durood, our digital zikr counters help you stay focused
              without distractions. To deepen your spiritual practice, <Link href="/blog/benefits-of-istighfar" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold">explore the Islamic benefits of zikr</Link> in our comprehensive guides.
            </p>

            <div className="flex items-center justify-center gap-6 pt-3 text-3xl">
              <span className="animate-bounce animation-delay-0">🤲</span>
              <span className="animate-bounce animation-delay-300">☪️</span>
              <span className="animate-bounce animation-delay-600">🕋</span>
              <span className="animate-bounce animation-delay-900">📿</span>
            </div>
          </div>
        </div>
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
      className="block p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold text-emerald-600 mb-1.5">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
    </Link>
  );
}

/* Islamic Themed Tool Card */
function IslamicToolCard({
  title,
  description,
  href,
  icon,
  gradient,
  darkGradient,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
  gradient: string;
  darkGradient: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative block p-4 rounded-2xl bg-gradient-to-br ${gradient} ${darkGradient} border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 dark:group-hover:bg-white/5 transition-all duration-300 rounded-2xl"></div>
      
      {/* Content */}
      <div className="relative flex items-start gap-3">
        <span className="text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          {icon}
        </span>
        <div className="flex-1">
          <h3 className="text-base font-bold text-gray-800 dark:text-gray-200 mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

/* FAQ Item Component */
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {question}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">{answer}</p>
    </div>
  );
}
// 
