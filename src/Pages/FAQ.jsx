import Header from "../components/Global/Header";
import FAQs from "../components/Home/HomeFAQs";
import Footer from "../components/Global/Footer";
import { useEffect } from "react";

export default function faq() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Header />
      <FAQs />
      <Footer />
    </>
  );
}

