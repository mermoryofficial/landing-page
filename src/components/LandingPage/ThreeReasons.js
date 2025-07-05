"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const ThreeReasons = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["center end", "end center"],
  });

  const CreatorStudioFeatures = [
    {
      img: "/icons/landing-page/three-reasons/themes.svg",
      title: "Themes",
      desc: "1M+ Themes and Elements to make studying fun",
    },
    {
      img: "/icons/landing-page/three-reasons/embed-media.svg",
      title: "Embed Media",
      desc: "Upload videos, audio, and images to boost retention",
    },
    {
      img: "/icons/landing-page/three-reasons/organization.svg",
      title: "Organization",
      desc: "Create sub-decks to organize your flashcard deck",
    },
  ];

  const CollaborateFeatures = [
    {
      img: "/icons/landing-page/three-reasons/remote-ready.svg",
      title: "Remote Ready",
      desc: "Easy to use on any device, anytime",
    },
    {
      img: "/icons/landing-page/three-reasons/save-time.svg",
      title: "Save Time",
      desc: "Split the work and finish flashcard decks faster",
    },
    {
      img: "/icons/landing-page/three-reasons/live-comments.svg",
      title: "Live Comments",
      desc: "Leave comments as you create for easy communication",
    },
  ];

  const StudyFeatures = [
    {
      img: "/icons/landing-page/three-reasons/learn.svg",
      title: "Learn",
      desc: "A quick study session, just flip and learn",
    },
    {
      img: "/icons/landing-page/three-reasons/review.svg",
      title: "Review",
      desc: "A knowledge check to test what you know",
    },
    {
      img: "/icons/landing-page/three-reasons/fsrs.svg",
      title: "FSRS",
      desc: "Spaced Repetition model for long-term retention",
    },
  ];

  const containerData = [
    {
      number: "one",
      title: "Customize",
      subtitle: "in Creator Studio",
      description: "Start fresh or import a deck—our creator studio lets you design without limits",
      features: CreatorStudioFeatures,
      decorativeImages: [
        {
          src: "/icons/landing-page/three-reasons/top-pencil.svg",
          width: 77.64,
          height: 241.82,
          left: "85%",
          top: "-2%",
        },
        {
          src: "/icons/landing-page/three-reasons/bottom-pencil.svg",
          width: 150,
          height: 150,
          left: "2%",
          top: "85%",
        },
      ],
      mobileImages: [
        {
          src: "/icons/landing-page/three-reasons/top-pencil.svg",
          width: 77.64,
          height: 241.82,
          left: "65%",
          top: "-10%",
        },
        {
          src: "/icons/landing-page/three-reasons/bottom-pencil.svg",
          width: 150,
          height: 150,
          left: "-10%",
          top: "75%",
        },
      ],
    },
    {
      number: "two",
      title: "Collaborate",
      subtitle: "with friends in real time",
      description: "Team up with classmates to build flashcard decks together",
      features: CollaborateFeatures,
      decorativeImages: [
        {
          src: "/icons/landing-page/three-reasons/top-cursor.svg",
          width: 140,
          height: 140,
          left: "80%",
          top: "35%",
        },
        {
          src: "/icons/landing-page/three-reasons/bottom-cursor.svg",
          width: 100,
          height: 100,
          left: "5%",
          top: "80%",
        },
      ],
      mobileImages: [
        {
          src: "/icons/landing-page/three-reasons/top-cursor.svg",
          width: 55,
          height: 55,
          left: "75%",
          top: "8%",
        },
        {
          src: "/icons/landing-page/three-reasons/bottom-cursor.svg",
          width: 100,
          height: 100,
          left: "-10%",
          top: "65%",
        },
      ],
    },
    {
      number: "three",
      title: "Study Smarter",
      subtitle: "with adaptive learn modes",
      description: "Master any topic with quick flips, self-checks, and memory-boosting review",
      features: StudyFeatures,
      decorativeImages: [
        {
          src: "/icons/landing-page/three-reasons/checkmark.svg",
          width: 88,
          height: 73,
          left: "-3%",
          top: "2%",
        },
        {
          src: "/icons/landing-page/three-reasons/checkmark.svg",
          width: 69,
          height: 57,
          left: "88%",
          top: "40%",
        },
        {
          src: "/icons/landing-page/three-reasons/checkmark.svg",
          width: 69,
          height: 57,
          left: "15%",
          top: "90%",
        },
      ],
      mobileImages: [
        {
          src: "/icons/landing-page/three-reasons/checkmark.svg",
          width: 60,
          height: 73,
          left: "85%",
          top: "3%",
        },
        {
          src: "/icons/landing-page/three-reasons/checkmark.svg",
          width: 50,
          height: 57,
          left: "-1%",
          top: "50%",
        },
      ],
    },
  ];

  const scrollStart = 0;
  const scrollEnd = 0.7;

  const y = useTransform(scrollYProgress, [scrollStart, scrollEnd], ["0%", "-66.66%"]);

  return (
    <div className="w-full bg-white px-6">
      {/* Top text */}
      <div className="mt-24 lg:mt-32 xl:mt-40 text-center px-4">
        <div className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#001F2E]">
          <span className="bg-gradient-to-br from-[#2C9CE2] to-[#BFADF2] bg-clip-text text-transparent">3 Reasons</span>{" "}
          to choose Mermory
        </div>
      </div>

      {/* Main scrollable section */}
      <div ref={sectionRef} className="relative w-full h-[300vh] md:h-[400vh]">
        {/* Sticky container */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Static Card Frame for Mobile */}
          <div className="flex flex-col items-center md:hidden w-full h-full max-h-[600px] overflow-hidden">
            <div className="flex flex-col relative overflow-hidden items-center bg-[#F2FAFF] rounded-3xl border-6 border-[#E2EFF8] border-solid w-full">
              <motion.div className="w-full h-[300%] md:h-[100%]" style={{ y }}>
                {containerData.map((data, index) => (
                  <div key={index} className="w-full h-1/3 flex flex-col justify-center items-center p-4 relative">
                    {/* Decorative images (mobile, only in top half, not behind content) */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                      {data.mobileImages.map((img, i) => (
                        <img
                          key={i}
                          src={img.src}
                          alt="decoration"
                          width={img.width}
                          height={img.height}
                          className="absolute"
                          style={{
                            left: img.left,
                            top: img.top,
                          }}
                        />
                      ))}
                    </div>
                    {/* Content (z-10 to be above images) */}
                    <div className="flex flex-col justify-center items-center w-full h-full relative z-10">
                      <div className="flex flex-row gap-2 items-center text-center mb-2">
                        <img
                          src={`/icons/landing-page/three-reasons/${data.number}.svg`}
                          alt={data.number}
                          className="w-8 h-8"
                        />
                        <span className="font-semibold text-2xl sm:text-3xl bg-gradient-to-br from-[#2C9CE2] to-[#BFADF2] bg-clip-text text-transparent">
                          {data.title}
                        </span>
                      </div>
                      <div className="font-semibold text-lg sm:text-xl text-[#001F2E] text-center mb-4">
                        {data.subtitle}
                      </div>
                      <div className="w-full h-96 bg-white rounded-2xl border-2 border-[#E6E8EA] mb-4" />
                      <div className="flex flex-row gap-3 items-stretch w-full">
                        {data.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-2 justify-center items-center flex-1 rounded-2xl border-3 border-solid border-[#E2EFF8] bg-white p-3 min-h-0"
                          >
                            <img src={feature.img} alt="img" className="w-6 h-6 sm:w-8 sm:h-8" />
                            <div className="text-center text-xs sm:text-sm font-semibold text-[#001F2E] leading-tight">
                              {feature.title}
                            </div>
                            <div className="text-center text-[10px] sm:text-xs text-[#768285] leading-tight">
                              {feature.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Desktop: Two columns, left scrolls, right is sticky */}
          <div className="hidden md:flex flex-row relative w-full max-w-7xl h-[60vh] bg-[#F2FAFF] rounded-[32px] border-[15px] border-[#E2EFF8] border-solid">
            {/* Left: Scrollable content */}
            <div className="relative flex-1 h-full overflow-hidden rounded-l-[16px]">
              <motion.div className="h-[300%]" style={{ y }}>
                {containerData.map((data, index) => (
                  <div key={index} className="w-full h-1/3 flex flex-row">
                    {/* Left side content (relative for absolute images) */}
                    <div className="flex flex-col justify-center flex-1 p-8 lg:p-12 relative">
                      {/* Decorative images (desktop, only in left/content side) */}
                      <div className="absolute inset-0 pointer-events-none z-0">
                        {data.decorativeImages.map((img, i) => (
                          <img
                            key={i}
                            src={img.src}
                            alt="decoration"
                            width={img.width}
                            height={img.height}
                            className="absolute"
                            style={{
                              left: img.left,
                              top: img.top,
                            }}
                          />
                        ))}
                      </div>
                      {/* Content (z-10 to be above images) */}
                      <div className="flex flex-row gap-4 lg:gap-6 items-center mb-4 relative z-10">
                        <img
                          src={`/icons/landing-page/three-reasons/${data.number}.svg`}
                          alt={data.number}
                          className="w-12 h-12 lg:w-16 lg:h-16"
                        />
                        <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold bg-gradient-to-br from-[#2C9CE2] to-[#BFADF2] bg-clip-text text-transparent">
                          {data.title}
                        </span>
                      </div>
                      <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#001F2E] mb-4 lg:mb-6 relative z-10">
                        {data.subtitle}
                      </div>
                      <div className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#001F2E] mb-6 lg:mb-8 max-w-2xl relative z-10">
                        {data.description}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-stretch relative z-10">
                        {data.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-3 justify-center items-center rounded-2xl border-3 border-solid border-[#E2EFF8] bg-white p-2 py-4 lg:p-4"
                          >
                            <img src={feature.img} alt="img" className="w-8 h-8 lg:w-10 lg:h-10" />
                            <div className="text-sm lg:text-base font-semibold text-[#001F2E] text-center">
                              {feature.title}
                            </div>
                            <div className="text-xs lg:text-sm text-[#768285] text-center">{feature.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Right: Sticky white container with placeholder image */}
            <div className="flex w-[45%] items-center justify-center py-4 px-0">
              <div className="sticky top-0 h-[90%] w-full bg-white rounded-tl-xl rounded-bl-xl border-t-2 border-l-2 border-b-2 border-[#E6E8EA] flex items-center justify-center">
                {/* Placeholder image/gif */}
                <img
                  src="/public/images/banner-placeholder.png"
                  alt="Placeholder"
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeReasons;
