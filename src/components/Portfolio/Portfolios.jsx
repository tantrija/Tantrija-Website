import { Link } from "react-router-dom"
import Node from "../../assets/node.png"
import Binance from "../../assets/binance.png"
import eth from "../../assets/eth.png"
import fox from "../../assets/fox.png"
import react from "../../assets/react.png"
import polygon from "../../assets/polygon.png"
import nfc from "../../assets/nfc.png"
import aws from "../../assets/aws.png"
import bitcoin from "../../assets/bitcoin.png"
import reactNative from "../../assets/reactnative.png"
import wix from "../../assets/wix.png"
import stripe from "../../assets/stripe.png"
import wordpress from "../../assets/wordpress.png"
import figma from "../../assets/figma.png"
import php from "../../assets/php.png"
import unity from "../../assets/unity.png"
import web3 from "../../assets/web3.png"
import ethereum from "../../assets/ethereum.png"
import hedgePay from "../../assets/projects/hedgepay.png";
import fineartLedger from "../../assets/projects/fineartledger.png";
import mealland from "../../assets/projects/mealland.png";
import picnic from "../../assets/projects/picnic.png";
import cactus from "../../assets/projects/cactus.png";
import bluemingo from "../../assets/projects/bluemingo.png";
import intelligentworld from "../../assets/projects/intelligentworld.png";
import ludo from "../../assets/projects/ludo.png";
import portfolio1 from "../../assets/portfolio-kilix.png"
import portfolio2 from "../../assets/LegendaryRacers.png"
import portfolio3 from "../../assets/itrack-screen.png"
import portfolio4 from "../../assets/rare-collection.png"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

const blockchain = [
    {
        "title": "HedgePay",
        "subTitle": "Decentralized Finance (DeFi) Platform for Passive Income",
        "text": "HedgePay is a DeFi platform offering users monthly passive income through its HedgeFi risk-reduction algorithm. By maintaining a minimum balance of HedgePay tokens (HPAY), users receive customizable BUSD rewards, independent of market conditions.",
        "technology": "Technology",
        techImg1: Node,
        techImg2: Binance,
        techImg3: figma,
        techImg4: fox,
        techImg5: react,
        "projectImg": hedgePay,
        "preview": "https://hedgepay.org"
    },
    {
        "title": "The Fine Art Ledger",
        "subTitle": "Blockchain-Powered Fine Art Management Platform",
        "text": "The Fine Art Ledger (FAL) is a platform that leverages blockchain technology to authenticate and manage fine art pieces. By attaching NFC tags to artworks, FAL enables real-time, blockchain-authenticated certificates of authenticity, allowing artists, collectors, and galleries to securely catalog and verify their collections.",
        "technology": "Technology",
        techImg1: Node,
        "techImg2": polygon,
        "techImg3": nfc,
        techImg4: react,
        "techImg5": aws,
        "projectImg": fineartLedger,
        "preview": "https://www.thefineartledger.com"
    }
]

const mobileapps = [
    {
        "title": "Picnic Groups",
        "subTitle": "Community Group Chat with Bitcoin Payments",
        "text": "Picnic Groups is a community-focused group chat app offering secure, public group interactions. It includes a non-custodial Lightning wallet for Bitcoin payments, supporting fast, low-cost transactions for events and community initiatives.",
        "technology": "Technology",
        techImg1: Node,
        "techImg2": reactNative,
        "techImg3": aws,
        "techImg4": bitcoin,
        techImg5: figma,
        projectImg: picnic,
        "preview": "https://play.google.com/store/apps/details?id=com.picnicapp.app&hl=en_IN",
        "apple": "https://apps.apple.com/us/app/picnic-groups/id1561013758"
    },
    {
        "title": "Mealland",
        "subTitle": "Weekly Meal Kit Delivery Service",
        "text": "Mealland delivers weekly meal kits with fresh ingredients and easy-to-follow recipes directly to your doorstep. The service simplifies home cooking by providing pre-portioned ingredients and step-by-step instructions, allowing users to prepare delicious meals without the hassle of meal planning or grocery shopping.",
        "technology": "Technology",
        techImg1: Node,
        "techImg2": reactNative,
        "techImg3": aws,
        techImg4: figma,
        "projectImg": mealland,
        "preview": "https://apkcombo.com/mealland/com.mealland/"
    }
]

const webApps = [
    {
        "title": "Cactus",
        "subTitle": "Luxury Clothing Brand",
        "text": "Cactus's \"Wear a Cloud\" collection offers timeless elegance with ultra-soft fabrics, combining luxury and everyday wearability to elevate your wardrobe.",
        "technology": "Technology",
        "techImg4": wix,
        "techImg5": stripe,
        "projectImg": cactus,
        "preview": "https://www.cactusclo.com/"
    },
    {
        "title": "Bluemingo",
        "subTitle": "Smart Manufacturing and Supply Chain Solutions",
        "text": "Bluemingo specializes in developing advanced Planning, Scheduling, Execution, and AI products for manufacturing and supply chain sectors. Their offerings include Production Planning and Scheduling (PPS), Manufacturing Execution Systems (MES), and AI-driven analytics, aiming to assist large Indian companies in building smart factories and efficient supply chains.",
        "technology": "Technology",
        "techImg1": wordpress,
        "techImg2": figma,
        "projectImg": bluemingo,
        "preview": "https://bluemingotech.com/"
    },
    {
        "title": "Intelligent World",
        "subTitle": "On-Demand Technology Education Platform",
        "text": "Intelligent World is a video content portal offering on-demand and live sessions where executives and technology experts share insights on the latest technology trends, developments, and processes shaping a digital-first business world. The platform features content from top experts across various industries, aiming to assist C-level executives and management in navigating the evolving technology landscape.",
        "technology": "Technology",
        "techImg1": figma,
        "techImg2": php,
        "techImg3": aws,
        "projectImg": intelligentworld,
        "preview": "https://www.intelligentworld.org/"
    }
]

const games = [
    {
        "title": "LUDO LOVE",
        "subTitle": "Classic Ludo Game with Social Features",
        "text": "LUDO LOVE is a digital adaptation of the traditional Ludo board game, enhanced with social features such as astrology-based partner matching and in-game voice chat. Players can enjoy classic Ludo gameplay with friends or online opponents, engaging in real-time communication during matches.",
        "technology": "Technology",
        "techImg1": Node,
        "techImg2": unity,
        "techImg3": aws,
        "techImg4": web3,
        "techImg5": ethereum,
        "projectImg": ludo,
        "preview": "https://play.google.com/store/apps/details?id=com.ludo.nft"
    }
]

export default function portfolios() {
    return (
        <div className="container mb-5">
            <div className="row mt-5">
                <div className="col-lg-12" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                    <h1 className="text-white text-center text-uppercase">Portfolio</h1>
                </div>
                <div className="col-lg-12 co-operator-tabs-2 mt-5">
                    <Tabs>
                        <TabList>
                            <Tab>BLOCKCHAIN</Tab>
                            <Tab>MOBILE APPS</Tab>
                            <Tab>WEB APPS</Tab>
                            <Tab>GAMES</Tab>
                        </TabList>
                        <TabPanel>
                            {blockchain.map((card, index) => (
                                <div className="col-lg-12 mt-4" key={index} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                                    <div className="card bg-dark-grey p-4">
                                        <div className="row align-items-end justify-content-end">
                                            <div className="col-lg-6 p-4">
                                                <h4 className="text-warning text-uppercase">{card.title}</h4>
                                                <p className="text-white text-uppercase fw-bold mt-2">{card.subTitle}</p>
                                                <p className="text-white mt-3">{card.text}</p>
                                                <h6 className="text-warning text-uppercase mt-4">{card.technology}</h6>
                                                <div className="d-flex align-items-center gap-4 flex-wrap">
                                                    {card.techImg1 && <img src={card.techImg1} height={28} alt="tech icon" />}
                                                    {card.techImg2 && <img src={card.techImg2} height={28} alt="tech icon" />}
                                                    {card.techImg3 && <img src={card.techImg3} height={28} alt="tech icon" />}
                                                    {card.techImg4 && <img src={card.techImg4} height={28} alt="tech icon" />}
                                                    {card.techImg5 && <img src={card.techImg5} height={28} alt="tech icon" />}
                                                </div>
                                                <div className="d-flex align-items-center gap-4 mt-4 flex-wrap">
                                                    <a href={card.preview} target="_blank" className="btn btn-outline-light px-4 py-2 fw-bold">Live Preview</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 p-4 text-center">
                                                {card.projectImg && <img src={card.projectImg} className="img-fluid" alt="Binance" />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {mobileapps.map((card, index) => (
                                <div className="col-lg-12 mt-4" key={index} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                                    <div className="card bg-dark-grey p-4">
                                        <div className="row align-items-end justify-content-end">
                                            <div className="col-lg-6 p-4">
                                                <h4 className="text-warning text-uppercase">{card.title}</h4>
                                                <p className="text-white text-uppercase fw-bold mt-2">{card.subTitle}</p>
                                                <p className="text-white mt-3">{card.text}</p>
                                                <h6 className="text-warning text-uppercase mt-4">{card.technology}</h6>
                                                <div className="d-flex align-items-center gap-4 flex-wrap">
                                                    {card.techImg1 && <img src={card.techImg1} height={28} alt="tech icon" />}
                                                    {card.techImg2 && <img src={card.techImg2} height={28} alt="tech icon" />}
                                                    {card.techImg3 && <img src={card.techImg3} height={28} alt="tech icon" />}
                                                    {card.techImg4 && <img src={card.techImg4} height={28} alt="tech icon" />}
                                                    {card.techImg5 && <img src={card.techImg5} height={28} alt="tech icon" />}
                                                </div>
                                                <div className="d-flex align-items-center gap-4 mt-4 flex-wrap">
                                                    {card.apple && <a href={card.apple} target="_blank" className="btn btn-warning px-4 py-2 fw-bold">iOS</a>}
                                                    {card.preview && <a href={card.preview} target="_blank" className="btn btn-outline-light px-4 py-2 fw-bold">Android</a>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 p-4 text-center">
                                                {card.projectImg && <img src={card.projectImg} style={{ maxHeight: 330 }} className="img-fluid" alt="Binance" />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {webApps.map((card, index) => (
                                <div className="col-lg-12 mt-4" key={index} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                                    <div className="card bg-dark-grey p-4">
                                        <div className="row align-items-end justify-content-end">
                                            <div className="col-lg-6 p-4">
                                                <h4 className="text-warning text-uppercase">{card.title}</h4>
                                                <p className="text-white text-uppercase fw-bold mt-2">{card.subTitle}</p>
                                                <p className="text-white mt-3">{card.text}</p>
                                                <h6 className="text-warning text-uppercase mt-4">{card.technology}</h6>
                                                <div className="d-flex align-items-center gap-4 flex-wrap">
                                                    {card.techImg1 && <img src={card.techImg1} height={28} alt="tech icon" />}
                                                    {card.techImg2 && <img src={card.techImg2} height={28} alt="tech icon" />}
                                                    {card.techImg3 && <img src={card.techImg3} height={28} alt="tech icon" />}
                                                    {card.techImg4 && <img src={card.techImg4} height={28} alt="tech icon" />}
                                                    {card.techImg5 && <img src={card.techImg5} height={28} alt="tech icon" />}
                                                </div>
                                                <div className="d-flex align-items-center gap-4 mt-4 flex-wrap">
                                                    <a href={card.preview} target="_blank" className="btn btn-outline-light px-4 py-2 fw-bold">Live Preview</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 p-4 text-center">
                                                {card.projectImg && <img src={card.projectImg} style={{ maxHeight: 330 }} className="img-fluid" alt="Binance" />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {games.map((card, index) => (
                                <div className="col-lg-12 mt-4" key={index} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                                    <div className="card bg-dark-grey p-4">
                                        <div className="row align-items-end justify-content-end">
                                            <div className="col-lg-6 p-4">
                                                <h4 className="text-warning text-uppercase">{card.title}</h4>
                                                <p className="text-white text-uppercase fw-bold mt-2">{card.subTitle}</p>
                                                <p className="text-white mt-3">{card.text}</p>
                                                <h6 className="text-warning text-uppercase mt-4">{card.technology}</h6>
                                                <div className="d-flex align-items-center gap-4 flex-wrap">
                                                    {card.techImg1 && <img src={card.techImg1} height={28} alt="tech icon" />}
                                                    {card.techImg2 && <img src={card.techImg2} height={28} alt="tech icon" />}
                                                    {card.techImg3 && <img src={card.techImg3} height={28} alt="tech icon" />}
                                                    {card.techImg4 && <img src={card.techImg4} height={28} alt="tech icon" />}
                                                    {card.techImg5 && <img src={card.techImg5} height={28} alt="tech icon" />}
                                                </div>
                                                <div className="d-flex align-items-center gap-4 mt-4 flex-wrap">
                                                    <a href={card.preview} target="_blank" className="btn btn-outline-light px-4 py-2 fw-bold">Android</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 p-4 text-center">
                                                {card.projectImg && <img src={card.projectImg} style={{ maxHeight: 330 }} className="img-fluid" alt="Binance" />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TabPanel>
                    </Tabs>
                </div>

            </div>
        </div>
    )
}