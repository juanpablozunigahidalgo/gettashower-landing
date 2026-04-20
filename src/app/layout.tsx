import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-app",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GettaShower - Global shower and locker network",
  description: "Make the city liveable with our global shower and locker network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased bg-[#FFFFFF] overflow-x-hidden`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HMSCQJ0N6P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HMSCQJ0N6P');
          `}
        </Script>
        <Navigation />
        <div className="min-h-screen bg-[#FFFFFF] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
