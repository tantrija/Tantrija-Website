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
        title: 'Native App Development',
        desc: 'Our team excels in crafting high-performance iOS and Android apps tailored for the Apple and Android ecosystems. We employ languages like Swift, Java, and Kotlin to ensure your app delivers a seamless user experience.',
    },
    {
        img: exchange,
        title: 'Cross-Platform Development',
        desc: 'With expertise in React Native and Flutter, we build powerful apps that work seamlessly across iOS and Android with a single codebase. This approach not only saves time and resources but also ensures a consistent user experience across platforms',
    },
    {
        img: wallet,
        title: 'UI/UX/Brand Identity Design',
        desc: 'Design is at the heart of everything we do. Our UI/UX design experts create intuitive and visually appealing user interfaces that enhance user experience and engagement. From wireframing to prototyping, we focus on every detail to create a compelling design that reflects your brand identity.',
    },
    {
        img: shop,
        title: 'App Maintenance and Support',
        desc: 'We provide continuous monitoring, updates, and technical support to keep your app running smoothly. Our team ensures that your app stays up-to-date with the latest technologies and is always ready to address any issues that may arise.',
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
                            <h4 className="text-warning text-uppercase">Mobile App Development Services We Offer</h4>
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