"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-mystic-dark/90 backdrop-blur-sm border-b border-mystic-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="MuteluAI Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gradient-gold">
              MuteluAI
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-mystic-gold transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href="#features"
              className="text-gray-300 hover:text-mystic-gold transition-colors"
            >
              {t.nav.features}
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-mystic-gold transition-colors"
            >
              {t.nav.terms}
            </Link>
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-mystic-gold transition-colors"
            >
              {t.nav.privacy}
            </Link>
            <Link
              href="/refund"
              className="text-gray-300 hover:text-mystic-gold transition-colors"
            >
              {t.nav.refund}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLocale(locale === "en" ? "th" : "en")}
              className="px-3 py-1 rounded border border-mystic-gold/50 text-mystic-gold hover:bg-mystic-gold/10 transition-colors text-sm font-medium"
            >
              {locale === "en" ? "ไทย" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
