"use client";

import Image from "next/legacy/image";

const ImportComponent = () => {
  return (
    <div className="w-full">
      <div className="md:hidden">{/* Hidden on mobile as per requirements */}</div>
      <div className="hidden md:block">
        <div className="w-full bg-white min-h-screen flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <div id="top-text" className="mb-16 text-center">
              <div className="font-semibold text-[32px] lg:text-[48px] max-w-[90vw] lg:max-w-[620px] mb-4 text-[#001F2E]">
                Short on time and want more study prep?
              </div>
              <div className="text-[20px] lg:text-[24px] text-[#083347]">
                We got you covered with our Import feature
              </div>
            </div>
            <div className="z-0 flex flex-col items-center justify-center bg-[#F9EECC] rounded-[40px] w-[calc(100%-32px)] max-w-[95vw] lg:max-w-[1230px] mx-4 lg:mx-[100px] h-[400px] md:h-[575px] p-4">
              <div className="z-10 flex flex-row overflow-hidden bg-[#FFF8E1] rounded-[40px] w-full h-full border-4 border-[#F9EECC]">
                {/* Left side */}
                <div className="flex-1 min-w-0">
                  <img
                    src="/icons/landing-page/import-background.svg"
                    alt="import background"
                    className="w-full h-full object-cover rounded-l-[40px] p-0 lg:pr-8"
                    draggable="false"
                  />
                </div>

                {/* Right side */}
                <div className="bg-white flex flex-col justify-center items-center w-[250px] md:w-[350px] min-w-[250px] md:min-w-[350px] max-w-[350px] h-full rounded-r-[40px] flex-shrink-0">
                  <div className="flex flex-col items-center justify-center group">
                    <div className="rounded-full w-[100px] md:w-[145px] h-[100px] md:h-[145px] bg-[#FFF8E1] flex items-center justify-center relative border-[6px] border-dashed border-[#D5CCB2] p-2 transition-all duration-300 group-hover:border-[#F9EECC]">
                      <img
                        src="/icons/landing-page/plus.svg"
                        alt="plus"
                        width={37}
                        height={37}
                        className="transition-all duration-300 group-hover:scale-125"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-[32px] md:text-[48px] font-semibold text-[#271E01]">Import</div>
                  <div className="mt-4 text-center text-[18px] md:text-[24px] text-[#083347] max-w-[90vw] md:max-w-[372px] px-4">
                    Make flashcards <strong>instantly</strong> by uploading your materials.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportComponent;
