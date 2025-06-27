"use client"

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import LogoSvg from "./Logo/LogoSvg";

import { Backdrop, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import LandingPageNavbar from "./LandingPage/Navbar";
import LandingPageFooter from "./LandingPage/Footer";
import JustKeepLearning from "./LandingPage/JustKeepLearning";
import ImportComponent from "./LandingPage/Import";
import HeroSection from "./LandingPage/Hero";
import SocialProof from "./LandingPage/SocialProof";
import Modes from "./LandingPage/Modes";
import AI from "./LandingPage/AI";
import ThreeReasons from "./LandingPage/ThreeReasons";
import Decks from "./LandingPage/Decks";

const theme = createTheme({
  typography: {
    fontFamily: `"Figtree", sans-serif`,
  },
  palette: {
    primary: {
      main: "#001F2E", // Primary color for text/icons
    },
    secondary: {
      main: "#083347", // Secondary color for text/icons
    },
    tertiary: {
      main: "#5E7078", // Tertiary color for text/icons
    },
    grey: {
      100: "#E6E8EA", // Main gray color for outlines and section dividers
      200: "#C2C9CC", // Secondary gray option for when the main gray is too light
    },
    cta: {
      main: "#007CB5", // Main CTA button color
    },
    brand: {
      purple: "#BFADF2", // Brand purple color
      lightPurple: "#F4F3FF", // Brand light purple color
      blue: "#2C9CE2", // Brand blue color
      lightBlue: "#EFF8FF", // Brand light blue color
      memoryTextLogo: "#68BEFC", // Mermory text logo color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable automatic uppercase for buttons
        },
        outlined: {
          border: "2px solid #E6E8EA", // Apply border style only to outlined buttons
        },
        containedPrimary: {
          backgroundColor: "#007cb5", // Set primary button background color
          "&:hover": {
            backgroundColor: "#3396c4", // Set primary button hover background color
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          opacity: 1,
          backgroundColor: "#E6E8EA",
          border: "1.5px solid #E6E8EA",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E6E8EA",
            borderWidth: "2px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E6E8EA",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(25, 118, 210, 0.5)",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#007CB5",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&.Mui-selected": {
            color: "#007CB5",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          fontSize: "12px",
          maxWidth: 300,
          position: "relative",
          fontFamily: "Figtree, sans-serif",
          "&.MuiTooltip-tooltipPlacementTop": {
            top: "10px",
          },
          "&.MuiTooltip-tooltipPlacementBottom": {
            bottom: "10px",
          },
        },
        arrow: {
          color: "rgba(0, 0, 0, 0.8)",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        },
      },
    },
  },
});

export const LandingPageLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <LandingPageNavbar />
    <main className="flex-1 flex flex-col pt-24 pb-12 w-full">
      <HeroSection />
      <SocialProof />
      <ThreeReasons />
      <ImportComponent />
      <JustKeepLearning />
      <Modes />
      <Decks />
      <AI />
      {children}
    </main>
    <LandingPageFooter />
  </div>
);