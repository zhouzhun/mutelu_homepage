import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ข้อกำหนดการใช้งาน",
  description:
    "MuteluAI Terms of Service - Learn about our service terms, credit system, and user guidelines. | ข้อกำหนดการใช้งาน MuteluAI",
  openGraph: {
    title: "Terms of Service - MuteluAI",
    description: "MuteluAI Terms of Service and user guidelines.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
