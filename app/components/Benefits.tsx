import type { Dictionary } from "@/i18n/dictionaries";

const ICONS = ["🛡️", "⚡", "💸", "🌿"];

export function Benefits({ dict }: { dict: Dictionary }) {
  return (
    <section id="benefits" className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="section-title">{dict.benefits.title}</h2>
          <p className="section-subtitle">{dict.benefits.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.benefits.items.map((item, idx) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-3xl" aria-hidden>
                {ICONS[idx] ?? "✨"}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
