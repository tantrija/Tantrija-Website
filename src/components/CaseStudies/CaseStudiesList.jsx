import {Link} from "react-router-dom"
import ArrowRight from "../../assets/arrow-right.svg"
import CaseStudy2 from "../../assets/case-study-2.jpg"
import CaseStudy3 from "../../assets/case-study-3.jpg"
import CryptoBettingFI from '../../assets/caseStudies/CryptoBettingFI2.png';
import DatingFI from '../../assets/caseStudies/DatingFI.png';
import FantasyGameFI from '../../assets/caseStudies/FantasyGameFI.png';
import MlmWebsiteFI from '../../assets/caseStudies/MlmWebsiteFI.png';
import EcommerceWebsiteFI from '../../assets/caseStudies/EcommerceWebsiteFI.png';
import LaunchpadFI from '../../assets/caseStudies/LaunchpadFI.png';
import SchoolManagementFI from '../../assets/caseStudies/SchoolManagementFI.png';

const caseStudiesData = [
    {
        img: CryptoBettingFI,
        title: 'Crypto Betting Platform',
        desc: 'A state-of-the-art crypto betting platform offering secure and transparent wagering. This solution features blockchain-powered transactions, multi-cryptocurrency support, and live updates for seamless user experiences. Designed for scalability and optimized for the competitive betting market.',
        arrowImg: ArrowRight,
        link: "/casestudies/crypto-betting-platform"
    },
    {
        img: DatingFI,
        title: 'Modern Dating App',
        desc: 'A modern dating app designed to connect people meaningfully. It includes video profiles, real-time chat, and advanced search filters to enhance user interaction. With robust security and a smooth interface, the app is crafted for global usability and growth.',
        arrowImg: ArrowRight,
        link: "/casestudies/dating-app"
    },
    {
        img: FantasyGameFI,
        title: 'Crypto Fantasy Game',
        desc: 'A unique fantasy gaming platform that combines sports and blockchain technology. Users can create fantasy teams, win tokenized rewards, and collect exclusive digital assets. With smart contracts ensuring fairness, the platform is built for enthusiastic players seeking engaging experiences.',
        arrowImg: ArrowRight,
        link: "/casestudies/crypto-football-fantasy-game"
    },
    {
        img: MlmWebsiteFI,
        title: 'MLM Website',
        desc: 'A powerful multi-level marketing website designed to simplify referral tracking and payout management. It offers intuitive user dashboards, automated commission systems, and in-depth reporting tools to support growing networks. Built with scalability and reliability in mind.',
        arrowImg: ArrowRight,
        link: "/casestudies/mlm-website"
    },
    {
        img: EcommerceWebsiteFI,
        title: 'E-commerce Platform',
        desc: 'A comprehensive e-commerce platform crafted for businesses of all sizes. Key features include easy-to-use product management, secure payment processing, and mobile optimization. With SEO-friendly designs, it’s geared toward boosting online visibility and increasing sales.',
        arrowImg: ArrowRight,
        link: "/casestudies/ecommerce-platform"
    },
    {
        img: LaunchpadFI,
        title: 'Smart Contract Launch Pad',
        desc: 'A professional launch pad for token projects, enabling transparent fundraising with built-in smart contract functionality. This platform ensures investor trust through secure transactions and real-time updates, making it the go-to choice for blockchain innovators.',
        arrowImg: ArrowRight,
        link: "/casestudies/launchpad"
    },
    {
        img: SchoolManagementFI,
        title: 'School Management System',
        desc: 'An all-in-one school management solution streamlining administrative processes. Features include attendance tracking, fee collection, and performance reporting. Built to enhance efficiency and promote seamless communication between teachers, students, and parents.',
        arrowImg: ArrowRight,
        link: "/casestudies/school-management-system"
    },
    // {
    //     img: 'CaseStudy8',
    //     title: 'Crypto Banking App',
    //     desc: 'A secure crypto banking solution offering digital wallets, crypto-to-fiat transactions, and seamless fund transfers. Designed to bridge traditional banking with blockchain technology, the app ensures fast, reliable, and secure financial management for users worldwide.',
    //     arrowImg: ArrowRight,
    //     link: "/CaseStudiesInner"
    // },
    // {
    //     img: 'CaseStudy9',
    //     title: 'Lottery & Raffles Platform',
    //     desc: 'A blockchain-based lottery and raffles platform offering secure, fair, and automated draws. With instant payouts and user-friendly navigation, it’s tailored for businesses looking to revolutionize traditional lotteries and drive user engagement.',
    //     arrowImg: ArrowRight,
    //     link: "/CaseStudiesInner"
    // }
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
                                    <Link to={card.link} className="d-flex justify-content-end mt-3">
                                        <img src={card.arrowImg} alt="link" />
                                    </Link>
                                    </div>
                                    <Link to={card.link} className="card-link"></Link>
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