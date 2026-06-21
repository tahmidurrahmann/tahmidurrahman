import type { ReactNode } from "react";
import Providers from "./providers";
import NavBar from "../components/shared/Navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tahmidur Rahman | Full-Stack Web Developer",
  description:
    "Full-Stack Developer from Dhaka. I build production-grade web apps with Next.js, Node.js, MongoDB, PostgreSQL and TypeScript.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tahmidur Rahman | Full-Stack Web Developer",
    description:
      "Full-Stack Developer from Dhaka. I build production-grade web apps with Next.js, Node.js, MongoDB, PostgreSQL and TypeScript.",
    url: "/",
    siteName: "Tahmidur Rahman",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tahmidur Rahman — Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahmidur Rahman | Full-Stack Web Developer",
    description:
      "Full-Stack Developer from Dhaka. I build production-grade web apps with Next.js, Node.js, MongoDB, PostgreSQL and TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tahmidur Rahman — Full-Stack Web Developer",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Providers>
        <NavBar />
        {children}
      </Providers>
    </>
  );
}
