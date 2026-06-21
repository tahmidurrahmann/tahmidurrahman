import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tahmidurrahman.vercel.app"),
  title: {
    default: "Tahmidur Rahman | Full-Stack Web Developer",
    template: "%s | Tahmidur Rahman",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className="font-raleway bg-[#0a0a0f] text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
