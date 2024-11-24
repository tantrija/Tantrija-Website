import Header from "../components/Global/Header";

import ProjectForm from "../components/Home/HomeProjectForm";
import Banner from "../components/Mobile/Banner";
import Services from "../components/Mobile/Services";
import Connect from "../components/Mobile/Connect";
import Dev from "../components/Mobile/Dev";
import DevPlatforms from "../components/Mobile/DevPlatforms";
import Industries from "../components/Mobile/Industries";
import Demo from "../components/Mobile/Demo";
import WhyChooseUs from "../components/Mobile/WhyChooseUs";
import Footer from "../components/Global/Footer";
import * as ReactGA from "react-ga";
import { useEffect } from "react";

export default function MobileDevelopment() {

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