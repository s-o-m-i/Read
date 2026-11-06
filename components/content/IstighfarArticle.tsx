import Link from "next/link";
import FaqAccordion from "@/components/home/FaqAccordion";
import { Container, textLink } from "@/components/home/ui";
import JsonLd from "@/components/seo/JsonLd";

const faqs = [
  {
    question: "What does Astaghfirullah mean in English?",
    answer:
      "Astaghfirullah means “I seek forgiveness from Allah.” Some translations say “I ask Allah to forgive me.” Both are the same Arabic phrase: أَسْتَغْفِرُ اللَّهَ.",
  },
  {
    question: "How do you pronounce Astaghfirullah?",
    answer:
      "Say it as As-tagh-fi-rul-lah. Keep “As” short, use a light throat sound on “tagh” (the letter ghayn), then “fir” and “ullah.” Slow the four beats down until they join naturally.",
  },
  {
    question: "What is the correct Arabic spelling of Astaghfirullah?",
    answer:
      "The Arabic is أَسْتَغْفِرُ اللَّهَ. English forms such as Astagfirullah or Astaghfurillah are only transliteration. They are not a different spelling of the Arabic, and they are not a different dua.",
  },
  {
    question: "How many times should I say Astaghfirullah daily?",
    answer:
      "There is no obligatory daily number. The Prophet, peace be upon him, sought Allah’s forgiveness more than seventy times a day, and a hundred times a day is also authentically reported. After each prayer, three times is the usual Sunnah. A personal target is optional.",
  },
  {
    question: "Can I use a digital counter for Istighfar?",
    answer:
      "Yes. A digital Istighfar counter is only a counting aid, like prayer beads or the fingers. The worship is the recitation itself. Use the counter at the top of this page to keep a target without losing your place.",
  },
  {
    question: "What is the difference between Istighfar and Astaghfirullah?",
    answer:
      "Istighfar is the act of seeking Allah’s forgiveness. Astaghfirullah is the short phrase most Muslims use for that act. Other forgiveness duas, including Sayyidul Istighfar, also fall under Istighfar.",
  },
  {
    question: "What is Sayyidul Istighfar?",
    answer:
      "Sayyidul Istighfar is the longer “master” dua for forgiveness recorded in Sahih al-Bukhari, Hadith 6306. It begins Allahumma anta Rabbi. It is usually said once with attention, not counted in the hundreds like the short Astaghfirullah.",
  },
  {
    question: "Can I say Astaghfirullah at any time of the day?",
    answer:
      "Yes. Istighfar is not limited to a prayer time or a particular hour. It may be said after salah, in the morning, at night, or whenever you remember a fault or want to remember Allah.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function DuaPanel({
  arabic,
  transliteration,
  meaning,
  compact,
}: {
  arabic: string;
  transliteration: string;
  meaning: string;
  compact?: boolean;
}) {
  return (
    <figure className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--bg-elevated)] px-5 py-8 text-center sm:px-8">
      <blockquote>
        <p
          className={`font-arabic leading-[2.15] text-[var(--ink)] ${compact ? "text-[1.35rem] sm:text-[1.65rem]" : "text-[1.85rem] sm:text-[2.2rem]"}`}
          dir="rtl"
          lang="ar"
        >
          {arabic}
        </p>
      </blockquote>
      <figcaption className="mt-5 space-y-1">
        <p className="font-display text-xl text-[var(--ink)]">{transliteration}</p>
        <p>{meaning}</p>
      </figcaption>
    </figure>
  );
}

export default function IstighfarArticle() {
  return (
    <article>
      <JsonLd data={faqSchema} />

      <section id="what-is-istighfar" aria-labelledby="what-is-istighfar-title" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 id="what-is-istighfar-title" className="font-display text-3xl leading-[1.15] sm:text-4xl">
              What Is Istighfar?
            </h2>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-8">
              <p>
                Istighfar is the practice of seeking forgiveness from Allah. The word comes from the Arabic root for covering and pardoning. A Muslim who makes Istighfar is not bargaining with a formula. They are turning back to Allah, admitting need of His mercy, and asking Him to forgive what they have done and what they have left undone.
              </p>
              <p>
                The short phrase most people use is Astaghfirullah: “I seek forgiveness from Allah.” It is a dua for forgiveness and a form of remembrance of Allah at the same time. You may say it after a specific mistake, after salah, while walking, or as a counted daily dhikr. The wording is short enough to learn in a minute, and it is the same plea the Prophet Muhammad (peace be upon him) used when he asked Allah to forgive him.
              </p>
              <p>
                Istighfar is not reserved for people who feel they have committed a major sin. It belongs in ordinary Muslim daily worship: a regular return to Allah, a check on pride, and a way of keeping the heart attached to the One who pardons. Repentance in Islam includes regret, leaving the wrong, and intending not to return to it. The tongue says the words; the heart is meant to mean them.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="astaghfirullah-arabic" aria-labelledby="astaghfirullah-arabic-title" className="scroll-mt-20 bg-[var(--band)] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 id="astaghfirullah-arabic-title" className="font-display text-3xl leading-[1.15] sm:text-4xl">
              Astaghfirullah in Arabic, English and Transliteration
            </h2>
            <p className="mt-6 text-[1.05rem] leading-8">
              This is the phrase on the Istighfar counter above. The Arabic does not change. English only tries to write the sound.
            </p>
            <div className="mt-8">
              <DuaPanel
                arabic="أَسْتَغْفِرُ اللَّهَ"
                transliteration="Astaghfirullah"
                meaning="I seek forgiveness from Allah."
              />
            </div>

            <h3 className="mt-10 font-display text-2xl">How to pronounce Astaghfirullah</h3>
            <p className="mt-4 text-[1.05rem] leading-8">
              Say it in four beats: <strong className="ink">As</strong> (as in “ask”) · <strong className="ink">tagh</strong> (a soft gh from the throat, the letter ghayn) · <strong className="ink">fir</strong> · <strong className="ink">ullah</strong>. Put together: As-tagh-fi-rul-lah. If “gh” is new, keep the air in the throat rather than making a hard English “g.”
            </p>
            <dl className="mt-6 divide-y divide-[var(--line)] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)]">
              <div className="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:items-baseline">
                <dt className="font-medium text-[var(--ink)]">Astaghfiru</dt>
                <dd>I seek forgiveness</dd>
              </div>
              <div className="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:items-baseline">
                <dt className="font-medium text-[var(--ink)]">Allah</dt>
                <dd>Allah</dd>
              </div>
            </dl>

            <h3 className="mt-10 font-display text-2xl">Why English spellings differ</h3>
            <p className="mt-4 text-[1.05rem] leading-8">
              People meet Astaghfirullah, Astagfirullah, Astaghfurillah, Astagfurullah, Astaghfirulah, and shorter guesses such as Astafirallah or Astagfirallah. All of them are attempts to write one Arabic expression: أَسْتَغْفِرُ اللَّهَ (استغفر الله in English: I seek forgiveness from Allah). They are not different duas and they do not carry different meanings. Transliteration varies because English has no exact letter for ghayn, and writers disagree about vowels. When you count on this page, you are counting that one Arabic phrase.
            </p>
          </div>
        </Container>
      </section>

      <section id="how-to-use-istighfar-counter" aria-labelledby="how-to-use-title" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 id="how-to-use-title" className="font-display text-3xl leading-[1.15] sm:text-4xl">
              How to Use an Online Istighfar Counter
            </h2>
            <p className="mt-6 text-[1.05rem] leading-8">
              The tool at the top of this page is a free online Istighfar counter — a digital tasbih for Astaghfirullah. Use it as you would beads or your fingers: recite first, then mark one count.
            </p>
            <ol className="mt-8 list-decimal space-y-3 pl-6 text-[1.05rem] leading-8">
              <li>
                Open the <a href="#istighfar-counter" className={textLink}>Istighfar counter</a> at the top of this page.
              </li>
              <li>Recite Astaghfirullah.</li>
              <li>Tap the counter once after each recitation.</li>
              <li>Continue until you reach your personal target.</li>
              <li>Reset the count when you want to begin a new session.</li>
            </ol>
            <p className="mt-8 text-[1.05rem] leading-8">
              A digital Istighfar counter helps you track recitations and keep a daily dhikr habit without losing your place. Your count stays on this device. If you also want to count SubhanAllah and other phrases, use the{" "}
              <Link href="/#counter" className={textLink}>
                Online Tasbih Counter
              </Link>
              . To send blessings upon the Prophet (peace be upon him), use the{" "}
              <Link href="/durood-counter" className={textLink}>
                Durood Counter
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section id="benefits-of-istighfar" aria-labelledby="benefits-title" className="scroll-mt-20 bg-[var(--band)] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 id="benefits-title" className="font-display text-3xl leading-[1.15] sm:text-4xl">
              Benefits and Importance of Istighfar in Islam
            </h2>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-8">
              <p>
                The first purpose of Istighfar is seeking Allah&apos;s forgiveness. It is how a Muslim names their need of pardon: recognizing a mistake, turning back, and asking the One who forgives to cover it. That is repentance in Islam, not a public performance and not a claim that the speaker is now sinless.
              </p>
              <p>
                Repeating Astaghfirullah also trains remembrance of Allah in ordinary hours. Daily Istighfar after prayer, in the morning, or as a counted practice keeps the tongue busy with something better than neglect. Sincerity matters more than speed. A smaller number said with attention is worth more than a large number said while the heart is elsewhere.
              </p>
              <p>
                The Qur&apos;an links asking forgiveness with hope in Allah&apos;s mercy, and with a good life in this world, without turning the words into a guarantee of wealth. In{" "}
                <a className={textLink} href="https://quran.com/71/10-12">
                  Surah Nuh (71:10–12)
                </a>
                , Nuh (peace be upon him) told his people: “Ask forgiveness of your Lord. Indeed, He is ever a Perpetual Forgiver. He will send rain from the sky upon you in showers, and increase you in wealth and children, and provide for you gardens and rivers.” The passage is a call to Istighfar, and a reminder that provision is from Allah.
              </p>
              <p>
                <a className={textLink} href="https://quran.com/11/3">
                  Surah Hud (11:3)
                </a>{" "}
                gives a similar instruction: seek forgiveness of your Lord, then repent to Him, and He will let you enjoy a good provision for a stated term and give every doer of good his due. The verse pairs Istighfar with tawbah. Saying Astaghfirullah while intending to continue the same wrong is not the repentance the verse describes.
              </p>
              <p>
                Making Istighfar part of daily worship — after the five prayers, as morning or evening dhikr, or as a personal counted target — is a practical way to keep that turning-back regular. The counter on this page only records the number you intended. Forgiveness is asked of Allah.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="how-many-times" aria-labelledby="how-many-title" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 id="how-many-title" className="font-display text-3xl leading-[1.15] sm:text-4xl">
              How Many Times Should You Read Astaghfirullah?
            </h2>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-8">
              <p>
                Muslims may make Istighfar throughout the day. There is no obligatory count that every person must complete before sunset. What is established is that the Prophet (peace be upon him) sought forgiveness often, that a hundred times is a known Sunnah practice, and that a short Istighfar after each prayer is also Sunnah.
              </p>
              <p>
                Abu Hurairah (may Allah be pleased with him) reported that he heard the Messenger of Allah (peace be upon him) say: “By Allah, I seek forgiveness from Allah and repent to Him more than seventy times a day.” The report is in{" "}
                <a className={textLink} href="https://sunnah.com/bukhari:6307">
                  Sahih al-Bukhari 6307
                </a>
                .
              </p>
              <p>
                Reciting Astaghfirullah 100 times is an established Sunnah practice supported by authentic narrations. In{" "}
                <a className={textLink} href="https://sunnah.com/muslim:2702a">
                  Sahih Muslim 2702
                </a>
                , he told people to repent to Allah and said that he himself sought repentance a hundred times a day. Many Muslims therefore take a hundred as a clear, repeatable daily target. That target is recommended practice, not an obligation. Do not treat every personal goal — 500, 1,000, or another number you chose — as if it were required.
              </p>
              <p>
                After the five daily prayers, the usual Sunnah is to say Astaghfirullah three times after the taslim, before the rest of the post-prayer dhikr. A daily hundred is extra, if you choose it. Use the counter if a number helps you stay consistent. If it becomes a race, put the count down and return to the meaning.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="sayyidul-istighfar" aria-labelledby="sayyidul-title" className="scroll-mt-20 bg-[var(--band)] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 id="sayyidul-title" className="font-display text-3xl leading-[1.15] sm:text-4xl">
              What Is Sayyidul Istighfar?
            </h2>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-8">
              <p>
                Sayyidul Istighfar means the master, or foremost, supplication for forgiveness. It is a longer Islamic supplication than the short Astaghfirullah. In{" "}
                <a className={textLink} href="https://sunnah.com/bukhari:6306">
                  Sahih al-Bukhari, Hadith 6306
                </a>
                , Shaddad ibn Aws (may Allah be pleased with him) reported that the Prophet (peace be upon him) described this wording as the most superior way of asking Allah for forgiveness.
              </p>
            </div>
            <div className="mt-8">
              <DuaPanel
                compact
                arabic="اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ."
                transliteration="Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana ‘abduka, wa ana ‘ala ‘ahdika wa wa‘dika mastata‘tu. A‘udhu bika min sharri ma sana‘tu. Abu’u laka bi ni‘matika ‘alayya, wa abu’u bi dhanbi, faghfir li, fa innahu la yaghfirudh-dhunuba illa anta."
                meaning="O Allah, You are my Lord. There is no god but You. You created me and I am Your servant. I am upon Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me, and I acknowledge my sin, so forgive me. None forgives sins except You."
              />
            </div>
            <p className="mt-8 text-[1.05rem] leading-8">
              The same hadith mentions a great reward for the one who says it with firm faith during the day and dies before evening, or says it at night and dies before morning. That statement belongs to the Prophet’s words as recorded in Bukhari. We do not add to it, and we do not present the dua as a charm or as a promise we ourselves issue. It is said with belief in Allah.
            </p>
            <p className="mt-4 text-[1.05rem] leading-8">
              Use the short Astaghfirullah when you want a counted repetition. Say Sayyidul Istighfar slowly, usually once, especially in the morning or evening. The Istighfar routine under the counter follows that pattern: one hundred short Istighfar, then this dua once.
            </p>
          </div>
        </Container>
      </section>

      <section id="istighfar-faq" aria-labelledby="istighfar-faq-title" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl lg:max-w-none">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <h2 id="istighfar-faq-title" className="font-display text-3xl leading-[1.15] sm:text-4xl">
                  Frequently Asked Questions About Istighfar
                </h2>
              </div>
              <div className="lg:col-span-8">
                <FaqAccordion items={faqs} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
