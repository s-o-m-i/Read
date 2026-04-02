import Link from "next/link";

export const metadata = {
  title: "Dhikr in Islam: Meaning, Benefits, Types & Daily Practice Guide",
  description:
    "Comprehensive guide to dhikr in Islam. Learn what is dhikr, types of dhikr, tasbih after salah, istighfar, Asmaul Husna, daily routines, and Ramadan dhikr practices.",
  keywords:
    "dhikr in Islam, what is dhikr, types of dhikr, tasbih after salah, istighfar, Asmaul Husna, daily dhikr routine, Ramadan dhikr",
  openGraph: {
    title: "Dhikr in Islam: Complete Guide to Islamic Remembrance",
    description:
      "Discover the meaning, benefits, and practices of dhikr. Learn tasbih, istighfar, Asmaul Husna, and establish a powerful daily dhikr routine.",
  },
};

export default function DhikrInIslamPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Dhikr in Islam: Meaning, Benefits, Types & Daily Practice Guide
          </h1>
          <p className="text-blue-100 text-lg">
            Master the spiritual practice of Islamic remembrance and transform your connection with Allah
          </p>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Quick Navigation</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-blue-800 dark:text-blue-200">
            <li>
              <a href="#what-is-dhikr" className="hover:text-blue-600 hover:underline">
                → What is Dhikr?
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-blue-600 hover:underline">
                → Spiritual Benefits
              </a>
            </li>
            <li>
              <a href="#types" className="hover:text-blue-600 hover:underline">
                → Types of Dhikr
              </a>
            </li>
            <li>
              <a href="#tasbih-after-salah" className="hover:text-blue-600 hover:underline">
                → Tasbih After Salah
              </a>
            </li>
            <li>
              <a href="#istighfar" className="hover:text-blue-600 hover:underline">
                → Istighfar Practice
              </a>
            </li>
            <li>
              <a href="#asmaul-husna" className="hover:text-blue-600 hover:underline">
                → Asmaul Husna Dhikr
              </a>
            </li>
            <li>
              <a href="#daily-routine" className="hover:text-blue-600 hover:underline">
                → Daily Dhikr Routine
              </a>
            </li>
            <li>
              <a href="#ramadan-dhikr" className="hover:text-blue-600 hover:underline">
                → Ramadan Dhikr
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert max-w-none space-y-8">
        {/* WHAT IS DHIKR */}
        <section id="what-is-dhikr">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What is Dhikr (Zikr)?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Dhikr (also spelled Zikr) is an Arabic term meaning "remembrance" or "mention." In Islamic spirituality,
            dhikr refers to the conscious and deliberate remembrance of Allah through specific phrases, prayers, and
            supplications. It is one of the most fundamental and rewarding practices in Islam, rooted deeply in the Quran
            and the teachings of Prophet Muhammad (peace be upon him).
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Allah says in the Quran: "So remember Me; I will remember you. And be grateful to Me and do not deny Me."
            (Quran 2:152). This verse highlights the reciprocal nature of dhikr—when we remember Allah, He remembers us,
            establishing a profound spiritual connection that lies at the heart of Islamic faith and practice.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Dhikr is not limited to formal prayers or specific times. Rather, it is a continuous state of heart and mind
            that should permeate daily life. Whether through words, actions, or consciousness, dhikr encompasses every
            aspect of a Muslim's spiritual journey. It is the bridge between the soul and the Divine, a practice that
            purifies the heart, elevates the spirit, and brings inner peace.
          </p>

          <div className="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-600 p-4 my-6">
            <p className="text-blue-900 dark:text-blue-200 font-semibold">Key Insight:</p>
            <p className="text-blue-800 dark:text-blue-300">
              Dhikr is not just recitation—it is mindful, intentional remembrance of Allah with presence of heart and
              consciousness of His infinite greatness.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Spiritual & Psychological Benefits of Dhikr
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                🕊️ Inner Peace & Tranquility
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Regular dhikr calms the mind and soothes anxiety. Allah promises in Quran 13:28: "Indeed, in the remembrance
                of Allah do hearts find rest." Scientific studies confirm that mindful recitation lowers stress and promotes
                mental wellness.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                ❤️ Heart Purification
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dhikr polishes the heart (qalb), removing rust caused by sin and heedlessness. Consistent remembrance
                strengthens spiritual awareness and deepens connection with the Creator.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                🌟 Increased Barakah (Divine Blessing)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Those who engage in dhikr experience increased blessings in their time, wealth, and relationships. The Prophet
                (saw) emphasized that gatherings where Allah is remembered are blessed by the angels.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                📈 Spiritual Elevation & Reward
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Each phrase of dhikr carries immense reward. The Prophet (saw) emphasized that dhikr brings elevation of
                ranks (darrajat) in Paradise and is a means of earning the pleasure of Allah.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                🛡️ Protection & Spiritual Strength
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Consistent dhikr fortifies the soul against temptation and evil whispers. It serves as a spiritual shield,
                protecting the believer from negative influences and spiritual harm.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                🤝 Divine Companionship
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                The Prophet (saw) taught that Allah becomes the companion of those who remember Him. This creates a constant
                awareness of Divine presence throughout daily life.
              </p>
            </div>
          </div>
        </section>

        {/* TYPES OF DHIKR */}
        <section id="types">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Types of Dhikr: A Complete Overview
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Islamic practice encompasses several forms of dhikr, each with unique spiritual benefits and practices:
          </p>

          <div className="space-y-6">
            {/* Subhanallah */}
            <div className="border-l-4 border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded">
              <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">
                Subhanallah - Glory Be to Allah
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                "Subhanallah" (سبحان الله) means "Glory be to Allah" and is used to praise and glorify Him. This dhikr is
                recited after prayer, during difficult times, and throughout the day as a form of glorification.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>Hadith:</strong> The Prophet (saw) said, "The most beloved words to Allah are four: Subhanallah,
                Alhamdulillah, La ilaha illallah, and Allahu Akbar."
              </p>
            </div>

            {/* Alhamdulillah */}
            <div className="border-l-4 border-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded">
              <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-2">
                Alhamdulillah - All Praise is Due to Allah
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                "Alhamdulillah" (الحمد لله) expresses gratitude and praise to Allah. It is recited upon experiencing blessings,
                after sneezing, and as a constant acknowledgment of Allah's generosity and favors.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>Impact:</strong> Cultivates a heart of gratitude that attracts more blessings and increases spiritual
                contentment.
              </p>
            </div>

            {/* La ilaha illallah */}
            <div className="border-l-4 border-rose-600 bg-rose-50 dark:bg-rose-900/20 p-6 rounded">
              <h3 className="text-2xl font-bold text-rose-900 dark:text-rose-300 mb-2">
                La ilaha illallah - There is No God But Allah
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                "La ilaha illallah" (لا إله إلا الله) is the declaration of Islamic monotheism and the Shahada. It is the most
                powerful dhikr, affirming absolute tawheed (oneness of Allah) and rejecting all forms of polytheism and idolatry.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>Significance:</strong> The Prophet (saw) said this is the greatest and most virtuous dhikr.
              </p>
            </div>

            {/* Allahu Akbar */}
            <div className="border-l-4 border-amber-600 bg-amber-50 dark:bg-amber-900/20 p-6 rounded">
              <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-300 mb-2">
                Allahu Akbar - Allah is the Greatest
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                "Allahu Akbar" (الله أكبر) magnifies Allah's greatness and reminds us that He is greater than any worldly concern.
                It is recited during Takbeer (magnification) and throughout the day as a reminder of Allah's supreme power.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>Practice:</strong> Recite during moments of difficulty to gain perspective and strength.
              </p>
            </div>
          </div>
        </section>

        {/* TASBIH AFTER SALAH */}
        <section id="tasbih-after-salah">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Tasbih After Salah: The Sunnah Practice
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            One of the most recommended forms of dhikr is performing tasbih (subhanallah, alhamdulillah, allahu akbar) immediately
            after completing the five daily prayers. This practice, grounded in authentic hadith, is a simple yet powerful way to
            establish a consistent dhikr routine.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Traditional Method</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Subhanallah (Glory be to Allah):</strong> 33 times
              </p>
              <p>
                <strong>Alhamdulillah (All praise is due to Allah):</strong> 33 times
              </p>
              <p>
                <strong>Allahu Akbar (Allah is the Greatest):</strong> 34 times
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total: 100 recitations. This totals 99 praises, completing the 99 Names of Allah.
              </p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            The Prophet (saw) said: "Whoever glorifies Allah (says Subhanallah) thirty-three times, praises Him (says Alhamdulillah)
            thirty-three times, and magnifies Him (says Allahu Akbar) thirty-four times after every obligatory prayer, all his sins
            shall be forgiven even if they are as numerous as the foam of the sea." (Muslim)
          </p>

          <div className="mt-6 bg-emerald-100 dark:bg-emerald-900/20 border border-emerald-400 dark:border-emerald-600 p-4 rounded">
            <p className="text-emerald-900 dark:text-emerald-300">
              <strong>💡 Tip:</strong> Use our{" "}
              <Link href="/tasbih-counter" className="text-emerald-700 dark:text-emerald-200 underline font-semibold">
                Tasbih Counter
              </Link>
              {" "}to track your dhikr after salah effortlessly.
            </p>
          </div>
        </section>

        {/* ISTIGHFAR */}
        <section id="istighfar">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Istighfar: Seeking Forgiveness & Repentance
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Istighfar (استغفار) is the act of seeking forgiveness from Allah by uttering "Astaghfirullah" (I seek forgiveness
            from Allah). This fundamental dhikr is a cornerstone of Islamic spirituality, expressing repentance and returning to
            Allah's mercy. The Prophet (saw) emphasized istighfar as a path to spiritual cleansing and divine protection.
          </p>

          <div className="border-2 border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/10 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Why Istighfar is Powerful</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex gap-2">
                <span className="text-amber-600">✓</span> Washes away sins and purifies the soul
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">✓</span> Opens doors to Allah's mercy and forgiveness
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">✓</span> Protects from worldly calamities and spiritual harm
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">✓</span> Increases sustenance (rizq) and blessings
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">✓</span> Brings relief and ease in difficulties
              </li>
            </ul>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            The Prophet (saw) said: "Whoever makes a habit of seeking forgiveness, Allah will grant him a way out of every difficulty,
            will give him abundance from resources he cannot expect, and will make easy for him every hardship." (Abu Dawud)
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">The Best Form of Istighfar</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            "Astaghfirullah al-Adheem allathi laa ilaha illahu al-Hayy al-Qayyum wa atubu ilayh"
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Translation: "I seek forgiveness from Allah the Most Great, besides whom there is no deity, the Ever-Living, the Sustainer
            of Existence, and I turn to Him in repentance."
          </p>

          <div className="mt-6 bg-blue-100 dark:bg-blue-900/20 border border-blue-400 dark:border-blue-600 p-4 rounded">
            <p className="text-blue-900 dark:text-blue-300">
              <strong>📊 Track Your Progress:</strong> Use our{" "}
              <Link href="/istighfar-counter" className="text-blue-700 dark:text-blue-200 underline font-semibold">
                Istighfar Counter
              </Link>
              {" "}to maintain consistency in this vital practice.
            </p>
          </div>
        </section>

        {/* ASMAUL HUSNA */}
        <section id="asmaul-husna">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Asmaul Husna: The 99 Beautiful Names of Allah
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Asmaul Husna (الأسماء الحسنى), meaning "The Most Beautiful Names," refers to the 99 divine attributes and names of Allah.
            This form of dhikr is profoundly transformative—by learning and meditating upon Allah's beautiful names, Muslims deepen
            their understanding of His nature and strengthen their spiritual connection.
          </p>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-3">The Quranic Promise</h3>
            <p className="text-gray-700 dark:text-gray-300 italic">
              "And to Allah belong the most beautiful names, so invoke Him by them" (Quran 7:180)
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
              The Prophet (saw) said: "Whoever learns and calls upon Allah by these ninety-nine names will enter Paradise."
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How to Practice Asmaul Husna Dhikr</h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
            <p>
              <strong>1. Daily Recitation:</strong> Spend time each day learning and reciting the names of Allah, reflecting on their
              meanings and how they apply to your life.
            </p>
            <p>
              <strong>2. Contemplation:</strong> Meditate on each name's meaning and how that divine attribute manifests in the universe
              and in your personal circumstances.
            </p>
            <p>
              <strong>3. Invocation:</strong> Call upon Allah using these names when facing specific situations—invoke Al-Aziz (The Mighty)
              for strength, Al-Rahman (The Compassionate) for mercy, As-Salaam (The Source of Peace) for inner tranquility.
            </p>
            <p>
              <strong>4. Practical Application:</strong> Let the divine attributes inspire you to cultivate these qualities in your own
              character and dealings with others.
            </p>
          </div>

          <div className="bg-emerald-100 dark:bg-emerald-900/20 border border-emerald-400 dark:border-emerald-600 p-4 rounded">
            <p className="text-emerald-900 dark:text-emerald-300">
              <strong>🌟 Explore In-Depth:</strong> Visit our comprehensive{" "}
              <Link href="/asmaul-husna" className="text-emerald-700 dark:text-emerald-200 underline font-semibold">
                Asmaul Husna guide
              </Link>
              {" "}for detailed meanings, benefits, and implementation strategies for each divine name.
            </p>
          </div>
        </section>

        {/* DAILY ROUTINE */}
        <section id="daily-routine">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Building an Effective Daily Dhikr Routine
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Dhikr should not be confined to specific moments—it should be woven into the fabric of daily life. Creating a structured
            yet flexible dhikr routine ensures consistency and maximizes spiritual benefits. Here's a practical framework:
          </p>

          <div className="space-y-5">
            {/* Morning */}
            <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-600 p-5 rounded">
              <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-300 mb-3">🌅 Morning Dhikr (After Fajr)</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Subhanallah (33 times)</li>
                <li>• Alhamdulillah (33 times)</li>
                <li>• Allahu Akbar (34 times)</li>
                <li>• Recite Ayat al-Kursi and Surah Al-Ikhlas</li>
                <li>• Invoke a divine name for the day's intentions</li>
              </ul>
              <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-3">
                <em>Duration: 5-10 minutes | Benefits: Spiritual protection and blessings throughout the day</em>
              </p>
            </div>

            {/* Midday */}
            <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-600 p-5 rounded">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">☀️ Midday Dhikr (Dhuhr/Asr)</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Tasbih after Dhuhr prayer (33, 33, 34 times)</li>
                <li>• Recite Asmaul Husna (5-10 names)</li>
                <li>• Brief dua for Allah's protection and guidance</li>
              </ul>
              <p className="text-sm text-blue-700 dark:text-blue-400 mt-3">
                <em>Duration: 3-5 minutes | Benefits: Renewed focus and spiritual energy</em>
              </p>
            </div>

            {/* Evening */}
            <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-5 rounded">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">🌙 Evening Dhikr (After Maghrib/Isha)</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Tasbih after Maghrib and Isha (33, 33, 34 times)</li>
                <li>• Istighfar (70+ times or more)</li>
                <li>• Reflection on the day and seeking forgiveness</li>
                <li>• Dua before sleep (Ayat al-Kursi and sleep duas)</li>
              </ul>
              <p className="text-sm text-purple-700 dark:text-purple-400 mt-3">
                <em>Duration: 10-15 minutes | Benefits: Spiritual cleansing and peaceful sleep</em>
              </p>
            </div>

            {/* Throughout Day */}
            <div className="bg-teal-50 dark:bg-teal-900/10 border-l-4 border-teal-600 p-5 rounded">
              <h3 className="text-xl font-bold text-teal-900 dark:text-teal-300 mb-3">⏰ Throughout the Day</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Subhanallah, Alhamdulillah, La ilaha illallah, Allahu Akbar</li>
                <li>• Istighfar during moments of distraction or error</li>
                <li>• Quick duas before meals, travel, starting tasks</li>
                <li>• Conscious remembrance of Allah while walking, driving, or working</li>
              </ul>
              <p className="text-sm text-teal-700 dark:text-teal-400 mt-3">
                <em>Duration: Continuous | Benefits: Constant connection with the Divine</em>
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-3">📱 Digital Tools to Support Your Dhikr</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Consistency is key. Our counter tools help you stay on track:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/tasbih-counter"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition"
              >
                Tasbih Counter
              </Link>
              <Link
                href="/istighfar-counter"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
              >
                Istighfar Counter
              </Link>
              <Link
                href="/dhikr-counter"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition"
              >
                Dhikr Counter
              </Link>
              <Link
                href="/durood-counter"
                className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded transition"
              >
                Durood Counter
              </Link>
            </div>
          </div>
        </section>

        {/* RAMADAN DHIKR */}
        <section id="ramadan-dhikr">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ramadan Dhikr: Maximizing Spiritual Growth
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Ramadan is the sacred month of increased devotion, fasting, and spiritual elevation. This blessed month presents an
            unprecedented opportunity to deepen your dhikr practice. The rewards for good deeds multiply, and hearts become more
            receptive to Divine remembrance.
          </p>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-l-4 border-emerald-600 p-6 rounded-lg mb-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Allah says: "The month of Ramadan is that in which was revealed the Quran, a guidance for the people and clear proofs of
              guidance and criterion..." (Quran 2:185)
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ramadan Dhikr Schedule</h3>

          <div className="space-y-5">
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">🌙 Taraweeh & Quranic Dhikr</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Attend Taraweeh prayers to recite the entire Quran aloud. The Quran itself is the greatest form of dhikr, filled with divine
                guidance, promises, and remembrance of Allah. Concentrate deeply on the meanings.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">🤲 Post-Taraweeh Dhikr</h4>
              <p className="text-gray-700 dark:text-gray-300">
                After Taraweeh, engage in personal dhikr for 15-30 minutes. Increase your Subhanallah, Alhamdulillah, Allahu Akbar to 100
                times each. Add intensive Asmaul Husna recitation and reflection on Allah's names.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">🌅 Last 10 Days & Laylatul Qadr</h4>
              <p className="text-gray-700 dark:text-gray-300">
                The final 10 nights of Ramadan are particularly blessed. Increase all forms of dhikr, spend entire nights in prayer and
                remembrance, and seek Laylatul Qadr (Night of Power) when dhikr is equivalent to 1000 months of worship.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">📿 Ramadan-Specific Duas</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Aishah (may Allah be pleased with her) reported that the Prophet (saw) taught: When you encounter the Night of Power, say:
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic bg-indigo-100 dark:bg-indigo-900/20 p-3 rounded">
                "Allahumma innaka 'afuwwun kareemun tuhibb al-'afwa fa'fu 'anni"
                <br />
                (O Allah, You are pardoning and generous, You love pardoning, so pardon me)
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-100 dark:bg-blue-900/20 border border-blue-400 dark:border-blue-600 p-4 rounded">
            <p className="text-blue-900 dark:text-blue-300">
              <strong>📖 Complete Guide:</strong> Explore our{" "}
              <Link href="/ramadan-dhikr-guide" className="text-blue-700 dark:text-blue-200 underline font-semibold">
                Comprehensive Ramadan Dhikr Guide
              </Link>
              {" "}for day-by-day practices, duas, and spiritual strategies.
            </p>
          </div>
        </section>

        {/* CONCLUSION */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Final Thoughts: Making Dhikr Your Lifestyle
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Dhikr is not merely an act to be performed at specific times—it is a comprehensive spiritual lifestyle. The goal is to reach a
            state where remembrance of Allah permeates every moment, guiding every decision, and shaping every interaction.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Start small if needed. Commit to one or two consistent practices. Perhaps it's tasbih after salah or 100 istighfars daily.
            Build gradually, adding more forms of dhikr as you progress. Remember, consistency beats perfection—a small amount of regular
            dhikr is far more rewarding than sporadic intensive practice.
          </p>

          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-lg mt-6 border-l-4 border-indigo-600">
            <p className="text-indigo-900 dark:text-indigo-300 text-lg font-semibold mb-2">
              "And remember your Lord within yourself, humbly and with fear, and without loudness in words..." (Quran 7:205)
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Let this verse remind you that the most powerful dhikr is sometimes the silent remembrance within your heart—the conscious
              awareness of Allah's presence throughout your day.
            </p>
          </div>
        </section>
      </article>

      {/* CTA SECTION */}
      <section className="bg-blue-50 dark:bg-blue-900/20 py-12 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Ready to Transform Your Dhikr Practice?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Use our free digital counters to stay consistent with your daily dhikr goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link
              href="/tasbih-counter"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Start Tasbih Counter
            </Link>
            <Link
              href="/asmaul-husna"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Learn 99 Names
            </Link>
            <Link
              href="/ramadan-dhikr-guide"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Ramadan Guide
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED CONTENT */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Related Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/asmaul-husna"
            className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition"
          >
            <h3 className="font-semibold text-blue-600 mb-2">99 Names of Allah (Asmaul Husna)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Deep dive into the divine attributes with complete meanings and benefits</p>
          </Link>
          <Link
            href="/ramadan-dhikr-guide"
            className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition"
          >
            <h3 className="font-semibold text-emerald-600 mb-2">Ramadan Dhikr & Spiritual Guide</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Complete practices and duas for maximum spiritual growth in Ramadan</p>
          </Link>
          <Link
            href="/tasbih-counter"
            className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition"
          >
            <h3 className="font-semibold text-amber-600 mb-2">Digital Tasbih Counter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Track your post-prayer dhikr with our free online counter</p>
          </Link>
          <Link
            href="/istighfar-counter"
            className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition"
          >
            <h3 className="font-semibold text-rose-600 mb-2">Istighfar Counter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Maintain consistency with your daily forgiveness and repentance practice</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
