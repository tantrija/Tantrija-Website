import {Link} from "react-router-dom"
import ArrowRight from "../../assets/arrow-right.svg"
import CaseStudy1 from "../../assets/case-study-1.jpg"
import CaseStudy2 from "../../assets/case-study-2.jpg"
import CaseStudy3 from "../../assets/case-study-3.jpg"

export default function casestudies(){
    return(
            <div className="bg-circle-left mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">Experience Our Success</p>
                            <hr className="border-white mt-1 mx-auto hr-x-small" />
                            <h4 className="text-warning text-uppercase">our Case Studies</h4>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-3">
                                <div className="col-lg-4 mb-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="500" data-aos-once="true">
                                    <div className="card bg-warning p-0 case-study-card">
                                        <img src={CaseStudy1} className="img-fluid" alt="hire icon" />
                                        <div className="p-4">
                                        <h6 className="fw-bold text-uppercase text-dark text-one-line">NFT Marketplace</h6>
                                        <p className="text-dark text-four-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" className="d-flex justify-content-end mt-3">
                                            <img src={ArrowRight} alt="link" />
                                        </a>
                                        </div>
                                        <Link to="/CaseStudiesInner" className="card-link"></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="1000" data-aos-once="true">
                                    <div className="card bg-warning p-0 case-study-card">
                                        <img src={CaseStudy2} className="img-fluid" alt="hire icon" />
                                        <div className="p-4">
                                        <h6 className="fw-bold text-uppercase text-dark text-one-line">Digital Banking App</h6>
                                        <p className="text-dark text-four-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" className="d-flex justify-content-end mt-3">
                                            <img src={ArrowRight} alt="link" />
                                        </a>
                                        </div>
                                        <Link to="/CaseStudiesInner" className="card-link"></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="1500" data-aos-once="true">
                                    <div className="card bg-warning p-0 case-study-card">
                                        <img src={CaseStudy3} className="img-fluid" alt="hire icon" />
                                        <div className="p-4">
                                        <h6 className="fw-bold text-uppercase text-dark text-one-line">Lottery & Raffles Platform</h6>
                                        <p className="text-dark text-four-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" className="d-flex justify-content-end mt-3">
                                            <img src={ArrowRight} alt="link" />
                                        </a>
                                        </div>
                                        <Link to="/CaseStudiesInner" className="card-link"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}