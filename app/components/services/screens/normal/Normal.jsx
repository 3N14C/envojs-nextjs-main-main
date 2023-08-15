"use client";
import Image from "next/image";
import styles from "./services.module.scss";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ToolItem = ({ toolIcon, toolTitle, toolDescr }) => {
  return (
    <div className={`${styles.tools}`}>
      <div className={``}>
        <Image
          className={`${styles.tools_icon}`}
          width={32}
          height={32}
          src={`/images/${toolIcon}.svg`}
        />
      </div>
      <p className={`${styles.tools_text}`}>{toolTitle}</p>
      <p className={`${styles.tools_descr}`}>{toolDescr}</p>
    </div>
  );
};

const Normal = () => {
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
        id="services"
        className={`${styles.services}`}
      >
        <div className={`${styles.services_flex}`}>
          <div className={`${styles.services_icon_pause}`}>
            <Image
              className={``}
              width={105}
              height={120}
              src={`/images/icon_pause.svg`}
            />
          </div>

          <p className={`${styles.services_title}`}>
            The Service We Provide For You
          </p>

          <div className={`${styles.blink}`}>
            <Image
              className={`${styles.services_icon_add}`}
              width={42}
              height={42}
              src={`/images/add.svg`}
            />
          </div>
        </div>

        <div className={`${styles.services_tools}`}>
          <div className={`${styles.services_tools_item}`}>
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

          <div
            className={`${styles.services_tools_item} ${styles.services_tools_item2}`}
          >
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

        <div className="">
          <Image width={42} height={42} src={`images/add.svg`} />
        </div>
      </div>
    </div>
  );
};

export {Normal}