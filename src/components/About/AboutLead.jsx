import ArrowRight from "../../assets/arrow-right.svg"
import Pushkar from "../../assets/Pushkar.png"
import Sanjay from "../../assets/Sanjay.png"
import Rohit from "../../assets/Rohit.png"
import Shubham from "../../assets/Shubham.png"
import Nitish from "../../assets/Nitish.png"
import Akamsha from "../../assets/Akamsha.png"

const leadersData = [
    {
        img: Nitish,
        title: 'Falcon',
        desc: 'Chief Technical Officer (CTO)',
        arrowImg: ArrowRight,
    },
    {
        img: Pushkar,
        title: 'Shadow',
        desc: 'Chief Executive Officer (CEO)',
        arrowImg: ArrowRight,
    },
    {
        img: Shubham,
        title: 'Blaze',
        desc: 'Chief Marketing Officer (CMO)',
        arrowImg: ArrowRight,
    },
    {
        img: Rohit,
        title: 'Phantom',
        desc: 'Senior DevOps',
        arrowImg: ArrowRight,
    },
    {
        img: Sanjay,
        title: 'Hunter',
        desc: 'Senior Designer',
        arrowImg: ArrowRight,
    },
    {
        img: Akamsha,
        title: 'Raven',
        desc: 'Content Manager',
        arrowImg: ArrowRight,
    },
]

export default function casestudies() {
    return (
        <div className="bg-circle-left mt-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <h4 className="text-warning text-uppercase my-5">How We Lead</h4>
                    </div>
                    <div className="col-lg-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                        <div className="row mt-3">
                            {leadersData.map((card, index) => (
                                <div className="col-lg-4 mb-4" key={index}>
                                    <div className="card bg-warning p-0 case-study-card">
                                        <div style={{textAlign: "center", backgroundColor: "black"}}>
                                            <img src={card.img} style={{height: 350 }} className="img-fluid" alt="hire icon" />
                                        </div>
                                        <div className="p-4">
                                            <h6 className="fw-bold text-uppercase text-dark">{card.title}</h6>
                                            <p className="text-dark text-four-lines">{card.desc}</p>
                                            {/* <a href="#" className="d-flex justify-content-end mt-3">
                                                <img src={card.arrowImg} alt="link" />
                                            </a> */}
                                        </div>
                                        {/* <a href="#" className="card-link"></a> */}
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