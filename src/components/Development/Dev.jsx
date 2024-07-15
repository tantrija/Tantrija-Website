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
          title: "Discovery",
          desc: "We begin by understanding your business goals, target audience, and specific requirements for the website or web application.",
          arrowImg: ArrowRight,
        },
        {
          img: businessLogic,
          title: "Planning",
          desc: "Based on the discovery phase, we create a detailed plan outlining the project scope, timeline, and resources required.",
          arrowImg: ArrowRight,
        },
        {
          img: privateDev,
          title: "Design",
          desc: "Our design team works on wireframes and prototypes to visualize the layout and user experience of the website or application.",
          arrowImg: ArrowRight,
        },
        {
          img: chaincodeDev,
          title: "Development",
          desc: "Using the latest technologies and frameworks, our developers bring the design to life, ensuring functionality and responsiveness",
          arrowImg: ArrowRight,
        },
        {
          img: dApp,
          title: "Testing",
          desc: "We perform rigorous testing to ensure the website or application is bug-free and meets our quality standards.",
          arrowImg: ArrowRight,
        },
        {
          img: blockchainIntegration,
          title: "Deployment",
          desc: "Once the website or application is ready, we deploy it to a live environment, making it accessible to your audience.",
          arrowImg: ArrowRight,
        },
]

export default function aboutServices() {
    return (
            <div className="bg-circle-left collab mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">Web Development</p>
                            <hr className="border-white mt-1 mx-auto hr-x-small" />
                            <h4 className="text-warning text-uppercase">Our Web Development Process
                            </h4>
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