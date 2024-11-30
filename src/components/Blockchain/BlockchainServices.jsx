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
        title: 'Smart Contract Development',
        desc: 'We specialize in creating smart contracts that automate processes and ensure transparent transactions on platforms like Ethereum etc.',
    },
    {
        img: exchange,
        title: 'DApp Development',
        desc: 'Our team develops Decentralized Applications (DApps) that leverage blockchain technology, offering secure and reliable solutions for various industries.',
    },
    {
        img: wallet,
        title: 'Blockchain Consulting',
        desc: 'We provide expert guidance on blockchain technology, helping businesses understand its potential and how it can be integrated into their existing systems.',
    },
    {
        img: shop,
        title: 'Private Blockchain Development',
        desc: 'We design and develop private blockchains for organizations looking to enhance security, transparency, and efficiency in their operations.',
    },
    {
        img: Contract,
        title: 'Blockchain Integration',
        desc: 'Our team integrates blockchain technology with existing systems, ensuring seamless compatibility and efficient functionality.',
    },
    {
        img: ico,
        title: 'Token Development',
        desc: 'We assist in the creation of custom tokens for various purposes, including ICOs, STOs, and utility tokens, providing end-to-end token development services..',
    },
    {
        img: AppDevelopment,
        title: 'Blockchain Audits',
        desc: 'We conduct extensive audits of blockchain systems (Audits) to identify and resolve any vulnerabilities, ensuring the security and integrity of the network.',
    },
    {
        img: metaverse,
        title: 'Cryptocurrency Exchange Development',
        desc: 'Transform your idea into a fully functional exchange platform with our expertise in blockchain technology and secure trading mechanisms.',
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