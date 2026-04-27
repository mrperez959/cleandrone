import type { Dictionary } from "@/i18n/dictionaries";

type Project = {
  src: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    src: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=900&q=80",
    alt: "Glass office tower reflecting the sky",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    alt: "Repeating window pattern on a high-rise",
  },
  {
    src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=80",
    alt: "Aerial drone view of city skyline",
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80",
    alt: "Modern white architecture facade",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    alt: "Corporate office building exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=900&q=80",
    alt: "Modern glass curtain wall",
  },
];

export function Gallery({ dict }: { dict: Dictionary }) {
  return (
    <section id="gallery" className="section bg-slate-50">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="section-title">{dict.gallery.title}</h2>
          <p className="section-subtitle">{dict.gallery.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <figure
              key={project.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-200 to-brand-500 shadow-sm"
            >
              <img
                src={project.src}
                alt={project.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"
              />
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          {dict.gallery.disclaimer}
        </p>
      </div>
    </section>
  );
}
