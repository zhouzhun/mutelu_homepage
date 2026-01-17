import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | นโยบายความเป็นส่วนตัว",
  description:
    "MuteluAI Privacy Policy - Learn how we collect, use, and protect your data. PDPA compliant. | นโยบายความเป็นส่วนตัว MuteluAI สอดคล้องกับ PDPA",
  openGraph: {
    title: "Privacy Policy - MuteluAI",
    description:
      "MuteluAI Privacy Policy - PDPA compliant data protection practices.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
