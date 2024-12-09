import Header from "../components/Global/Header";

import ContactUs from "../components/Contact/ContactUs";
import Footer from "../components/Global/Footer";
import { useEffect } from "react";

export default function contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Header />
      <ContactUs />
      <Footer />
    </>
  )
}