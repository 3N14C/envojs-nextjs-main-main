"use client";
import styles from "./mobile.module.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Mobile = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="">
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={`${styles.mobile}`}
      >
        <p className={`${styles.mobile_title}`}>Build Your Awesome Platform</p>

        <p className={`${styles.mobile_text}`}>
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </p>

        <button className={`${styles.mobile_btn}`}>
          Our Services
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
            >
              <path
                d="M8.11377 8.02765C8.11377 7.4723 8.56397 7.02209 9.11933 7.02209L17.1638 7.0221C17.7191 7.0221 18.1693 7.4723 18.1693 8.02765V16.0721C18.1693 16.6274 17.7191 17.0777 17.1638 17.0777C16.6084 17.0777 16.1582 16.6274 16.1582 16.0721V10.4553L7.81925 18.7942C7.42656 19.1869 6.78988 19.1869 6.39718 18.7942C6.00449 18.4015 6.00449 17.7649 6.39718 17.3722L14.7361 9.03321L9.11933 9.03321C8.56397 9.03321 8.11377 8.583 8.11377 8.02765Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export { Mobile };
