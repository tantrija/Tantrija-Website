import Header from "../components/Global/Header";

import ProjectForm from "../components/Home/HomeProjectForm";
import CaseStudiesBanner from "../components/CaseStudies/CaseStudiesBanner";
import CaseStudies from "../components/CaseStudies/CaseStudiesList";
import Footer from "../components/Global/Footer";
import { useEffect } from "react";

export default function caseStudies() {

  useEffect(() => {
    window.scrollTo(0, 0);
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