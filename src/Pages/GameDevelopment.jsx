import Header from "../components/Global/Header";

import ProjectForm from "../components/Home/HomeProjectForm";
import Banner from "../components/Game/Banner";
import Services from "../components/Game/Services";
import Connect from "../components/Game/Connect";
import Dev from "../components/Game/Dev";
import DevPlatforms from "../components/Game/DevPlatforms";
import Industries from "../components/Game/Industries";
import Demo from "../components/Game/Demo";
import WhyChooseUs from "../components/Game/WhyChooseUs";
import Footer from "../components/Global/Footer";

export default function GameDevelopment() {
    return (
        <>
          <Header />
          <Banner />
          <Services />
          <Connect />
          <Dev />
          <DevPlatforms />
          <Industries />
          <Demo />
          <WhyChooseUs />
          <ProjectForm />
          <Footer />
        </>
    )
}