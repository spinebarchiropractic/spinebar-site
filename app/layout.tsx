import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.location}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: "Spine Bar Chiropractic | Toluca Lake",
    description: "A solo chiropractic practice in Toluca Lake. One-on-one care with Dr. Arthur Chakrian, DC — real time, honest answers.",
    url: "https://spinebar.com",
    siteName: "Spine Bar Chiropractic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spine Bar Chiropractic | Toluca Lake",
    description: "Modern chiropractic and wellness care in Toluca Lake.",

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-green">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
