import HTML5 from "../../assets/html5-yellow.svg"
import REACT from "../../assets/react-yellow.svg"
import ANGULAR from "../../assets/angular-yellow.svg"
import EXPRESS from "../../assets/expressjs-yellow.svg"
import PHP from "../../assets/php-yellow.svg"
import NODEJS from "../../assets/nodejs-yellow.svg"
import eos from "../../assets/eos.svg"

const connectData = [
    {
        img: HTML5,
        title: 'HTML5',
    },
    {
        img: REACT,
        title: 'React.js',
    },
    {
        img: ANGULAR,
        title: 'Angular',
    },
    {
        img: NODEJS,
        title: 'Node.js',
    },
    {
        img: PHP,
        title: 'PHP',
    },
    {
        img: EXPRESS,
        title: 'Express.js',
    },
]

export default function aboutConnect(){
    return (
        <div className="bg-dark-grey p-5 text-center mt-5 pt-4">
            <div className="container pt-5">
                <h6 className="fw-bold text-uppercase text-warning mt-3">Our Game Development Technologies</h6>
                <p className="text-white text-center">Join us on a journey where imagination knows no bounds, and every pixel tells a story.</p>
                <div className="d-flex justify-content-center flex-wrap gap-4 mt-4 ">
                    {connectData.map((card, index) => (
                        <div className="bg-dark tech-card position-relative d-flex align-items-center justify-content-center flex-wrap mb-4" key={index} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <div>
                                <img src={card.img} alt="tech" />
                                <p className="text-uppercase mb-0 mt-2 text-white">{card.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}