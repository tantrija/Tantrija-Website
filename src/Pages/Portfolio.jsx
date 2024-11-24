import Header from "../components/Global/Header";

import PortfolioBanner from "../components/Portfolio/PortfolioBanner";
import Portfolios from "../components/Portfolio/Portfolios";
import ProjectForm from "../components/Home/HomeProjectForm";
import Footer from "../components/Global/Footer";
import * as ReactGA from "react-ga";
import { useEffect } from "react";

export default function portfolio() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
      <Header />
      <PortfolioBanner />
      <Portfolios />
      <ProjectForm />
      <Footer />
    </>
  )
}