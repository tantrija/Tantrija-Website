import Header from "../components/Global/Header";

import ProjectForm from "../components/Home/HomeProjectForm";
import Banner from "../components/Development/Banner";
import Services from "../components/Development/Services";
import Connect from "../components/Development/Connect";
import Dev from "../components/Development/Dev";
import DevPlatforms from "../components/Development/DevPlatforms";
import Industries from "../components/Development/Industries";
import Demo from "../components/Development/Demo";
import WhyChooseUs from "../components/Development/WhyChooseUs";
import Footer from "../components/Global/Footer";
import * as ReactGA from "react-ga";
import { useEffect } from "react";

export default function WebDevelopment() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Connect />
      <Dev />
      <DevPlatforms />
      <Industries />
      <Demo />
      <WhyChooseUs />
      <ProjectForm />
      <Footer />
    </>
  )
}