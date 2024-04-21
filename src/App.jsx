import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blockchain from "./Pages/Blockchain";
import Solutions from "./Pages/Solutions";
import Portfolio from "./Pages/Portfolio";
import PortfolioInner from "./Pages/PortfolioInner";
import CaseStudies from "./Pages/CaseStudies";
import CaseStudiesInner from "./Pages/CaseStudiesInner";
import Contact from "./Pages/Contact";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 0,
});



const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/Blockchain", element: <Blockchain /> },
  { path: "/Solutions", element: <Solutions /> },
  { path: "/Portfolio", element: <Portfolio /> },
  { path: "/PortfolioInner", element: <PortfolioInner /> },
  { path: "/CaseStudies", element: <CaseStudies /> },
  { path: "/CaseStudiesInner", element: <CaseStudiesInner /> },
  { path: "/Contact", element: <Contact /> },
]);

export default function App() {
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
      <RouterProvider router={router} />;
    </>
  );
}
