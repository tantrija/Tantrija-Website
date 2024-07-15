import transparancy from "../../assets/transparancy-icon.svg"
import passion from "../../assets/passion-icon.svg"
import empowerment from "../../assets/empowerment-icon.svg"
import collaboration from "../../assets/collaboration-icon.svg"
import customerFocus from "../../assets/customer-focus-icon.svg"

const believeData = [
    {
        img: transparancy,
        title: 'Innovation',
        desc: 'We believe in the power of innovation to drive progress and shape the future. We constantly challenge ourselves to think differently, explore new ideas, and push the boundaries of whats possible.'
    },
    {
        img: passion,
        title: 'Integrity',
        desc: 'Integrity is the foundation of everything we do. We uphold honesty, ethics, and transparency in all our endeavors, ensuring that our actions align with our values at every turn.'
    },
    {
        img: empowerment,
        title: 'Empowerment',
        desc: 'We empower our team members to take initiative, make decisions, and drive positive change. By fostering a culture of empowerment, we enable personal and professional growth, leading to greater innovation and success.'
    },
    {
        img: collaboration,
        title: 'Collaboration',
        desc: 'We believe that the foundation of innovation and success is built on collaboration. We foster a culture where teamwork, open communication, and shared goals drive our achievements. It is a core value that defines how we operate.. '
    },
    {
        img: customerFocus,
        title: 'Customer Focus',
        desc: 'Our customers are at the heart of our business. We are dedicated to understanding their needs, exceeding their expectations, and building long-lasting relationships based on trust and mutual respect.'
    },
]

export default function believe () {
    return (
        <div className="p-5 bg-dark-grey mt-5">
            <div className="container pt-4 pb-5">
                <div className="row">
                    <div className="col-lg-4 m-auto">
                <h4 className="text-warning text-uppercase mb-0 mt-5">Our Core Values</h4>
                    </div>
                    {believeData.map((card, index) => (
                    <div className="col-lg-4 mt-4" key={index} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <div className="card p-4 bg-dark">
                            <img src={card.img} width={30} height={30} alt="tech-icon" />
                            <h6 className="fw-medium text-uppercase text-white mt-3 title-short">{card.title}</h6>
                            <p className="text-white">{card.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}