import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

const floatingCards = [
  {
    src: "/icons/landing-page/card1.svg",
    alt: "card1",
    className:
      "top-[-4vh] left-[41vw] sm:top-[-3vh] sm:left-[42vw] md:top-[-2vh] md:left-[43vw] lg:top-[-1vh] lg:left-[44vw] xl:top-[0vh] xl:left-[45vw] w-[260px] h-[160px] sm:w-[280px] sm:h-[180px] md:w-[300px] md:h-[200px] lg:w-[320px] lg:h-[220px] xl:w-[500px] xl:h-[350px] rotate-[-8deg]",
  },
  {
    src: "/icons/landing-page/card2.svg",
    alt: "card2",
    className:
      "top-[5vh] left-[9vw] sm:top-[6vh] sm:left-[10vw] md:top-[7vh] md:left-[11vw] lg:top-[8vh] lg:left-[12vw] xl:top-[9vh] xl:left-[13vw] w-[260px] h-[160px] sm:w-[280px] sm:h-[180px] md:w-[300px] md:h-[200px] lg:w-[320px] lg:h-[220px] xl:w-[500px] xl:h-[350px] rotate-[-7deg]",
  },
  {
    src: "/icons/landing-page/card3.svg",
    alt: "card3",
    className:
      "top-[16vh] left-[66vw] sm:top-[17vh] sm:left-[67vw] md:top-[18vh] md:left-[68vw] lg:top-[19vh] lg:left-[69vw] xl:top-[20vh] xl:left-[70vw] w-[260px] h-[160px] sm:w-[280px] sm:h-[180px] md:w-[300px] md:h-[200px] lg:w-[320px] lg:h-[220px] xl:w-[500px] xl:h-[350px] rotate-[-5deg]",
  },
  {
    src: "/icons/landing-page/card4.svg",
    alt: "card4",
    className:
      "top-[26vh] left-[0vw] sm:top-[27vh] sm:left-[3vw] md:top-[28vh] md:left-[4vw] lg:top-[29vh] lg:left-[5vw] xl:top-[30vh] xl:left-[6vw] w-[260px] h-[160px] sm:w-[280px] sm:h-[180px] md:w-[300px] md:h-[200px] lg:w-[320px] lg:h-[220px] xl:w-[500px] xl:h-[350px] rotate-[9deg]",
  },
  // {
  //   src: "/icons/landing-page/card5.svg",
  //   alt: "card5",
  //   className:
  //     "top-[5vh] left-[2vw] sm:top-[4vh] sm:left-[1vw] md:top-[3vh] md:left-[0vw] lg:top-[2vh] lg:left-[-1vw] xl:top-[1vh] xl:left-[-2vw] w-[260px] h-[160px] sm:w-[280px] sm:h-[180px] md:w-[300px] md:h-[200px] lg:w-[320px] lg:h-[220px] xl:w-[500px] xl:h-[350px] rotate-[-7deg]",
  // },
  {
    src: "/icons/landing-page/card6.svg",
    alt: "card6",
    className:
      "top-[44vh] left-[16vw] sm:top-[45vh] sm:left-[17vw] md:top-[46vh] md:left-[18vw] lg:top-[48vh] lg:left-[20vw] xl:top-[50vh] xl:left-[22vw] w-[260px] h-[160px] sm:w-[280px] sm:h-[180px] md:w-[300px] md:h-[200px] lg:w-[320px] lg:h-[220px] xl:w-[500px] xl:h-[350px] rotate-[4deg]",
  },
  {
    src: "/icons/landing-page/card7.svg",
    alt: "card7",
    className:
      "top-[56vh] left-[46vw] sm:top-[62vh] sm:left-[47vw] md:top-[63vh] md:left-[48vw] lg:top-[64vh] lg:left-[49vw] xl:top-[65vh] xl:left-[50vw] w-[260px] h-[160px] sm:w-[280px] sm:h-[180px] md:w-[300px] md:h-[200px] lg:w-[320px] lg:h-[220px] xl:w-[500px] xl:h-[350px] rotate-[-12deg]",
  },
  {
    src: "/icons/landing-page/card8.svg",
    alt: "card8",
    className:
      "top-[39vh] left-[64vw] sm:top-[42vh] sm:left-[66vw] md:top-[44vh] md:left-[68vw] lg:top-[46vh] lg:left-[70vw] xl:top-[48vh] xl:left-[72vw] w-[260px] h-[160px] sm:w-[280px] sm:h-[180px] md:w-[300px] md:h-[200px] lg:w-[320px] lg:h-[220px] xl:w-[500px] xl:h-[350px] rotate-[11deg]",
  },
  // {
  //   src: "/icons/landing-page/card1.svg",
  //   alt: "card1-duplicate",
  //   className:
  //     "top-[75vh] left-[70vw] sm:top-[76vh] sm:left-[71vw] md:top-[77vh] md:left-[72vw] lg:top-[78vh] lg:left-[73vw] xl:top-[79vh] xl:left-[74vw] w-[260px] h-[160px] sm:w-[280px] sm:h-[180px] md:w-[300px] md:h-[200px] lg:w-[320px] lg:h-[220px] xl:w-[500px] xl:h-[350px] rotate-[15deg]",
  // },
];

const JustKeepLearning = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["center center", "end center"],
  });

  // Parallax for cards (move up as you scroll)
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#E2EFF8]">
      {/* Top wave */}
      <div className="relative h-32 z-20">
        <div className="absolute bottom-[-50px] w-full">
          <svg
            viewBox="0 40 1200 80"
            preserveAspectRatio="none"
            className="w-full h-32"
            style={{ transform: `scaleY(-10)` }}
          >
            <path d="M0,45 C400,40 700,80 1200,40 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Main content with parallax */}
      <div className="relative w-full h-[150vh]">
        <div className="sticky top-0 flex items-center justify-center h-screen">
          <div className="relative w-full flex items-center justify-center">
            {/* Cards parallax */}
            <motion.div
              className="absolute left-0 right-0 top-40 sm:top-40 md:top-40 lg:top-40 w-full h-full"
              style={{ y: cardsY }}
            >
              {floatingCards.map((card) => (
                <div
                  key={card.alt}
                  className={`absolute z-10 pointer-events-none ${card.className}`}
                  aria-hidden="true"
                >
                  <img src={card.src} alt={card.alt} className="w-full h-full object-contain" />
                </div>
              ))}
            </motion.div>

            {/* Main content */}
            <div className="relative flex flex-col items-center justify-center z-30 w-full mt-96 sm:mt-96 md:mt-96 lg:mt-96">
              <h2 className="mb-4 mt-8 text-4xl md:text-5xl lg:text-6xl max-w-xs md:max-w-md sfont-semibold text-center text-[#65849A] drop-shadow-lg">
                Just keep studying
              </h2>
              <img
                src="/icons/landing-page/swimming.svg"
                alt="Studying Icon"
                className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative h-32 z-20">
        <div className="absolute top-[-50px] w-full">
          <svg
            viewBox="0 40 1200 80"
            preserveAspectRatio="none"
            className="w-full h-32"
            style={{ transform: `scaleY(-10) rotate(180deg)`, transformOrigin: "center" }}
          >
            <path d="M0,45 C400,40 700,80 1200,40 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default JustKeepLearning;
