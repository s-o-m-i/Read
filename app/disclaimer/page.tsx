import type { Metadata } from "next";
import LegalPage from "@/components/content/LegalPage";
import { SITE_URL } from "@/lib/i18n/locales";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer | Tasbih Hub",
  description: "Tasbih Hub is an educational dhikr tool. It is not a fatwa service, and it does not promise religious or worldly outcomes.",
  alternates: { canonical: `${SITE_URL}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      lede="Tasbih Hub helps you read and count remembrance. It does not replace a scholar, a mushaf, or your own intention."
      updated="October 2, 2026"
    >
      <section className="space-y-3">
        <h2>Not a fatwa</h2>
        <p>
          Articles, translations, and routines on Tasbih Hub are educational. They are not a fatwa, a ruling for your situation, or a substitute for asking a qualified scholar when you need one. Differences among schools and narrations are real. Where more than one authentic count is known, the page says so.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Sources</h2>
        <p>
          Dhikr pages name a Quran verse or a hadith collection when a wording is tied to one. That citation is a pointer for study, not a claim that every related report has been quoted in full. Check the Arabic and a trusted edition before you treat a line as something you will teach.
        </p>
      </section>

      <section className="space-y-3">
        <h2>The counter is a tool</h2>
        <p>
          The digital counter keeps a number on your device. It does not recite for you, and it does not know your intention. A finished target is not proof that a deed was accepted. Tasbih Hub does not promise forgiveness, provision, healing, or any other outcome from using a count.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Accuracy and availability</h2>
        <p>
          We work to keep Arabic, transliteration, and translations careful. A mistake can still appear. If you find one, write to <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>. The site is provided as available. Counts can be lost if you clear the browser, change devices, or use a private window. There is no cross-device backup.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Other sites</h2>
        <p>
          Some articles link to other websites, including sources and tools we do not operate. Their content and policies are their own. A link is not an endorsement of every page on that site.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Advertising and analytics</h2>
        <p>
          The site may show ads or measure traffic through third parties such as Google. Those services use their own cookies, described in the <a href="/cookie-policy">Cookie Policy</a>. Advertising does not change the wording of a dhikr.
        </p>
      </section>
    </LegalPage>
  );
}
