import type { Metadata } from "next";
import LegalPage from "@/components/content/LegalPage";
import { SITE_URL } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Terms of Service | Tasbih Hub",
  description: "Terms for using Tasbih Hub, the free online tasbih and dhikr counters.",
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
};

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      lede="By using Tasbih Hub you agree to these terms. The site is a free counter and reading aid for personal remembrance."
      updated="October 2, 2026"
    >
      <section className="space-y-3">
        <h2>Use of the site</h2>
        <p>
          You may use the counters, routines, and articles for personal remembrance. Do not misuse the site, attempt to break it, or use it to distribute harmful software.
        </p>
      </section>
      <section className="space-y-3">
        <h2>Your responsibilities</h2>
        <p>
          Follow the law that applies to you. Do not scrape the site in a way that degrades it for other people, and do not present Tasbih Hub text as a personal fatwa.
        </p>
      </section>
      <section className="space-y-3">
        <h2>Intellectual property</h2>
        <p>
          The site design, original writing, and software are protected. Quranic Arabic and hadith wording are not our property. You may not copy the site’s original pages into another product without permission.
        </p>
      </section>
      <section className="space-y-3">
        <h2>Privacy</h2>
        <p>
          Counter progress stays in your browser. Analytics and advertising, when enabled, are covered by the <a href="/privacy-policy">Privacy Policy</a> and the <a href="/cookie-policy">Cookie Policy</a>. Religious limits of the content are in the <a href="/disclaimer">Disclaimer</a>.
        </p>
      </section>
      <section className="space-y-3">
        <h2>Disclaimers</h2>
        <p>
          The site is provided as available. We do not guarantee that a count will survive a cleared browser, a new device, or an outage. We do not guarantee that every translation is free of error.
        </p>
      </section>
      <section className="space-y-3">
        <h2>Limitation of liability</h2>
        <p>
          To the extent the law allows, Tasbih Hub is not liable for indirect or consequential loss from using the site, including a lost count. You use the tools at your own risk.
        </p>
      </section>
      <section className="space-y-3">
        <h2>Changes</h2>
        <p>Updated terms are posted on this page with a new date. Using the site after that date means you are using the posted terms.</p>
      </section>
      <section className="space-y-3">
        <h2>Contact</h2>
        <p>
          Questions: <a href="mailto:info@tasbihhub.com">info@tasbihhub.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
