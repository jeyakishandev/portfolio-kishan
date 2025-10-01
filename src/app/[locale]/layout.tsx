import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kishan - Développeur Full-Stack & Passionné d'Aviation",
  description: "Portfolio de Kishan, développeur full-stack JavaScript/TypeScript spécialisé en React, Node.js et PostgreSQL. Passionné d'aviation, disponible en freelance et CDI/CDD.",
  keywords: "développeur, full-stack, JavaScript, TypeScript, React, Node.js, PostgreSQL, freelance, aviation, portfolio",
  authors: [{ name: "Jeya Kishan Karunanithy" }],
  creator: "Jeya Kishan Karunanithy",
  openGraph: {
    title: "Kishan - Développeur Full-Stack & Passionné d'Aviation",
    description: "Portfolio de Kishan, développeur full-stack JavaScript/TypeScript. Passionné d'aviation, disponible en freelance et CDI/CDD.",
    url: "https://jeyakishan-portfolio.vercel.app",
    siteName: "Portfolio Kishan",
    images: [
      {
        url: "/avatar.svg",
        width: 128,
        height: 128,
        alt: "Kishan - Développeur Full-Stack",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishan - Développeur Full-Stack & Passionné d'Aviation",
    description: "Portfolio de Kishan, développeur full-stack JavaScript/TypeScript. Passionné d'aviation, disponible en freelance et CDI/CDD.",
    images: ["/avatar.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
