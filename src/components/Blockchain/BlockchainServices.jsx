import cryptoDev from "../../assets/cryptoDev.svg"
import exchange from "../../assets/exchange.svg"
import wallet from "../../assets/wallet.svg"
import shop from "../../assets/shop.svg"
import Contract from "../../assets/Contract.svg"
import ico from "../../assets/ICO.svg"
import AppDevelopment from "../../assets/AppDevelopment.svg"
import metaverse from "../../assets/metaverse.svg"

const BlockchainServiceData = [
    {
        img: cryptoDev,
        title: 'Cryptocurrency Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
    {
        img: exchange,
        title: 'Centralized Exchange Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
    {
        img: wallet,
        title: 'Crypto Wallet Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
    {
        img: shop,
        title: 'NFT Marketplace Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
    {
        img: Contract,
        title: 'Smart Contract Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
    {
        img: ico,
        title: 'ICO and IEO Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
    {
        img: AppDevelopment,
        title: 'Decentralized App (dApp) Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
    {
        img: metaverse,
        title: 'Metaverse Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
]

export default function aboutServices() {
    return (
            <div className="bg-circle-right collab mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">Our Services</p>
                            <hr className="border-white mt-1 mx-auto hr-x-small" />
                            <h4 className="text-warning text-uppercase">Our Blockchain Development Services</h4>
                            </div>
                             <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                                <div className="row mt-3 card-icon">
                                {BlockchainServiceData.map((card, index) => (
                                <div className="col-lg-3" key={index}>
                                    <div className="card bg-warning p-3 text-center mb-4" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="2000" data-aos-delay="50" data-aos-once="true">
                                        <img src={card.img} height={40} className="mb-2 mt-4" alt="hire icon" />
                                            <h6 className="fw-bold text-uppercase text-dark mt-3">{card.title}</h6>
                                            <p className="text-dark text-four-lines">{card.desc}</p>
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