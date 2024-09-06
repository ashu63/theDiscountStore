"use client";
import { TypeAnimation } from 'react-type-animation';

function Typed() {
  return (
      <TypeAnimation
      preRenderFirstString={true}

      sequence={[
        // Same substring at the start will only be typed once, initially
        '  Men clothing',
        1000,
        '  Women clothing',
        1000,
        '  Jewelery',
        1000,
        '  Electronics',
        1000,
      ]}

      speed={50}
      style={{ fontSize: '1em' }}
      repeat={Infinity}
    />
  );
}

export default Typed;
