'use client'
import MediaQuery from "react-responsive";
import { Mobile } from "./screens/adaptive/mobile/Mobile";
import { Normal } from "./screens/normal/Normal";
import { Nunito_Sans } from "next/font/google";
import { Tablet } from "./screens/adaptive/tablet/Tablet";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className={nunito.className}>
      <div className="">
        <MediaQuery minWidth={320} maxWidth={599}>
          <Mobile />
        </MediaQuery>

        <MediaQuery minWidth={600} maxWidth={1599}>
          <Tablet />
        </MediaQuery>

        <MediaQuery minWidth={1600}>
          <Normal />
        </MediaQuery>
      </div>
    </div>
  );
};

export { Navbar };
