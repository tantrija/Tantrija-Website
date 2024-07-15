import UNITY from "../../assets/unity-yellow.svg"
import UNREAL from "../../assets/unrealengine-yellow.svg"
import WEBGL from "../../assets/webgl-yellow.svg"
import VISUALSTUDIO from "../../assets/visual-studio-yellow.svg"

const connectData = [
    {
        img: UNITY,
        title: 'Unity',
    },
    {
        img: UNREAL,
        title: 'Unreal Engine',
    },
    {
        img: WEBGL,
        title: 'WebGL',
    },
    {
        img: VISUALSTUDIO,
        title: 'Visual Studio',
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