import ExpServices from "../../assets/exp-services.svg"
import AdvEngg from "../../assets/advEngg.svg"
import AppServices from "../../assets/appServices.svg"
import { useNavigate } from "react-router-dom"

const serviceData = [
    {
        img: AdvEngg,
        title: 'Innovative Strategies and Industry Expertise',
        desc: 'Creative strategies provide competitive edge. Deep industry understanding tackles business challenges effectively, maximizing opportunities for growth.',
    },
    {
        img: AppServices,
        title: 'Customer Centric Solutions',
        desc: 'We prioritize customer satisfaction above all else, ensuring you are happy with the cost-effective solutions we deliver, maximizing value for your investment.',
    },
    {
        img: ExpServices,
        title: 'Tailored Solutions with End-to-End Support',
        desc: 'Our team tailors solutions to your goals, offering full support for seamless growth, covering all operational aspects with comprehensive, end-to-end assistance.',
    },
]

export default function services () {
    const navigate = useNavigate();

    return (
            <div className="bg-circle-right">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="600" data-aos-once="true">
                            <p className="text-uppercase text-white">Why Choose Tantrija?</p>
                            <hr className="border-white mt-1 hr-x-small" />
                            <h4 className="text-warning text-uppercase animation-div"> <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="700" data-aos-once="true">Cutting-Edge Technology for Modern Businesses</div></h4>
                            <p className="text-white mt-3">Choosing Tantrija means partnering with a team that is passionate about technology and dedicated to your success. Let us help you transform your business with innovative IT solutions and exceptional service. Contact us today to learn more about how we can help you achieve your goals.</p>
                            <button className="btn btn-outline-light px-4 py-2 fw-bold my-3" onClick={() => {navigate('/contact')}}>Get Started</button>
                        </div>
                        <div className="col-lg-6 my-5">
                            <div className="row justify-content-end cards-masonary">
                            {serviceData.map((card, index) => (
                                <div className="col-lg-6" key={index}>
                                    <div className="card bg-warning p-3 text-center mb-4 mt-lg-5 pt-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="50" data-aos-once="true">
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
    )
}