import ethereum from "../../assets/ethereum.svg"
import solana from "../../assets/solana.svg"
import polygon from "../../assets/polygon.svg"
import binance from "../../assets/biance.svg"
import cardano from "../../assets/cardano.svg"
import avalanche from "../../assets/avalanche.svg"
import eos from "../../assets/eos.svg"
import tron from "../../assets/tron.svg"
import fantom from "../../assets/Fantom.svg"
import telos from "../../assets/telos.svg"
import moonbeam from "../../assets/MoonBeam.svg"
import ripple from "../../assets/ripple.svg"
import near from "../../assets/near.svg"
import optimum from "../../assets/optimum.svg"
import cronos from "../../assets/cronos-cro-logo.svg"
import aurora from "../../assets/Aurora.svg"
import xinfin from "../../assets/XinFin.svg"
import gnosis from "../../assets/gnosis.svg"

const solutionData = [
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
        title: 'EOS',
    },
    {
        img: tron,
        title: 'Tron',
    },
    {
        img: fantom,
        title: 'Fantom',
    },
    {
        img: telos,
        title: 'Telos EVM',
    },
    {
        img: moonbeam,
        title: 'MoonBeam',
    },
    {
        img: ripple,
        title: 'Ripple',
    },
    {
        img: near,
        title: 'Near',
    },
    {
        img: optimum,
        title: 'Optimum',
    },
    {
        img: cronos,
        title: 'Cronos',
    },
    {
        img: aurora,
        title: 'Aurora',
    },
    {
        img: xinfin,
        title: 'XinFin',
    },
    {
        img: gnosis,
        title: 'XDAI/Gnosis',
    },
]

export default function solutionPlatforms(){
    return (
        <div className="container pt-5 text-center">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <p className="text-uppercase text-white">Why Choose Us</p>
                    <hr className="border-white mt-1 hr-x-small mx-auto" />
                    <h4 className="fw-bold text-uppercase text-warning mt-3">NFT Token Development on<br/> Leading Blockchain Networks</h4>
                </div>
                <div className="col-lg-10">
                    <div className="d-flex justify-content-center flex-wrap gap-4 mt-3" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        {solutionData.map((card, index) => (
                            <div className="bg-dark-grey tech-card solutions position-relative d-flex align-items-center justify-content-center flex-wrap" key={index}>
                                <div>
                                    <img src={card.img} alt="tech" />
                                    <p className="text-uppercase mb-0 mt-2 text-white">{card.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}