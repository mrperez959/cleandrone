import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navLinks: Array<{ href: string; label: string }> = [
    { href: "#benefits", label: dict.nav.benefits },
    { href: "#services", label: dict.nav.services },
    { href: "#process", label: dict.nav.process },
    { href: "#gallery", label: dict.nav.gallery },
    { href: "#faq", label: dict.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-lg font-bold text-slate-900"
        >
          <span aria-hidden className="text-2xl">🛸</span>
          <span>CleanDrone</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} dict={dict} />
          <a href="#quote" className="btn-primary !py-2 !px-4 text-sm">
            {dict.nav.quote}
          </a>
        </div>
      </div>
    </header>
  );
}
