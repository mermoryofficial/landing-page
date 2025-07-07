"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/legacy/image";

const Decks = () => {
  const subjects = ["Science", "Math", "Physics", "Engineering"];
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  const scienceDecks = [
    {
      img: "/icons/landing-page/decks/one.svg",
      pfp: "/icons/landing-page/decks/one-pfp.svg",
      title: "Biology Final Exam",
      user: "emily381",
      numStars: 4.5,
      numReviews: 12,
      numStudiers: 2,
      numCards: 72,
      numDaysAgo: 1,
    },
    {
      img: "/icons/landing-page/decks/two.svg",
      pfp: "/icons/landing-page/decks/two-pfp.svg",
      title: "Nutrition Exam",
      user: "kristy83",
      numStars: 3.2,
      numReviews: 16,
      numStudiers: 6,
      numCards: 42,
      numDaysAgo: 3,
    },
    {
      img: "/icons/landing-page/decks/three.svg",
      pfp: "/icons/landing-page/decks/three-pfp.svg",
      title: "Organic Chemistry Final Exam",
      user: "matthew012",
      numStars: 3.8,
      numReviews: 18,
      numStudiers: 1,
      numCards: 80,
      numDaysAgo: 2,
    },
    {
      img: "/icons/landing-page/decks/one.svg",
      pfp: "/icons/landing-page/decks/four-pfp.svg",
      title: "Anatomy Exam",
      user: "Roth3849",
      numStars: 4.1,
      numReviews: 5,
      numStudiers: 5,
      numCards: 70,
      numDaysAgo: 7,
    },
    {
      img: "/icons/landing-page/decks/two.svg",
      pfp: "/icons/landing-page/decks/four-pfp.svg",
      title: "Physiology Review",
      user: "lena55",
      numStars: 4.3,
      numReviews: 9,
      numStudiers: 3,
      numCards: 65,
      numDaysAgo: 4,
    },
  ];

  const getDecksForSubject = (subject) => {
    return scienceDecks;
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="my-24 w-full bg-white flex flex-col items-center justify-center">
          <div className="mb-16 px-4 text-center">
            <div className="text-[#001F2E] text-2xl font-semibold max-w-[620px] mb-4">Explore ready-make decks</div>
            <div className="text-[#083347]">Discover flashcard decks created by students just like you.</div>
          </div>

          <div className="flex flex-col gap-[24px] w-full pt-0 px-6 pb-6">
            <div className="flex flex-row gap-2 sm:gap-4 flex-wrap">
              {subjects.map((subject) => (
                <div
                  key={subject}
                  className="text-xs sm:text-base"
                  onClick={() => setSelectedSubject(subject)}
                  style={{
                    cursor: "pointer",
                    padding: "6px 12px",
                    borderRadius: "24px",
                    transition: "background-color 0.3s",
                    backgroundColor: selectedSubject === subject ? "#2C9CE2" : "#FFFFFF",
                    color: selectedSubject === subject ? "#001F2E" : "#5E7078",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedSubject !== subject) {
                      e.currentTarget.style.backgroundColor = "#DBEAFE";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedSubject !== subject) {
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                    }
                  }}
                >
                  {subject}
                </div>
              ))}
            </div>

            <div className="relative w-full overflow-hidden" aria-label="Decks carousel" tabIndex={0}>
              {/* Left gradient overlay */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-8 z-20 bg-gradient-to-r from-white to-transparent" />
              {/* Right gradient overlay */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 z-20 bg-gradient-to-l from-white to-transparent" />
              <div
                className="flex gap-4 decks-scroll group-hover:[animation-play-state:paused] w-max overflow-visible pb-4"
                style={{ minWidth: "100%" }}
              >
                {[...getDecksForSubject(selectedSubject), ...getDecksForSubject(selectedSubject)].map((deck, i) => (
                  <div className="overflow-visible" key={i}>
                    <div className="flex-shrink-0 flex flex-col gap-2 bg-white rounded-lg shadow-md p-2 w-full">
                      <img src={deck.img} alt="deck cover" width={336} height={185} className="rounded-lg" />
                      <div className="flex flex-row justify-between items-center text-[#5E7078] text-xs font-semibold">
                        <div className="flex flex-row items-center">
                          <img
                            src="/icons/landing-page/decks/star.svg"
                            alt="Star"
                            width={16}
                            height={16}
                            className="mr-1"
                          />
                          {deck.numStars} ({deck.numReviews})
                          <img
                            src="/icons/landing-page/decks/dot.svg"
                            alt="Dot"
                            width={4}
                            height={4}
                            className="mx-1"
                          />
                          <img
                            src="/icons/landing-page/decks/book.svg"
                            alt="Book"
                            width={16}
                            height={16}
                            className="mr-1"
                          />
                          {deck.numStudiers} studiers
                        </div>
                        <div className="flex flex-row items-center">
                          <img
                            src="/icons/landing-page/decks/deck.svg"
                            alt="Deck"
                            width={16}
                            height={16}
                            className="mr-1"
                          />
                          {deck.numCards}
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 items-center">
                        <img src={deck.pfp} alt="pfp" width={32} height={32} className="rounded-full" />
                        <div className="flex flex-col">
                          <div className="text-[#001F2E] font-semibold text-sm">{deck.title}</div>
                          <div className="text-[#5E7078] font-semibold text-xs">@{deck.user}</div>
                        </div>
                      </div>
                      <div className="text-xs">Updated {deck.numDaysAgo} days ago</div>
                    </div>
                  </div>
                ))}
              </div>
              <style jsx>{`
                @keyframes decks-scroll {
                  to {
                    transform: translateX(calc(-100% - 1rem));
                  }
                }
                .decks-scroll {
                  animation: decks-scroll 20s linear infinite;
                }
                @media (min-width: 768px) {
                  .decks-scroll {
                    animation-duration: 50s;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="my-36 w-full bg-white flex flex-col items-center justify-center">
          <div className="mb-16 text-center">
            <div className="text-[#001F2E] text-3xl xl:text-4xl font-semibold max-w-[620px] mb-4">
              Explore ready-make decks
            </div>
            <div className="text-[#083347] text-xl xl:text-2xl">
              Discover flashcard decks created by students just like you.
            </div>
          </div>

          <div className="flex flex-col gap-[24px] w-full px-12">
            <div className="flex flex-row gap-[16px]">
              {subjects.map((subject) => (
                <div
                  className="text-lg lg:text-xl xl:text-2xl font-semibold"
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  style={{
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: "24px",
                    transition: "background-color 0.3s",
                    backgroundColor: selectedSubject === subject ? "#2C9CE2" : "#FFFFFF",
                    color: selectedSubject === subject ? "#001F2E" : "#5E7078",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedSubject !== subject) {
                      e.currentTarget.style.backgroundColor = "#DBEAFE";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedSubject !== subject) {
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                    }
                  }}
                >
                  {subject}
                </div>
              ))}
            </div>

            <div className="relative w-full overflow-hidden" aria-label="Decks carousel" tabIndex={0}>
              {/* Left gradient overlay */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-20 bg-gradient-to-r from-white to-transparent" />
              {/* Right gradient overlay */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-20 bg-gradient-to-l from-white to-transparent" />
              <div
                className="flex gap-4 decks-scroll group-hover:[animation-play-state:paused] w-max overflow-visible pb-4"
                style={{ minWidth: "100%" }}
              >
                {[...getDecksForSubject(selectedSubject), ...getDecksForSubject(selectedSubject)].map((deck, i) => (
                  <div className="overflow-visible" key={i}>
                    <div className="flex-shrink-0 flex flex-col gap-2 bg-white rounded-lg shadow-md p-2 w-full">
                      <img src={deck.img} alt="deck cover" width={336} height={185} className="rounded-lg" />
                      <div className="flex flex-row justify-between items-center text-[#5E7078] text-xs font-semibold">
                        <div className="flex flex-row items-center">
                          <img
                            src="/icons/landing-page/decks/star.svg"
                            alt="Star"
                            width={16}
                            height={16}
                            className="mr-1"
                          />
                          {deck.numStars} ({deck.numReviews})
                          <img
                            src="/icons/landing-page/decks/dot.svg"
                            alt="Dot"
                            width={4}
                            height={4}
                            className="mx-1"
                          />
                          <img
                            src="/icons/landing-page/decks/book.svg"
                            alt="Book"
                            width={16}
                            height={16}
                            className="mr-1"
                          />
                          {deck.numStudiers} studiers
                        </div>
                        <div className="flex flex-row items-center">
                          <img
                            src="/icons/landing-page/decks/deck.svg"
                            alt="Deck"
                            width={16}
                            height={16}
                            className="mr-1"
                          />
                          {deck.numCards}
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 items-center">
                        <img src={deck.pfp} alt="pfp" width={32} height={32} className="rounded-full" />
                        <div className="flex flex-col">
                          <div className="text-[#001F2E] font-semibold text-sm">{deck.title}</div>
                          <div className="text-[#5E7078] font-semibold text-xs">@{deck.user}</div>
                        </div>
                      </div>
                      <div className="text-xs">Updated {deck.numDaysAgo} days ago</div>
                    </div>
                  </div>
                ))}
              </div>
              <style jsx>{`
                @keyframes decks-scroll {
                  to {
                    transform: translateX(calc(-100% - 1rem));
                  }
                }
                .decks-scroll {
                  animation: decks-scroll 20s linear infinite;
                }
                @media (min-width: 768px) {
                  .decks-scroll {
                    animation-duration: 50s;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decks;
