import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mutelu Partner & KOL Thailand | สร้างรายได้เสริมบน LINE",
  description:
    "Join the Mutelu Partner & KOL program in Thailand. Build passive income on LINE, capture overflow traffic, and apply as a KOL or partner through Mutelu. สมัคร KOL หรือพาร์ทเนอร์กับ Mutelu ในไทย เพื่อสร้างรายได้เสริมและรายได้ออนไลน์บน LINE",
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
    "สมัคร KOL",
    "สมัคร KOL ไทย",
    "KOL ไทย",
    "พาร์ทเนอร์ ไทย",
    "โปรแกรมพาร์ทเนอร์",
    "รายได้ออนไลน์",
    "รายได้แบบ passive",
    "รายได้เสริม",
    "รายได้เสริม ไทย",
    "รายได้เสริมออนไลน์",
    "สร้างรายได้บน LINE",
    "สร้างรายได้ออนไลน์",
    "LINE OA ไทย",
    "LINE Official Account ไทย",
  ],
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    type: "website",
    url: "https://muteluai.com/partners",
    title: "Mutelu Partner & KOL Thailand | สร้างรายได้เสริมบน LINE",
    description:
      "A Thailand-focused partner and KOL program on LINE for passive income, overflow traffic, and digital growth with Mutelu. สมัคร KOL หรือพาร์ทเนอร์ในไทยเพื่อสร้างรายได้บน LINE",
    images: [
      {
        url: "/images/cover-og.png",
        width: 1200,
        height: 630,
        alt: "Mutelu Partner & KOL Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutelu Partner & KOL Thailand | สร้างรายได้เสริมบน LINE",
    description:
      "Build passive income with Mutelu in Thailand. สมัคร KOL หรือพาร์ทเนอร์เพื่อสร้างรายได้เสริมบน LINE",
    images: ["/images/cover-og.png"],
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
