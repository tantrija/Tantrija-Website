import research from "../../assets/research-icon.svg"
import strategy from "../../assets/strategy-icon.svg"
import consulting from "../../assets/consulting-icon.svg"
import digital from "../../assets/digital-icon.svg"
import technology from "../../assets/technology-icon.svg"
import operations from "../../assets/operations-icon.svg"
import ArrowRight from "../../assets/arrow-right.svg";

const innovateData = [
        {
          img: research,
          title: "Innovation",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          arrowImg: ArrowRight,
        },
        {
          img: strategy,
          title: "Integrity",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          arrowImg: ArrowRight,
        },
        {
          img: consulting,
          title: "Customer Focus",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          arrowImg: ArrowRight,
        },
        {
          img: digital,
          title: "Empowerment",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          arrowImg: ArrowRight,
        },
        {
          img: technology,
          title: "Technology",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          arrowImg: ArrowRight,
        },
        {
          img: operations,
          title: "Operations",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          arrowImg: ArrowRight,
        },
]

export default function aboutServices() {
    return (
            <div className="bg-circle-left collab mt-5 pb-4">
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <h4 className="text-warning text-uppercase">Our Core Values</h4>
                            </div>
                             <div className="col-lg-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                                <div className="row mt-3">
                                {innovateData.map((card, index) => (
                                <div className="col-lg-4 mb-4" key={index}>
                                <div
                                  className="card bg-warning p-4"
                                  data-aos="fade-in"
                                  data-aos-easing="linear"
                                  data-aos-duration="1000"
                                  data-aos-delay="50"
                                  data-aos-once="true"
                                >
                                  <img src={card.img} width={30} height={30} alt="hire icon" />
                                  <h6 className="fw-medium text-uppercase text-dark mt-3 title-short">
                                    {card.title}
                                  </h6>
                                  <p className="text-dark text-three-lines">{card.desc}</p>
                                  <a
                                    href="#"
                                    className="d-flex justify-content-end mt-3"
                                  >
                                    <img src={card.arrowImg} alt="link" />
                                  </a>
                                  <a href="#" className="card-link"></a>
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