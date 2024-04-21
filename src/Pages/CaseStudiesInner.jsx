import Header from "../components/Global/Header";
import CaseStudiesInnerBanner from "../components/CaseStudies/CaseStudiesInnerBanner";
import CaseStudiesInnerOperations from "../components/CaseStudies/CaseStudiesInnerOperations";
import CaseStudiesInnerReq from "../components/CaseStudies/CaseStudiesInnerRequest";
import CaseStudiesInnerSolution from "../components/CaseStudies/CaseStudiesInnerSolution";
import CaseStudiesInnerResults from "../components/CaseStudies/CaseStudiesInnerResults";
import CaseStudiesInnerClients from "../components/CaseStudies/CaseStudiesInnerClients";
import CaseStudiesInnerConclusion from "../components/CaseStudies/CaseStudiesInnerConclusion";
import ProjectForm from "../components/Home/HomeProjectForm";
import Footer from "../components/Global/Footer";
import { useEffect } from "react";

export default function caseStudiesInner() {
  useEffect(()=>{
    window.scrollTo(0, 0);
    
  },[])
    return (
        <>
          <Header />
          <CaseStudiesInnerBanner />
          <CaseStudiesInnerOperations />
          <CaseStudiesInnerReq />
          <CaseStudiesInnerSolution />
          <CaseStudiesInnerResults />
          <CaseStudiesInnerClients />
          <CaseStudiesInnerConclusion />
          <ProjectForm />
          <Footer />
        </>
    )
}