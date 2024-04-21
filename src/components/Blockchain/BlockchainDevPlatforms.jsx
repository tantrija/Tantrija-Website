import ethereum from "../../assets/ethereum.svg"
import solana from "../../assets/solana.svg"
import polygon from "../../assets/polygon.svg"
import binance from "../../assets/biance.svg"
import cardano from "../../assets/cardano.svg"
import avalanche from "../../assets/avalanche.svg"
import eos from "../../assets/eos.svg"

const connectData = [
    {
        img: ethereum,
        title: 'Ethereum',
    },
    {
        img: solana,
        title: 'Solana',
    },
    {
        img: polygon,
        title: 'Polygon',
    },
    {
        img: binance,
        title: 'Binance',
    },
    {
        img: cardano,
        title: 'Cardano',
    },
    {
        img: avalanche,
        title: 'Avalanche',
    },
    {
        img: eos,
        title: 'eos',
    },
]

export default function aboutConnect(){
    return (
        <div className="bg-dark-grey p-5 text-center mt-5 pt-4">
            <div className="container pt-5">
                <h6 className="fw-bold text-uppercase text-warning mt-3">Blockchain Development Platforms we Support</h6>
                <p className="text-white text-center">As a leading blockchain software development company, we leverage different blockchain networks to provide<br/> you with the best solutions aligned with your needs.</p>
                <div className="d-flex justify-content-center flex-wrap gap-4 mt-4 ">
                    {connectData.map((card, index) => (
                        <div className="bg-dark tech-card position-relative d-flex align-items-center justify-content-center flex-wrap mb-4" key={index} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <div>
                                <img src={card.img} alt="tech" />
                                <p className="text-uppercase mb-0 mt-2 text-white">{card.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}