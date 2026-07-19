import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://academiq.org"),
  title: {
    default: "أكاديميك | منصة الطلاب للدراسات العليا",
    template: "%s | أكاديميك",
  },
  description: "منصة تعليمية مجانية لمساعدة طلاب الدراسات العليا في العراق على اجتياز امتحانات الكفاءة في اللغة العربية والإنجليزية والحاسبات",
  keywords: ["دراسات عليا", "العراق", "امتحانات الكفاءة", "لغة عربية", "لغة إنجليزية", "حاسبات", "قبول", "أكاديميك", "ماجستير", "دكتوراه"],
  authors: [{ name: "أكاديميك" }],
  creator: "أكاديميك",
  publisher: "أكاديميك",
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: "https://academiq.org",
    siteName: "أكاديميك",
    title: "أكاديميك | منصة الطلاب للدراسات العليا",
    description: "منصة تعليمية مجانية لمساعدة طلاب الدراسات العليا في العراق على اجتياز امتحانات الكفاءة في اللغة العربية والإنجليزية والحاسبات",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "أكاديميك | منصة الطلاب للدراسات العليا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "أكاديميك | منصة الطلاب للدراسات العليا",
    description: "منصة تعليمية مجانية لمساعدة طلاب الدراسات العليا في العراق على اجتياز امتحانات الكفاءة",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/academiq-icon-192.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <TooltipProvider>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <Toaster richColors position="top-right" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
