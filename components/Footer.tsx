import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { SITE_EMAIL, SITE_INSTAGRAM, SITE_OWNER } from "@/lib/site";

const columns = [
  {
    title: "Practice",
    links: [
      ["/tasbih-counter", "Tasbih counter"],
      ["/dhikr-counter", "Dhikr counter"],
      ["/istighfar-counter", "Istighfar counter"],
      ["/durood-counter", "Durood counter"],
      ["/morning-adhkar", "Morning adhkar"],
      ["/dhikr-after-salah", "Dhikr after salah"],
    ],
  },
  {
    title: "Learn",
    links: [
      ["/dhikr-in-islam", "Dhikr in Islam"],
      ["/adhkar", "Daily adhkar"],
      ["/evening-adhkar", "Evening adhkar"],
      ["/dhikr-before-sleep", "Dhikr before sleep"],
      ["/guides", "Guides"],
    ],
  },
  {
    title: "Read",
    links: [
      ["/about", "About"],
      ["/dhikr", "Dhikr library"],
      ["/asmaul-husna", "99 Names"],
      ["/blog", "Blog"],
      ["/contact", "Contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["/privacy-policy", "Privacy Policy"],
      ["/terms-of-service", "Terms"],
      ["/cookie-policy", "Cookies"],
      ["/disclaimer", "Disclaimer"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden bg-[#071832] text-[#e9edf3]">
      <div aria-hidden className="geo-pattern pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-16">
        <div className="col-span-2 md:col-span-4 lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fcfaf5]">
              <Image src="/images/tasbih.png" alt="" width={28} height={28} />
            </span>
            <span className="font-display text-2xl text-white">Tasbih Hub</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#c3cbd8]">A digital companion for daily dhikr. Counts stay on this device. Made by {SITE_OWNER}.</p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a href={`mailto:${SITE_EMAIL}`} className="inline-flex items-center gap-2 text-[#e3c77f] hover:text-white">
              <Mail size={16} aria-hidden />
              {SITE_EMAIL}
            </a>
            <a href={SITE_INSTAGRAM} className="inline-flex items-center gap-2 text-[#e3c77f] hover:text-white" rel="me noopener noreferrer" target="_blank">
              <Instagram size={16} aria-hidden />
              Instagram
            </a>
          </div>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e3c77f]">{column.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {column.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-[#c3cbd8] transition-colors hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="relative border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-[#9aa6b8] sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Tasbih Hub. Your progress is stored locally on this device.
        </p>
      </div>
    </footer>
  );
}
