import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs, { type Crumb } from "@/components/layout/Breadcrumbs";

export default function PageShell({
  crumbs,
  children,
}: {
  crumbs?: Crumb[];
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      {crumbs && (
        <div className="mb-6">
          <Breadcrumbs items={crumbs} />
        </div>
      )}
      <div className="space-y-8">{children}</div>
    </article>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-[var(--green-2)] underline decoration-[var(--gold)] underline-offset-4">
      {children}
    </Link>
  );
}
