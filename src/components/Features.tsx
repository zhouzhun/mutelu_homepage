"use client";

import { useLanguage } from "./LanguageProvider";

const freeFeatures = [
  {
    key: "luckyColor",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    key: "wallpaper",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    key: "checkin",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const premiumFeatures = [
  {
    key: "tarot",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    key: "thaiAstrology",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    key: "customWallpaper",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 bg-mystic-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient-gold">{t.features.title}</span>
        </h2>

        {/* Free Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-purple-400 mb-8 text-center">
            {t.features.free}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {freeFeatures.map((feature) => {
              const featureData =
                t.features[feature.key as keyof typeof t.features];
              if (typeof featureData === "string") return null;
              return (
                <div
                  key={feature.key}
                  className="gradient-card rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-purple-400 mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {featureData.title}
                  </h4>
                  <p className="text-gray-400">{featureData.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Premium Features */}
        <div>
          <h3 className="text-2xl font-semibold text-mystic-gold mb-8 text-center">
            {t.features.premium}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {premiumFeatures.map((feature) => {
              const featureData =
                t.features[feature.key as keyof typeof t.features];
              if (typeof featureData === "string") return null;
              return (
                <div
                  key={feature.key}
                  className="gradient-card rounded-xl p-6 hover:scale-105 transition-transform duration-300 border-mystic-gold/30"
                >
                  <div className="text-mystic-gold mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {featureData.title}
                  </h4>
                  <p className="text-gray-400">{featureData.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
