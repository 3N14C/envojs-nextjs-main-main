"use client";
import { useInView } from "framer-motion";
import styles from "./logo.module.scss";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
});

const Logo = ({ logoTitle }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles.header_inner}
      >
        <Image
          className={`${styles.header_image}`}
          src="/images/es3.svg"
          width={78}
          height={32}
          alt="Logo"
        />
        <p className={`${montserrat.className} ${styles.header_title}`}>
          {logoTitle}
        </p>
      </div>
    </div>
  );
};

export { Logo };
