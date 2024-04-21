import ArrowRight from "../../assets/arrow-right.svg"
import howWeLead1 from "../../assets/howWeLead1.jpg"
import howWeLead2 from "../../assets/howWeLead2.jpg"
import howWeLead3 from "../../assets/howWeLead3.jpg"
import howWeLead4 from "../../assets/howWeLead4.jpg"

const leadersData = [
    {
        img: howWeLead1,
        title: 'Oliver Jake',
        desc: 'Chief Executive Officer (CEO)',
        arrowImg: ArrowRight,
    },
    {
        img: howWeLead2,
        title: 'Oliver Jake',
        desc: 'Chief Executive Officer (CEO)',
        arrowImg: ArrowRight,
    },
    {
        img: howWeLead3,
        title: 'Oliver Jake',
        desc: 'Chief Executive Officer (CEO)',
        arrowImg: ArrowRight,
    },
    {
        img: howWeLead4,
        title: 'Oliver Jake',
        desc: 'Chief Executive Officer (CEO)',
        arrowImg: ArrowRight,
    },
]

export default function casestudies(){
    return(
            <div className="bg-circle-left mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <h4 className="text-warning text-uppercase">How We Lead</h4>
                        </div>
                        <div className="col-lg-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                            <div className="row mt-3">
                            {leadersData.map((card, index) => (
                                <div className="col-lg-3 mb-4" key={index}>
                                <div className="card bg-warning p-0 case-study-card">
                                    <img src={card.img} className="img-fluid" alt="hire icon" />
                                    <div className="p-4">
                                    <h6 className="fw-bold text-uppercase text-dark">{card.title}</h6>
                                    <p className="text-dark text-four-lines">{card.desc}</p>
                                    <a href="#" className="d-flex justify-content-end mt-3">
                                        <img src={card.arrowImg} alt="link" />
                                    </a>
                                    </div>
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