import type { ReactNode } from "react";
import Providers from "./providers";
import NavBar from "../components/shared/Navbar/Navbar";

export const metadata = {
  title: "Tahmidur Rahman | Frontend Developer",
  description: "Portfolio website for Tahmidur Rahman, frontend developer.",
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
