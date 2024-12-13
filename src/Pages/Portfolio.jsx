import Header from "../components/Global/Header";

import PortfolioBanner from "../components/Portfolio/PortfolioBanner";
import Portfolios from "../components/Portfolio/Portfolios";
import ProjectForm from "../components/Home/HomeProjectForm";
import Footer from "../components/Global/Footer";
import { useEffect } from "react";

export default function portfolio() {

  useEffect(() => {
    window.scrollTo(0, 0);
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