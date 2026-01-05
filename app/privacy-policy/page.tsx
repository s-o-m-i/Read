import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Privacy Policy – Tasbih Hub",
  description:
    "Read the Privacy Policy of Tasbih Hub. Learn how we handle data for our free online Tasbih and Zikr counters.",
  openGraph: {
    title: "Privacy Policy – Tasbih Hub",
    description:
      "Learn how Tasbih Hub protects your data while using our free online Tasbih and Zikr counters.",
    url: "https://tasbihhub.com/privacy-policy",
    type: "website",
  },
};
export default function PrivacyPolicy() {
  return (
    <>
            <link rel="canonical" href="https://tasbihhub.com/privacy-policy" />


      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700 dark:text-gray-300 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-4">Privacy Policy</h1>

       <section className="space-y-6 text-gray-700 dark:text-gray-300">
  <p>
    At Tasbih Hub, your privacy is important to us. This Privacy Policy explains how we handle any information collected while you use our free online Tasbih and Zikr counters.
  </p>

  <h2 className="text-2xl font-semibold">Information We Collect</h2>
  <p>
    Tasbih Hub does not collect personal information. The only data stored is in your browser, such as your Tasbih or Zikr counter progress. This information is saved locally and is not shared with any third parties.
  </p>

  <h2 className="text-2xl font-semibold">How We Use Information</h2>
  <p>
    Any information stored in your browser is used solely to provide a seamless experience while using our tools. For example, your counter progress is saved so you can resume your Zikr later without losing counts.
  </p>

  <h2 className="text-2xl font-semibold">Cookies and Browser Storage</h2>
  <p>
    We may use browser local storage to save your Zikr/Tasbih progress. No cookies are required for the basic functionality of our tools. If you enable optional analytics, cookies may be used to anonymously track usage statistics.
  </p>

  <h2 className="text-2xl font-semibold">Third-Party Services</h2>
  <p>
    Tasbih Hub may use third-party services, such as Google Analytics, to improve the website and analyze traffic. These services are governed by their own privacy policies, and any data collected is anonymous and aggregated.
  </p>

  <h2 className="text-2xl font-semibold">Data Security</h2>
  <p>
    We take reasonable measures to protect the information stored in your browser. However, Tasbih Hub cannot guarantee complete security, and you are responsible for securing your own device and browser.
  </p>

  <h2 className="text-2xl font-semibold">Children’s Privacy</h2>
  <p>
    Tasbih Hub tools are suitable for all ages. We do not knowingly collect personal information from children under 13. Parents or guardians should supervise use of the tools for young children.
  </p>

  <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
  <p>
    We may update this Privacy Policy occasionally. Any changes will be posted on this page, and the updated date will reflect the latest revision.
  </p>

  <h2 className="text-2xl font-semibold">Contact Us</h2>
  <p>
    If you have any questions about this Privacy Policy or how your data is handled, please contact us at 
    <a href="mailto:info@tasbihhub.com" className="text-emerald-600 underline"> info@tasbihhub.com</a>.
  </p>
</section>
      </main>
    </>
  );
}
