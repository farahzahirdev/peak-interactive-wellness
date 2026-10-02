import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import ScrollHeader from "@/components/ScrollHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Peak Interactive Wellness | TMS & Spravato® in Denver & Greenwood Village",
  description:
    "Modern, whole-person psychiatric care for treatment-resistant depression, anxiety, and PTSD. Find out if you qualify for TMS or Spravato®. Call (719) 569-3802.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  keywords: [
    "Peak Interactive Wellness",
    "TMS therapy Denver",
    "Spravato Greenwood Village",
    "treatment-resistant depression Colorado",
    "psychiatric care Denver",
  ],
  openGraph: {
    title: "Peak Interactive Wellness | You're More Than a Diagnosis",
    description:
      "Personalized TMS and Spravato® care in Denver & Greenwood Village. Find out if you qualify.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#4B6B6C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <ScrollHeader />
        <main>{children}</main>
        <Footer />
        <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
