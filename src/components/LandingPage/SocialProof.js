"use client";

import Image from "next/legacy/image";

const logos = [
  { src: "/images/landing-page/upenn.png", alt: "UPenn", width: 260, height: 90 },
  { src: "/images/landing-page/cornell.png", alt: "Cornell", width: 260, height: 90 },
  { src: "/images/landing-page/princeton.png", alt: "Princeton", width: 260, height: 90 },
  { src: "/images/landing-page/ucla.png", alt: "UCLA", width: 260, height: 90 },
  { src: "/images/landing-page/ucdavis.png", alt: "UCDavis", width: 260, height: 90 },
];

export default function SocialProof() {
  return (
    <section className="relative bg-[#E2EFF8]">
      {/* Wave Shapes - generated from https://www.shapedivider.app/
       * May need to adjust somehow for responsiveness
       */}
      <div className="social-proof-wave-shape-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="social-proof-wave-shape-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* Star Images - add breakpoints for different sizes */}
      <div className="absolute left-64 -bottom-4 z-20">
        <img src={"/images/landing-page/star.png"} alt="Star" width={40} height={40} />
      </div>

      <div className="absolute right-64 -top-4 z-20">
        <img src={"/images/landing-page/star.png"} alt="Star" width={40} height={40}/>
      </div>

      <div className="relative z-10 container mx-auto py-32">
        <div>
          <h1 className="text-3xl text-center text-primary font-bold mb-12 md:mb-16">
            <span className="text-[#3797D3]">Join students </span>from around the globe using mermory
          </h1>
          {/* Carousel Container */}
          <div className="group w-full overflow-hidden relative">
            {/* Left blur overlay */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-20 bg-gradient-to-r from-[#E2EFF8] to-transparent" />
            {/* Right blur overlay */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-20 bg-gradient-to-l from-[#E2EFF8] to-transparent" />
            <div className="flex gap-8 animate-scroll group-hover:[animation-play-state:paused]">
              {[...logos, ...logos].map((logo, index) => (
                <div key={`${logo.alt}-${index}`} className="w-64 sm:w-72 md:w-80 mx-4 sm:mx-6 md:mx-8 flex items-center justify-center h-28 md:h-32">
                  <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="max-h-full w-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}