import {Link} from "react-router-dom"
import ArrowRight from "../../assets/arrow-right.svg"
import CaseStudy1 from "../../assets/case-study-1.jpg"
import CaseStudy2 from "../../assets/case-study-2.jpg"
import CaseStudy3 from "../../assets/case-study-3.jpg"

const caseStudiesData = [
    {
        img: CaseStudy1,
        title: 'NFT Marketplace',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        arrowImg: ArrowRight,
    },
    {
        img: CaseStudy2,
        title: 'Digital Banking App',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        arrowImg: ArrowRight,
    },
    {
        img: CaseStudy3,
        title: 'Lottery & Raffles Platform',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        arrowImg: ArrowRight,
    },
    {
        img: CaseStudy2,
        title: 'Digital Banking App',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        arrowImg: ArrowRight,
    },
    {
        img: CaseStudy3,
        title: 'Lottery & Raffles Platform',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        arrowImg: ArrowRight,
    },
    {
        img: CaseStudy1,
        title: 'NFT Marketplace',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        arrowImg: ArrowRight,
    },
]

export default function casestudies(){
    return(
            <div className="bg-circle-left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                            <div className="row mt-3">
                            {caseStudiesData.map((card, index) => (
                                <div className="col-lg-4 mb-4" key={index}>
                                <div className="card bg-warning p-0 case-study-card">
                                    <img src={card.img} className="img-fluid" alt="hire icon" />
                                    <div className="p-4">
                                    <h6 className="fw-bold text-uppercase text-dark text-one-line">{card.title}</h6>
                                    <p className="text-dark text-four-lines">{card.desc}</p>
                                    <Link to="/CaseStudiesInner" className="d-flex justify-content-end mt-3">
                                        <img src={card.arrowImg} alt="link" />
                                    </Link>
                                    </div>
                                    <Link to="/CaseStudiesInner" className="card-link"></Link>
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