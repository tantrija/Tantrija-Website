import React from "react";
import bettingPlatform from "../../../assets/caseStudies/BettingImage1.png";
import clientReq from "../../../assets/caseStudies/BettingImage2.png";
import checkCircleIcon from "../../../assets/check-circle-icon.svg";
import ourSolutions from "../../../assets/caseStudies/BettingImage4.png";
import BettingImage3 from "../../../assets/caseStudies/BettingImage3.png";
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";
import { Link } from "react-router-dom";

const clientRequirements = [
    "Ensure users receive live updates on betting odds for ongoing matches to make informed decisions.",
    "Provide a safe, seamless payment experience with robust encryption and fraud detection mechanisms.",
    "Design an intuitive interface for effortless navigation, ensuring an engaging user experience for all age groups.",
    "Deliver seamless performance and functionality on both web and mobile platforms to maximize user reach.",
];

const keyFeatures = [
    "Live Betting: Empower users to place bets on ongoing matches with instant updates, creating a dynamic and engaging betting experience.",
    "Secure Transactions: Leverage blockchain technology to ensure secure, transparent, and tamper-proof payment processing.",
    "Advanced Data Analytics: Offer actionable insights through comprehensive analytics dashboards for both users and administrators.",
    "Cross-platform Support: Provide a unified experience with smooth functionality across mobile and web platforms, catering to diverse user preferences.",
];

const results = [
    "Achieved a 40% boost in user engagement within the first month of launch.",
    "Reduced fraudulent activities significantly through blockchain-based secure transactions.",
    "Improved user retention by delivering a feature-rich, seamless betting experience.",
    "Boosted revenue by introducing personalized betting suggestions tailored to user preferences and behavior.",
];

const futureEnhancements = [
    "Gamification: Implement rewards and loyalty programs to enhance user engagement and create a sense of community.",
    "AI Predictions: Integrate AI-powered match outcome predictions to provide users with data-driven betting assistance.",
    "Social Features: Enable community interaction with features like betting pools and real-time chat, fostering user collaboration and engagement.",
];

export default function BettingPlatformCaseStudy() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="text-warning text-uppercase mb-3">CRYPTO <br />Betting Platform</h1>
                        <p className="text-white">
                            Dive into the world of competitive betting with our cutting-edge platform. Designed to deliver unmatched security, real-time updates, and a user-centric experience, this platform sets the standard for modern betting solutions.
                        </p>
                        <div className="d-flex gap-3 mt-5">
                            <Link
                                to="/contact"
                                className="btn btn-outline-light btn-lg"
                            >
                                Get Quotation
                            </Link>
                            <Link
                                to="/contact"
                                className="btn btn-warning btn-lg"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end">
                        <img
                            src={bettingPlatform}
                            className="img-fluid rounded shadow"
                            alt="Betting Platform"
                        />
                    </div>
                </div>
            </div>

            {/* Client Requirements */}
            <div className="bg-dark-grey py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <img
                                src={clientReq}
                                className="img-fluid rounded shadow"
                                alt="Client Requirements"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h4 className="text-warning text-uppercase mb-5">Client Requirements</h4>
                            <ul className="list-unstyled mt-3">
                                {clientRequirements.map((requirement, index) => (
                                    <li className="text-white d-flex align-items-start mb-3" key={index}>
                                        <img
                                            src={checkCircleIcon}
                                            alt="Check"
                                            className="me-3"
                                            style={{ width: "24px" }}
                                        />
                                        {requirement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features */}
            <div className="container py-5">
                <h4 className="text-warning text-uppercase text-center mb-4">Key Features</h4>
                <div className="row">
                    {keyFeatures.map((feature, index) => (
                        <div className="col-lg-6 mb-4" key={index}>
                            <div className="card bg-dark-grey p-4 rounded shadow">
                                <h5 className="text-warning">{feature.split(":")[0]}</h5>
                                <p className="text-white mt-3">{feature.split(":")[1]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Solutions */}
            <div className="bg-dark-grey py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="text-warning text-uppercase mb-3">Our Solutions</h4>
                            <p className="text-white">
                                Our team crafted a betting platform that ensures seamless functionality while prioritizing user security and engagement. From blockchain integration to advanced analytics, we created a feature-rich platform tailored to meet client needs.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src={ourSolutions}
                                className="img-fluid rounded shadow"
                                alt="Our Solutions"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="container py-5">
                <h4 className="text-warning text-uppercase text-center mb-4">Results</h4>
                <div className="row">
                    {results.map((result, index) => (
                        <div className="col-lg-6 mb-4" key={index}>
                            <div className="card bg-dark-grey p-4 rounded shadow">
                                <p className="text-white">{result}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Future Enhancements */}
            <div className="container py-5">
                <h4 className="text-warning text-uppercase text-center mb-4">Future Enhancements</h4>
                <div className="row">
                    {futureEnhancements.map((enhancement, index) => (
                        <div className="col-lg-4 mb-4" key={index}>
                            <div className="card bg-dark-grey p-4 rounded shadow">
                                <h5 className="text-warning">{enhancement.split(":")[0]}</h5>
                                <p className="text-white mt-3">{enhancement.split(":")[1]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conclusion */}
            <div className="bg-dark-grey py-5 text-center">
                <img
                    src={BettingImage3}
                    className="img-fluid rounded shadow mb-4"
                    alt="Betting Platform Success"
                />
                <h4 className="text-warning text-uppercase mb-3">Conclusion</h4>
                <p className="container text-white">
                    The Betting Platform redefines the user experience with its innovative features and secure operations. As the industry evolves, our solutions ensure scalability and adaptability, setting the stage for future success in the competitive betting landscape.
                </p>
                <Link
                    to="/contact"
                    className="btn btn-outline-light btn-lg mt-3"
                >
                    Contact us
                </Link>
            </div>

            <Footer />
        </>
    );
}
