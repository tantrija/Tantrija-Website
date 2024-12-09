import {Link} from "react-router-dom"
import ArrowRight from "../../assets/arrow-right.svg"
import SchoolManagementFI from '../../assets/caseStudies/SchoolManagementFI.png';
import CryptoBettingFI2 from '../../assets/caseStudies/CryptoBettingFI2.png';
import DatingFI from '../../assets/caseStudies/DatingFI.png';
import { useEffect } from "react";

export default function casestudies(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
            <div className="bg-circle-left mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">Experience Our Success</p>
                            <hr className="border-white mt-1 mx-auto hr-x-small" />
                            <h4 className="text-warning text-uppercase mb-4">our Case Studies</h4>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-3">
                                <div className="col-lg-4 mb-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="500" data-aos-once="true">
                                    <div className="card bg-warning p-0 case-study-card">
                                        <img src={SchoolManagementFI} className="img-fluid" alt="hire icon" />
                                        <div className="p-4">
                                        <h6 className="fw-bold text-uppercase text-dark text-one-line">School Management System</h6>
                                        <p className="text-dark text-four-lines">An all-in-one school management solution streamlining administrative processes. Features include attendance tracking, fee collection, and performance reporting. Built to enhance efficiency and promote seamless communication between teachers, students, and parents.</p>
                                        <a href="#" className="d-flex justify-content-end mt-3">
                                            <img src={ArrowRight} alt="link" />
                                        </a>
                                        </div>
                                        <Link to="/casestudies/school-management-system" className="card-link"></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="1000" data-aos-once="true">
                                    <div className="card bg-warning p-0 case-study-card">
                                        <img src={CryptoBettingFI2} className="img-fluid" alt="hire icon" />
                                        <div className="p-4">
                                        <h6 className="fw-bold text-uppercase text-dark text-one-line">Crypto Betting Platform</h6>
                                        <p className="text-dark text-four-lines">A state-of-the-art crypto betting platform offering secure and transparent wagering. This solution features blockchain-powered transactions, multi-cryptocurrency support, and live updates for seamless user experiences. Designed for scalability and optimized for the competitive betting market.</p>
                                        <a href="#" className="d-flex justify-content-end mt-3">
                                            <img src={ArrowRight} alt="link" />
                                        </a>
                                        </div>
                                        <Link to="/casestudies/crypto-betting-platform" className="card-link"></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="1500" data-aos-once="true">
                                    <div className="card bg-warning p-0 case-study-card">
                                        <img src={DatingFI} className="img-fluid" alt="hire icon" />
                                        <div className="p-4">
                                        <h6 className="fw-bold text-uppercase text-dark text-one-line">Modern Dating App</h6>
                                        <p className="text-dark text-four-lines">A modern dating app designed to connect people meaningfully. It includes video profiles, real-time chat, and advanced search filters to enhance user interaction. With robust security and a smooth interface, the app is crafted for global usability and growth.</p>
                                        <a href="#" className="d-flex justify-content-end mt-3">
                                            <img src={ArrowRight} alt="link" />
                                        </a>
                                        </div>
                                        <Link to="/casestudies/dating-app" className="card-link"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}