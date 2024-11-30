import Header from "../components/Global/Header";
import Banner from "../components/Home/HomeBanner";
import HireDeveloper from "../components/Home/HomeHireDeveloper";
import AboutSection from "../components/Home/HomeAbout";
import Services from "../components/Home/HomeServices";
import Collaboration from "../components/Home/HomeCollaboration";
import DevProcess from "../components/Home/HomeDevProcess";
import CaseStudies from "../components/Home/HomeCaseStudies";
import Testimonials from "../components/Home/HomeTestimonials";
import ProjectForm from "../components/Home/HomeProjectForm";
import Footer from "../components/Global/Footer";
import HomeIndustries from "../components/Home/HomeIndustries";
import * as ReactGA from "react-ga";
import { useEffect } from "react";

export default function home() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <HireDeveloper />
      <AboutSection />
      <Services />
      <Collaboration />
      <DevProcess />
      <CaseStudies />
      <HomeIndustries />
      <Testimonials />
      <ProjectForm />
      <Footer />
    </>
  );
}

