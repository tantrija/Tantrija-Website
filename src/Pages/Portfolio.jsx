import Header from "../components/Global/Header";

import PortfolioBanner from "../components/Portfolio/PortfolioBanner";
import Portfolios from "../components/Portfolio/Portfolios";
import ProjectForm from "../components/Home/HomeProjectForm";
import Footer from "../components/Global/Footer";

export default function portfolio() {
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