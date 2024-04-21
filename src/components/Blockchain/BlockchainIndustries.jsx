import healthcare from "../../assets/healthcare-icon.svg"
import RealEstate from "../../assets/realestate-icon.svg"
import bfsi from "../../assets/bfsi-icon.svg"
import agriculture from "../../assets/agriculture-icon.svg"
import logistics from "../../assets/logistics-icon.svg"
import retail from "../../assets/retail-icon.svg"
import entertainment from "../../assets/entertainment-icon.svg"
import travel from "../../assets/travel-icon.svg"
import education from "../../assets/education-icon.svg"
import energy from "../../assets/energy-icon.svg"

const industriesData = [
    {
        img: healthcare,
        title: 'Healthcare',
    },
    {
        img: RealEstate,
        title: 'Real Estate',
    },
    {
        img: bfsi,
        title: 'BFSI',
    },
    {
        img: agriculture,
        title: 'Agriculture',
    },
    {
        img: logistics,
        title: 'Logistics',
    },
    {
        img: retail,
        title: 'Retail',
    },
    {
        img: entertainment,
        title: 'Entertainment',
    },
    {
        img: travel,
        title: 'Travel',
    },
    {
        img: education,
        title: 'Education',
    },
    {
        img: energy,
        title: 'Energy',
    },
]

export default function aboutConnect(){
    return (
        <div className="bg-circle-right">
            <div className="container mt-5 pt-4 text-center">
                <h4 className="fw-bold text-uppercase text-warning mt-3">Industries We Serve</h4>
                <div className="row mt-4 justify-content-center card-icon">
                    {industriesData.map((card, index) => (
                        <div className="col-lg-3" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <div className="bg-transparent border border-light px-5 py-4 position-relative d-flex align-items-center justify-content-center flex-wrap mb-4" key={index}>
                            <div>
                                <img src={card.img} alt="tech" />
                                <p className="text-uppercase mb-0 mt-2 text-white">{card.title}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}