import type { Dictionary } from "@/i18n/dictionaries";

const TILES = [
  { tone: "from-slate-500 to-slate-700" },
  { tone: "from-brand-400 to-brand-700" },
  { tone: "from-emerald-400 to-emerald-700" },
];

export function Gallery({ dict }: { dict: Dictionary }) {
  return (
    <section id="gallery" className="section bg-slate-50">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="section-title">{dict.gallery.title}</h2>
          <p className="section-subtitle">{dict.gallery.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((tile, idx) => (
            <figure
              key={idx}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid grid-cols-2">
                <div
                  className={`relative aspect-square bg-gradient-to-br ${tile.tone} opacity-70`}
                >
                  <span className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-0.5 text-xs font-semibold text-slate-700">
                    {dict.gallery.captionBefore}
                  </span>
                </div>
                <div
                  className={`relative aspect-square bg-gradient-to-br ${tile.tone}`}
                >
                  <span className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-0.5 text-xs font-semibold text-slate-700">
                    {dict.gallery.captionAfter}
                  </span>
                </div>
              </div>
              <figcaption className="px-4 py-3 text-sm text-slate-600">
                {dict.gallery.comingSoon}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
