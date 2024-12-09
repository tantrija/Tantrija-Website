import React, { useEffect, useState } from 'react';
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";
import { Link } from 'react-router-dom';

// Import images
import platformHeroImage from "../../../assets/caseStudies/MlmImage1.png";
import solutionsVisualization from "../../../assets/caseStudies/MlmImage2.png";
import nodeJS from "../../../assets/unity-node-js.png";
import mongoDB from "../../../assets/unity-mongo-db.png";
import figma from "../../../assets/unity-figma.png";
import reactJS from "../../../assets/unity-react-js.png";
import blockchainIcon from "../../../assets/ethereum.png";

export default function MLMPlatform() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [activeFeature, setActiveFeature] = useState(0);

    const techIcons = [
        { 
            img: blockchainIcon, 
            title: "Ethereum", 
            description: "Decentralized Security Network",
            gradient: "purple-500, indigo-600"
        },
        { 
            img: nodeJS, 
            title: "Node.js", 
            description: "Scalable Backend Infrastructure",
            gradient: "green-400, blue-500"
        },
        { 
            img: mongoDB, 
            title: "MongoDB", 
            description: "Flexible Database Solution",
            gradient: "green-200, green-500"
        },
        { 
            img: reactJS, 
            title: "React JS", 
            description: "Dynamic UI Framework",
            gradient: "cyan-400, blue-600"
        },
        { 
            img: figma, 
            title: "Figma", 
            description: "Design & Prototyping",
            gradient: "pink-500, red-500"
        }
    ];
    

    const featureData = [
        {
            title: "Network Intelligence Platform",
            shortDescription: "AI-Powered Network Optimization",
            icon: "🌐",
            description: "A revolutionary platform that leverages artificial intelligence to transform multi-level marketing network management, providing unprecedented insights and strategic capabilities.",
            benefits: [
                "Advanced AI-driven network mapping",
                "Predictive performance analytics",
                "Real-time relationship visualization",
                "Intelligent member potential scoring"
            ]
        },
        {
            title: "Adaptive Compensation Engine",
            shortDescription: "Intelligent Reward Mechanism",
            icon: "💰",
            description: "A cutting-edge compensation system that dynamically calculates and distributes rewards with blockchain-level transparency and precision, eliminating traditional payout complexities.",
            benefits: [
                "Multi-dimensional commission structures",
                "Instant cryptocurrency payouts",
                "Zero-fee blockchain transactions",
                "Real-time earnings tracking"
            ]
        },
        {
            title: "Holistic Member Ecosystem",
            shortDescription: "Empowerment Through Technology",
            icon: "🚀",
            description: "A comprehensive platform that provides members with powerful tools for personal growth, skill development, and seamless network collaboration, transforming how multi-level marketing operates.",
            benefits: [
                "Intuitive onboarding experience",
                "Personalized performance dashboards",
                "Integrated learning management",
                "Community collaboration tools"
            ]
        }
    ];

    return (
        <div className="text-white">
            <Header />
            {/* Gradient Overlay Hero Section */}
            <div className="position-relative overflow-hidden">
                <div className="container py-5 position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-6 position-relative" style={{zIndex:3}}>
                            <div className="bg-dark-transparent p-5 rounded-4">
                                <span className="badge bg-warning text-dark p-1"> Goldz Networking</span>
                                <h1 className="display-4 text-warning mb-4 mt-3">
                                    Crypto MLM Networking Platform
                                </h1>
                                <p className="lead text-light mb-4">
                                    Transform your multi-level marketing strategy with AI-driven insights, 
                                    blockchain transparency, and intelligent network optimization.
                                </p>
                                <div className="d-flex gap-3">
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
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img 
                                    src={platformHeroImage} 
                                    alt="MLM Network Intelligence"
                                    className="img-fluid rounded-4 shadow-lg position-relative z-3"
                                    style={{ 
                                        transform: 'perspective(1000px) rotateY(-10deg)',
                                        filter: 'brightness(0.8) contrast(1.2)'
                                    }}
                                />
                                <div 
                                    className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark opacity-75 rounded-4"
                                    style={{
                                        transform: 'perspective(1000px) rotateY(-10deg)',
                                        zIndex: 2
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Animated Background Gradient */}
                <div 
                    className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-animated"
                    style={{
                        opacity: 0.3,
                        zIndex: 1,
                        background: 'linear-gradient(45deg, rgba(255,194,0,0.1), rgba(19,29,54,0.5))'
                    }}
                ></div>
            </div>

            {/* Features Carousel Section */}
            <div className="container py-5">
                <h2 className="text-center text-warning mb-5">Platform Capabilities</h2>
                <div className="row">
                    {featureData.map((feature, index) => (
                        <div 
                            key={index} 
                            className={`col-md-4 mb-4 ${activeFeature === index ? 'scale-105' : ''}`}
                            onClick={() => setActiveFeature(index)}
                        >
                            <div 
                                className={`card bg-dark-transparent p-4 h-100 border-${activeFeature === index ? 'warning' : 'secondary'}`}
                                // style={{
                                //     borderWidth: '2px',
                                //     transition: 'all 0.3s ease',
                                //     transform: activeFeature === index ? 'scale(1.05)' : 'scale(1)'
                                // }}
                            >
                                <div className="d-flex align-items-center mb-3">
                                    {/* <div 
                                        className="rounded-circle bg-warning text-dark p-3 me-3 d-flex align-items-center justify-content-center"
                                        style={{ width: '60px', height: '60px' }}
                                    >
                                        <span className="h3 m-0">{feature.icon}</span>
                                    </div> */}
                                    <div>
                                        <h4 className="text-warning mb-2">{feature.title}</h4>
                                        <small className="text-muted">{feature.shortDescription}</small>
                                    </div>
                                </div>
                                <p className="text-light mb-3">{feature.description}</p>
                                <ul className="list-unstyled">
                                    {feature.benefits.map((benefit, benefitIndex) => (
                                        <li key={benefitIndex} className="mb-2">
                                            <span className="text-warning me-2">▶</span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technology Stack with Gradient Effects */}
            <div className="container py-5">
                <h2 className="text-center text-warning mb-5">Technology Architecture</h2>
                <div className="row g-4 d-flex justify-content-center">
                    {techIcons.map((tech, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-2">
                            <div 
                                className={`card p-4 text-center h-100 overflow-hidden`}
                                style={{
                                    backgroundColor: `rgba(0,0,0,0.3)`
                                }}
                            >
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay opacity-75"></div>
                                <div className="position-relative z-3">
                                    <img
                                        src={tech.img}
                                        alt={tech.title}
                                        className="img-fluid mb-3 tech-icon"
                                        style={{ maxHeight: '60px', objectFit: 'contain' }}
                                    />
                                    <h5 className="text-white mb-2">{tech.title}</h5>
                                    <p className="small text-white">{tech.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA with Unique Design */}
            <div className="bg-warning text-dark py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h2 className="display-5 mb-4">
                                Transform Your Network Marketing Strategy
                            </h2>
                            <p className="lead mb-4">
                                Unlock the power of intelligent network management with our revolutionary platform.
                            </p>
                            <div className="d-flex gap-3">
                                {/* <Link 
                                    to="/contact" 
                                    className="btn btn-dark btn-lg"
                                >
                                    Start Your Project
                                </Link> */}
                                <Link 
                                    to="/contact" 
                                    className="btn btn-outline-dark btn-lg"
                                >
                                    Start Your Project Today
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img 
                                src={solutionsVisualization} 
                                alt="MLM Solutions Visualization"
                                className="img-fluid rounded-4 shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}