'use client'
import styles from "./about.module.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Normal = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref} id="about" className={`${styles.about}`}>
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className={`${styles.about_flex}`}
        >
          <p className={`${styles.about_title}`}>
            Why Enver Is The Best Choice?
          </p>
          <p className={`${styles.about_text}`}>
            Watch this one minute video so you understand why you should use our
            services!
          </p>
        </div>
      </div>
    );
}

export {Normal}