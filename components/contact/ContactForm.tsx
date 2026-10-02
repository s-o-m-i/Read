"use client";

import { FormEvent, useEffect, useState } from "react";
import { SITE_EMAIL, SITE_OWNER } from "@/lib/site";

const SUBJECTS = [
  "A correction on a page",
  "A counter or routine",
  "A translation question",
  "A suggestion",
  "Something else",
] as const;

export default function ContactForm({ sent = false }: { sent?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<(typeof SUBJECTS)[number]>(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [nextUrl, setNextUrl] = useState("https://tasbihhub.com/contact?sent=1");

  useEffect(() => {
    setNextUrl(`${window.location.origin}/contact?sent=1`);
  }, []);

  function validate() {
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter an email you can be reached at.";
    if (message.trim().length < 12) next.message = "Write a little more so the message is clear.";
    return next;
  }

  function onSubmit(event: FormEvent) {
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length || honey) event.preventDefault();
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6" role="status">
        <h2 className="font-display text-2xl">Message sent</h2>
        <p className="mt-2">
          {SITE_OWNER} will read it at {SITE_EMAIL}. Your dhikr count was not included.
        </p>
        <a href="/contact" className="mt-4 inline-block text-sm font-semibold text-[var(--green)] underline">
          Send another message
        </a>
      </div>
    );
  }

  return (
    <form action={`https://formsubmit.co/${SITE_EMAIL}`} method="POST" onSubmit={onSubmit} noValidate className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5 sm:p-6">
      <h2 className="font-display text-2xl">Send a message</h2>
      <p className="mt-1 text-sm">It goes to {SITE_OWNER} at {SITE_EMAIL}.</p>
      <div className="mt-5 space-y-4">
        <label className="block text-sm font-medium text-[var(--ink)]">
          Your name
          <input
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none"
          />
          {errors.name && <span id="contact-name-error" className="mt-1 block text-xs text-red-700 dark:text-red-300">{errors.name}</span>}
        </label>
        <label className="block text-sm font-medium text-[var(--ink)]">
          Your email
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none"
          />
          {errors.email && <span id="contact-email-error" className="mt-1 block text-xs text-red-700 dark:text-red-300">{errors.email}</span>}
        </label>
        <label className="block text-sm font-medium text-[var(--ink)]">
          Subject
          <select
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value as (typeof SUBJECTS)[number])}
            className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none"
          >
            {SUBJECTS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-[var(--ink)]">
          Message
          <textarea
            name="message"
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-sm outline-none"
          />
          {errors.message && <span id="contact-message-error" className="mt-1 block text-xs text-red-700 dark:text-red-300">{errors.message}</span>}
        </label>
        <input type="hidden" name="_subject" value={`Tasbih Hub: ${subject}`} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={nextUrl} />
        <input type="text" name="_honey" value={honey} onChange={(event) => setHoney(event.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <button type="submit" className="w-full rounded-full bg-[var(--green)] px-4 py-3 text-sm font-semibold text-[#f7f3ea]">
          Send message
        </button>
      </div>
    </form>
  );
}
