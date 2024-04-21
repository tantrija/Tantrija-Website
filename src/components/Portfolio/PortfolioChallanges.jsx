import clientReq from "../../assets/clientReq.png"
import checkCircleIcon from "../../assets/check-circle-icon.svg"
import challanges from "../../assets/kilix-challenges.png"

const portfolioChallangesData = [
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

export default function portfolioInnerChallanges(){
    return (
        <div className="container mt-5 pt-4 pb-4">
            <div className="row">
                <div className="col-lg-6 m-auto pe-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="50" data-aos-once="true">
                    <img src={challanges} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 m-auto p-4">
                    <div className="card bg-dark-grey p-5 pb-4">
                    <p className="text-uppercase text-white">Our Challenges</p>
                        <hr className="border-white mt-1 hr-x-small" />
                        <h4 className="text-warning text-uppercase">For Kilix</h4>
                        <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        {portfolioChallangesData.map((card, index) => (
                            <div className="d-flex align-items-start gap-3 mb-4" key={index}>
                                <img src={card.img} alt="check" />
                                <p className="text-white mb-0">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}