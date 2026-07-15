"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { CONTACT_EMAIL } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error" | "unconfigured";
type Errors = { email?: string; phone?: string; message?: string };

export default function ContactForm() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(): Errors {
    const errs: Errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = t.contact.invalidEmail;
    const digits = phone.replace(/[\s\-().+]/g, "");
    if (!digits || digits.length < 7 || !/^\d+$/.test(digits)) errs.phone = t.contact.invalidPhone;
    if (message.trim().length < 10) errs.message = t.contact.messageTooShort;
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honey) return;
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
      } else if (data.unconfigured) {
        setStatus("unconfigured");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 px-4">
        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A769" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-espresso mb-2">{t.contact.successTitle}</h3>
        <p className="text-sm text-espresso-soft">{t.contact.successBody}</p>
      </div>
    );
  }

  if (status === "unconfigured") {
    return (
      <div className="py-8 px-4 text-center">
        <p className="text-sm text-espresso-soft">
          {t.contact.formNotReady}{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline font-medium">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">{t.contact.honeypot}</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="cf-name" className="block text-xs font-sans font-medium uppercase tracking-widest text-espresso-soft mb-1.5">
          {t.contact.name} <span className="text-gold">*</span>
        </label>
        <input
          id="cf-name" type="text" required value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-champagne bg-cream/50 rounded px-4 py-3 text-sm font-sans text-espresso placeholder:text-espresso-soft/40 focus:outline-none focus:border-gold transition-colors"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className="block text-xs font-sans font-medium uppercase tracking-widest text-espresso-soft mb-1.5">
          {t.contact.email} <span className="text-gold">*</span>
        </label>
        <input
          id="cf-email" type="email" required value={email}
          onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
          className={`w-full border rounded px-4 py-3 text-sm font-sans text-espresso placeholder:text-espresso-soft/40 bg-cream/50 focus:outline-none transition-colors ${errors.email ? "border-red-400" : "border-champagne focus:border-gold"}`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="cf-phone" className="block text-xs font-sans font-medium uppercase tracking-widest text-espresso-soft mb-1.5">
          {t.contact.phone} <span className="text-gold">*</span>
        </label>
        <input
          id="cf-phone" type="tel" required value={phone}
          onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: undefined })); }}
          className={`w-full border rounded px-4 py-3 text-sm font-sans text-espresso placeholder:text-espresso-soft/40 bg-cream/50 focus:outline-none transition-colors ${errors.phone ? "border-red-400" : "border-champagne focus:border-gold"}`}
          placeholder="+421 900 000 000"
        />
        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="block text-xs font-sans font-medium uppercase tracking-widest text-espresso-soft mb-1.5">
          {t.contact.message} <span className="text-gold">*</span>
        </label>
        <textarea
          id="cf-message" required rows={5} value={message}
          onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: undefined })); }}
          className={`w-full border rounded px-4 py-3 text-sm font-sans text-espresso placeholder:text-espresso-soft/40 bg-cream/50 focus:outline-none transition-colors resize-none ${errors.message ? "border-red-400" : "border-champagne focus:border-gold"}`}
          placeholder="How can we help?"
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">{t.contact.errorTitle}. Please try again.</p>
      )}

      <button
        type="submit" disabled={status === "loading"}
        className="bg-espresso text-paper font-sans font-medium text-sm tracking-wider px-8 py-3.5 rounded hover:bg-cappuccino-deep transition-colors disabled:opacity-60 w-fit"
      >
        {status === "loading" ? t.contact.sending : t.contact.send}
      </button>
    </form>
  );
}
