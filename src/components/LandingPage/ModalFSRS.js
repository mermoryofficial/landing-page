import React, { useEffect, useState } from "react";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const ModalFSRS = ({ open, onClose }) => {
  const steps = [
    "Scientifically optimized for maximum memory retention",
    "Adapts to your learning patterns and prioritizes what you need to study most",
    "Helps combat forgetting by reviewing at the perfect time",
    "See your mastery grow with a data-driven review system",
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{ style: { background: "transparent", boxShadow: "none" } }}
    >
      <DialogTitle className="relative p-0" sx={{ minWidth: 0, minHeight: 0, padding: 0 }}>
        <Image
          src="/icons/landing-page/fsrs-x.svg"
          alt="x"
          width={22}
          height={22}
          onClick={onClose}
          className="absolute top-8 right-12 md:right-16 z-50 cursor-pointer"
        />
      </DialogTitle>
      <DialogContent className="p-0 bg-transparent">
        <div
          className="flex flex-col lg:flex-row w-full relative max-w-[1311px] bg-[#F2E1F9] border-4 border-[#9E8FDB] rounded-3xl overflow-hidden items-center justify-center"
          style={{
            minHeight: "fit-content",
            maxHeight: "90vh",
            border: "4px solid #9E8FDB",
          }}
        >
          {/* Text */}
          <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-auto px-6 sm:px-8 lg:pl-16 py-6 lg:py-8">
            {/* Title */}
            <div className="flex flex-row gap-2 items-center">
              {/* Title image */}
              <Image
                src="/icons/landing-page/fsrs-title-img.svg"
                alt="img"
                width={92}
                height={57}
                className="w-12 h-8 sm:w-16 sm:h-10 lg:w-[92px] lg:h-[57px]"
              />
              {/* Title text */}
              <div className="text-3xl sm:text-4xl lg:text-6xl font-semibold">FSRS</div>
            </div>

            {/* Subtitle */}
            <div className="text-base sm:text-lg lg:text-2xl mt-3 lg:mt-4 mb-6 lg:mb-8">Spaced Repetition Mode</div>

            {/* Steps */}
            <div className="max-w-none lg:max-w-[470px]">
              <ul className="list-none space-y-3 lg:space-y-4">
                {steps.map((step, i) => {
                  return (
                    <li key={i} className="flex flex-row gap-3 items-center lg:gap-4">
                      {/* Circle */}
                      <div className="flex justify-center items-center flex-shrink-0 bg-white rounded-full w-8 h-8 lg:w-10 lg:h-10 text-sm lg:text-base font-medium">
                        {i + 1}
                      </div>
                      {/* Step text */}
                      <div className="text-sm sm:text-base lg:text-base leading-relaxed">{step}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-col items-center justify-center m-0 lg:mr-8 lg:mt-8 px-6 lg:px-0 pb-16 h-full">
            {/* Flashcard */}
            <Image
              src="/icons/landing-page/fsrs-popup.svg"
              alt="img"
              width={300}
              height={180}
              className="w-full max-w-[400px] lg:max-w-[538px] h-auto lg:mr-6 lg:mt-12"
            />
            {/* Question types */}
            <div className="flex justify-center items-center mt-3 lg:mt-4 lg:mr-6">
              <Image
                src="/icons/landing-page/question-types.svg"
                alt="buttons"
                width={400}
                height={69}
                className="w-full max-w-[350px] lg:max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFSRS;
