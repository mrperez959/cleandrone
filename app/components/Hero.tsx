import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(36,119,233,0.15),_transparent_60%)]"
      />
      <div className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-800">
            <span aria-hidden>📍</span>
            {dict.hero.eyebrow}
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            {dict.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="btn-primary">
              {dict.hero.ctaPrimary}
            </a>
            <a href="#process" className="btn-secondary">
              {dict.hero.ctaSecondary}
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            <div>
              <dt className="text-sm text-slate-600">{dict.stats.faster}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900">60%</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-600">{dict.stats.saferLabel}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900">90%</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-600">{dict.stats.savings}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900">35%</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-500 to-brand-300 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80"
              alt="Modern glass skyscraper viewed from below"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 text-slate-900 shadow-lg backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                Tampa Bay
              </p>
              <p className="mt-1 text-sm font-medium">
                Bayshore Tower · 22 floors · 18,000 sq ft cleaned
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
