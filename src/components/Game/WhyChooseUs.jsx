import blockchainPioneers from "../../assets/blockchainPioneers.svg"
import endToEnd from "../../assets/end-to-end.svg"
import CompetitivePricing from "../../assets/competitivePricing.svg"
import { useNavigate } from "react-router-dom";

const aboutWhyChooseData = [
    {
        img: blockchainPioneers,
        title: 'Timely Delivery',
        desc: 'We prioritize deadlines, ensuring your project is completed on time and launched according to schedule.',
    },
    {
        img: endToEnd,
        title: 'Cost-Effective Solutions',
        desc: 'Despite our top-notch services, Tantrija offers competitive pricing, making us a budget-friendly choice for web development.',
    },
    {
        img: CompetitivePricing,
        title: 'Extensive Industry Experience',
        desc: 'With years of industry expertise, we understand the nuances of web development, ensuring your project is in capable hands.',
    },
]

export default function WhyChooseUs() {
    const navigate = useNavigate();

    return (
        <services>
            <div className="bg-circle-left pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">Why Choose us</p>
                            <hr className="border-white mt-1 hr-x-small" />
                            <h4 className="text-warning text-uppercase">Pixel-Perfect Creations for Unforgettable Gaming Experiences</h4>
                            <p className="text-white mt-3">At Tantrija, we don't just make games; we craft immersive experiences that go
                                beyond the usual. Our game development services blend creativity with advanced
                                technology to deliver unforgettable adventures. From concept to launch, we
                                breathe life into ideas, creating games that CAPTIVATE, INSPIRE, and
                                ENTERTAIN.
                            </p>
                            <button className="btn btn-outline-light px-4 py-2 fw-bold my-3" onClick={() => { navigate('/about') }}>Learn More</button>
                        </div>
                        <div className="col-lg-6 my-5">
                            <div className="row justify-content-end cards-masonary">
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