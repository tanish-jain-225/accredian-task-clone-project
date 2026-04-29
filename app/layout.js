import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Accredian Enterprise — Next-Gen Expertise For Your Enterprise",
  description:
    "Cultivate high-performance teams through expert learning. Accredian Enterprise delivers tailored corporate training programs, industry insights, and expert guidance for modern organizations.",
  keywords:
    "corporate training, enterprise learning, professional development, upskilling, accredian",
  openGraph: {
    title: "Accredian Enterprise — Next-Gen Expertise For Your Enterprise",
    description:
      "Tailored corporate L&D programs that transform your workforce into a competitive advantage.",
    type: "website",
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
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
