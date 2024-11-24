import Header from "../components/Global/Header";

import ContactUs from "../components/Contact/ContactUs";
import Footer from "../components/Global/Footer";
import * as ReactGA from "react-ga";
import { useEffect } from "react";

export default function contact() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
      <Header />
      <ContactUs />
      <Footer />
    </>
  )
}