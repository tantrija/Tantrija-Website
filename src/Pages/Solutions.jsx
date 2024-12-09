import Header from "../components/Global/Header";
import SolutionsBanner from "../components/Solutions/SolutionsBanner";
import SolutionsSupport from "../components/Solutions/SolutionsSupport";
import SolutionsWhyUs from "../components/Solutions/SolutionsWhyUs";
import SolutionsPlatform from "../components/Solutions/SolutionPlatforms";
import SolutionDevServices from "../components/Solutions/SolutionDevServices";
import SolutionsExperts from "../components/Solutions/SolutionsExperts";
import ProjectForm from "../components/Home/HomeProjectForm";
import Footer from "../components/Global/Footer";
import { useEffect } from "react";

export default function Solutions() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header />
            <SolutionsBanner />
            <SolutionsSupport />
            <SolutionsWhyUs />
            <SolutionsPlatform />
            <SolutionDevServices />
            <SolutionsExperts />
            <ProjectForm />
            <Footer />
        </>
    )
}