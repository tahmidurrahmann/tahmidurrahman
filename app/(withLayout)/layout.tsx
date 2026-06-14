import type { ReactNode } from "react";
import Providers from "./providers";
import NavBar from "../components/shared/Navbar/Navbar";

export const metadata = {
  title: "Tahmidur Rahman | Full-Stack Web Developer",
  description:
    "I'm Tahmidur Rahman, a Full-Stack Web developer who loves crafting unique and intuitive web experiences with a focus on clean code and user-centered design.",
  alternates: {
    canonical: `https://tahmidurrahman.vercel.app`,
  },
  openGraph: {
    title: "Tahmidur Rahman | Full-Stack Web Developer",
    description:
      "I'm Tahmidur Rahman, a Full-Stack Web developer who loves crafting unique and intuitive web experiences with a focus on clean code and user-centered design.",
    url: "https://tahmidurrahman.vercel.app",
    siteName: "Tahmidur Rahman",
    images: [
      {
        url: "https://www.dropbox.com/scl/fi/2k9nmpqvln1sty6z4ywjp/home.png?rlkey=dt8cd1wjb9fmzd5c4s28rww1g&raw=1",
        width: 900,
        height: 600,
        alt: "developer coding",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahmidur Rahman | Full-Stack Web Developer",
    description:
      "I'm Tahmidur Rahman, a Full-Stack Web developer who loves crafting unique and intuitive web experiences with a focus on clean code and user-centered design.",
    domain: "https://tahmidurrahman.vercel.app",
    url: `https://tahmidurrahman.vercel.app`,
    images: [
      {
        url: "https://www.dropbox.com/scl/fi/2k9nmpqvln1sty6z4ywjp/home.png?rlkey=dt8cd1wjb9fmzd5c4s28rww1g&raw=1",
        width: 900,
        height: 600,
        alt: "developer coding",
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
