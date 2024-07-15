import transparancy from "../../assets/transparancy-icon.svg"
import passion from "../../assets/passion-icon.svg"
import empowerment from "../../assets/empowerment-icon.svg"
import collaboration from "../../assets/collaboration-icon.svg"
import customerFocus from "../../assets/customer-focus-icon.svg"

const believeData = [
    {
        img: transparancy,
        title: 'Transparency',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: passion,
        title: 'Passion',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: empowerment,
        title: 'Empowerment',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: collaboration,
        title: 'Collaboration',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: customerFocus,
        title: 'Customer Focus',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: customerFocus,
        title: 'Customer Focus',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]

export default function Homebelieve () {
    return (
        <div className="vh-100 d-flex align-items-center justify-content-center">
            <div className="p-5 w-100">
                <div className="container pt-4 pb-5">
                    <div className="row">
                        <div className="col-lg-12">
                        <p className="text-uppercase text-center text-white">Qualities</p>
                        <hr className="border-white mt-1 mx-auto hr-x-small" />
                        <h4 className="text-warning text-uppercase mb-0 text-center">Why Choose Us</h4>
                        </div>
                        {believeData.map((card, index) => (
                        <div className="col-lg-4 mt-4" key={index} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <div className="card p-4 bg-dark card-border-warning">
                                <img src={card.img} width={30} height={30} alt="tech-icon" />
                                <h6 className="fw-medium text-uppercase text-white mt-3 title-short">{card.title}</h6>
                                <p className="text-white text-three-lines">{card.desc}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}