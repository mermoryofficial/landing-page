"use client"

// src/app/page.js

import LandingPageNavbar from '@/components/LandingPage/Navbar';
import LandingPageFooter from '@/components/LandingPage/Footer';
import HeroSection from '@/components/LandingPage/Hero';
import SocialProof from '@/components/LandingPage/SocialProof';
import ThreeReasons from '@/components/LandingPage/ThreeReasons';
import ImportComponent from '@/components/LandingPage/Import';
import JustKeepLearning from '@/components/LandingPage/JustKeepLearning';
import Modes from '@/components/LandingPage/Modes';
import Decks from '@/components/LandingPage/Decks';
import AI from '@/components/LandingPage/AI';
import './globals.css'
import { LandingPageLayout } from "./layout";
import Head from "next/head";
import { useSelector } from "react-redux";

const LandingPage = () => {
  // const user = useSelector((state) => state.counter.user);

  // useEffect(() => {
  //   if (user) {
  //     router.replace("/dashboard");
  //   }
  // }, [user, router]);

  return (
    <>
      <Head>
        <title>Mermory</title>
        <meta name="description" content="Mermory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

LandingPage.getLayout = (page) => <LandingPageLayout>{page}</LandingPageLayout>;

export default LandingPage;