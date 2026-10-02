import type { Metadata } from "next";
import LegalPage from "@/components/content/LegalPage";
import { SITE_URL } from "@/lib/i18n/locales";
import { SITE_EMAIL, SITE_OWNER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Tasbih Hub",
  description: "How Tasbih Hub handles data for the free tasbih, dhikr, istighfar, and durood counters.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lede="Tasbih Hub does not ask you to create an account. The dhikr count stays in your browser unless a separate analytics or advertising tool is enabled."
      updated="October 2, 2026"
    >
      <section className="space-y-3">
        <h2>Information we collect</h2>
        <p>
          The counter, theme, and routine progress are stored in this browser. That record is used to restore your count and your light or dark setting. It is not a profile, and it is not uploaded as your dhikr history.
        </p>
        <p>
          If analytics or ads are enabled, those providers may collect technical data such as a cookie identifier and the page you opened. See the <a href="/cookie-policy">Cookie Policy</a> for the categories.
        </p>
        <p>
          The contact form sends the name, email, subject, and message you type to {SITE_OWNER} at {SITE_EMAIL}. FormSubmit delivers that message. It is not linked to the dhikr count stored in this browser.
        </p>
      </section>
      <section className="space-y-3">
        <h2>How we use information</h2>
        <p>
          Local storage is there so you can leave and come back to the same count on the same device. We do not sell a dhikr history. We do not offer cross-device sync.
        </p>
      </section>
      <section className="space-y-3">
        <h2>Cookies and browser storage</h2>
        <p>
          Necessary storage is local. Optional analytics and advertising cookies are described on the <a href="/cookie-policy">Cookie Policy</a> page, including how to clear them.
        </p>
      </section>
      <section className="space-y-3">
        <h2>Third-party services</h2>
        <p>
          The site may load Google Analytics and Google AdSense. Those services are governed by their own policies. What they collect is separate from the counter record kept in local storage.
        </p>
      </section>
      <section className="space-y-3">
        <h2>Data security</h2>
        <p>
          You are responsible for the device and the browser profile you use. Anyone who can open this browser can see the count stored on it. Clearing site data deletes that count.
        </p>
      </section>
      <section className="space-y-3">
        <h2>Children</h2>
        <p>
          The tools are suitable for general use. We do not ask children for an account or a name. A parent who does not want advertising cookies should use the browser controls described in the cookie policy.
        </p>
      </section>
      <section className="space-y-3">
        <h2>Changes</h2>
        <p>When this policy changes, the date at the top of the page changes with it.</p>
      </section>
      <section className="space-y-3">
        <h2>Contact</h2>
        <p>
          Questions: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>. {SITE_OWNER} reads that address.
        </p>
      </section>
    </LegalPage>
  );
}
