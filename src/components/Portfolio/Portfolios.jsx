import {Link} from "react-router-dom"
import Node from "../../assets/node.png"
import Binance from "../../assets/binance.png"
import eth from "../../assets/eth.png"
import fox from "../../assets/fox.png"
import react from "../../assets/react.png"
import portfolio1 from "../../assets/portfolio-kilix.png"
import portfolio2 from "../../assets/LegendaryRacers.png"
import portfolio3 from "../../assets/itrack-screen.png"
import portfolio4 from "../../assets/rare-collection.png"

const portfolioData = [
    {
        title: 'Kilix',
        subTitle: 'Ethereum Blockchain-Based Gaming Platform',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        technology: 'Technology',
        techImg1: Node,
        techImg2: Binance,
        techImg3: eth,
        techImg4: fox,
        techImg5: react,
        projectImg: portfolio1,
    },
    {
        title: 'Legendary Racers',
        subTitle: 'NFT-powered Gaming Platform',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        technology: 'Technology',
        techImg1: Node,
        techImg2: Binance,
        techImg3: eth,
        techImg4: fox,
        techImg5: react,
        projectImg: portfolio2,
    },
    {
        title: 'iTrack Freight',
        subTitle: 'Blockchain Freight Tracking Software',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        technology: 'Technology',
        techImg1: Node,
        techImg2: Binance,
        techImg3: eth,
        techImg4: fox,
        techImg5: react,
        projectImg: portfolio3,
    },
    {
        title: 'My Rare Collections',
        subTitle: 'Ethereum Blockchain-Based NFT Marketplace',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        technology: 'Technology',
        techImg1: Node,
        techImg2: Binance,
        techImg3: eth,
        techImg4: fox,
        techImg5: react,
        projectImg: portfolio4,
    },
]

export default function portfolios() {
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-12" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                    <h1 className="text-white text-center text-uppercase">Portfolio</h1>
                </div>
                {portfolioData.map((card, index) => (
                <div className="col-lg-12 mt-4" key={index} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                    <Link to="/PortfolioInner" >
                    <div className="card bg-dark-grey p-4">
                        <div className="row align-items-end justify-content-end">
                            <div className="col-lg-6 p-4">
                                <h4 className="text-warning text-uppercase">{card.title}</h4>
                                <p className="text-white text-uppercase fw-bold mt-2">{card.subTitle}</p>
                                <p className="text-white mt-3">{card.text}</p>
                                <h6 className="text-warning text-uppercase mt-4">{card.technology}</h6>
                                <div className="d-flex align-items-center gap-4 flex-wrap">
                                    <img src={card.techImg1} alt="tech icon" />
                                    <img src={card.techImg2} alt="tech icon" />
                                    <img src={card.techImg3} alt="tech icon" />
                                    <img src={card.techImg4} alt="tech icon" />
                                    <img src={card.techImg5} alt="tech icon" />
                                </div>
                                <div className="d-flex align-items-center gap-4 mt-4 flex-wrap">
                                    <button className="btn btn-warning px-4 py-2 fw-bold">View Case Study</button>
                                    <button className="btn btn-outline-light px-4 py-2 fw-bold">Live Preview</button>
                                </div>
                            </div>
                            <div className="col-lg-6 p-4 text-center">
                            <img src={card.projectImg} className="img-fluid" alt="Binance" />
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    )
}