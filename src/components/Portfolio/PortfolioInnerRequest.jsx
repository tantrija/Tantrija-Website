import portfolioReqImg from "../../assets/kilix-solution.png"
import checkCircleIcon from "../../assets/check-circle-icon.svg"

const requirementsData = [
    {
        img: checkCircleIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        img: checkCircleIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        img: checkCircleIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        img: checkCircleIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
]

export default function caseStudiesInnerReq(){
    return (
        <div className="container mt-5 pt-4">
            <div className="row">
                <div className="col-lg-6 pe-4 my-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                    <img src={portfolioReqImg} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 p-4">
                        <p className="text-white text-uppercase">Our Solution</p>
                        <hr className="border-white mt-1 hr-x-small"></hr>
                        <h4 className="text-warning text-uppercase">For Kilix</h4>
                        <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        {requirementsData.map((card, index) => (
                            <div className="d-flex align-items-start gap-3 mb-4" key={index}>
                                <img src={card.img} alt="check" />
                                <p className="text-white mb-0">{card.text}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}