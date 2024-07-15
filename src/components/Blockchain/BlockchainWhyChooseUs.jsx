import blockchainPioneers from "../../assets/blockchainPioneers.svg"
import endToEnd from "../../assets/end-to-end.svg"
import CompetitivePricing from "../../assets/competitivePricing.svg"
import { useNavigate } from "react-router-dom"

const aboutWhyChooseData = [
    {
        img: blockchainPioneers,
        title: 'Certified Experts',
        desc: 'Our team consists of certified blockchain experts who have undergone rigorous training and certification processes, ensuring that they are equipped with the knowledge and skills needed to deliver top-notch blockchain solutions.',
    },
    {
        img: endToEnd,
        title: 'Custom Solutions',
        desc: 'We understand that every project is unique, which is why we offer tailor-made solutions that are designed to meet your specific needs and requirements.',
    },
    {
        img: CompetitivePricing,
        title: 'Expertise',
        desc: 'We have a team of experienced blockchain developers who are well-versed in the latest technologies and trends in the industry, ensuring that your project is in capable hands.',
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
                            <h4 className="text-warning text-uppercase">Join Hands with Industry Leaders in Blockchain Development</h4>
                            <p className="text-white mt-3">At Tantrija, we are proud to be recognized as a leading blockchain development
                                company. Our specialized services and distinctive approach set us apart, enabling
                                us to deliver custom solutions that precisely meet your business needs. Our
                                approach to blockchain development focuses on security, scalability, and
                                innovation</p>
                            <button className="btn btn-outline-light px-4 py-2 fw-bold my-3" onClick={() => { navigate('/about') }}>Learn More</button>
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