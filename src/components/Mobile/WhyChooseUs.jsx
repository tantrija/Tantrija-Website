import blockchainPioneers from "../../assets/blockchainPioneers.svg"
import endToEnd from "../../assets/end-to-end.svg"
import CompetitivePricing from "../../assets/competitivePricing.svg"
import { useNavigate } from "react-router-dom";

const aboutWhyChooseData = [
    {
        img: blockchainPioneers,
        title: 'Timely Delivery',
        desc: 'We understand the importance of deadlines. Our efficient project management ensures that your app is delivered on time, every time.',
    },
    {
        img: endToEnd,
        title: 'Cost-Effective Solutions',
        desc: 'Our services are designed to be cost-effective without compromising on quality. We offer competitive rates to help you achieve your goals within budget.',
    },
    {
        img: CompetitivePricing,
        title: 'Extensive Industry Experience',
        desc: 'Our team comprises skilled professionals with years of experience in the industry, ensuring top-notch solutions tailored to your needs.',
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
                            <h4 className="text-warning text-uppercase">App-solutely Brilliant Next-Gen Mobile Apps!
                            </h4>
                            <p className="text-white mt-3">At Tantrija, we excel in creating top-notch mobile applications that not only meet
                                but exceed your business needs. Whether you need a sleek iOS app, a dynamic
                                Android solution, or a versatile cross-platform application, we have the expertise to
                                bring your vision to life.
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
                                            {/* <a href="#" className="card-link"></a> */}
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