'use client'
import dynamic from "next/dynamic";

import { Nunito_Sans } from "next/font/google";
const Footer = dynamic(() => import("./components/footer/Footer"));
const Home = dynamic(() => import("./components/home/Home"));
const About = dynamic(() => import("./components/about/About"));
const Services = dynamic(() => import("./components/services/Services"));
const Portfolio = dynamic(() => import("./components/portfolio/Portfolio"));
const Contact = dynamic(() => import("./components/contact/Contact"));

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      <div className={`${nunito.className}`}>
        <Home />

        <About />

        <Services />

        {/* <Portfolio /> */}

        <Contact />

        <Footer />
      </div>
    </>
  );
}
