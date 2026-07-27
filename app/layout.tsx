import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Float from "@/components/Float";
import RoadBlock from "@/components/RoadBlock";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neuro Hospital - Biratnagar | Hospital in Nepal",
  description:
    "Neuro Hospital is a well equipped and state-of-the-art hospital in Biratnagar, Nepal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Icons */}
        <script src="https://kit.fontawesome.com/c3a9c20c9d.js" crossOrigin="anonymous"></script>
        <link rel="icon" href="/homeimage.png" />
        <link rel="apple-touch-icon" href="/homeimage.png" />

        {/* SEO */}
        <meta name="keywords" content="neuro hospital biratnagar nepal" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Neuro Hospital" />
        <meta property="og:title" content="Neuro Hospital - Biratnagar | Hospital in Nepal" />
        <meta property="og:description" content="Neuro Hospital is a leading multispecialty hospital in Biratnagar, Nepal, providing advanced neurological, cardiac, orthopedic, nephrology, pediatric, gynecology, and emergency healthcare services under one roof." />
        <meta property="og:url" content="https://www.neurohospital.com.np/" />
        <meta property="og:image" content="https://www.neurohospital.com.np/og/default.jpg" />
        <meta property="og:image:secure_url" content="https://www.neurohospital.com.np/og/default.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Neuro Hospital - Biratnagar | Hospital in Nepal" />
        <meta name="twitter:description" content="Leading multispecialty hospital in Biratnagar, Nepal, offering world-class neurological and advanced healthcare services." />
        <meta name="twitter:image" content="https://www.neurohospital.com.np/og/default.jpg" />

        {/* Bootstrap */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />

        {/* Flaticon */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@flaticon/flaticon-uicons/css/all/all.css"
        />

        {/* Custom CSS from /public */}
        <link rel="stylesheet" href="./css/home.css" />
        <link rel="stylesheet" href="./css/header.css" />
        <link rel="stylesheet" href="./css/footer.css" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RoadBlock/>
        <Header/>
        <Nav/>
        <Float/>
        {children}
        <Footer/>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NDJ1CG5SVE"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NDJ1CG5SVE');
          `}
        </Script>

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
