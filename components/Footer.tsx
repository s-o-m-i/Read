import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl">Tasbih Hub</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">A digital companion for daily dhikr. Counts stay on this device.</p>
        </div>
        <div>
          <h2 className="font-semibold">Practice</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/tasbih-counter">Tasbih counter</Link></li>
            <li><Link href="/dhikr-counter">Dhikr counter</Link></li>
            <li><Link href="/istighfar-counter">Istighfar counter</Link></li>
            <li><Link href="/durood-counter">Durood counter</Link></li>
            <li><Link href="/morning-adhkar">Morning adhkar</Link></li>
            <li><Link href="/dhikr-after-salah">Dhikr after salah</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Read</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/dhikr">Dhikr library</Link></li>
            <li><Link href="/asmaul-husna">99 Names</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <p className="px-4 pb-8 text-center text-sm text-[var(--muted)]">© {new Date().getFullYear()} Tasbih Hub. Your progress is stored locally on this device.</p>
    </footer>
  );
}
