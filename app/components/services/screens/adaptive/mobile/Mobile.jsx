"use client";
import styles from "./mobile.module.scss";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ToolItem = ({ toolIcon, toolTitle, toolDescr }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div
    ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className={`${styles.tools}`}
    >
      <div className={`${styles.tools_icon_container}`}>
        <Image
          className={`${styles.tools_icon}`}
          width={32}
          height={32}
          src={`/images/${toolIcon}.svg`}
        />
      </div>
      <p className={`${styles.mobile_tools_title}`}>{toolTitle}</p>
      <div className={`${styles.mobile_descr_container}`}>
        <p className={`${styles.mobile_tools_descr}`}>{toolDescr}</p>
      </div>
    </div>
  );
};

const Mobile = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="">
      <div id="services" className={`${styles.mobile}`}>
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className={`${styles.mobile_inner}`}
        >
          <div className={`${styles.mobile_icon_pause}`}>
            <Image
              className={``}
              width={65}
              height={75}
              src={`/images/icon_pause.svg`}
            />
          </div>

          <p className={`${styles.mobile_title}`}>
            The Service We Provide For You
          </p>

          <div className={`${styles.blink}`}>
            <Image
              className={`${styles.mobile_icon_add}`}
              width={28}
              height={28}
              src={`/images/plus.svg`}
            />
          </div>
        </div>

        <div className={`${styles.mobile_tools}`}>
          <div className={`${styles.mobile_tools_item}`}>
            <ToolItem
              toolIcon={`development`}
              toolTitle={`Development`}
              toolDescr={`Create a platform with the best and coolest quality from us.`}
            />
            <ToolItem
              toolIcon={`ui_ux`}
              toolTitle={`UI/UX Designer`}
              toolDescr={`We provide UI/UX Design services, and of course with the best quality.`}
            />
            <ToolItem
              toolIcon={`designer`}
              toolTitle={`Graphik Designer`}
              toolDescr={`We provide Graphic Design services, with the best designers.`}
            />

            <ToolItem
              toolIcon={`development`}
              toolTitle={`Development`}
              toolDescr={`Create a platform with the best and coolest quality from us.`}
            />
            <ToolItem
              toolIcon={`ui_ux`}
              toolTitle={`UI/UX Designer`}
              toolDescr={`We provide UI/UX Design services, and of course with the best quality.`}
            />
            <ToolItem
              toolIcon={`designer`}
              toolTitle={`Graphik Designer`}
              toolDescr={`We provide Graphic Design services, with the best designers.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Mobile };
