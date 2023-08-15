'use client'
import styles from './mobile.module.scss'
import { useInView } from "framer-motion";
import { useRef } from "react";

const Mobile = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref} id="about" className={``}>
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className={`${styles.mobile}`}
        >
          <p className={`${styles.mobile_title}`}>
            Why Enver Is The Best Choice?
          </p>
          <p className={`${styles.mobile_text}`}>
            Watch this one minute video so you understand why you should use our
            services!
          </p>
        </div>
      </div>
    );
}

export {Mobile}