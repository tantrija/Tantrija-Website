import ArrowRight from "../../assets/arrow-right.svg"
import Ishan from "../../assets/ishan-co.jpg"
import Sanjay from "../../assets/Sanjay.png"
import Rohit from "../../assets/Rohit.png"
import Shubham from "../../assets/Shubham.png"
import Nitish from "../../assets/nitish-ceo.jpg"
import Akamsha from "../../assets/Akamsha.png"
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const leadershipTeam = [
    {
        img: Nitish,
        title: 'Nitish Beejawat',
        desc: 'Chief Executive Officer (CEO) & Founder',
        role: 'As the driving force behind Tantrija Enterprises, Nitish is a visionary leader blending innovation and execution. He founded the company to revolutionize the IT service landscape, delivering unmatched blockchain, Web3, and mobile solutions. Nitish’s expertise and strategic foresight ensure that every project is not just successful but groundbreaking, setting new industry standards.',
        linkedin: "https://www.linkedin.com/in/nitish-beejawat",
        email: "nitish@tantrija.com"
    },
    {
        img: Ishan,
        title: 'Ishan Shrivastava',
        desc: 'Co-Founder',
        role: 'As the Co-Founder of Tantrija Enterprises, Ishan is the cornerstone of the company’s expansion and growth. With a keen eye for opportunity and an unwavering commitment to excellence, he ensures the company’s solutions remain ahead of the curve. Ishan’s leadership inspires teams to innovate fearlessly while delivering exceptional value to clients worldwide.',
        linkedin: "https://www.linkedin.com/in/ishan-shrivastava-74434b94/",
        email: "ishan@tantrija.com"
    },
    {
        img: Shubham,
        title: 'Blaze',
        desc: 'Chief Marketing Officer (CMO)',
        role: 'As the Chief Marketing Officer of Tantrija Enterprises, Blaze ignites the company’s brand presence and drives client engagement strategies. With a passion for storytelling and a knack for innovation, Blaze crafts impactful marketing campaigns, fosters strong client relationships, and ensures Tantrija stands out in the competitive tech landscape. Blaze’s vision fuels growth by connecting cutting-edge IT solutions to the right audiences.',
        email: "marketing@tantrija.com"
    },    
    // {
    //     img: Rohit,
    //     title: 'Phantom',
    //     desc: 'Senior DevOps Engineer',
    //     role: 'Manages cloud infrastructure and CI/CD pipelines',
    // },
    // {
    //     img: Sanjay,
    //     title: 'Hunter',
    //     desc: 'Senior UX/UI Designer',
    //     role: 'Crafts user-centric interfaces for IT solutions',
    // },
    // {
    //     img: Akamsha,
    //     title: 'Raven',
    //     desc: 'Content Strategy Manager',
    //     role: 'Develops IT thought leadership and technical content',
    // },
]

export default function LeadershipTeam() {
    return (
        <section className="leadership-team bg-circle-left mt-5 pt-5" aria-labelledby="leadership-heading">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <h2 id="leadership-heading" className="text-warning text-uppercase my-5">Team</h2>
                    </div>
                    <div className="col-lg-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                        <div className="row mt-3">
                            {leadershipTeam.map((leader, index) => (
                                <div className="col-lg-4 mb-4" key={index}>
                                    <article className="card bg-warning p-0 leader-card" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="500">
                                        <div style={{ textAlign: "center", backgroundColor: "black" }}>
                                            <img src={leader.img} style={{ height: 350 }} className="img-fluid" alt={`${leader.title} - ${leader.desc}`} />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="fw-bold text-uppercase text-dark">{leader.title}</h3>
                                            <p className="text-dark">{leader.desc}</p>
                                            <p className="text-dark">{leader.role}</p>
                                            <div className="d-flex justify-content-between mt-3">
                                                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                                                    <FaLinkedin className="me-2" /> LinkedIn
                                                </a>
                                                <a href={`mailto:${leader.email}`} className="btn btn-outline-dark">
                                                    <FaEnvelope className="me-2" /> Contact
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}