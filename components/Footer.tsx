import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* BRAND */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Tasbih Hub
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Free Islamic tools to help you perform zikr, dhikr, and tasbeeh
            easily online.
          </p>
        </div>

        {/* TOOLS */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Zikr Tools
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-emerald-600 hover:underline">
                Tasbih Counter
              </Link>
            </li>
            <li>
              <Link href="/istighfar-counter" className="text-emerald-600 hover:underline">
                Istighfar Counter
              </Link>
            </li>
            <li>
              <Link href="/dhikr-counter" className="text-emerald-600 hover:underline">
                Dhikr Counter
              </Link>
            </li>
            <li>
              <Link href="/durood-counter" className="text-emerald-600 hover:underline">
                Durood Counter
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL / INFO */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Information
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 pb-6">
        © {new Date().getFullYear()} Tasbih Hub. All rights reserved.
      </div>
    </footer>
  );
}
