import React from "react";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const ModalLearn = ({ open, onClose }) => {
  // MUI Dialog handles open state

  const steps = [
    "Get in a quick study session anywhere, anytime",
    "Easy and intuitive setup –– just flip and learn!",
    "Creates a direct question-answer connection in the brain",
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
          src="/icons/landing-page/learn-x.svg"
          alt="x"
          width={22}
          height={22}
          onClick={onClose}
          className="absolute top-8 right-12 md:right-16 cursor-pointer"
        />
      </DialogTitle>
      <DialogContent className="p-0 bg-transparent">
        <div
          className="flex flex-col lg:flex-row w-full max-w-[1311px] bg-[#FFE0E4] border-4 border-[#F87483] rounded-3xl overflow-hidden items-center justify-center"
          style={{
            minHeight: 505,
            maxHeight: "90vh",
            border: "4px solid #F87483",
          }}
        >
          {/* Text */}
          <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-auto px-6 sm:px-8 lg:pl-16 py-6 lg:py-8">
            {/* Title */}
            <div className="flex flex-row gap-2 items-center">
              {/* Title image */}
              <Image
                src="/icons/landing-page/learn-title-img.svg"
                alt="img"
                width={92}
                height={57}
                className="w-12 h-8 sm:w-16 sm:h-10 lg:w-[92px] lg:h-[57px]"
              />
              {/* Title text */}
              <div className="text-3xl sm:text-4xl lg:text-6xl font-semibold">Learn</div>
            </div>

            {/* Subtitle */}
            <div className="text-base sm:text-lg lg:text-2xl mt-3 lg:mt-4 mb-6 lg:mb-8">Standard Flashcard Mode</div>

            {/* Steps */}
            <div className="max-w-none lg:max-w-[470px] lg:pr-4">
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
          <div className="flex items-center justify-center lg:justify-end px-6 lg:px-0 pb-6 h-full">
            <Image
              src="/icons/landing-page/learn-popup.svg"
              alt="img"
              width={538}
              height={327}
              className="w-full max-w-[400px] lg:max-w-[538px] h-auto lg:mr-8 lg:mt-12"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalLearn;
