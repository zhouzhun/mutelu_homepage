"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-mystic-dark border-t border-mystic-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gradient-gold mb-2">
              {t.footer.company}
            </h3>
            <p className="text-purple-400 text-sm mb-4">{t.footer.tagline}</p>
            <p className="text-gray-400 text-sm">{t.footer.description}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t.footer.links}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-mystic-gold transition-colors"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-mystic-gold transition-colors"
                >
                  {t.nav.features}
                </Link>
              </li>
              <li>
                <a
                  href="https://mobiusvision.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mystic-gold transition-colors"
                >
                  MobiusVision
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-mystic-gold transition-colors"
                >
                  {t.nav.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-mystic-gold transition-colors"
                >
                  {t.nav.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-gray-400 hover:text-mystic-gold transition-colors"
                >
                  {t.nav.refund}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 space-y-1">
              <p>
                {t.footer.contact}:{" "}
                <a
                  href="mailto:contact@mobiusvision.com"
                  className="text-mystic-gold hover:underline"
                >
                  {t.footer.email}
                </a>
              </p>
              <p>
                <a
                  href="tel:+13077777311"
                  className="text-mystic-gold hover:underline"
                >
                  {t.footer.phone}
                </a>
              </p>
              <p>{t.footer.address}</p>
            </div>
            <p className="text-gray-500 text-sm">{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
