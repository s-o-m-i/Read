import type { Metadata } from "next";
import LegalPage from "@/components/content/LegalPage";
import { SITE_URL } from "@/lib/i18n/locales";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy | Tasbih Hub",
  description: "How Tasbih Hub uses cookies and on-device storage for the dhikr counter, preferences, analytics, and advertising.",
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      lede="This page explains the cookies and the on-device storage Tasbih Hub uses, and how you can control them."
      updated="October 2, 2026"
    >
      <section className="space-y-3">
        <h2>About this policy</h2>
        <p>
          Tasbih Hub is a free website for counting dhikr and reading adhkar. Most of what the counter remembers never leaves your browser. A cookie is a small file a site can store. Local storage is a separate place in the browser where this site keeps your count, theme, and routine progress.
        </p>
        <p>
          Read this together with the <a href="/privacy-policy">Privacy Policy</a>. The English text on this page is the working version of the policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Cookies and local storage</h2>
        <p>
          Cookies are sent back to a server on later visits. Local storage stays on the device and is read by the page itself. The tasbih count, selected dhikr, targets, finished routines, and the light or dark theme are kept in local storage under a versioned key. They are not uploaded to a Tasbih Hub account, because there is no account.
        </p>
      </section>

      <section className="space-y-3">
        <h2>What we use, and why</h2>
        <div className="overflow-x-auto rounded-2xl border border-[var(--line)]">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-[var(--bg-elevated)] text-[var(--ink)]">
              <tr>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Purpose</th>
                <th className="px-4 py-3 font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[var(--line)]">
                <td className="px-4 py-3 align-top text-[var(--ink)]">Strictly necessary</td>
                <td className="px-4 py-3 align-top">Lets the counter and theme work in this browser.</td>
                <td className="px-4 py-3 align-top">Local storage for the count, target, dhikr choice, and theme.</td>
              </tr>
              <tr className="border-t border-[var(--line)]">
                <td className="px-4 py-3 align-top text-[var(--ink)]">Preferences</td>
                <td className="px-4 py-3 align-top">Remembers choices you make on this device.</td>
                <td className="px-4 py-3 align-top">Light or dark mode. Sound and vibration settings for the counter.</td>
              </tr>
              <tr className="border-t border-[var(--line)]">
                <td className="px-4 py-3 align-top text-[var(--ink)]">Your activity</td>
                <td className="px-4 py-3 align-top">Keeps today’s total, lifetime total, and streak on this device only.</td>
                <td className="px-4 py-3 align-top">The local dhikr record. It is not sent to Tasbih Hub.</td>
              </tr>
              <tr className="border-t border-[var(--line)]">
                <td className="px-4 py-3 align-top text-[var(--ink)]">Analytics</td>
                <td className="px-4 py-3 align-top">Helps us see which pages are used, when a measurement ID is configured.</td>
                <td className="px-4 py-3 align-top">Google Analytics cookies, if analytics is enabled for the site.</td>
              </tr>
              <tr className="border-t border-[var(--line)]">
                <td className="px-4 py-3 align-top text-[var(--ink)]">Advertising</td>
                <td className="px-4 py-3 align-top">Supports the free site. Ads are not placed on the counter itself or inside Focus mode.</td>
                <td className="px-4 py-3 align-top">Google AdSense cookies, subject to Google’s own policy and your consent choices.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2>Managing cookies</h2>
        <p>
          You can block or delete cookies in your browser settings. Blocking them does not erase the counter by itself. To clear the count, use Reset on the counter, or clear this site’s local storage from the browser. Clearing site data removes the theme, the count, and saved routines on that browser.
        </p>
        <p>
          Google’s tools provide their own opt-outs for ads and analytics. Those controls belong to Google, not to this page.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Your choices</h2>
        <p>
          You can use the counter without creating an account. If you do not want analytics or advertising cookies, use your browser or the provider’s opt-out. The remembrance stored for the counter remains on the device either way.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Changes to this policy</h2>
        <p>
          If the storage or the third-party tools change, this page will be updated and the date above will change. Continued use of the site after an update means you are using the version then published here.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Contact</h2>
        <p>
          Questions about cookies or on-device storage: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
