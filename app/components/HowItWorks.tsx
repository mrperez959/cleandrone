import type { Dictionary } from "@/i18n/dictionaries";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section id="process" className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="section-title">{dict.process.title}</h2>
          <p className="section-subtitle">{dict.process.subtitle}</p>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step, idx) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {idx + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title.replace(/^\d+\.\s*/, "")}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
