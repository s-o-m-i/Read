import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-emerald-600 font-bold text-lg">
          Tasbih Hub
        </Link>

        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
          <li>
            <Link href="/online-tasbih-counter">Tasbih</Link>
          </li>
          <li>
            <Link href="/istighfar-counter">Istighfar</Link>
          </li>
          <li>
            <Link href="/dhikr-counter">Dhikr</Link>
          </li>
          <li>
            <Link href="/durood-counter">Durood</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        {/* Mobile menu placeholder */}
        <div className="md:hidden">☰</div>
      </div>
    </nav>
  );
}
