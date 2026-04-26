"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const fields = dict.quote.fields;
  const types = fields.buildingTypeOptions;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="section bg-gradient-to-b from-white to-brand-50">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <h2 className="section-title">{dict.quote.title}</h2>
          <p className="section-subtitle">{dict.quote.subtitle}</p>
        </div>
        <form
          onSubmit={onSubmit}
          className="mt-12 grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={fields.name} name="name" required />
            <Field label={fields.email} name="email" type="email" required />
            <Field label={fields.phone} name="phone" type="tel" required />
            <Field label={fields.company} name="company" />
          </div>

          <Field label={fields.address} name="address" required />

          <div className="grid gap-5 sm:grid-cols-3">
            <label className="text-sm font-medium text-slate-700 sm:col-span-1">
              <span>{fields.buildingType}</span>
              <select
                name="buildingType"
                required
                defaultValue=""
                className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              >
                <option value="" disabled />
                <option value="office">{types.office}</option>
                <option value="hotel">{types.hotel}</option>
                <option value="hospital">{types.hospital}</option>
                <option value="condo">{types.condo}</option>
                <option value="industrial">{types.industrial}</option>
                <option value="solar">{types.solar}</option>
                <option value="other">{types.other}</option>
              </select>
            </label>
            <Field
              label={fields.floors}
              name="floors"
              type="number"
              min={1}
              max={60}
            />
            <Field
              label={fields.area}
              name="area"
              type="number"
              min={0}
              step={100}
            />
          </div>

          <label className="text-sm font-medium text-slate-700">
            <span>{fields.message}</span>
            <textarea
              name="message"
              rows={4}
              className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            />
          </label>

          <p className="text-xs text-slate-500">{dict.quote.privacy}</p>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full sm:w-auto disabled:opacity-60"
          >
            {status === "submitting" ? dict.quote.submitting : dict.quote.submit}
          </button>

          {status === "success" && (
            <p className="rounded-md bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
              {dict.quote.success}
            </p>
          )}
          {status === "error" && (
            <p className="rounded-md bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800">
              {dict.quote.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
};

function Field({ label, name, type = "text", required, min, max, step }: FieldProps) {
  return (
    <label className="text-sm font-medium text-slate-700">
      <span>
        {label}
        {required && <span className="text-rose-600"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        min={min}
        max={max}
        step={step}
        className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      />
    </label>
  );
}
