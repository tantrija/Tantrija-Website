import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Home from "./Pages/Home";
import About from "./Pages/About";
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

import AOS from "aos";
import "aos/dist/aos.css";
import useFavicon from "./useFavicon";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";

AOS.init({
  offset: 0,
});

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blockchain", element: <Blockchain /> },
  { path: "/game-development", element: <GameDevelopment /> },
  { path: "/web-development", element: <WebDevelopment /> },
  { path: "/mobile-development", element: <MobileDevelopment /> },
  // { path: "/Solutions", element: <Solutions /> },
  // { path: "/Portfolio", element: <Portfolio /> },
  // { path: "/PortfolioInner", element: <PortfolioInner /> },
  // { path: "/CaseStudies", element: <CaseStudies /> },
  // { path: "/CaseStudiesInner", element: <CaseStudiesInner /> },
  { path: "/contact", element: <Contact /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-and-conditions", element: <TermsAndConditions /> },
]);

export default function App() {
  useFavicon()

  return (
    <>
      <div className="App">
        <AnimatedCursor
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
      />
      </div>
      <RouterProvider router={router} />
    </>
  );
}
