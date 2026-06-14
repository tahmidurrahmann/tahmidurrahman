import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className="font-raleway bg-black text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
