import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MuteluAI - Your Mystical AI Assistant on LINE | ผู้ช่วย AI ลึกลับบน LINE",
    template: "%s | MuteluAI",
  },
  description:
    "MuteluAI is your mystical AI assistant on LINE. Get daily fortune, lucky colors, Tarot readings, Thai astrology, and beautiful wallpapers. Free daily check-in rewards! | MuteluAI ผู้ช่วย AI ดูดวงบน LINE ดูดวงรายวัน สีมงคล ไพ่ทาโรต์ โหราศาสตร์ไทย",
  keywords: [
    "MuteluAI",
    "LINE bot",
    "LINE chatbot",
    "Tarot reading",
    "Thai astrology",
    "fortune telling",
    "lucky color",
    "daily horoscope",
    "AI fortune teller",
    "ดูดวง",
    "ไพ่ทาโรต์",
    "โหราศาสตร์ไทย",
    "สีมงคล",
    "ดวงรายวัน",
    "LINE บอท",
  ],
  authors: [{ name: "MobiusVision LLC" }],
  creator: "MobiusVision LLC",
  publisher: "MobiusVision LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "th_TH",
    url: "https://muteluai.com",
    siteName: "MuteluAI",
    title: "MuteluAI - Your Mystical AI Assistant on LINE",
    description:
      "Discover your daily fortune, lucky colors, Tarot readings, Thai astrology, and beautiful wallpapers with MuteluAI on LINE.",
    images: [
      {
        url: "/images/cover photo.png",
        width: 1200,
        height: 630,
        alt: "MuteluAI - Mystical AI Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MuteluAI - Your Mystical AI Assistant on LINE",
    description:
      "Discover your daily fortune, lucky colors, Tarot readings, and Thai astrology with MuteluAI on LINE.",
    images: ["/images/cover photo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.json",
  category: "Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="en" href="https://muteluai.com" />
        <link rel="alternate" hrefLang="th" href="https://muteluai.com" />
        <link rel="alternate" hrefLang="x-default" href="https://muteluai.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "MuteluAI",
              applicationCategory: "EntertainmentApplication",
              operatingSystem: "LINE",
              description:
                "AI-powered fortune telling assistant on LINE featuring Tarot readings, Thai astrology, daily lucky colors, and custom wallpapers.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "THB",
                description: "Free features with optional premium credits",
              },
              provider: {
                "@type": "Organization",
                name: "MobiusVision LLC",
                url: "https://mobiusvision.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "30 N Gould St Ste N",
                  addressLocality: "Sheridan",
                  addressRegion: "WY",
                  postalCode: "82801",
                  addressCountry: "US",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+1-307-777-7311",
                  email: "contact@mobiusvision.com",
                  contactType: "customer service",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1000",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
