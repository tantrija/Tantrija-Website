import blockArch from "../../assets/blockchainArch.svg"
import businessLogic from "../../assets/businessLogic.svg"
import privateDev from "../../assets/privateDev.svg"
import chaincodeDev from "../../assets/chaincodeDev.svg"
import dApp from "../../assets/dApp.svg"
import blockchainIntegration from "../../assets/blockchainIntegration.svg"
import ArrowRight from "../../assets/arrow-right.svg";

const aboutBlockchainDevData = [
        {
          img: blockArch,
          title: "Requirement Analysis",
          desc: "We start by understanding your business requirements and objectives to define the scope of the project accurately.",
          arrowImg: ArrowRight,
        },
        {
          img: businessLogic,
          title: "Planning and Design",
          desc: "Our team of experts collaborates with you to create a detailed project plan and design the architecture of your blockchain solution.",
          arrowImg: ArrowRight,
        },
        {
          img: privateDev,
          title: "Development",
          desc: "Using the latest technologies and best practices, we develop your blockchain solution, including smart contracts, APIs, and front-end interfaces.",
          arrowImg: ArrowRight,
        },
        {
          img: chaincodeDev,
          title: "Testing",
          desc: "We conduct rigorous testing to ensure that your blockchain solution is secure, reliable, and free from any bugs or vulnerabilities.",
          arrowImg: ArrowRight,
        },
        {
          img: dApp,
          title: "Deployment",
          desc: "Once testing is complete, we deploy your blockchain solution to the desired platform, ensuring a seamless transition to live operations.",
          arrowImg: ArrowRight,
        },
        {
          img: blockchainIntegration,
          title: "Maintenance and Support",
          desc: "We provide ongoing maintenance and support to keep your blockchain solution up-to-date and running smoothly.",
          arrowImg: ArrowRight,
        },
]

export default function aboutServices() {
    return (
            <div className="bg-circle-left collab mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">Blockchain Development</p>
                            <hr className="border-white mt-1 mx-auto hr-x-small" />
                            <h4 className="text-warning text-uppercase">Our Blockchain Development Process</h4>
                            </div>
                             <div className="col-lg-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                                <div className="row mt-3">
                                {aboutBlockchainDevData.map((card, index) => (
                                <div className="col-lg-4 mb-4" key={index}>
                                <div
                                  className="card bg-warning p-4"
                                  data-aos="fade-in"
                                  data-aos-easing="linear"
                                  data-aos-duration="1000"
                                  data-aos-delay="50"
                                  data-aos-once="true"
                                >
                                  <img src={card.img} alt="hire icon" />
                                  <h6 className="fw-medium text-uppercase text-dark mt-3 title-short">
                                    {card.title}
                                  </h6>
                                  <p className="text-dark text-three-lines">{card.desc}</p>
                                  {/* <a
                                    href="#"
                                    className="d-flex justify-content-end mt-3"
                                  >
                                    <img src={card.arrowImg} alt="link" />
                                  </a>
                                  <a href="#" className="card-link"></a> */}
                                </div>
                              </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}