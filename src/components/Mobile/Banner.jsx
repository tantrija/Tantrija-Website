import Globe from "../../assets/MobileDevelopment.png"
import { useNavigate } from "react-router-dom"

export default function aboutBanner() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                    <h4 className="text-warning text-uppercase">App-solutely Brilliant Next-Gen Mobile Apps!</h4>
                    <p className="text-white mt-3">Mobile App Development is the process of creating software applications that run
                        on mobile devices like smartphones and tablets. The process involves designing
                        user interfaces, coding the app functionality, testing the app for usability and
                        performance, and deploying the app. The goal is to create apps that are engaging,
                        user-friendly, and meet the needs of the target audience.
                    </p>
                    <button className="btn btn-warning px-4 py-2 fw-bold my-3" onClick={() => { navigate('/contact') }}>Schedule a Call </button>
                </div>
                <div className="col-lg-6 my-5 pt-5 pb-5">
                    <div className="position-relative">
                        <img src={Globe} className="img-fluid" alt="AI Face" />
                    </div>
                </div>
            </div>
        </div>
    )
}