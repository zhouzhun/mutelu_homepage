import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner & KOL Program | โปรแกรม Partner และ KOL",
  description:
    "Explore the Mutelu Partner and KOL program. Built for creators, spiritual businesses, and channel partners who want to turn traffic into recurring revenue.",
  openGraph: {
    title: "Mutelu Partner & KOL Program",
    description:
      "A growth program for partners, creators, and spiritual businesses on LINE.",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
