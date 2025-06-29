"use client";

import Link from "next/link";
import Image from "next/legacy/image";

import ColorInterpolation from "./ColorInterpolation";

export default function HeroSection() {
  return (
    <section className="pt-0 px-0 lg:px-8 lg:pt-10 container mx-auto mb-16 md:mb-32">
      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden items-center justify-center gap-14 min-h-[450px]">
        {/* Text */}
        <div className="flex flex-col gap-6 justify-center items-center text-center px-6 mt-12">
          <div>
            <h1 className="text-primary font-bold text-5xl md:text-6xl">Flashcards,</h1>
            <ColorInterpolation className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent leading-[1.25] text-center pb-0 md:pb-1">
              Reimagined
            </ColorInterpolation>
          </div>
          <p className="text-primary text-lg md:text-xl">Stylish, smart, and completely customizable.</p>
          <Link
            href="/auth/register"
            className="w-fit font-bold text-xl text-white px-8 py-4 rounded-full transition-all duration-200 border-2 border-white cursor-pointer bg-gradient-to-r bg-[#007CB5] hover:from-[#007CB5] hover:from-0% hover:via-[#369DE3] hover:via-67% hover:to-[#BCADF2] hover:to-100% hover:shadow-lg"
          >
            Start Designing
          </Link>
        </div>

        {/* Image (mobile) */}
        <div className="bg-gradient-to-r from-[#B4ACF126] to-[#309CE226] p-6 rounded-3xl">
          <div className="flex items-center justify-center w-full max-w-[350px] sm:max-w-[380px] md:max-w-[420px]">
            <img
              src="/images/landing-page/hero-flashcard.svg"
              alt="Hero Flashcard"
              width={350}
              height={250}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block w-full bg-gradient-to-r from-[#B4ACF126] to-[#309CE226] p-6 md:p-10 lg:p-16 rounded-3xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-32 min-h-[450px]">
          <div className="flex flex-col gap-4 justify-center">
            <div>
              <h1 className="text-primary text-7xl font-bold">Flashcards,</h1>
              <ColorInterpolation className="text-7xl font-bold bg-clip-text text-transparent leading-[1.15]">
                Reimagined
              </ColorInterpolation>
            </div>
            <p className="text-primary text-xl text-center md:text-left">
              Stylish, smart, and completely customizable.
            </p>
            <Link
              href="/auth/register"
              className="w-fit font-bold text-xl text-white px-8 py-4 rounded-full transition-all duration-200 border-2 border-white cursor-pointer bg-gradient-to-r bg-[#007CB5] hover:from-[#007CB5] hover:from-0% hover:via-[#369DE3] hover:via-67% hover:to-[#BCADF2] hover:to-100% hover:shadow-lg"
            >
              Start Designing
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center min-w-[350px]">
            <img
              src="/images/landing-page/hero-flashcard.svg"
              alt="Hero Flashcard"
              width={500}
              height={350}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
