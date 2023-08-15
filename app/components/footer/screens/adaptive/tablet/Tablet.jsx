import styles from "./tablet.module.scss";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";
import { Logo } from "@/app/components/logo/Logo";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

const LinkComponent = ({ link, titleLink }) => {
  return (
    <>
      <Link
        href={`${link}`}
        className={`${nunito.className} ${styles.footer_link}`}
      >
        {titleLink}
      </Link>
    </>
  );
};

const Tablet = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={styles.footer__inner}>
        <div className="">
          {/* <Logo logoTitle={`Enver`} /> */}
          <LinkComponent link={"/"} titleLink={"Support"} />
          <LinkComponent link={"/"} titleLink={"Privacy Policy"} />
          <LinkComponent link={"/"} titleLink={"Terms and Conditions"} />
        </div>
      </div>

      <p className={`${nunito.className} ${styles.footer_text}`}>
        © 2020 Enver, All Rights Reserved
      </p>
    </div>
  );
};

export { Tablet };
