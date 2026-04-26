"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function LanguageSwitcher({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const labels: Record<Locale, string> = {
    en: dict.language.en,
    es: dict.language.es,
  };

  return (
    <div
      role="group"
      aria-label={dict.language.switch}
      className="flex items-center gap-1 rounded-md border border-slate-200 bg-white p-0.5 text-xs font-medium"
    >
      {LOCALES.map((target) => {
        const segments = pathname.split("/");
        segments[1] = target;
        const href = segments.join("/") || `/${target}`;
        const active = target === locale;
        return (
          <Link
            key={target}
            href={href}
            aria-current={active ? "true" : undefined}
            className={
              active
                ? "rounded bg-brand-600 px-2 py-1 text-white"
                : "rounded px-2 py-1 text-slate-600 hover:bg-slate-100"
            }
          >
            {labels[target].slice(0, 2).toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
