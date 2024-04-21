import ExpServices from "../../assets/exp-services.svg"
import AdvEngg from "../../assets/advEngg.svg"
import AppServices from "../../assets/appServices.svg"

const serviceData = [
    {
        img: ExpServices,
        title: 'Experience services',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        img: AdvEngg,
        title: 'Advance engineering',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        img: AppServices,
        title: 'Application services',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

export default function services () {
    return (
            <div className="bg-circle-right">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="600" data-aos-once="true">
                            <p className="text-uppercase text-white">Our Services</p>
                            <hr className="border-white mt-1 hr-x-small" />
                            <h4 className="text-warning text-uppercase animation-div"> <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="700" data-aos-once="true"> BLOCHAIN offers the top most services </div></h4>
                            <p className="text-white mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <button className="btn btn-outline-light px-4 py-2 fw-bold my-3">Learn More</button>
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