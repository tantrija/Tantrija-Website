import blockchainPioneers from "../../assets/blockchainPioneers.svg"
import endToEnd from "../../assets/end-to-end.svg"
import CompetitivePricing from "../../assets/competitivePricing.svg"

const aboutWhyChooseData = [
    {
        img: blockchainPioneers,
        title: 'Blockchain Pioneers',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        img: endToEnd,
        title: 'End-to-End Services',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        img: CompetitivePricing,
        title: 'Competitive Pricing',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

export default function WhyChooseUs () {
    return (
        <services>
            <div className="bg-circle-left pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">Why Choose us</p>
                            <hr className="border-white mt-1 hr-x-small" />
                            <h4 className="text-warning text-uppercase">Blockchain Development Company?</h4>
                            <p className="text-white mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <button className="btn btn-outline-light px-4 py-2 fw-bold my-3">Learn More</button>
                        </div>
                        <div className="col-lg-6 my-5">
                            <div className="row justify-content-end cards-masonary ">
                            {aboutWhyChooseData.map((card, index) => (
                                <div className="col-lg-6" key={index}>
                                    <div className="card bg-warning p-3 text-center mb-4 mt-lg-5 pt-5" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="2000" data-aos-delay="50" data-aos-once="true">
                                        <img src={card.img} width={50} alt="hire icon" />
                                            <h6 className="fw-bold text-uppercase text-dark mt-3">{card.title}</h6>
                                            <p className="text-dark text-four-lines">{card.desc}</p>
                                        <a href="#" className="card-link"></a>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </services>
    )
}