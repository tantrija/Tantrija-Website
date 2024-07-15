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
          title: "Ideation and Conceptualization",
          desc: "We begin by understanding your vision and brainstorming innovative concepts.Our team collaborates to outline the core mechanics, storyline, and features of the game.",
          arrowImg: ArrowRight,
        },
        {
          img: businessLogic,
          title: "Design and Prototyping",
          desc: "Next, we create detailed designs and prototypes. This includes character designs, environment art, and initial gameplay mechanics to visualize the game's look and feel.",
          arrowImg: ArrowRight,
        },
        {
          img: privateDev,
          title: "Development",
          desc: "Our skilled developers use the latest game engines and technologies to build the game. We ensure smooth gameplay, stunning graphics, and seamless performance across platforms.",
          arrowImg: ArrowRight,
        },
        {
          img: chaincodeDev,
          title: "Testing and Quality Assurance",
          desc: "We rigorously test the game to identify and fix any bugs or issues. Our QA team ensures the game meets high standards of quality and provides a great user experience.",
          arrowImg: ArrowRight,
        },
        {
          img: dApp,
          title: "Launch and Deployment",
          desc: "Once the game is polished and ready, we assist with the launch and deployment across various platforms. We ensure a smooth release and handle any technical aspects of publishing.",
          arrowImg: ArrowRight,
        },
        {
          img: blockchainIntegration,
          title: "Post-Launch Support",
          desc: "After the launch, we offer ongoing support and updates. We gather feedback, address any issues, and continue to enhance the game to keep players engaged and satisfied.",
          arrowImg: ArrowRight,
        },
]

export default function aboutServices() {
    return (
            <div className="bg-circle-left collab mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">Game Development</p>
                            <hr className="border-white mt-1 mx-auto hr-x-small" />
                            <h4 className="text-warning text-uppercase">Our Game Development Process
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