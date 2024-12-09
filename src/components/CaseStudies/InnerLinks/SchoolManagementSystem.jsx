import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";

// Placeholder for actual images
import heroGraphic from "../../../assets/caseStudies/SchoolImage2.png";
import checkCircleIcon from "../../../assets/check-circle-icon.svg";
import SchoolImage1 from '../../../assets/caseStudies/SchoolImage1.png';
import SchoolImage3 from '../../../assets/caseStudies/SchoolImage3.png';
import SchoolImage4 from '../../../assets/caseStudies/SchoolImage4.png';
import SchoolImage5 from '../../../assets/caseStudies/SchoolImage5.png';
import SchoolImage6 from '../../../assets/caseStudies/SchoolImage6.png';
import SchoolImage7 from '../../../assets/caseStudies/SchoolImage7.png';

const managementSystems = [
    {
        title: "Learning Management",
        description: "Facilitate seamless teaching and learning through online classes, resource sharing, and progress tracking. Improve learning outcomes by offering engaging, personalized content.",
        icon: "📘",
        image: SchoolImage1,
        features: [
            "Online classes with integrated video conferencing",
            "Real-time student progress tracking",
            "Assignments and quiz management",
            "Interactive discussion boards for students and teachers"
        ]
    },
    {
        title: "Event Management",
        description: "Easily organize school events, track attendees, and send real-time notifications to parents and students. Manage academic and extracurricular activities with ease.",
        icon: "📅",
        image: SchoolImage3,
        features: [
            "Create and manage events with event details",
            "Track attendee confirmations and feedback",
            "Event calendar with automated reminders",
            "Seamless integration with Google Calendar and other platforms" 
        ]
    },
    {
        title: "Result Management",
        description: "Automate and streamline the result generation process. Provide real-time access to reports for both students and parents.",
        icon: "📈",
        image: SchoolImage5,
        features: [
            "Automated report card generation",
            "Student performance analytics and progress tracking",
            "Multi-format results: PDF, Excel, and Digital Reports",
            "Parental access for instant result updates"
        ]
    },
    {
        title: "Fee Management",
        description: "Manage school fees, track payments, and send timely reminders to parents for fee payments. Make the fee collection process efficient and transparent.",
        icon: "💵",
        image: SchoolImage6,
        features: [
            "Integrated online payment gateway",
            "Fee reminders through email/SMS",
            "Transaction history and invoice generation",
            "Customizable fee structures for different grades"
        ]
    },
    {
        title: "Teacher Management",
        description: "Efficiently manage teachers’ schedules, attendance, and performance. Track professional development and ensure smooth operation within the institution.",
        icon: "👩‍🏫",
        image: SchoolImage4,
        features: [
            "Teacher scheduling and workload management",
            "Real-time attendance tracking",
            "Feedback collection and performance reviews",
            "Teacher professional development tracking"
        ]
    }
];

export default function SchoolManagementSystem() {
    const [activeSystem, setActiveSystem] = useState(managementSystems[0]);

    return (
        <>
            <Header />

            {/* Hero Section */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                        <img
                            src={heroGraphic}
                            className="img-fluid rounded shadow"
                            alt="School Management System"
                        />
                    </div>
                    <div className="col-lg-12 text-center my-3">
                        <h1 className="text-warning text-uppercase mb-3">School Management System</h1>
                        <p className="text-white" style={{ lineHeight: 1.8 }}>
                            An all-in-one platform to manage your school’s operations efficiently while enhancing educational experiences. With powerful features and intuitive interfaces, we aim to simplify school administration and improve communication between parents, students, and teachers.
                        </p>
                        <div className="d-flex justify-content-center gap-4 mt-5">
                            <Link
                                to="/contact"
                                className="btn btn-outline-light btn-lg"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/solutions"
                                className="btn btn-warning btn-lg"
                            >
                                Explore Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="container py-5 my-5">
                <h4 className="text-warning text-uppercase text-center mb-5">Why Choose Our School Management System?</h4>
                <div className="row text-center">
                    <div className="col-lg-4 mb-4">
                        <div className="p-5 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                            <div className="icon-circle bg-dark-grey text-white p-1 mb-3">
                                <i className="fa fa-cogs"></i>
                            </div>
                            <h5 className="text-white py-2">Automation</h5>
                            <p className="text-white">Streamline administrative tasks with automated processes for grading, fee management, and reporting.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="p-5 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                            <div className="icon-circle bg-dark-grey text-white p-1 mb-3">
                                <i className="fa fa-cogs"></i>
                            </div>
                            <h5 className="text-white py-2">Improved Communication</h5>
                            <p className="text-white">Enhance communication between parents, students, and teachers for better engagement and performance tracking.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="p-5 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                            <div className="icon-circle bg-dark-grey text-white p-1 mb-3">
                                <i className="fa fa-cogs"></i>
                            </div>
                            <h5 className="text-white py-2">Data-Driven Insights</h5>
                            <p className="text-white">Use data analytics to monitor student progress, predict trends, and make informed decisions to improve learning outcomes.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Management Systems Section */}
            <div className="container py-5">
                <h4 className="text-warning text-uppercase text-center mb-0">Key Management Systems</h4>

                {/* Active System Details Section */}
                <div className="row py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="text-warning text-uppercase mb-3">{activeSystem.title}</h4>
                            <p className="text-white" style={{ lineHeight: 1.8 }}>{activeSystem.description}</p>
                            <ul className="text-white">
                                {activeSystem.features.map((feature, index) => (
                                    <li key={index} className="d-flex align-items-center gap-2 my-3">
                                        <img src={checkCircleIcon} alt="Feature" width="16" height="16" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src={activeSystem.image}
                                className="img-fluid rounded shadow"
                                alt={`${activeSystem.title} illustration`}
                            />
                        </div>
                    </div>
                </div>

                <div className="row text-center d-flex justify-content-center">
                    {managementSystems.map((system, index) => (
                        <div className="col-lg-4 mb-4" key={index}>
                            <div
                                className={`card p-3 rounded shadow h-100 text-center ${activeSystem.title === system.title ? "bg-warning" : "bg-dark-grey"}`}
                                onClick={() => setActiveSystem(system)}
                                style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
                            >
                                {/* <div className="mb-3 display-4">{system.icon}</div> */}
                                <h5 className={`${activeSystem.title === system.title ? "text-dark" : "text-light"}`}>{system.title}</h5>
                                {/* <p className="text-white mt-3">{system.description}</p> */}
                                {/* <button className="btn btn-warning mt-3">Learn More</button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* User Roles Section */}
            <div className="container py-5 my-5">
                <h4 className="text-warning text-uppercase text-center mb-5">User Roles & Permissions</h4>
                <div className="row text-center">
                    <div className="col-lg-3 mb-4">
                        <div className="mt-5" style={{marginBottom: 30}}>
                            <h5 className="text-white">Students</h5>
                            <p className="text-white">Access learning materials, track progress, submit assignments, and view grades.</p>
                        </div>
                        <div className="icon-circle bg-warning text-white mb-2 p-1">
                            <i className="fa fa-user-graduate"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4">
                        <div className="mt-5" style={{marginBottom: 30}}>
                            <h5 className="text-white">Teachers</h5>
                            <p className="text-white">Manage classes, grade assignments, create reports, and engage with students.</p>
                        </div>
                        <div className="icon-circle bg-warning text-white mb-2 p-1">
                            <i className="fa fa-user-graduate"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4">
                        <div className="mt-5" style={{marginBottom: 30}}>
                            <h5 className="text-white">Admins</h5>
                            <p className="text-white">Oversee school operations, manage students and staff, and generate reports.</p>
                        </div>
                        <div className="icon-circle bg-warning text-white mb-2 p-1">
                            <i className="fa fa-user-graduate"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4">
                        <div className="mt-5" style={{marginBottom: 30}}>
                            <h5 className="text-white">Parents</h5>
                            <p className="text-white">Monitor student progress, attend events, and stay informed about school activities and results.</p>
                        </div>
                        <div className="icon-circle bg-warning text-white mb-2 p-1">
                            <i className="fa fa-user-graduate"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conclusion */}
            <div className="bg-dark-grey py-5 text-center">
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="col-lg-6 text-start">
                        <h4 className="text-warning text-uppercase mb-3">Conclusion</h4>
                        <p className="text-white">
                            The Betting Platform redefines the user experience with its innovative features and secure operations. As the industry evolves, our solutions ensure scalability and adaptability, setting the stage for future success in the competitive betting landscape.
                        </p>
                        <Link
                            to="/contact"
                            className="btn btn-warning btn-lg mt-5"
                        >
                            Contact us
                        </Link>
                    </div>
                    <div className="col-lg-6 text-end">
                        <img
                            src={SchoolImage7}
                            className="img-fluid rounded shadow mb-4"
                            alt="Betting Platform Success"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
