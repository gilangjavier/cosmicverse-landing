import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono", 
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "CosmicVerse - DevOps • AI Engineering • Software Architecture",
    template: "%s | CosmicVerse"
  },
  description: "Multi-disciplinary technology consultant specializing in DevOps transformation, AI engineering solutions, and software architecture for forward-thinking organizations. Delivering 40% cost reduction and measurable ROI.",
  keywords: [
    "DevOps consultant",
    "AI engineer", 
    "Software architect",
    "Cloud migration",
    "Machine learning",
    "Infrastructure optimization",
    "Technology transformation",
    "Jakarta Indonesia"
  ],
  authors: [{ name: "Gilang Javier" }],
  creator: "Gilang Javier",
  publisher: "CosmicVerse",
  metadataBase: new URL("https://cosmicverse.cloud"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cosmicverse.cloud",
    title: "CosmicVerse - DevOps • AI Engineering • Software Architecture",
    description: "Multi-disciplinary technology consultant delivering transformative solutions across DevOps, AI, and software architecture. Proven track record of 40% cost reduction and measurable business impact.",
    siteName: "CosmicVerse",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CosmicVerse - Technology Transformation Consultant"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CosmicVerse - DevOps • AI Engineering • Software Architecture",
    description: "Multi-disciplinary technology consultant delivering transformative solutions across DevOps, AI, and software architecture.",
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: '/cosmic-favicon.svg',
    shortcut: '/cosmic-favicon.svg',
    apple: '/cosmic-favicon.svg',
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
  verification: {
    google: "verification-code-here", // Add Google Search Console verification
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
