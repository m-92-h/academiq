import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: true });

const cairo = localFont({
  src: "../../public/fonts/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--font-cairo",
  display: "swap",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0600-06FF, U+0750-077F, U+FB50-FDFF, U+FE70-FEFF, U+0020-007F",
    },
  ],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://academiq-edu.vercel.app"),
  verification: {
    google: "vm3BIePc13dk4gBAx5W0eH2MDKE__dfIhBSAY9Ipa7k",
  },
  title: {
    default: "أكاديميك | منصة الطلاب للدراسات العليا",
    template: "%s | أكاديميك",
  },
  description: "منصة تعليمية مجانية لمساعدة طلاب الدراسات العليا في العراق على اجتياز امتحانات الكفاءة في اللغة العربية والإنجليزية والحاسبات",
  keywords: ["دراسات عليا", "العراق", "امتحانات الكفاءة", "لغة عربية", "لغة إنجليزية", "حاسبات", "قبول", "اكاديميك", "أكاديميك", "ماجستير", "دكتوراه"],
  authors: [{ name: "أكاديميك" }],
  creator: "أكاديميك",
  publisher: "أكاديميك",
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: "https://academiq-edu.vercel.app/",
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
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
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
