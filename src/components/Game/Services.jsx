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
        title: 'Concept Development',
        desc: 'We help you refine your game concept, ensuring it is engaging and aligns with your vision.',
    },
    {
        img: exchange,
        title: 'Game Design',
        desc: 'Our team creates detailed game design outlining the gameplay, mechanics, and story.',
    },
    {
        img: wallet,
        title: 'Art and Animation',
        desc: 'We provide high-quality 2D and 3D art and animation services to bring your game world to life.',
    },
    {
        img: shop,
        title: 'Programming',
        desc: 'Our programmers develop efficient code to ensure game runs on all platforms.',
    },
    {
        img: Contract,
        title: 'Sound Design',
        desc: 'We offer professional sound design services, including music and sound effects, to enhance the gaming experience.',
    },
    {
        img: ico,
        title: ' Testing and QA',
        desc: 'Our rigorous testing process ensures that your game is bug-free and provides a seamless user experience.',
    },
    {
        img: AppDevelopment,
        title: 'Publishing Assistance',
        desc: 'We help you navigate the process of publishing your game, from submission to app stores to marketing strategies.',
    },
    {
        img: metaverse,
        title: 'Post-Launch Support',
        desc: 'Our support doesnt end at launch we provide ongoing support and updates to keep your game relevant.',
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
                            <h4 className="text-warning text-uppercase">Our Game Development Services</h4>
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