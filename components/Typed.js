"use client";
import { TypeAnimation } from 'react-type-animation';

function Typed() {
  return (
      <TypeAnimation
      preRenderFirstString={true}

      sequence={[
        // Same substring at the start will only be typed once, initially
        '  Gaming console',
        1000,
        '  Headphones',
        1000,
        '  Mobiles',
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
