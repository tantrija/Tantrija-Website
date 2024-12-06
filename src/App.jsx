import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Home from "./Pages/Home";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import Blockchain from "./Pages/Blockchain";
import GameDevelopment from "./Pages/GameDevelopment";
import WebDevelopment from "./Pages/WebDevelopment";
import MobileDevelopment from "./Pages/MobileDevelopment";
import Solutions from "./Pages/Solutions";
import Portfolio from "./Pages/Portfolio";
import PortfolioInner from "./Pages/PortfolioInner";
import CaseStudies from "./Pages/CaseStudies";
import CaseStudiesInner from "./Pages/CaseStudiesInner";
import Contact from "./Pages/Contact";
import "./App.css";
import logoIcon from "./assets/Tantrija-black.png";

import AOS from "aos";
import "aos/dist/aos.css";
import useFavicon from "./useFavicon";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import ReactGA from "react-ga";

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { steps } from "./chatbot/chatbot-steps";
import { RiCloseLine } from "react-icons/ri";

const TRACKING_ID = "G-1PQGPQJ23N";
ReactGA.initialize(TRACKING_ID);

AOS.init({
  offset: 0,
});

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/blockchain", element: <Blockchain /> },
  { path: "/game-development", element: <GameDevelopment /> },
  { path: "/web-development", element: <WebDevelopment /> },
  { path: "/mobile-development", element: <MobileDevelopment /> },
  // { path: "/Solutions", element: <Solutions /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/portfolioinner", element: <PortfolioInner /> },
  { path: "/casestudies", element: <CaseStudies /> },
  { path: "/casestudiesinner", element: <CaseStudiesInner /> },
  { path: "/contact", element: <Contact /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-and-conditions", element: <TermsAndConditions /> },
]);

// Creating our own theme
const theme = {
  background: '#F4F4F4', // Light gray background, matching clean web design
  headerBgColor: '#ffc200', // Retained original green from blockchain/tech theme
  headerFontSize: '20px',
  botBubbleColor: '#091020', // Darker green, complementing the header
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#aaa', // Blue, inspired by tech/blockchain aesthetic
  userFontColor: 'white'
};

// Set some properties of the bot
const config = {
  floating: true,
  botAvatar: logoIcon,
  floatingIcon: <img src={logoIcon} style={{ width: 50, height: 50, borderRadius: 50 }} />,
  // headerComponent: <div style={{paddingInline: 20, paddingBlock: 10, backgroundColor: "#ffc200", justifyContent:"space-between", alignItems:"center", display: "flex"}}><span style={{fontSize: 20, color:"black"}}><img src={logoIcon} style={{width: 35, height: 35, marginRight: 10, borderRadius: 35 }}/>Tantrija Enterprises</span><RiCloseLine color="black" size={20} onClick/></div>,
  opened: window.innerWidth > 768 ? true : false,
  handleEnd: async (e) => {
    console.log("e ---- ", e)
    const { values } = e;

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeXqZpfKyVZH2w5qchGRDMs8BFnLXin15lvxI-KLDxXLgE-IQ"; // Replace with your Google Form URL
    const formEntries = {
      "entry.2005620554": values[values.length - 3],        // Replace with actual entry ID for the name field
      "entry.1045781291": values[values.length - 2],       // Replace with actual entry ID for the email field
      "entry.1166974658": values[values.length - 1],       // Replace with actual entry ID for the phone field
      "entry.839337160": JSON.stringify(values)  // Replace with actual entry ID for the description field
    };

    const queryString = new URLSearchParams(formEntries).toString();
    const submitUrl = `${formUrl}/formResponse?${queryString}`;

    try {
      await fetch(submitUrl, {
        method: "POST",
        mode: "no-cors" // Important to avoid CORS issues
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

export default function App() {
  useFavicon()

  return (
    <>
      <div className="App">
        {window.innerWidth > 768 && <AnimatedCursor
          innerSize={0}
          outerSize={15}
          color='255, 255, 255'
          outerAlpha={0.5}
          innerScale={0.7}
          outerScale={2}
          showSystemCursor={true}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            {
              target: '.custom',
              options: {
                innerSize: 12,
                outerSize: 12,
                color: '255, 255, 255',
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5
              }
            }
          ]}
        />}
      </div>
      <RouterProvider router={router} />
      <ThemeProvider theme={theme}>
        <ChatBot
          // This appears as the header
          // text for the chat bot
          headerTitle="Tantrija"
          recognitionEnable={true}
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </>
  );
}
