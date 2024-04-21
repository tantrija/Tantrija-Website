import Header from "../components/Global/Header";

import ProjectForm from "../components/Home/HomeProjectForm";
import CaseStudiesBanner from "../components/CaseStudies/CaseStudiesBanner";
import CaseStudies from "../components/CaseStudies/CaseStudiesList";
import Footer from "../components/Global/Footer";

export default function caseStudies() {
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