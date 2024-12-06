import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logoIcon from "../../assets/front-load.png";
import logoText from "../../assets/tantrija-logo.svg";
import { FaAngleDown } from "react-icons/fa6";

import MegaMenuBlockchain from "../MegaMenu/MegaMenuBlockchain"


const MobileNav = ({ toggleNavbar }) => {

  const [showNavbar, setShowNavbar] = useState(false);
  
  useEffect(() => {
    setShowNavbar(true);

  }, [showNavbar]);

  return (
    <header className={`mobileNav ${showNavbar && "opacity-1"}`}>
      <div className="position-relative">
        <div className="bg-white rounded-4 text-center position-absolute mobile-pannel w-100">
          <nav className="navbar">
            <ul className="nav-items list-unstyled mb-0 pt-4">
              <li className="nav-link text-center mb-4 pt-1">
                <Link onClick={toggleNavbar} className="text-dark" to={"/"}>Home</Link>
              </li>
              <li className="nav-link text-center mb-4">
                <Link onClick={toggleNavbar} className="text-dark" to={"/about"}>About</Link>
              </li>
              <li className="nav-link text-center mb-4">
                <Link onClick={toggleNavbar} className="text-dark" to={"/blockchain"}>Blockchain</Link>
              </li>
              <li className="nav-link text-center mb-4">
                <Link onClick={toggleNavbar} className="text-dark" to={"/game-development"}>Game Development</Link>
              </li>
              <li className="nav-link text-center mb-4">
                <Link onClick={toggleNavbar} className="text-dark" to={"/web-development"}>Web Development</Link>
              </li>
              <li className="nav-link text-center mb-4">
                <Link onClick={toggleNavbar} className="text-dark" to={"/mobile-development"}>Mobile App Development</Link>
              </li>
              <li className="nav-link text-center mb-4">
                <Link onClick={toggleNavbar} className="text-dark" to={"/portfolio"}>Portfolio</Link>
              </li>
              <li className="nav-link text-center mb-4">
                <Link onClick={toggleNavbar} className="text-dark" to={"/faq"}>FAQ</Link>
              </li>
            </ul>
          </nav>
          <Link to={"/contact"} className="btn btn-outline-dark px-4 py-2 fw-bold">Get In Touch</Link>
          <div className="social d-flex align-items-center gap-4 justify-content-center py-4">
            {/* <a href="#" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="10.143" height="19.525" viewBox="0 0 10.143 19.525">
                <path id="de5c86ec3adb5fb7218b18e9d20f6364" d="M14.918,5.241h1.835v-3.1A25.491,25.491,0,0,0,14.078,2C11.423,2,9.607,3.621,9.607,6.588V9.146h-3v3.475h3v8.9H13.2v-8.9h2.987l.449-3.475H13.2V6.93C13.2,5.905,13.473,5.241,14.918,5.241Z" transform="translate(-6.61 -2)" fill="#ffc200"/>
              </svg>
              </a> */}
            <a href="https://www.linkedin.com/company/tantrija/" target="_blank" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20.432" height="19.525" viewBox="0 0 20.432 19.525">
                <path id="b5783c601e16032733df8073caacab72" d="M0,7.268A2.124,2.124,0,0,1,.69,5.641,2.532,2.532,0,0,1,2.485,5a2.457,2.457,0,0,1,1.755.631,2.225,2.225,0,0,1,.69,1.7A2.077,2.077,0,0,1,4.26,8.905a2.537,2.537,0,0,1-1.814.651h-.02A2.414,2.414,0,0,1,.671,8.905,2.186,2.186,0,0,1,0,7.268ZM.256,24.525V11.351H4.635V24.525Zm6.8,0h4.378V17.169a2.568,2.568,0,0,1,1-2.2,2.143,2.143,0,0,1,1.41-.463q2.209,0,2.209,2.978v7.041h4.378V16.972a6.348,6.348,0,0,0-1.381-4.428A4.709,4.709,0,0,0,15.4,11.035a4.476,4.476,0,0,0-3.964,2.189v.039h-.02l.02-.039V11.351H7.061q.039.631.039,3.925T7.061,24.525Z" transform="translate(0 -5)" fill="#ffc200" />
              </svg>
            </a>
            <a href="https://x.com/Tantrijadotcom" target="_blank" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20.694" height="18.706" viewBox="0 0 20.694 18.706">
                <g id="Group_49" data-name="Group 49" transform="translate(-84.064 -100)">
                  <path id="Path_33" data-name="Path 33" d="M100.362,100h3.173L96.6,107.924l8.156,10.782H98.373l-5-6.539-5.723,6.539H84.473l7.415-8.475L84.064,100h6.548l4.521,5.977Zm-1.114,16.806h1.758L89.657,101.8H87.77Z" fill="#ffc200" />
                </g>
              </svg>
            </a>
            <a href="https://tantrija.medium.com" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Tantrija Medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="20.694" height="18.706" viewBox="0 0 20.694 18.706">
                <path d="m24 24h-24v-24h24zm-8.986-15.006v7.326c0 .198 0 .234-.127.362l-1.302 1.264v.27h6.32v-.27l-1.257-1.234c-.091-.07-.148-.178-.148-.3 0-.022.002-.043.005-.064v.002-9.07c-.003-.019-.005-.04-.005-.062 0-.121.058-.229.148-.298l.001-.001 1.286-1.234v-.27h-4.456l-3.176 7.924-3.609-7.924h-4.675v.271l1.502 1.813c.127.115.207.281.207.466 0 .022-.001.043-.003.064v-.003 7.126c.007.041.011.088.011.136 0 .222-.088.423-.231.571l-1.69 2.054v.27h4.8v-.27l-1.691-2.054c-.149-.154-.241-.363-.241-.595 0-.04.003-.079.008-.117v.004-6.16l4.215 9.195h.49z" fill="#ffc200" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};



export default function header() {
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };

  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1200);
  };

  const toggleNavbar = () => setShowMobileNavbar((prev) => !prev);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <header className={`nav-items ${isMobile && "mobile"}`} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="50" data-aos-once="true">
      <div className="container-fluid pt-4 py-4-mob">
        <div className="d-flex align-items-center justify-content-between" key={pathname?.toLowerCase()}>
          <Link to={"/"}>
            <div className="d-flex align-items-center gap-2 site-identity">
              <img src={(isMobile ? logoIcon : logoText)} alt="Tantrija IT Services Logo" style={{ maxWidth: (isMobile ? 45 : '100%') }} />
            </div>
          </Link>
          {isMobile ? (
            <div onClick={toggleNavbar} style={{ fontSize: "25px" }} aria-label="Toggle navigation menu">
              <MdMenu />
            </div>
          ) : (
            <div className="d-flex align-items-center gap-4">
              <nav className="navbar" aria-label="Main navigation">
                <ul className="nav-items list-unstyled d-flex align-items-center gap-4 mb-0">
                  <li className={"nav-link py-4" + (pathname?.toLowerCase() == "/" && " active border-bottom border-warning")}>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className={"nav-link py-4" + (pathname?.toLowerCase() == "/about" && " active border-bottom border-warning")}>
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li className={"nav-link py-4" + (pathname?.toLowerCase() == "/portfolio" && " active border-bottom border-warning")}>
                    <Link to={"/portfolio"}>Portfolio</Link>
                  </li>
                  {/* <li className={"nav-link py-4" + (pathname?.toLowerCase() == "/casestudies" && " active border-bottom border-warning")}>
                    <Link to={"/casestudies"}>Case Studies</Link>
                  </li> */}
                  <li onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    className={active ? 'nav-link py-4 active' : 'nav-link py-4'}>
                    <Link to="#">IT Services <FaAngleDown /></Link>
                    <MegaMenuBlockchain />
                  </li>
                  <li className={"nav-link py-4" + (pathname?.toLowerCase() == "/casestudies" && " active border-bottom border-warning")}>
                    <Link to={"/faq"}>FAQs</Link>
                  </li>
                </ul>
              </nav>
              <div className="social d-flex align-items-center gap-4">
                <a href="https://www.linkedin.com/company/tantrija/" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Tantrija LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20.432" height="19.525" viewBox="0 0 20.432 19.525">
                    <path id="b5783c601e16032733df8073caacab72" d="M0,7.268A2.124,2.124,0,0,1,.69,5.641,2.532,2.532,0,0,1,2.485,5a2.457,2.457,0,0,1,1.755.631,2.225,2.225,0,0,1,.69,1.7A2.077,2.077,0,0,1,4.26,8.905a2.537,2.537,0,0,1-1.814.651h-.02A2.414,2.414,0,0,1,.671,8.905,2.186,2.186,0,0,1,0,7.268ZM.256,24.525V11.351H4.635V24.525Zm6.8,0h4.378V17.169a2.568,2.568,0,0,1,1-2.2,2.143,2.143,0,0,1,1.41-.463q2.209,0,2.209,2.978v7.041h4.378V16.972a6.348,6.348,0,0,0-1.381-4.428A4.709,4.709,0,0,0,15.4,11.035a4.476,4.476,0,0,0-3.964,2.189v.039h-.02l.02-.039V11.351H7.061q.039.631.039,3.925T7.061,24.525Z" transform="translate(0 -5)" fill="#f1f1f1" />
                  </svg>
                </a>
                <a href="https://x.com/Tantrijadotcom" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Tantrija Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20.694" height="18.706" viewBox="0 0 20.694 18.706">
                    <g id="Group_49" data-name="Group 49" transform="translate(-84.064 -100)">
                      <path id="Path_33" data-name="Path 33" d="M100.362,100h3.173L96.6,107.924l8.156,10.782H98.373l-5-6.539-5.723,6.539H84.473l7.415-8.475L84.064,100h6.548l4.521,5.977Zm-1.114,16.806h1.758L89.657,101.8H87.77Z" fill="#f1f1f1" />
                    </g>
                  </svg>
                </a>
                <a href="https://tantrija.medium.com" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Tantrija Medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20.694" height="18.706" viewBox="0 0 20.694 18.706">
                    <path d="M2.426 4.973c0-.384-.125-.768-.375-1.058L0 2.093V1.66h5.774l4.46 9.796 3.926-9.796H19.59v.433l-1.703 1.635c-.147.112-.221.294-.191.476v11.96c-.03.182.044.364.191.476l1.66 1.635v.433h-8.352v-.433l1.722-1.673c.169-.169.169-.218.169-.476V6.047l-4.785 12.16h-.645L3.234 6.047v8.125c-.047.34.067.682.298.927l2.24 2.72v.433H0v-.433l2.24-2.72c.23-.245.334-.587.186-.927V4.973z" fill="#f1f1f1" />
                  </svg>
                </a>
              </div>
              <Link to={"/contact"} className="btn btn-outline-light px-4 py-2 fw-bold">Contact Us</Link>
            </div>
          )}
        </div>
        {showMobileNavbar && <MobileNav {...{ toggleNavbar }} />}
      </div>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <g id="Ellipse_294" data-name="Ellipse 294" fill="none" stroke="#22324b" strokeWidth="3">
              <circle cx="6" cy="6" r="6" stroke="none" />
              <circle cx="6" cy="6" r="4.5" fill="none" />
            </g>
          </svg>
          <hr />
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <g id="Ellipse_294" data-name="Ellipse 294" fill="none" stroke="#22324b" strokeWidth="3">
              <circle cx="6" cy="6" r="6" stroke="none" />
              <circle cx="6" cy="6" r="4.5" fill="none" />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
}