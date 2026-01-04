import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – Tasbih Hub",
  description:
    "Read the Terms of Service for Tasbih Hub, the free online Tasbih and Zikr counters website.",
  openGraph: {
    title: "Terms of Service – Tasbih Hub",
    description:
      "Learn the Terms of Service for using Tasbih Hub's online Tasbih and Zikr counters.",
    url: "https://tasbihhub.com/terms-of-service",
    type: "website",
  },
};

export default function TermsOfService() {
  return (
    <>
         <link rel="canonical" href="https://tasbihhub.com/terms-of-service" />


      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-700 dark:text-gray-300 space-y-6">
        <h1 className="text-3xl font-bold dark:text-gray-300 mb-4">Terms of Service</h1>

        {/* Add your content here */}
       <section className="space-y-6 text-gray-700 dark:text-gray-300">
  <p>
    Welcome to Tasbih Hub! By using our website and digital Tasbih and Zikr counters, you agree to comply with these Terms of Service. Please read them carefully.
  </p>

  <h2 className="text-2xl font-semibold">Use of Our Services</h2>
  <p>
    Tasbih Hub provides free online tools to help users perform daily Tasbih, Dhikr, Istighfar, and Durood recitations. You may use our tools for personal, non-commercial purposes only. You agree not to misuse our website or attempt to interfere with its proper operation.
  </p>

  <h2 className="text-2xl font-semibold">User Responsibilities</h2>
  <p>
    While using Tasbih Hub, you agree to respect all applicable laws and not engage in activities that could harm the website, its users, or any third party. This includes but is not limited to distributing malware, scraping data, or sharing offensive content.
  </p>

  <h2 className="text-2xl font-semibold">Intellectual Property</h2>
  <p>
    All content, designs, and software on Tasbih Hub are the property of Tasbih Hub and are protected by copyright laws. You may not reproduce, distribute, or create derivative works without prior written permission.
  </p>

  <h2 className="text-2xl font-semibold">Privacy</h2>
  <p>
    We respect your privacy. Our tools do not collect personal information. Any data saved in your browser, such as Tasbih counter progress, is stored locally and not shared with third parties. For more details, see our <a href="/privacy-policy" className="text-emerald-600 underline">Privacy Policy</a>.
  </p>

  <h2 className="text-2xl font-semibold">Disclaimers</h2>
  <p>
    Tasbih Hub is provided "as is" without warranties of any kind. We do not guarantee uninterrupted access, and we are not responsible for any errors, loss of data, or issues resulting from the use of our tools.
  </p>

  <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
  <p>
    In no event shall Tasbih Hub be liable for any indirect, incidental, or consequential damages arising from the use of our website or tools. Your use of Tasbih Hub is at your own risk.
  </p>

  <h2 className="text-2xl font-semibold">Changes to Terms</h2>
  <p>
    We may update these Terms of Service from time to time. Changes will be posted on this page with an updated date. Continued use of Tasbih Hub after changes constitutes acceptance of the updated terms.
  </p>

  <h2 className="text-2xl font-semibold">Contact Us</h2>
  <p>
    If you have any questions about these Terms of Service, please contact us at <a href="mailto:info@tasbihhub.com" className="text-emerald-600 underline">info@tasbihhub.com</a>.
  </p>
</section>

      </main>
    </>
  );
}
