import ArrowRight from "../../assets/arrow-right.svg"
import Pushkar from "../../assets/Pushkar.png"
import Sanjay from "../../assets/Sanjay.png"
import Rohit from "../../assets/Rohit.png"
import Shubham from "../../assets/Shubham.png"
import Nitish from "../../assets/Nitish.png"
import Akamsha from "../../assets/Akamsha.png"

const leadershipTeam = [
    {
        img: Nitish,
        title: 'Falcon',
        desc: 'Chief Technical Officer (CTO)',
        role: 'Leads IT strategy and technological innovation',
    },
    {
        img: Pushkar,
        title: 'Shadow',
        desc: 'Chief Executive Officer (CEO)',
        role: 'Drives company vision and IT service expansion',
    },
    {
        img: Shubham,
        title: 'Blaze',
        desc: 'Chief Marketing Officer (CMO)',
        role: 'Oversees IT service marketing and client acquisition',
    },
    {
        img: Rohit,
        title: 'Phantom',
        desc: 'Senior DevOps Engineer',
        role: 'Manages cloud infrastructure and CI/CD pipelines',
    },
    {
        img: Sanjay,
        title: 'Hunter',
        desc: 'Senior UX/UI Designer',
        role: 'Crafts user-centric interfaces for IT solutions',
    },
    {
        img: Akamsha,
        title: 'Raven',
        desc: 'Content Strategy Manager',
        role: 'Develops IT thought leadership and technical content',
    },
]

export default function LeadershipTeam() {
    return (
        <section className="leadership-team bg-circle-left mt-5 pt-5" aria-labelledby="leadership-heading">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <h2 id="leadership-heading" className="text-warning text-uppercase my-5">Our IT Leadership Team</h2>
                    </div>
                    <div className="col-lg-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                        <div className="row mt-3">
                            {leadershipTeam.map((leader, index) => (
                                <div className="col-lg-4 mb-4" key={index}>
                                    <article className="card bg-warning p-0 leader-card">
                                        <div style={{textAlign: "center", backgroundColor: "black"}}>
                                            <img src={leader.img} style={{height: 350 }} className="img-fluid" alt={`${leader.title} - ${leader.desc}`} />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="fw-bold text-uppercase text-dark">{leader.title}</h3>
                                            <p className="text-dark">{leader.desc}</p>
                                            <p className="text-dark text-four-lines">{leader.role}</p>
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