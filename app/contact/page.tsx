import PageShell from "@/components/content/PageShell";

export const metadata = {
  title: "Contact Tasbih Hub",
  description: "Write to Tasbih Hub about the counters, a correction to a dhikr page, or a translation question.",
  alternates: { canonical: "https://tasbihhub.com/contact" },
};

export default function ContactPage() {
  return (
    <PageShell crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}>
      <h1 className="font-display text-4xl">Contact</h1>
      <p>For a correction to a translation, a broken routine step, or a question about the counters, email <a className="underline" href="mailto:info@tasbihhub.com">info@tasbihhub.com</a>.</p>
      <p className="text-sm text-[var(--muted)]">Counts are stored on your device. A message to this address is not connected to your dhikr history, because that history is not sent to us.</p>
    </PageShell>
  );
}
