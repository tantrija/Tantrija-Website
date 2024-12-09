import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";

// Placeholder for actual images
import heroGraphic from "../../../assets/caseStudies/LaunchpadImage1.png";
import securityImage from "../../../assets/caseStudies/LaunchpadImage2.png";
import innovationImage from "../../../assets/caseStudies/LaunchpadImage3.png";
import networkImage from "../../../assets/caseStudies/LaunchpadImage4.png";
import checkCircleIcon from "../../../assets/check-circle-icon.svg";

const technologicalCapabilities = [
    {
        title: "Decentralized Governance",
        description: "Implement multi-stage project evaluation through transparent, community-driven decision-making processes.",
        icon: "🔗"
    },
    {
        title: "AI Security Protocols",
        description: "Advanced machine learning algorithms for real-time vulnerability detection and mitigation.",
        icon: "🛡️"
    },
    {
        title: "Cross-Chain Integration",
        description: "Seamless interoperability across multiple blockchain networks and token ecosystems.",
        icon: "🌐"
    },
    {
        title: "Dynamic Risk Management",
        description: "Predictive analytics and adaptive risk scoring for blockchain project viability.",
        icon: "📊"
    }
];

const platformMetrics = [
    {
        value: "50+",
        label: "Successful Project Launches",
        detail: "Zero security breaches, 95% success rate"
    },
    {
        value: "$100M",
        label: "Total Investment Attracted",
        detail: "Verified and secured investments"
    },
    {
        value: "2 Weeks",
        label: "Average Launch Cycle",
        detail: "Reduced from traditional 3-month process"
    },
    {
        value: "10+",
        label: "Blockchain Networks",
        detail: "Comprehensive multi-chain support"
    }
];

export default function AdvancedLaunchpad() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [activeTab, setActiveTab] = useState('features');

    return (
        <>
            <Header />

            {/* Hero Section */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="text-warning text-uppercase mb-3">Smart Contract <br />Launchpad</h1>
                        <p className="text-white">
                            Revolutionizing blockchain project deployment through intelligent, secure, and transparent ecosystem management.
                        </p>
                        <div className="d-flex gap-3 mt-5">
                            <Link
                                to="/contact"
                                className="btn btn-outline-light btn-lg"
                            >
                                Launch Your Project
                            </Link>
                            <Link
                                to="/contact"
                                className="btn btn-warning btn-lg"
                            >
                                View Solutions
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end">
                        <img
                            src={heroGraphic}
                            className="img-fluid rounded shadow"
                            alt="Blockchain Launchpad"
                        />
                    </div>
                </div>
            </div>

            {/* Technological Capabilities */}
            <div className="container py-5">
                <h4 className="text-warning text-uppercase text-center mb-4">Comprehensive Technological Framework</h4>
                <div className="row">
                    {technologicalCapabilities.map((capability, index) => (
                        <div className="col-lg-3 mb-4" key={index}>
                            <div className="card bg-dark-grey p-4 rounded shadow h-100 text-center">
                                <div className="mb-3 display-4">{capability.icon}</div>
                                <h5 className="text-warning">{capability.title}</h5>
                                <p className="text-white mt-3">{capability.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Platform Metrics */}
            <div className="bg-dark-grey py-5">
                <div className="container">
                    <div className="row">
                        {platformMetrics.map((metric, index) => (
                            <div className="col-lg-3 col-md-6 text-center" key={index}>
                                <h2 className="text-warning">{metric.value}</h2>
                                <h5 className="text-white">{metric.label}</h5>
                                <p className="text-muted">{metric.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detailed Insights Section */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <div className="btn-group" role="group">
                        {['features', 'security', 'innovation'].map((tab) => (
                            <button
                                key={tab}
                                className={`btn mx-2 ${activeTab === tab ? 'btn-warning' : 'btn-outline-light'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">

                        {activeTab === 'features' && (
                            <>
                                <h4 className="text-warning text-uppercase mb-3">Platform Features</h4>
                                <p className="text-white mb-3" style={{lineHeight: 1.8}}>
                                    Advanced multi-chain launch capabilities with automated compliance,
                                    intelligent risk assessment, and seamless project onboarding. Our platform
                                    empowers creators and businesses to launch and manage projects across multiple
                                    blockchain networks effortlessly, ensuring full compliance with global
                                    regulatory standards.
                                </p>
                                <div className="text-white">
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Automated KYC and AML compliance processes.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Intelligent risk assessment for project viability.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> User-friendly interface for streamlined onboarding.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Multi-chain compatibility for flexible project deployment.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Support for startups and established enterprises.</div>
                                </div>
                            </>
                        )}
                        {activeTab === 'security' && (
                            <>
                                <h4 className="text-warning text-uppercase mb-3">Security Protocols</h4>
                                <p className="text-white mb-3" style={{lineHeight: 1.8}}>
                                    Quantum-resistant encryption, AI-powered vulnerability scanning,
                                    and comprehensive smart contract auditing mechanisms. Our advanced
                                    security suite protects your digital assets and transactions against
                                    emerging threats.
                                </p>
                                <div className="text-white">
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Quantum-resistant encryption for future-proof security.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Real-time vulnerability scanning powered by AI.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Comprehensive smart contract auditing for reliability.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Proactive threat detection and prevention measures.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Enhanced trust and reliability in all operations.</div>
                                </div>
                            </>
                        )}
                        {activeTab === 'innovation' && (
                            <>
                                <h4 className="text-warning text-uppercase mb-3">Innovation Ecosystem</h4>
                                <p className="text-white mb-3" style={{lineHeight: 1.8}}>
                                    Decentralized governance, community-driven development,
                                    and cutting-edge blockchain technology integration. Our innovation
                                    ecosystem fosters collaboration and creativity, enabling stakeholders
                                    to contribute directly to platform enhancements.
                                </p>
                                <div className="text-white">
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Transparent and inclusive decentralized governance.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Community-driven development for tailored improvements.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Integration of the latest blockchain technologies.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Scalable and efficient solutions for diverse industries.</div>
                                    <div className="py-2"><img src={checkCircleIcon} class="px-3"/> Empowerment of stakeholders to shape the platform's future.</div>
                                </div>
                            </>
                        )}

                    </div>
                    <div className="col-lg-6">
                        <img
                            src={activeTab === 'features' ? securityImage :
                                activeTab === 'security' ? innovationImage :
                                    networkImage}
                            className="img-fluid rounded shadow"
                            alt={`${activeTab} illustration`}
                        />
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-dark-grey py-5 text-center">
                <div className="container">
                    <h4 className="text-warning text-uppercase mb-3">Transform Your Blockchain Vision</h4>
                    <p className="text-white mb-4">
                        Join our next-generation launchpad and accelerate your blockchain project's success.
                    </p>
                    <Link
                        to="/contact"
                        className="btn btn-warning btn-lg"
                    >
                        Get Started Now
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    );
}