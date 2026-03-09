"use client";

import Link from "next/link";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LINE_OA_URL = "https://line.me/R/ti/p/@304bxjpk";

function PartnersContent() {
  const { t } = useLanguage();
  const content = t.partnerProgram;

  return (
    <div className="min-h-screen bg-mystic-dark">
      <Header />
      <main className="pt-24 pb-16">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 left-8 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid gap-8 lg:grid-cols-[1.4fr,0.9fr] lg:items-start">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-mystic-gold/30 bg-mystic-gold/10 px-4 py-2 text-sm font-medium text-mystic-gold">
                  {t.nav.partners}
                </div>
                <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
                  <span className="text-gradient-gold">{content.title}</span>
                </h1>
                <p className="mb-4 text-xl text-purple-300">{content.subtitle}</p>
                <p className="max-w-3xl text-lg leading-8 text-gray-300">
                  {content.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={LINE_OA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    {content.ctaPrimary}
                  </a>
                  <Link
                    href="/"
                    className="btn-gold inline-flex items-center justify-center"
                  >
                    {content.ctaSecondary}
                  </Link>
                </div>
              </div>

              <aside className="gradient-card rounded-3xl p-6 lg:p-8">
                <div className="mb-3 text-sm uppercase tracking-[0.2em] text-mystic-gold/80">
                  {content.contactTitle}
                </div>
                <div className="space-y-5 text-sm leading-7 text-gray-300">
                  <div>
                    <h3 className="mb-2 text-base font-semibold text-white">
                      {content.kolApplyTitle}
                    </h3>
                    <p>{content.kolApplySummary}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-base font-semibold text-white">
                      {content.partnerApplyTitle}
                    </h3>
                    <p className="mb-2">{content.partnerApplySummary}</p>
                    <p>
                      {content.partnerEmailLabel}{" "}
                      <a
                        href={`mailto:${t.footer.email}`}
                        className="text-mystic-gold hover:underline"
                      >
                        {t.footer.email}
                      </a>
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="mb-8 text-3xl font-bold text-gradient-gold">
            {content.audienceTitle}
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="gradient-card rounded-3xl p-8">
              <div className="mb-4 text-sm uppercase tracking-[0.2em] text-mystic-gold/70">
                {content.partnerTagline}
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {content.partnerTitle}
              </h3>
              <p className="leading-8 text-gray-300">{content.partnerDescription}</p>
            </article>
            <article className="gradient-card rounded-3xl p-8">
              <div className="mb-4 text-sm uppercase tracking-[0.2em] text-purple-300/80">
                {content.kolTagline}
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {content.kolTitle}
              </h3>
              <p className="leading-8 text-gray-300">{content.kolDescription}</p>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="mb-8 text-3xl font-bold text-gradient-gold">
            {content.benefitsTitle}
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="gradient-card rounded-3xl p-8">
              <h3 className="mb-5 text-2xl font-semibold text-white">
                {content.partnerTitle}
              </h3>
              <ul className="space-y-4">
                {content.partnerBenefits.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-300">
                    <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-mystic-gold" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gradient-card rounded-3xl p-8">
              <h3 className="mb-5 text-2xl font-semibold text-white">
                {content.kolTitle}
              </h3>
              <ul className="space-y-4">
                {content.kolBenefits.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-300">
                    <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-purple-400" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
            <div className="gradient-card rounded-3xl p-8">
              <h2 className="mb-6 text-3xl font-bold text-gradient-gold">
                {content.flowTitle}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {content.kolApplyTitle}
                  </h3>
                  <ol className="space-y-4">
                    {content.kolApplySteps.map((step, index) => (
                      <li key={step} className="flex gap-4">
                        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-mystic-gold text-sm font-bold text-black">
                          {index + 1}
                        </div>
                        <p className="pt-1 leading-7 text-gray-300">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {content.partnerApplyTitle}
                  </h3>
                  <ol className="space-y-4">
                    {content.partnerApplySteps.map((step, index) => (
                      <li key={step} className="flex gap-4">
                        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-purple-400 text-sm font-bold text-black">
                          {index + 1}
                        </div>
                        <p className="pt-1 leading-7 text-gray-300">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className="gradient-card rounded-3xl p-8">
              <h2 className="mb-6 text-3xl font-bold text-gradient-gold">
                {content.whyTitle}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {content.whyPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p className="leading-7 text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-[2rem] border border-mystic-gold/20 bg-gradient-to-r from-purple-900/30 via-slate-900/40 to-yellow-900/20 p-8 lg:p-10">
            <h2 className="mb-4 text-3xl font-bold text-white">
              {content.closeTitle}
            </h2>
            <p className="max-w-4xl leading-8 text-gray-300">
              {content.closeDescription}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function PartnersPage() {
  return (
    <LanguageProvider>
      <PartnersContent />
    </LanguageProvider>
  );
}
