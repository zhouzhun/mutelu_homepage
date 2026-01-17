import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | นโยบายการคืนเงิน",
  description:
    "MuteluAI Refund Policy - Learn about our credit refund process and eligibility. | นโยบายการคืนเงิน MuteluAI",
  openGraph: {
    title: "Refund Policy - MuteluAI",
    description: "MuteluAI Refund Policy and credit refund guidelines.",
  },
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
