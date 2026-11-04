import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2">
      <span aria-hidden className="h-px w-6 bg-[var(--gold-soft)]" />
      {children}
    </span>
  );
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id} className="mt-3 font-display text-3xl leading-[1.12] sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {subtitle && <h3 className="subhead mt-3 font-display text-xl leading-snug sm:text-2xl">{subtitle}</h3>}
    </div>
  );
}

const buttonBase =
  "btn inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-[transform,box-shadow,background-color] duration-200 motion-safe:hover:-translate-y-0.5";

const buttonVariants = {
  primary: "bg-[var(--brand)] text-[var(--brand-contrast)] shadow-[0_10px_24px_-10px_rgba(11,37,69,0.6)] hover:shadow-[0_14px_30px_-10px_rgba(11,37,69,0.7)]",
  secondary: "border border-[var(--line)] bg-[var(--bg-elevated)] text-[var(--ink)] hover:border-[var(--gold-soft)]",
  gold: "bg-[#e3c77f] text-[#071832] shadow-[0_12px_30px_-12px_rgba(227,199,127,0.7)] hover:bg-[#ecd496]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  icon?: ReactNode;
}) {
  const className = `${buttonBase} ${buttonVariants[variant]}`;
  const content = (
    <>
      {children}
      {icon}
    </>
  );
  if (href.startsWith("#")) return <a href={href} className={className}>{content}</a>;
  return <Link href={href} className={className}>{content}</Link>;
}

export const textLink =
  "font-medium text-[var(--green-2)] underline decoration-[var(--gold-soft)]/60 underline-offset-4 transition-colors hover:decoration-[var(--green-2)]";
