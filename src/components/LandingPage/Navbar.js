"use client";
import LogoSvg from "../Logo/LogoSvg";
import Link from "next/link";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPageNavbar = () => (
  <nav className="w-full fixed shadow-sm flex items-center py-4 md:py-8 bg-white z-50 px-2 sm:px-4 md:px-8 lg:px-16 justify-start box-border">
    {/* Left side */}
    <div className="text-primary flex items-center justify-center sm:gap-4 lg:gap-8 xl:gap-20 min-w-0 flex-shrink">
      <Link href="/" className="mt-2 flex-shrink-0 w-[120px] lg:w-[150px]">
        <LogoSvg color="#2C9CE2" />
      </Link>
      {/* Hide navigation links on mobile */}
      <Link href="#" className="hidden md:block font-semibold hover:text-black/75">
        Tools
      </Link>
      <Link href="#" className="hidden md:block font-semibold hover:text-black/75">
        Explore
      </Link>
    </div>

    {/* Search bar */}
    <div className="hidden md:flex flex-1 justify-center mx-8">
      <div className="flex items-center gap-4 bg-gray-100 rounded-lg px-4 py-2 shadow-sm w-full max-w-[800px]">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="text-gray-500" />
        <input
          type="text"
          placeholder="I'm looking for..."
          className="font-semibold bg-transparent w-full text-gray-600 placeholder-gray-400 focus:outline-none border-none p-0 font-sans"
        />
      </div>
    </div>

    {/* Right side */}
    <div className="flex gap-1 sm:gap-2 md:gap-8 justify-center items-center flex-shrink-0 ml-auto">
      <Link
        href="/auth/login"
        className="hidden md:block text-primary font-semibold px-5 py-2 hover:bg-gray-200 hover:rounded-full rounded-full transition-colors duration-400"
      >
        Sign In
      </Link>
      <Link href="/auth/register" className="">
        <button className="font-semibold text-sm md:text-[15px] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-200 border-0 outline-none cursor-pointer bg-gradient-to-r bg-[#007CB5] hover:from-[#007CB5] hover:from-0% hover:via-[#369DE3] hover:via-67% hover:to-[#BCADF2] hover:to-100% hover:shadow-xl whitespace-nowrap">
          Get Started
        </button>
      </Link>
    </div>
  </nav>
);

export default LandingPageNavbar;
