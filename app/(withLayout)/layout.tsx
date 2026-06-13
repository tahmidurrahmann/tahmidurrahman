import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import type { ReactNode } from "react";
import Providers from "./providers";
import ScrollTopButton from "../components/ui/ScrollTopButton";
import NavBar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

export const metadata = {
  title: "Tahmidur Rahman | Frontend Developer",
  description: "Portfolio website for Tahmidur Rahman, frontend developer.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Providers>
        <NavBar />
        <ScrollTopButton />
        {children}
        <Footer />
      </Providers>
    </>
  );
}
