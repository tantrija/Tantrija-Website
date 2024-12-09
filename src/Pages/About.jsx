import Header from "../components/Global/Header";

import ProjectForm from "../components/Home/HomeProjectForm";
import AboutBanner from "../components/About/AboutBanner";
import AboutWhatWeDo from "../components/About/AboutWhatWeDo";
import AboutInnovate from "../components/About/AboutInnovate";
import AboutBelieve from "../components/About/AboutBelieve";
import AboutLead from "../components/About/AboutLead";
import Footer from "../components/Global/Footer";
import { useEffect } from "react";

export default function about() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Header />
      <AboutBanner />
      <AboutWhatWeDo />
      <AboutInnovate />
      <AboutBelieve />
      <AboutLead />
      <ProjectForm />
      <Footer />
    </>
  )
}