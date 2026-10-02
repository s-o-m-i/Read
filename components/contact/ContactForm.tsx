"use client";

import { FormEvent, useState } from "react";
import { SITE_EMAIL, SITE_OWNER } from "@/lib/site";

const SUBJECTS = [
  "A correction on a page",
  "A counter or routine",
  "A translation question",
  "A suggestion",
  "Something else",
] as const;

type Status = "idle" | "sending" | "sent" | "mail";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<(typeof SUBJECTS)[number]>(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate() {
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter an email you can be reached at.";
    if (message.trim().length < 12) next.message = "Write a little more so the message is clear.";
    return next;
  }

  function openMailApp() {
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
    const href = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(`Tasbih Hub: ${subject}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus("mail");
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    if (honey) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SITE_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject,
          message: message.trim(),
          _subject: `Tasbih Hub: ${subject}`,
          _template: "table",
          _captcha: "false",
          _replyto: email.trim(),
        }),
      });
      const data = (await response.json()) as { success?: string | boolean };
      if (!response.ok || data.success === false || data.success === "false") {
        openMailApp();
        return;
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      openMailApp();
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6" role="status">
        <h2 className="font-display text-2xl">Message sent</h2>
        <p className="mt-2">
          {SITE_OWNER} will read it at {SITE_EMAIL}. Your dhikr count was not included.
        </p>
        <button type="button" className="mt-4 text-sm font-semibold text-[var(--green)] underline" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5 sm:p-6">
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
        <label className="absolute -left-[9999px]" aria-hidden="true">
          Company
          <input tabIndex={-1} autoComplete="off" value={honey} onChange={(event) => setHoney(event.target.value)} />
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-[var(--green)] px-4 py-3 text-sm font-semibold text-[#f7f3ea] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "mail" && (
          <p role="status">
            If your mail app did not open, write directly to <a className="underline" href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
