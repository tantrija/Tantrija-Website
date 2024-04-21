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
]

export default function believe () {
    return (
        <div className="p-5 bg-dark-grey mt-5">
            <div className="container pt-4 pb-5">
                <div className="row">
                    <div className="col-lg-4 m-auto">
                <h4 className="text-warning text-uppercase mb-0 mt-5">What We Believe</h4>
                    </div>
                    {believeData.map((card, index) => (
                    <div className="col-lg-4 mt-4" key={index} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <div className="card p-4 bg-dark">
                            <img src={card.img} width={30} height={30} alt="tech-icon" />
                            <h6 className="fw-medium text-uppercase text-white mt-3 title-short">{card.title}</h6>
                            <p className="text-white text-three-lines">{card.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}