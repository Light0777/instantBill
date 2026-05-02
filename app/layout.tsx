import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "InstantBill — POS Billing System for Indian Retail",
  description:
    "A fully offline POS billing system built for Indian small shops. GST invoices, barcode scanning, thermal printing — all in one app. One-time ₹1,000 purchase.",
  keywords: "POS billing, GST invoice, offline billing, retail software, India",
  openGraph: {
    title: "InstantBill — POS Billing for Indian Retail",
    description: "Offline. Fast. GST-ready. Built for Indian shops.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-[#080808] text-white antialiased">{children}</body>
    </html>
  );
}