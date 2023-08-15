"use client";
import styles from "./tablet.module.scss";
import { Logo } from "@/app/components/logo/Logo";
import { useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useInView } from "framer-motion";
import Link from "next/link";

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

const Tablet = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const [open, setOpen] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <div ref={ref} className="">
      <div className={`${styles.mobile}`}>
        {open ? "" : <Logo logoTitle={`Enver`} />}

        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          onClick={() => setOpen(!open)}
          className=""
        >
          {open ? (
            <div className={`${styles.mobile_menu_container}`}>
              <IoClose className={`${styles.mobile_menu_close}`} />
            </div>
          ) : (
            <BiMenuAltRight className={`${styles.mobile_menu_open}`} />
          )}
        </div>
      </div>
      {open && (
        <div className={`${styles.mobile_menu}`}>
          {navLinks.map((navLink) => (
            <div className={`${styles.mobile_menu_items}`}>
              <Link onClick={handleScroll} className={``} href={navLink.href}>
                {navLink.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Tablet };
