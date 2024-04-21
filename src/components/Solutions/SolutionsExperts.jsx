import blockchainPioneers from "../../assets/blockchainPioneers-icon.svg"
import excellence from "../../assets/excellence.svg"
import services from "../../assets/end-to-end-services.svg"
import security from "../../assets/security-centric.svg"

const solutionsServicesData = [
    {
      img: blockchainPioneers,
      title: "Blockchain Pioneers",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: excellence,
      title: "Customization Excellence",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: services,
      title: "End-to-End Services",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: security,
      title: "Blockchain Pioneers",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]

export default function SolutionsWhatWeDo () {
    return (
        <div className="bg-dark-grey pt-2 pb-4 mt-5">
            <div className="container">
                <div className="row pt-4">
                    <div className="col-lg-5 m-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <p className="text-uppercase text-white">What We Do</p>
                        <hr className="border-white mt-1 hr-x-small" />
                        <h4 className="text-warning text-uppercase">Helping Businesses to Stay Ahead of Change</h4>
                        <p className="text-white mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className="btn btn-outline-light px-4 py-2 fw-bold my-3">Hire Our Experts</button>
                    </div>
                    <div className="col-lg-7 mt-4">
                        <div className="row">
                            {solutionsServicesData.map((card, index) => (
                                <div className="col-lg-6 mb-4" key={index}>
                                    <div className="card bg-dark p-4">
                                        <img src={card.img} width={35} height={35} alt="tech icon" />
                                        <h6 className="fw-medium text-uppercase text-warning title-short mt-2 mb-0">{card.title}</h6>
                                        <p className="text-white text-three-lines">{card.desc}</p>
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