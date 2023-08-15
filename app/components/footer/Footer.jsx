'use client'
import MediaQuery from 'react-responsive'
import { Mobile } from './screens/adaptive/mobile/Mobile'
import { Normal } from './screens/normal/Normal'
import { HD } from './screens/adaptive/hd/HD';
import { Tablet } from './screens/adaptive/tablet/Tablet';

export default function Footer() {
  return (
    <>
      <MediaQuery minWidth={320} maxWidth={599}>
        <Mobile />
      </MediaQuery>

      <MediaQuery minWidth={600} maxWidth={1279}>
        <Tablet />
      </MediaQuery>

      <MediaQuery minWidth={1280} maxWidth={1599}>
        <HD />
      </MediaQuery>

      <MediaQuery minWidth={1600}>
        <Normal />
      </MediaQuery>
    </>
  );
};
