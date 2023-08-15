"use client";

import MediaQuery from "react-responsive";
import { Mobile } from "./screens/adaptive/mobile/Mobile";
import { Normal } from "./screens/normal/Normal";
import { Tablet } from "./screens/adaptive/tablet/Tablet";

export default function Portfolio() {
  return (
    <>
      <MediaQuery minWidth={320} maxWidth={579}>
        <Mobile />
      </MediaQuery>

      <MediaQuery minWidth={600} maxWidth={1599}>
        <Tablet />
      </MediaQuery>

      <MediaQuery minWidth={1600}>
        <Normal />
      </MediaQuery>
    </>
  );
}
