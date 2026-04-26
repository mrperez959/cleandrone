import type { Dictionary } from "@/i18n/dictionaries";

export function FAQ({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="section bg-white">
      <div className="container-page max-w-3xl">
        <h2 className="section-title text-center">{dict.faq.title}</h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {dict.faq.items.map((item) => (
            <details key={item.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-slate-900">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="text-brand-600 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
