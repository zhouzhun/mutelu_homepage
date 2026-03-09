import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mutelu Partner & KOL Thailand | Passive Income on LINE",
  description:
    "Join the Mutelu Partner & KOL program in Thailand. Build passive income on LINE, capture overflow traffic, and apply as a KOL or partner through Mutelu.",
  keywords: [
    "Mutelu",
    "Mutelu partner",
    "Mutelu KOL",
    "Mutelu Thailand",
    "Mutelu passive income",
    "passive income Thailand",
    "Thailand partner program",
    "Thailand KOL program",
    "LINE OA Thailand",
    "LINE KOL Thailand",
    "พาร์ทเนอร์ Mutelu",
    "KOL Mutelu",
    "รายได้แบบ passive",
    "รายได้เสริม ไทย",
    "LINE OA ไทย",
  ],
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    type: "website",
    url: "https://muteluai.com/partners",
    title: "Mutelu Partner & KOL Thailand | Passive Income on LINE",
    description:
      "A Thailand-focused partner and KOL program on LINE for passive income, overflow traffic, and digital growth with Mutelu.",
    images: [
      {
        url: "/images/cover photo.png",
        width: 1200,
        height: 630,
        alt: "Mutelu Partner & KOL Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutelu Partner & KOL Thailand | Passive Income on LINE",
    description:
      "Build passive income with Mutelu in Thailand. Apply as a KOL or partner on LINE.",
    images: ["/images/cover photo.png"],
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
