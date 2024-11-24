import Header from "../components/Global/Header";

import ProjectForm from "../components/Home/HomeProjectForm";
import BlockchainBanner from "../components/Blockchain/BlockchainBanner";
import BlockchainServices from "../components/Blockchain/BlockchainServices";
import BlockchainConnect from "../components/Blockchain/BlockchainConnect";
import BlockchainDev from "../components/Blockchain/BlockchainDev";
import BlockchainDevPlatforms from "../components/Blockchain/BlockchainDevPlatforms";
import BlockchainIndustries from "../components/Blockchain/BlockchainIndustries";
import BlockchainDemo from "../components/Blockchain/BlockchainDemo";
import BlockchainWhyChooseUs from "../components/Blockchain/BlockchainWhyChooseUs";
import Footer from "../components/Global/Footer";
import * as ReactGA from "react-ga";
import { useEffect } from "react";

export default function blockchain() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
      <Header />
      <BlockchainBanner />
      <BlockchainServices />
      <BlockchainConnect />
      <BlockchainDev />
      <BlockchainDevPlatforms />
      <BlockchainIndustries />
      <BlockchainDemo />
      <BlockchainWhyChooseUs />
      <ProjectForm />
      <Footer />
    </>
  )
}