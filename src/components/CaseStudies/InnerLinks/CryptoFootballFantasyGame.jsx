import React, { useState } from 'react';
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";

// Import images (using placeholder imports)
import platformHeroImage from "../../../assets/caseStudies/FantasyImage2.png";
import solutionsVisualization from "../../../assets/caseStudies/FantasyImage3.png";
import checkCircleIcon from "../../../assets/check-circle-icon.svg";
import { Link } from 'react-router-dom';
import nodeJS from "../../../assets/unity-node-js.png";
import mongoDB from "../../../assets/unity-mongo-db.png";
import figma from "../../../assets/unity-figma.png";
import reactJS from "../../../assets/unity-react-js.png";
import binance from "../../../assets/biance.svg";

// Technology Stack Icons
const techIcons = [
    { img: binance, title: "Binance", description: "Leading cryptocurrency exchange and blockchain ecosystem" },
    { img: nodeJS, title: "Node.js", description: "JavaScript runtime for building scalable backend applications" },
    { img: mongoDB, title: "MongoDB", description: "NoSQL database for modern applications with flexible schemas" },
    { img: reactJS, title: "React JS", description: "JavaScript library for building interactive user interfaces" },
    { img: figma, title: "Figma", description: "Collaborative tool for UI/UX design and prototyping" }
];

// Detailed Feature Sections
const featureData = [
    {
        title: "Dynamic NFT Player Cards",
        shortDescription: "Transforming sports collectibles in real-time.",
        description: "Revolutionary blockchain-powered digital collectibles that transform dynamically based on athlete performance, offering a groundbreaking way to engage with sports memorabilia. These NFTs provide real-time performance updates, provable rarity, and seamless tradability across global marketplaces. For example, a soccer player's NFT may upgrade after scoring a hat trick, increasing its rarity and value.",
        benefits: [
            "Real-time performance tracking and updates",
            "Enhanced fan engagement through live stats integration",
            "Provable rarity and blockchain transparency",
            "Tradeable across global marketplaces",
            "Customizable metadata reflecting achievements",
            "Seamless integration with existing fan platforms",
            "Unlockable perks like exclusive content and events"
        ]
    },
    {
        title: "Cryptographic Reward Mechanism",
        shortDescription: "Transparent, instant rewards for athletes.",
        description: "A smart contract-powered reward ecosystem enabling direct, tamper-proof payouts to athletes, bypassing traditional intermediaries. This system leverages blockchain technology to ensure instant crypto token payouts, fully verifiable transaction history, and zero intermediary fees. For example, an athlete could instantly receive performance bonuses after a match, eliminating delays caused by manual processes.",
        benefits: [
            "Instant crypto token payouts without delays",
            "Verifiable and tamper-proof transaction history",
            "Zero intermediary fees for transparent rewards",
            "Smart contract-based automated payment distribution",
            "Support for multiple cryptocurrencies",
            "Direct athlete empowerment with no middlemen",
            "Integration with sponsorship reward programs"
        ]
    },
    {
        title: "Advanced Analytics Engine",
        shortDescription: "AI insights for strategic decisions.",
        description: "An AI-powered platform that transforms raw performance data into actionable insights using machine learning and predictive modeling. This tool empowers teams and athletes to optimize strategies and performance. For example, it could predict the potential of a basketball player's shooting performance in specific game conditions, helping coaches plan more effectively.",
        benefits: [
            "Predictive player performance models for strategic decisions",
            "Comprehensive statistical analysis in real-time",
            "Machine learning-driven recommendations for coaches and teams",
            "Performance-based recruitment suggestions",
            "Visualization tools for detailed analytics",
            "AI-powered anomaly detection in player metrics",
            "Actionable insights to maximize team success"
        ]
    }
];

// Competitive Landscape Comparison
const competitiveComparison = [
    {
        feature: "Player Performance Tracking",
        GoalChain: "Real-time blockchain-verified data",
        Traditional: "Delayed, centralized updates"
    },
    {
        feature: "Reward Mechanism",
        GoalChain: "Instant crypto token distribution",
        Traditional: "Manual, delayed payouts"
    },
    {
        feature: "Asset Ownership",
        GoalChain: "True digital ownership via NFTs",
        Traditional: "Limited, platform-locked assets"
    }
];

export default function GoalChainPlatform() {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <div className="text-white">
            <Header />

            {/* Hero Section */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="p-4 rounded-1" style={{ backgroundColor: "rgba(19, 29, 54, 0.6)" }}>
                            <h1 className="text-warning mb-3" style={{ fontSize: 35 }}>GOALCHAIN</h1>
                            <h2 className="text-muted mb-4">Crypto Football Fantasy Ecosystem</h2>
                            <p className="lead mb-4 text-white">
                                Revolutionizing fantasy sports through blockchain technology,
                                GoalChain transforms passionate football fans into strategic
                                digital managers with real economic opportunities.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3">
                                <Link to={'/contact'} className="btn btn-outline-light flex-grow-1" >Get a Demo</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end">
                        <div className="position-relative">
                            <img
                                src={platformHeroImage}
                                alt="GoalChain Platform"
                                className="img-fluid rounded-4 shadow-lg"
                            />
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay rounded-4"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Showcase */}
            <div className='bg-dark-grey'>
                <div className="container py-5">
                    <div className="row">
                        <h3 className="text-warning mb-4 text-center">Platform Features</h3>
                        <div className="col-lg-11 d-flex">
                            {featureData.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`p-3 col-md-4 mx-3`}
                                    onClick={() => setActiveFeature(index)}
                                    style={{
                                        cursor: 'pointer',
                                        transform: activeFeature === index ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: activeFeature === index ? '#ffc200' : 'rgba(0,0,0, 0.2)',
                                        marginBottom: activeFeature === index ? 30 : 20
                                    }}
                                >
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h6 className="mb-1" style={{ color: activeFeature === index ? "#000" : "#fff" }}>{feature.title}</h6>
                                            <p className="small text-muted mb-0">{feature.shortDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-12">
                            <div className="p-4 rounded-1 mx-5" style={{ backgroundColor: 'rgba(255,255,255, 0.02)' }}>
                                <h4 className="text-warning mb-4 d-flex align-items-center" style={{ fontSize: 24 }}>
                                    {featureData[activeFeature].title}
                                </h4>
                                <p className="mb-4 text-light">{featureData[activeFeature].description}</p>
                                <div className="row">
                                    {featureData[activeFeature].benefits.map((benefit, index) => (
                                        <div key={index} className="col-md-4 mb-2">
                                            <div className="d-flex align-items-center">
                                                <i className="text-warning me-2">★</i>
                                                <span style={{ lineHeight: 1.3 }}>{benefit}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Competitive Landscape */}
            <div className="container py-5">
                <h3 className="text-center text-warning mb-5">Why GoalChain Differs</h3>
                <div className="table-responsive">
                    <table className="table theme-table">
                        <thead>
                            <tr>
                                <th className='p-3 py-4 bg-warning text-dark' style={{ fontSize: 20 }}>Feature</th>
                                <th className='p-3 py-4 bg-warning text-dark' style={{ fontSize: 20 }}>GoalChain</th>
                                <th className='p-3 py-4 bg-warning text-dark' style={{ fontSize: 20 }}>Traditional Platforms</th>
                            </tr>
                        </thead>
                        <tbody>
                            {competitiveComparison.map((comparison, index) => (
                                <tr key={index}>
                                    <td style={{ fontSize: 16 }} className='p-3'>{comparison.feature}</td>
                                    <td style={{ fontSize: 16 }} className="text-success fw-bold p-3">{comparison.GoalChain}</td>
                                    <td style={{ fontSize: 16 }} className="text-danger p-3">{comparison.Traditional}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Technology Stack */}
            <div className="container py-5 text-center">
                <h3 className="text-warning mb-5">Technology Architecture</h3>
                <div className="row g-4 justify-content-center">
                    {techIcons.map((tech, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-2">
                            <div className="bg-dark-grey p-4 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center transition hover-lift">
                                <img
                                    src={tech.img}
                                    alt={tech.title}
                                    className="img-fluid mb-3 tech-icon"
                                    style={{ maxHeight: '80px', objectFit: 'contain' }}
                                />
                                <h6 className="text-warning mb-2">{tech.title}</h6>
                                <small className="text-muted text-center">{tech.description}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final Call to Action */}
            <div className="bg-warning text-dark py-5 text-center">
                <div className="container">
                    <img className='mb-4' src={solutionsVisualization} />
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="display-6 mb-3">Empower Your Fantasy Sports Vision</h2>
                            <p className="lead mb-4">
                                Partner with Tantrija Enterprises to build cutting-edge fantasy applications that captivate and engage.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <Link to='/contact' className="btn btn-theme btn-lg">Start Your Project</Link>
                                {/* <button className="btn btn-theme btn-lg">Explore Our Services</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}