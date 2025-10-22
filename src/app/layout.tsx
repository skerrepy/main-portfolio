import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Hanafi | Full-Stack Developer & Product Manager",
  description: "Experienced Full-Stack Developer and Product Manager specializing in React, Node.js, mobile development, and UI/UX design. Available for freelance projects and consulting.",
  keywords: [
    "Full-Stack Developer",
    "Product Manager", 
    "React Developer",
    "Node.js Developer",
    "Mobile App Development",
    "UI/UX Design",
    "Freelance Developer",
    "Tunisia Developer",
    "Web Development",
    "Software Development"
  ],
  authors: [{ name: "Omar Hanafi" }],
  creator: "Omar Hanafi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omarhanafi.dev",
    title: "Omar Hanafi | Full-Stack Developer & Product Manager",
    description: "Experienced Full-Stack Developer and Product Manager specializing in React, Node.js, mobile development, and UI/UX design.",
    siteName: "Omar Hanafi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Hanafi | Full-Stack Developer & Product Manager",
    description: "Experienced Full-Stack Developer and Product Manager specializing in React, Node.js, mobile development, and UI/UX design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
