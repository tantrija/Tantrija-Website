import Header from "../components/Global/Header";
import PortfolioInnerBanner from "../components/Portfolio/PortfolioInnerBanner";
import ProfileCombination from "../components/Portfolio/ProfileCombination";
import PortfolioChallanges from "../components/Portfolio/PortfolioChallanges";
import PortfolioFeatures from "../components/Portfolio/PortfolioFeatures";
import PortfolioInnerRequest from "../components/Portfolio/PortfolioInnerRequest";
import CaseStudiesInnerClients from "../components/CaseStudies/CaseStudiesInnerClients";
import ProjectForm from "../components/Home/HomeProjectForm";
import Footer from "../components/Global/Footer";
import { useEffect } from "react";

export default function PortfolioInner() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Header />
      <PortfolioInnerBanner />
      <ProfileCombination />
      <PortfolioChallanges />
      <PortfolioFeatures />
      <PortfolioInnerRequest />
      <CaseStudiesInnerClients />
      <ProjectForm />
      <Footer />
    </>
  )
}