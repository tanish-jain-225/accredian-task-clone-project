import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://enterprise.accredian.com"), // Placeholder for real domain
  title: {
    default: "Accredian Enterprise — Next-Gen Talent Transformation & L&D",
    template: "%s | Accredian Enterprise",
  },
  description:
    "Accelerate your workforce transformation with Accredian Enterprise. We deliver tailored corporate L&D programs, Data Science certifications, and leadership training for Fortune 500 companies.",
  keywords: [
    "corporate training",
    "enterprise learning",
    "professional development",
    "upskilling",
    "accredian",
    "data science training",
    "leadership programs",
    "L&D transformation",
  ],
  authors: [{ name: "Accredian Team" }],
  creator: "Accredian Enterprise",
  publisher: "Accredian Enterprise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Accredian Enterprise — Next-Gen Talent Transformation & L&D",
    description:
      "Empower your workforce with industry-leading certifications and tailored corporate learning paths.",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian Enterprise",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise — Next-Gen Talent Transformation & L&D",
    description:
      "Empower your workforce with industry-leading certifications and tailored corporate learning paths.",
    creator: "@accredian",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Accredian Enterprise",
              "url": "https://enterprise.accredian.com",
              "logo": "https://enterprise.accredian.com/favicon.ico",
              "description": "Leading provider of corporate L&D and executive talent transformation programs.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://www.linkedin.com/company/accredian",
                "https://twitter.com/accredian"
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
