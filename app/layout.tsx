import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/constants";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-3CMFN40FWK";

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
    description:
      "A solo chiropractic practice in Toluca Lake. One-on-one care with Dr. Arthur Chakrian, DC \u2014 thorough assessment, honest findings, and care that addresses the underlying cause.",
    url: "https://spinebar.com",
    siteName: "Spine Bar Chiropractic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spine Bar Chiropractic | Toluca Lake",
    description:
      "A solo chiropractic practice in Toluca Lake. One-on-one care with Dr. Arthur Chakrian, DC.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Chiropractor"],
  name: "Spine Bar Chiropractic",
  description:
    "A solo chiropractic practice in Toluca Lake. Every visit is one-on-one with Dr. Arthur Chakrian, DC \u2014 thorough assessment, honest findings, and care that addresses the underlying cause.",
  url: "https://spinebar.com",
  telephone: "+17477747144",
  email: "info@spinebar.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10918 Riverside Dr",
    addressLocality: "North Hollywood",
    addressRegion: "CA",
    postalCode: "91602",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1573,
    longitude: -118.3625,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  medicalSpecialty: "Chiropractic",
  hasMap:
    "https://maps.google.com/?q=10918+Riverside+Dr,+North+Hollywood,+CA+91602",
  image: "https://spinebar.com/logo/spinebar-logo.png",
  sameAs: [
    "https://www.instagram.com/spinebarchiropractic/",
    "https://www.google.com/maps/place/Spine+Bar+Chiropractic/@34.1520198,-118.3713363,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2bf445b1e7905:0xcbc8bdbfdaac5cd1!8m2!3d34.1520198!4d-118.368756!16s%2Fg%2F11z583yprv",
  ],
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
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body className="flex min-h-full flex-col bg-cream font-sans text-green">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
