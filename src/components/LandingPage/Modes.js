"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/legacy/image";
import ModalLearn from "./ModalLearn";
import ModalReview from "./ModalReview";
import ModalFSRS from "./ModalFSRS";
import { motion } from "motion/react";

const Modes = () => {
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isFSRSOpen, setIsFSRSOpen] = useState(false);

  // Handlers to open modals only on mobile
  const handleOpenLearnMobile = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) setIsLearnOpen(true);
  };
  const handleOpenReviewMobile = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) setIsReviewOpen(true);
  };
  const handleOpenFSRSMobile = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) setIsFSRSOpen(true);
  };

  return (
    <div className="w-full container mx-auto px-6">
      <div className="relative w-full z-0 bg-white mt-0">
        {/* Top text */}
        <div className="flex flex-col justify-center items-center text-center mb-8 md:mb-16 w-full">
          <div className="text-2xl md:text-4xl font-semibold max-w-xs md:max-w-2xl">
            Learn at your own pace with adaptive study modules
          </div>
          <div className="text-base md:text-xl max-w-xl mt-4">Choose the study style that works best for you</div>
        </div>
        {/* Cards */}
        <div
          className="
          flex flex-row overflow-x-auto snap-x
          md:flex-col md:overflow-x-visible md:snap-none
          lg:flex-row lg:overflow-x-visible
          w-full
          gap-6 md:gap-10
          justify-start md:justify-center
          pl-4 md:pl-0 pb-8 md:pb-0
        "
        >
          {/* Learn Card */}
          <div
            className="group flex flex-col gap-0 rounded-[40px] min-w-[306px] md:w-full lg:min-w-[306px] min-h-[354px] md:h-[500px] border-[8px] border-solid border-[#FF9FAA] hover:shadow-lg transition-all duration-300 hover:border-[#EC6D7C] snap-start"
            onClick={handleOpenLearnMobile}
            role="button"
            tabIndex={0}
            aria-label="Open Learn Modal"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleOpenLearnMobile();
            }}
          >
            {/* Top */}
            <div
              className="border-0 border-b-8 border-solid rounded-t-[30px] border-[#FF9FAA] relative overflow-hidden transition-all duration-300 group-hover:border-b-[#EC6D7C] h-[300px] md:h-[364px]"
              style={{ background: "#FFE0E4" }}
            >
              {/* Top design */}
              <div className="w-full h-full relative flex justify-center items-center">
                {/* Main image, always centered */}
                <img
                  src="/icons/landing-page/flashcard-middle.svg"
                  alt="main flashcard"
                  width={221}
                  height={105}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                />
                {/* Top image, above main */}
                <motion.img
                  src="/icons/landing-page/flashcard-top.svg"
                  alt="top flashcard"
                  width={100}
                  height={50}
                  className="absolute left-2 md:left-6 top-10 z-0"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                {/* Bottom image, below/right main */}
                <motion.img
                  src="/icons/landing-page/flashcard-bottom.svg"
                  alt="bottom flashcard"
                  width={100}
                  height={50}
                  className="absolute left-2/3 bottom-6 z-0"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </div>
            </div>
            {/* Bottom */}
            <div
              className="flex items-center"
              style={{
                background: "white",
                height: 136,
                width: "100%",
                borderRadius: "0 0 30px 30px",
                overflow: "hidden",
              }}
            >
              <div className="flex flex-row justify-between items-center w-full">
                <div style={{ marginLeft: 16 }}>
                  <div className="text-xl md:text-2xl font-semibold text-[#001F2E]">Learn</div>
                  <div className="text-base md:text-lg text-[#083347] mt-2">Standard Flashcard Mode</div>
                </div>
                <div
                  className="hidden md:flex justify-center items-center border-0 rounded-full bg-[#FFBFC6] h-16 w-16 mr-4 transform transition-transform duration-300 cursor-pointer"
                  tabIndex={0}
                  aria-label="Open Learn Modal"
                  onClick={() => setIsLearnOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setIsLearnOpen(true);
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src="/icons/landing-page/learn-arrow.svg"
                    alt="arrow"
                    height={24}
                    width={24}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Review Card */}
          <div
            className="group flex flex-col gap-0 rounded-[40px] min-w-[306px] md:w-full lg:min-w-[306px] min-h-[354px] md:h-[500px] border-[8px] border-solid border-[#62BFA9] hover:shadow-lg transition-all duration-300 hover:border-[#2F8B76] snap-start"
            onClick={handleOpenReviewMobile}
            role="button"
            tabIndex={0}
            aria-label="Open Review Modal"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleOpenReviewMobile();
            }}
          >
            {/* Top */}
            <div
              className="border-0 border-b-8 border-solid rounded-t-[30px] border-[#62BFA9] relative overflow-hidden transition-all duration-300 group-hover:border-b-[#2F8B76] h-[300px] md:h-[364px]"
              style={{ background: "#CFF5EF" }}
            >
              {/* Top design */}
              <div className="w-full h-full relative flex justify-center items-center">
                {/* Main image, always centered */}
                <img
                  src="/icons/landing-page/review-flashcard.svg"
                  alt="main flashcard"
                  width={221}
                  height={170}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                />
                {/* Lower check, below/left main */}
                <motion.img
                  src="/icons/landing-page/lower-check.svg"
                  alt="lower checkmark"
                  width={47}
                  height={39}
                  className="absolute left-8 bottom-8 z-0"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                {/* Upper check, above/right main */}
                <motion.img
                  src="/icons/landing-page/lower-check.svg"
                  alt="upper checkmark"
                  width={55}
                  height={56}
                  className="absolute right-6 top-6 z-0"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </div>
            </div>
            {/* Bottom */}
            <div
              className="flex items-center"
              style={{
                background: "white",
                height: 136,
                width: "100%",
                borderRadius: "0 0 30px 30px",
                overflow: "hidden",
              }}
            >
              <div className="flex flex-row justify-between items-center w-full">
                <div style={{ marginLeft: 16 }}>
                  <div className="text-xl md:text-2xl font-semibold text-[#001F2E]">Review</div>
                  <div className="text-base md:text-lg text-[#083347] mt-2">Knowledge Check Mode</div>
                </div>
                <div
                  className="hidden md:flex justify-center items-center border-0 rounded-full bg-[#BCE2DC] h-16 w-16 mr-4 transform transition-transform duration-300 cursor-pointer"
                  tabIndex={0}
                  aria-label="Open Review Modal"
                  onClick={() => setIsReviewOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setIsReviewOpen(true);
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src="/icons/landing-page/review-arrow.svg"
                    alt="arrow"
                    height={24}
                    width={24}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* FSRS Card */}
          <div
            className="group flex flex-col gap-0 rounded-[40px] min-w-[306px] md:w-full lg:min-w-[306px] min-h-[354px] md:h-[500px] border-[8px] border-solid border-[#896A96] hover:shadow-lg transition-all duration-300 hover:border-[#7761CF] snap-start mr-4"
            onClick={handleOpenFSRSMobile}
            role="button"
            tabIndex={0}
            aria-label="Open FSRS Modal"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleOpenFSRSMobile();
            }}
          >
            {/* Top */}
            <div
              className="border-0 border-b-8 border-solid rounded-t-[30px] border-[#896A96] relative overflow-hidden transition-all duration-300 group-hover:border-b-[#7761CF] h-[300px] md:h-[364px]"
              style={{ background: "#F2E1F9" }}
            >
              {/* Top design */}
              <div className="w-full h-full relative flex justify-center items-center">
                {/* Main image, always centered */}
                <img
                  src="/icons/landing-page/fsrs-flashcard.svg"
                  alt="main flashcard"
                  width={221}
                  height={175}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                />
                {/* Again, top/right main */}
                <motion.img
                  src="/icons/landing-page/again.svg"
                  alt="again"
                  width={105}
                  height={58}
                  className="absolute right-0 top-2 md:top-8 z-0"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                {/* Good, top/left main */}
                <motion.img
                  src="/icons/landing-page/good.svg"
                  alt="good"
                  width={105}
                  height={58}
                  className="absolute left-0 top-2 md:top-8 z-0"
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                {/* Easy, bottom/right main */}
                <motion.img
                  src="/icons/landing-page/easy.svg"
                  alt="easy"
                  width={87}
                  height={48}
                  className="absolute right-2 md:right-8 bottom-2 md:bottom-8 z-0"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </div>
            </div>
            {/* Bottom */}
            <div
              className="flex items-center"
              style={{
                background: "white",
                height: 136,
                width: "100%",
                borderRadius: "0 0 30px 30px",
                overflow: "hidden",
              }}
            >
              <div className="flex flex-row justify-between items-center w-full">
                <div style={{ marginLeft: 16 }}>
                  <div className="text-xl md:text-2xl font-semibold text-[#001F2E]">FSRS</div>
                  <div className="text-base md:text-lg text-[#083347] mt-2">Space Repetition Mode</div>
                </div>
                <div
                  className="hidden md:flex justify-center items-center border-0 rounded-full bg-[#E8D5F0] h-16 w-16 mr-4 transform transition-transform duration-300 cursor-pointer"
                  tabIndex={0}
                  aria-label="Open FSRS Modal"
                  onClick={() => setIsFSRSOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setIsFSRSOpen(true);
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src="/icons/landing-page/fsrs-arrow.svg"
                    alt="arrow"
                    height={24}
                    width={24}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modals */}
        <ModalLearn open={isLearnOpen} onClose={() => setIsLearnOpen(false)} />
        <ModalReview open={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
        <ModalFSRS open={isFSRSOpen} onClose={() => setIsFSRSOpen(false)} />
      </div>
    </div>
  );
};

export default Modes;
