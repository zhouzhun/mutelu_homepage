"use client";

import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-mystic-dark">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gradient-gold mb-4">
            {t.privacy.title}
          </h1>
          <p className="text-gray-400 mb-8">
            {t.privacy.lastUpdated}: January 2025
          </p>

          <div className="space-y-8">
            {Object.entries(t.privacy.sections).map(([key, section]) => (
              <div key={key} className="gradient-card rounded-xl p-6">
                <h2 className="text-xl font-semibold text-purple-400 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <PrivacyContent />
    </LanguageProvider>
  );
}
