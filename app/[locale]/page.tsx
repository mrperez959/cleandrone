import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Hero } from "../components/Hero";
import { Benefits } from "../components/Benefits";
import { Services } from "../components/Services";
import { HowItWorks } from "../components/HowItWorks";
import { Gallery } from "../components/Gallery";
import { FAQ } from "../components/FAQ";
import { QuoteForm } from "../components/QuoteForm";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <Benefits dict={dict} />
      <Services dict={dict} />
      <HowItWorks dict={dict} />
      <Gallery dict={dict} />
      <FAQ dict={dict} />
      <QuoteForm locale={locale} dict={dict} />
    </>
  );
}
