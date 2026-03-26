import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AsapNavigation from "@/components/ui/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASAP - Automated Social Analytics Platform",
  description: "ASAP is a cutting-edge platform designed to provide comprehensive social media analytics. With ASAP, users can effortlessly track, analyze, and visualize their social media performance across multiple platforms. Our intuitive dashboard offers real-time insights, customizable reports, and powerful tools to help you optimize your social media strategy and drive meaningful engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AsapNavigation />
        {children}
      </body>
    </html>
  );
}
