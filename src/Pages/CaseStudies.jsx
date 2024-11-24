import Header from "../components/Global/Header";

import ProjectForm from "../components/Home/HomeProjectForm";
import CaseStudiesBanner from "../components/CaseStudies/CaseStudiesBanner";
import CaseStudies from "../components/CaseStudies/CaseStudiesList";
import Footer from "../components/Global/Footer";
import * as ReactGA from "react-ga";
import { useEffect } from "react";

export default function caseStudies() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
      <Header />
      <CaseStudiesBanner />
      <CaseStudies />
      <ProjectForm />
      <Footer />
    </>
  )
}