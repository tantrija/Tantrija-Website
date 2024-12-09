import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";

// Import placeholder images (you'll want to replace these with actual images)
import ecommercePlatform from "../../../assets/caseStudies/EcommerceImage1.png";
import clientReqImage from "../../../assets/caseStudies/EcommerceImage3.png";
import ourSolutionsImage from "../../../assets/caseStudies/EcommerceImage2.png";
import conclusionImage from "../../../assets/caseStudies/EcommerceImage4.png";
import checkCircleIcon from "../../../assets/check-circle-icon.svg";

const clientRequirements = [
    "Develop a scalable and responsive e-commerce platform that supports high traffic and seamless user experience.",
    "Implement advanced personalization and recommendation algorithms to enhance user engagement.",
    "Create a robust inventory management system with real-time stock tracking and automated restocking.",
    "Ensure top-tier security for payment processing and user data protection.",
];

const keyFeatures = [
    "AI-Powered Personalization: Leverage machine learning to deliver hyper-personalized product recommendations and shopping experiences.",
    "Omnichannel Commerce: Provide a unified shopping experience across web, mobile, and potential future platforms like AR/VR shopping.",
    "Advanced Analytics Dashboard: Offer comprehensive insights into user behavior, sales trends, and inventory management.",
    "Flexible Payment Ecosystem: Support multiple payment methods, including digital wallets, cryptocurrencies, and traditional payment gateways.",
];

const results = [
    "Achieved a 55% increase in conversion rates through personalized recommendations.",
    "Reduced cart abandonment by 40% with streamlined checkout and personalized incentives.",
    "Improved operational efficiency with automated inventory and predictive stock management.",
    "Enhanced customer retention through a 360-degree personalized shopping experience.",
];

const futureEnhancements = [
    "Augmented Reality Shopping: Implement virtual try-on and 3D product visualization technologies.",
    "Voice Commerce Integration: Enable shopping through voice assistants and smart devices.",
    "Sustainable Commerce Features: Track and highlight product sustainability metrics and carbon footprint.",
    "Blockchain Inventory Tracking: Use blockchain for transparent and tamper-proof supply chain management.",
];

export default function EcommercePlatformCaseStudy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header />

            {/* Hero Section */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="text-warning text-uppercase mb-3">INTELLIGENT <br />E-commerce Platform</h1>
                        <p className="text-white">
                            Transform your online retail strategy with our cutting-edge e-commerce solution. Designed to deliver personalized experiences, advanced analytics, and seamless user journeys that drive conversion and customer loyalty.
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
                            src={ecommercePlatform}
                            className="img-fluid rounded shadow"
                            alt="E-commerce Platform"
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
                                src={clientReqImage}
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
                                Our team crafted an intelligent e-commerce platform that goes beyond traditional online shopping. By integrating advanced AI, comprehensive analytics, and a user-centric design, we created a solution that adapts and grows with your business.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src={ourSolutionsImage}
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
                        <div className="col-lg-3 mb-4" key={index}>
                            <div className="card bg-dark-grey p-4 rounded shadow h-100">
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
                    src={conclusionImage}
                    className="img-fluid rounded shadow mb-4"
                    alt="E-commerce Platform Success"
                />
                <h4 className="text-warning text-uppercase mb-3">Conclusion</h4>
                <p className="container text-white">
                    Our E-commerce Platform represents the future of online retail – intelligent, adaptive, and customer-centric. By leveraging cutting-edge technologies and data-driven strategies, we provide a solution that not only meets current market demands but anticipates future trends.
                </p>
                <Link
                    to="/contact"
                    className="btn btn-outline-light btn-lg mt-3"
                >
                    Discuss Your E-commerce Strategy
                </Link>
            </div>

            <Footer />
        </>
    );
}