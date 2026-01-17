import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MuteluAI - Your Mystical AI Assistant on LINE",
  description:
    "Discover your daily fortune, lucky colors, beautiful wallpapers, and mystical guidance through Tarot and Thai astrology on LINE.",
  keywords: [
    "MuteluAI",
    "LINE bot",
    "Tarot",
    "Thai astrology",
    "fortune telling",
    "lucky color",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
