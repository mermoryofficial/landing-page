"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/legacy/image";

const Decks = () => {
  const subjects = ["Science", "Math", "Physics", "Engineering"];
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const carouselRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      scrollRight();
    }
    if (isRightSwipe) {
      scrollLeft();
    }
  };

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;

    setIsAtStart(el.scrollLeft <= 0);
    setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="mt-[150px] w-full bg-white flex flex-col items-center justify-center">
          <div className="mb-16 text-center">
            <div
              style={{
                fontWeight: 600,
                fontSize: 24,
                maxWidth: 620,
                marginBottom: 16,
                color: "#001F2E",
              }}
            >
              Explore ready-make decks
            </div>
            <div style={{ fontSize: 16, color: "#083347" }}>
              Discover flashcard decks created by students just like you.
            </div>
          </div>

          <div className="flex flex-col gap-[24px]" style={{ width: "calc(100% - 104px)" }}>
            <div className="flex flex-row gap-2 sm:gap-4 flex-wrap">
              {subjects.map((subject) => (
                <div
                  key={subject}
                  className="text-xs sm:text-sm md:text-base"
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

            <div style={{ position: "relative" }}>
              <div
                ref={carouselRef}
                className="flex flex-row gap-[16px] mt-4 pr-[48px]"
                style={{
                  overflowX: "auto",
                  scrollBehavior: "smooth",
                  paddingBottom: 12,
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {getDecksForSubject(selectedSubject).map((deck, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex flex-col gap-[8px]"
                    style={{
                      width: 336,
                      height: 273,
                    }}
                  >
                    <img src={deck.img} alt="deck cover" width={336} height={185} style={{ borderRadius: 16 }} />
                    <div
                      className="flex flex-row justify-between items-center"
                      style={{
                        color: "#5E7078",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      <div className="flex flex-row justify-center items-center">
                        <img
                          src="/icons/landing-page/decks/star.svg"
                          alt="Star"
                          width={16}
                          height={16}
                          style={{ verticalAlign: "middle", marginRight: 4 }}
                        />
                        {deck.numStars} ({deck.numReviews}){" "}
                        <img
                          src="/icons/landing-page/decks/dot.svg"
                          alt="Dot"
                          width={4}
                          height={4}
                          style={{ verticalAlign: "middle", margin: "0 4px" }}
                        />{" "}
                        <img
                          src="/icons/landing-page/decks/book.svg"
                          alt="Book"
                          width={16}
                          height={16}
                          style={{ verticalAlign: "middle", marginRight: 4 }}
                        />
                        {deck.numStudiers} studiers
                      </div>
                      <div className="flex flex-row">
                        <img
                          src="/icons/landing-page/decks/deck.svg"
                          alt="Deck"
                          width={16}
                          height={16}
                          style={{ verticalAlign: "middle", marginRight: 4 }}
                        />
                        {deck.numCards}
                      </div>
                    </div>
                    <div className="flex flex-row gap-[4px]">
                      <img src={deck.pfp} alt="pfp" width={32} height={32} />
                      <div className="flex flex-col">
                        <div style={{ color: "#001F2E", fontWeight: 600, fontSize: 14 }}>{deck.title}</div>
                        <div style={{ color: "#5E7078", fontWeight: 600, fontSize: 12 }}>@{deck.user}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 12 }}>Updated {deck.numDaysAgo} days ago</div>
                  </div>
                ))}
              </div>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="mt-[150px] w-full bg-white flex flex-col items-center justify-center">
          <div className="mb-16 text-center">
            <div
              style={{
                fontWeight: 600,
                fontSize: 48,
                maxWidth: 620,
                marginBottom: 16,
                color: "#001F2E",
              }}
            >
              Explore ready-make decks
            </div>
            <div style={{ fontSize: 24, color: "#083347" }}>
              Discover flashcard decks created by students just like you.
            </div>
          </div>

          <div className="flex flex-col gap-[24px]" style={{ width: "calc(100% - 104px)" }}>
            <div className="flex flex-row gap-[16px]">
              {subjects.map((subject) => (
                <div
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  style={{
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: "24px",
                    transition: "background-color 0.3s",
                    backgroundColor: selectedSubject === subject ? "#2C9CE2" : "#FFFFFF",
                    color: selectedSubject === subject ? "#001F2E" : "#5E7078",
                    fontSize: 24,
                    fontWeight: 600,
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

            <div style={{ position: "relative" }}>
              <div
                ref={carouselRef}
                className="flex flex-row gap-[16px] mt-4 pr-[48px]"
                style={{
                  overflowX: "auto",
                  scrollBehavior: "smooth",
                  paddingBottom: 12,
                  height: "100%",
                }}
              >
                {getDecksForSubject(selectedSubject).map((deck, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex flex-col gap-[8px]"
                    style={{
                      width: 336,
                      height: 273,
                    }}
                  >
                    <img
                      src={deck.img}
                      alt="deck cover"
                      width={336}
                      height={185}
                      style={{ borderRadius: 16, zIndex: 0 }}
                    />
                    <div
                      className="flex flex-row justify-between items-center"
                      style={{
                        color: "#5E7078",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      <div className="flex flex-row">
                        <img
                          src="/icons/landing-page/decks/star.svg"
                          alt="Star"
                          width={16}
                          height={16}
                          style={{ verticalAlign: "middle", marginRight: 4 }}
                        />
                        {deck.numStars} ({deck.numReviews}){" "}
                        <img
                          src="/icons/landing-page/decks/dot.svg"
                          alt="Dot"
                          width={4}
                          height={4}
                          style={{ verticalAlign: "middle", margin: "0 4px" }}
                        />{" "}
                        <img
                          src="/icons/landing-page/decks/book.svg"
                          alt="Book"
                          width={16}
                          height={16}
                          style={{ verticalAlign: "middle", marginRight: 4 }}
                        />
                        {deck.numStudiers} studiers
                      </div>
                      <div className="flex flex-row">
                        <img
                          src="/icons/landing-page/decks/deck.svg"
                          alt="Deck"
                          width={16}
                          height={16}
                          style={{ verticalAlign: "middle", marginRight: 4 }}
                        />
                        {deck.numCards}
                      </div>
                    </div>
                    <div className="flex flex-row gap-[4px]">
                      <img src={deck.pfp} alt="pfp" width={32} height={32} />
                      <div className="flex flex-col">
                        <div style={{ color: "#001F2E", fontWeight: 600, fontSize: 14 }}>{deck.title}</div>
                        <div style={{ color: "#5E7078", fontWeight: 600, fontSize: 12 }}>@{deck.user}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 12 }}>Updated {deck.numDaysAgo} days ago</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-row gap-[24px] justify-end mt-4">
                <div
                  onClick={!isAtStart ? scrollLeft : undefined}
                  className="flex justify-center items-center"
                  style={{
                    borderRadius: "50%",
                    height: 40,
                    width: 40,
                    background: isAtStart ? "#5E7078" : "#001F2E",
                    transform: "rotate(180deg)",
                    cursor: isAtStart ? "not-allowed" : "pointer",
                    opacity: isAtStart ? 0.6 : 1,
                  }}
                >
                  <img src="/icons/landing-page/decks/arrow.svg" alt="arrow" width={20} height={20} />
                </div>
                <div
                  onClick={!isAtEnd ? scrollRight : undefined}
                  className="flex justify-center items-center"
                  style={{
                    borderRadius: "50%",
                    height: 40,
                    width: 40,
                    background: isAtEnd ? "#5E7078" : "#001F2E",
                    cursor: isAtEnd ? "not-allowed" : "pointer",
                    opacity: isAtEnd ? 0.6 : 1,
                  }}
                >
                  <img src="/icons/landing-page/decks/arrow.svg" alt="arrow" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decks;
