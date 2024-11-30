import blockchainPioneers from "../../assets/blockchainPioneers.svg"
import endToEnd from "../../assets/end-to-end.svg"
import CompetitivePricing from "../../assets/competitivePricing.svg"
import { useNavigate } from "react-router-dom";

const aboutWhyChooseData = [
    {
        img: blockchainPioneers,
        title: 'Timely Delivery',
        desc: 'We are committed to delivering your project on time, ensuring that your website is launched as per the agreed-upon schedule.',
    },
    {
        img: endToEnd,
        title: 'Cost-Effective Solutions',
        desc: 'Despite our high-quality services, Tantrija offers competitive and affordable pricing, making us a cost-effective choice for your web development needs',
    },
    {
        img: CompetitivePricing,
        title: 'Extensive Industry Experience',
        desc: 'With extensive industry experience, Tantrija understands the ins and outs of web development, ensuring that your project is in safe hands.',
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
                            <h4 className="text-warning text-uppercase">Ruling the Web World with Exceptional Web Solutions!</h4>
                            <p className="text-white mt-3">At Tantrija, we specialize in creating compelling websites with exceptional UX.
                                Our team of digital experts crafts online solutions that not only elevate your brand
                                but also captivate your audience. Let's create your digital success story together.

                            </p>
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