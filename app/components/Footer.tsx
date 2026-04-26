import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page grid gap-8 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span aria-hidden className="text-2xl">🛸</span>
            <span>CleanDrone</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">{dict.footer.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            {dict.footer.service}
          </h3>
          <p className="mt-3 text-sm text-slate-600">{dict.footer.serviceArea}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            {dict.footer.contact}
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            <li>
              <a className="hover:text-slate-900" href="mailto:hello@cleandrone.com">
                hello@cleandrone.com
              </a>
            </li>
            <li>
              <a className="hover:text-slate-900" href="tel:+18135550123">
                +1 (813) 555-0123
              </a>
            </li>
            <li>Tampa, FL</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} CleanDrone. {dict.footer.rights}
          </p>
          <p lang={locale}>{locale.toUpperCase()}</p>
        </div>
      </div>
    </footer>
  );
}
