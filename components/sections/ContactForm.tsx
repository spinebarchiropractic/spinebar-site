"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { Send, CheckCircle } from "lucide-react";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");

    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: `New message from ${form.name} — Spine Bar`,
        }),
      });

      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-cream-border bg-cream-dark p-10 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green/10">
          <CheckCircle size={24} strokeWidth={1.5} className="text-green" />
        </div>
        <h3 className="mb-2 font-serif text-2xl text-green">Message sent.</h3>
        <p className="text-base leading-relaxed text-green-muted">
          We&apos;ll get back to you within one business day. Or call us at{" "}
          <a href={SITE.phoneHref} className="font-medium text-green hover:text-gold">
            {SITE.phone}
          </a>{" "}
          if it&apos;s urgent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-gold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-xl border border-cream-border bg-cream px-4 py-3 text-sm text-green placeholder:text-green-muted/50 focus:border-gold/60 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-gold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full rounded-xl border border-cream-border bg-cream px-4 py-3 text-sm text-green placeholder:text-green-muted/50 focus:border-gold/60 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-gold">
          Phone <span className="normal-case tracking-normal text-green-muted">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(555) 000-0000"
          className="w-full rounded-xl border border-cream-border bg-cream px-4 py-3 text-sm text-green placeholder:text-green-muted/50 focus:border-gold/60 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-gold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="What brings you in? Any questions we can answer before your first visit?"
          className="w-full resize-none rounded-xl border border-cream-border bg-cream px-4 py-3 text-sm text-green placeholder:text-green-muted/50 focus:border-gold/60 focus:outline-none transition-colors"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please call us at{" "}
          <a href={SITE.phoneHref} className="underline">{SITE.phone}</a> or email{" "}
          <a href={SITE.emailHref} className="underline">{SITE.email}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-7 py-4 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:bg-green-dark disabled:opacity-60"
      >
        {state === "sending" ? (
          "Sending…"
        ) : (
          <>
            Send Message
            <Send size={14} strokeWidth={1.5} />
          </>
        )}
      </button>

      <p className="text-center text-xs text-green-muted">
        Or call us directly at{" "}
        <a href={SITE.phoneHref} className="font-medium text-green transition-colors hover:text-gold">
          {SITE.phone}
        </a>
      </p>
    </form>
  );
}
