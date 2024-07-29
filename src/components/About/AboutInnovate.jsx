import React from 'react';
import researchIcon from "../../assets/research-icon.svg"
import strategyIcon from "../../assets/strategy-icon.svg"
import consultingIcon from "../../assets/consulting-icon.svg"
import digitalIcon from "../../assets/digital-icon.svg"
import technologyIcon from "../../assets/technology-icon.svg"
import operationsIcon from "../../assets/operations-icon.svg"

const itServices = [
    {
        img: researchIcon,
        title: "Software Development",
        desc: "Custom software solutions tailored to your business needs, leveraging cutting-edge technologies and best practices in development.",
    },
    {
        img: strategyIcon,
        title: "Blockchain Solutions",
        desc: "Innovative blockchain technologies to enhance security, transparency, and efficiency in your business processes and transactions.",
    },
    {
        img: consultingIcon,
        title: "IT Consulting",
        desc: "Expert guidance on IT strategy, infrastructure planning, and technology adoption to align your tech investments with business goals.",
    },
    {
        img: digitalIcon,
        title: "Digital Transformation",
        desc: "End-to-end digital transformation services to modernize your business processes and enhance customer experiences.",
    },
    {
        img: technologyIcon,
        title: "Cybersecurity",
        desc: "Robust security solutions to protect your digital assets, ensure data privacy, and maintain compliance with industry standards.",
    },
    {
        img: operationsIcon,
        title: "IT Support & Maintenance",
        desc: "Reliable IT support and maintenance services to ensure smooth operations and minimize downtime for your business.",
    },
]

export default function ITServicesOfferings() {
    return (
        <section className="it-services-offerings bg-circle-left collab mt-5 pb-4" aria-labelledby="it-services-heading">
            <div className="container">
                <div className="row pt-4">
                    <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                      <h2 id="it-services-heading" className="text-warning text-uppercase">Our Comprehensive IT Services</h2>
                    </div>
                    <div className="col-lg-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                        <div className="row mt-3">
                            {itServices.map((service, index) => (
                                <div className="col-lg-4 mb-4" key={index}>
                                    <article className="card bg-warning p-4" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                                        <img src={service.img} width={30} height={30} alt={`${service.title} icon`} />
                                        <h2 className="fw-medium text-uppercase text-dark mt-3 title-short" style={{ fontSize: '1rem' }}>
                                            {service.title}
                                        </h2>
                                        <p className="text-dark text-five-lines">{service.desc}</p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}