import { Link } from "react-router-dom"
import Logo from "../../assets/tantrija-logo.svg";

export default function Footer() {
    return (
        <footer className="bg-footer pt-5">
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-lg-3 mb-3">
                        <Link to={"/"} aria-label="Tantrija Home">
                            <img src={Logo} alt="Tantrija logo" width="210" height="70" />
                        </Link>
                        <p className="text-muted my-3">
                            Tantrija is a leading software development company focused on delivering innovative solutions tailored to our clients' needs. Our team of skilled professionals specializes in mobile and web development, database management, content management systems, infrastructure and DevOps, blockchain, and game development.
                        </p>
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <a href="https://www.linkedin.com/company/tantrija/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Tantrija LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20.432" height="19.525" viewBox="0 0 20.432 19.525">
                                    <path id="b5783c601e16032733df8073caacab72" d="M0,7.268A2.124,2.124,0,0,1,.69,5.641,2.532,2.532,0,0,1,2.485,5a2.457,2.457,0,0,1,1.755.631,2.225,2.225,0,0,1,.69,1.7A2.077,2.077,0,0,1,4.26,8.905a2.537,2.537,0,0,1-1.814.651h-.02A2.414,2.414,0,0,1,.671,8.905,2.186,2.186,0,0,1,0,7.268ZM.256,24.525V11.351H4.635V24.525Zm6.8,0h4.378V17.169a2.568,2.568,0,0,1,1-2.2,2.143,2.143,0,0,1,1.41-.463q2.209,0,2.209,2.978v7.041h4.378V16.972a6.348,6.348,0,0,0-1.381-4.428A4.709,4.709,0,0,0,15.4,11.035a4.476,4.476,0,0,0-3.964,2.189v.039h-.02l.02-.039V11.351H7.061q.039.631.039,3.925T7.061,24.525Z" transform="translate(0 -5)" fill="#FFC200" />
                                </svg>
                            </a>
                            <a href="https://x.com/Tantrijadotcom" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Tantrija Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20.694" height="18.706" viewBox="0 0 20.694 18.706">
                                    <g id="Group_49" data-name="Group 49" transform="translate(-84.064 -100)">
                                        <path id="Path_33" data-name="Path 33" d="M100.362,100h3.173L96.6,107.924l8.156,10.782H98.373l-5-6.539-5.723,6.539H84.473l7.415-8.475L84.064,100h6.548l4.521,5.977Zm-1.114,16.806h1.758L89.657,101.8H87.77Z" fill="#FFC200" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3 ps-lg-5">
                        <div className="ps-lg-5">
                            <h6 className="text-warning text-uppercase mb-3">Services</h6>
                            <ul className="list-unstyled">
                                <li className="mb-3"><a href="/blockchain" className="footer-link text-uppercase">Blockchain</a></li>
                                <li className="mb-3"><a href="/game-development" className="footer-link text-uppercase">Game Development</a></li>
                                <li className="mb-3"><a href="/mobile-development" className="footer-link text-uppercase">Web App Development</a></li>
                                <li className="mb-3"><a href="/web-development" className="footer-link text-uppercase">Mobile Application Development</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3 ps-lg-5">
                        <h6 className="text-warning text-uppercase mb-3">Useful Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-3"><a href="/contact" className="footer-link text-uppercase">Contact</a></li>
                            <li className="mb-3"><a href="/privacy-policy" className="footer-link text-uppercase">Privacy</a></li>
                            <li className="mb-3"><a href="/terms-and-conditions" className="footer-link text-uppercase">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <h6 className="text-warning text-uppercase mb-3">Contact Info</h6>
                        <p className="text-muted mb-2 mt-0">Email: <a href="mailto:admin@tantrija.com">admin@tantrija.com</a></p>
                        <p className="text-muted mb-2 mt-0">Contact Number: <a href="tel:+919717439147">+91 9717439147</a></p>
                        <p className="text-muted mb-2 mt-0">Whatsapp Number: <a target="_blank" rel="noopener noreferrer" href="https://wa.me/7420969224">+91 7420969224</a></p>
                        <p className="text-muted">E-1804, R9 - Life Republic, Pune,<br />Maharastra, India</p>
                    </div>
                    <div className="col-lg-12 my-4">
                        <hr />
                        <p className="text-muted text-center mt-4">Copyright © {new Date().getFullYear()} Tantrija. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}