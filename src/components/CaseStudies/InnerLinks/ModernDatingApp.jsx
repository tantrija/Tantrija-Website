import datingAppImg from "../../../assets/caseStudies/DatingImage4.png";
import clientReq from "../../../assets/caseStudies/DatingImage2.png";
import checkCircleIcon from "../../../assets/check-circle-icon.svg";
import ourSolutions from "../../../assets/caseStudies/DatingImage3.png";
import reactNative from "../../../assets/react.png";
import reactJS from "../../../assets/unity-react-js.png";
import nodeJS from "../../../assets/unity-node-js.png";
import mongoDB from "../../../assets/unity-mongo-db.png";
import figma from "../../../assets/unity-figma.png";
import photoShop from "../../../assets/unity-photoshop.png";
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const clientsData = [
    {
        img: reactNative,
        title: "React Native",
    },
    {
        img: nodeJS,
        title: "Node JS",
    },
    {
        img: mongoDB,
        title: "Mongo DB",
    },
    {
        img: figma,
        title: "Figma",
    },
    {
        img: photoShop,
        title: "Adobe Photoshop",
    },
];

const requirementsData = [
    {
        img: checkCircleIcon,
        text: "Intuitive and engaging user interface.",
    },
    {
        img: checkCircleIcon,
        text: "AI-driven matchmaking for compatibility.",
    },
    {
        img: checkCircleIcon,
        text: "Secure user authentication and data privacy.",
    },
    {
        img: checkCircleIcon,
        text: "In-app messaging and real-time notifications.",
    },
];

const resultsData = [
    {
        img: checkCircleIcon,
        text: "Significant increase in user retention and engagement.",
    },
    {
        img: checkCircleIcon,
        text: "Enhanced user satisfaction through accurate matchmaking.",
    },
    {
        img: checkCircleIcon,
        text: "Secure environment fostering trust and safety.",
    },
    {
        img: checkCircleIcon,
        text: "Real-time communication elevating the user experience.",
    },
];

export default function ModernDatingApp() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header />
            <div className="container py-5">
                <div className="row">
                    <div
                        className="col-lg-6 m-auto"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        data-aos-delay="50"
                        data-aos-once="true"
                    >
                        <h1 className="text-warning text-uppercase">Modern Dating App</h1>
                        <p className="text-white mt-3">
                            Revolutionize the dating experience with a modern, AI-powered
                            platform designed to foster meaningful connections. Our Modern
                            Dating App combines technology and user-centric design to create
                            an engaging, safe, and personalized journey for users.
                        </p>
                        <div className="col-lg-12 d-flex gap-3 mt-5">
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
                    <div className="col-lg-6">
                        <div className="text-end">
                            <img
                                src={datingAppImg}
                                className="img-fluid"
                                alt="Modern Dating App"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark-grey p-5">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 m-auto"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="50"
                            data-aos-once="true"
                        >
                            <h4 className="text-warning text-uppercase">About the Project</h4>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-white">
                                The Modern Dating App is built for the new era of relationships,
                                offering features that align with today’s fast-paced and
                                technology-driven world. Whether it’s casual dating or finding
                                the one, this app ensures a seamless and delightful experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-4">
                <div className="row">
                    <div className="col-lg-6 m-auto pe-4">
                        <img src={clientReq} className="img-fluid" alt="Requirements" />
                    </div>
                    <div className="col-lg-6 m-auto p-4">
                        <div className="card bg-dark-grey p-5 pb-4">
                            <h4 className="text-warning text-uppercase">
                                Client’s Requirements
                            </h4>
                            <p className="text-white mb-4">
                                The client envisioned an innovative dating app that would
                                elevate the user experience with features such as:
                            </p>
                            {requirementsData.map((card, index) => (
                                <div
                                    className="d-flex align-items-start gap-3 mb-4"
                                    key={index}
                                >
                                    <img src={card.img} alt="check" />
                                    <p className="text-white mb-0">{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center pt-4 mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h4 className="text-warning text-uppercase">Our Solution</h4>
                        <p className="text-white">
                            We designed and developed an AI-driven dating app that prioritizes
                            user convenience and satisfaction. From real-time notifications to
                            personalized matchmaking algorithms, every feature was crafted to
                            ensure a smooth and secure experience.
                        </p>
                    </div>
                    <img
                        src={ourSolutions}
                        className="img-fluid solutions mt-4 mb-5"
                        alt="Solutions"
                    />
                </div>
            </div>

            <div className="bg-dark-grey p-5 mt-5 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h4 className="text-warning text-uppercase">
                                Results and Benefits
                            </h4>
                            <p className="text-white mb-4">
                                Our innovative approach resulted in:
                            </p>
                            {resultsData.map((card, index) => (
                                <div
                                    className="d-flex align-items-start gap-3 mb-4"
                                    key={index}
                                >
                                    <img src={card.img} alt="check" />
                                    <p className="text-white mb-0">{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-4 mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className="text-uppercase text-white">Technology Stack</p>
                        <hr className="border-white mt-1 mx-auto hr-x-small" />
                        <h4 className="text-warning text-uppercase">
                            Cutting-edge Tech for Superior Performance
                        </h4>
                        <div className="row mt-4 justify-content-center card-icon">
                            {clientsData.map((card, index) => (
                                <div
                                    className="col-lg-4"
                                    data-aos="fade-up"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000"
                                    data-aos-delay="50"
                                    data-aos-once="true"
                                    key={index}
                                >
                                    <div className="bg-transparent border border-light p-5 my-4 mx-3 position-relative align-items-center justify-content-center flex-wrap">
                                        <img src={card.img} alt="tech" />
                                        <p className="text-uppercase mt-3 text-white">
                                            {card.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5 bg-dark-grey mt-5 text-center">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-12"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="50"
                            data-aos-once="true"
                        >
                            <h4 className="text-warning text-uppercase">Conclusion</h4>
                            <p className="text-white mb-4">
                                The Modern Dating App redefines how people connect, ensuring
                                meaningful interactions through cutting-edge technology. Whether
                                for casual meetups or long-term relationships, this app sets the
                                standard for modern dating solutions.
                            </p>
                            <Link
                                to="/contact"
                                className="btn btn-outline-light btn-lg"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
