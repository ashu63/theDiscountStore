"use client"

import { useRef } from 'react';

import gsap from 'gsap'; 

import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP);

function Animations() {
    const container = useRef();

    useGSAP(
        () => {
            gsap.from('.box', { y: -50, opacity:0, duration:1 });
        },
        { scope: container }
    );

  return (
    <div ref={container}>
         <p className=" box text-3xl sm:text-4xl text-center font-mono">
    The <span className="text-blue-500">Discount</span> Store
  </p>
  </div>
  )
}

export default Animations