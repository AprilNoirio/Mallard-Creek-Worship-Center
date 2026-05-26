"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  isPrayerRequest: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  isPrayerRequest: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(payload.message ?? "Unable to send your message right now.");
      }

      setStatus({ type: "success", message: "Your message has been sent successfully." });
      setForm(initialState);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setStatus({ type: "error", message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <div className="grid gap-5">
        {status ? (
          <div
            className={`rounded-[1.5rem] border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-[#d4af37]/28 bg-[#d4af37]/10 text-[#f6dc88]"
                : "border-rose-300/20 bg-rose-900/20 text-rose-100"
            }`}
          >
            {status.message}
          </div>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-white/82">
            Name
            <input
              type="text"
              required
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#d4af37]/40"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-white/82">
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#d4af37]/40"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-white/82">
          Phone
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#d4af37]/40"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-white/82">
          Message
          <textarea
            rows={6}
            required
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#d4af37]/40"
          />
        </label>

        <label className="flex items-center gap-3 text-sm text-white/72">
          <input
            type="checkbox"
            checked={form.isPrayerRequest}
            onChange={(event) => updateField("isPrayerRequest", event.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-transparent"
          />
          This is a prayer request
        </label>

        <button
          type="submit"
          disabled={loading}
          className="gold-button w-full rounded-full px-6 py-4 text-sm font-extrabold uppercase tracking-[0.24em] sm:w-fit"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
