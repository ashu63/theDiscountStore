"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div className="max-w-screen-xl mx-auto z-0  ">
         <Carousel
         autoPlay
         infiniteLoop
         showStatus={false}
         showIndicators={false}
         showThumbs={false}
         interval={4000}
         >
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/PC_hero_1500x600-1uberseptunrec._CB564441518_.jpg"/>
                </div>
                <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg"/>
                </div>
                <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg"/>
                </div>
            </Carousel>
    </div>
  )
}

export default Banner