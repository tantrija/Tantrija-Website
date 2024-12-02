import Header from "../components/Global/Header";
import FAQs from "../components/Home/HomeFAQs";
import Footer from "../components/Global/Footer";
import * as ReactGA from "react-ga";
import { useEffect } from "react";

export default function faq() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
      <Header />
      <FAQs />
      <Footer />
    </>
  );
}

