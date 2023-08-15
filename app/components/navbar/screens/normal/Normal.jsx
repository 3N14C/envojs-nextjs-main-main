"use client";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Logo } from "../../../logo/Logo";

const ButtonContact = () => {
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
      >
        <button className={`${styles.btn}`}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

const navLinks = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "About Us",
    href: "#about",
  },

  {
    title: "Services",
    href: "#services",
  },

  {
    title: "Our Project",
    href: "#projects",
  },
];

const Normal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleScroll = (e) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div ref={ref} className="">
      <header className={`${styles.header}`}>
        <Logo logoTitle={`EASY START`} />

        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className={`${styles.navbar}`}
        >
          {navLinks.map((navItem) => (
            <Link
              onClick={handleScroll}
              className={`${styles.navbar_link}`}
              href={navItem.href}
            >
              {navItem.title}
            </Link>
          ))}
        </div>

        <ButtonContact />
      </header>
    </div>
  );
};

export { Normal };
