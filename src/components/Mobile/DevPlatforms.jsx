import SWIFT from "../../assets/swift.svg"
import JAVA from "../../assets/java.svg"
import REACTNATIVE from "../../assets/react-native-yellow.svg"
import ANDROID from "../../assets/android.svg"
import FLUTTER from "../../assets/flutter.svg"

const connectData = [
    {
        img: SWIFT,
        title: 'Swift',
    },
    {
        img: JAVA,
        title: 'Java',
    },
    {
        img: REACTNATIVE,
        title: 'React Native',
    },
    {
        img: ANDROID,
        title: 'Android Studio',
    },
    {
        img: FLUTTER,
        title: 'Flutter',
    },
]

export default function aboutConnect(){
    return (
        <div className="bg-dark-grey p-5 text-center mt-5 pt-4">
            <div className="container pt-5">
                <h6 className="fw-bold text-uppercase text-warning mt-3">Technologies We Use</h6>
                <p className="text-white text-center">We employ the latest tools and technologies to deliver exceptional results.<br></br> Our
                expertise ensures your project is at the forefront of innovation.</p>
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