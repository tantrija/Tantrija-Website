import Globe from "../../assets/WebDevelopment.png"
import { useNavigate } from "react-router-dom"

export default function aboutBanner() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                    <h4 className="text-warning text-uppercase">Ruling the Web World with Exceptional Web Solutions!</h4>
                    <p className="text-white mt-3">Web Development is the process of building and maintaining websites and web
                        applications which involves various tasks such as web design, content creation,
                        programming, and network security to ensure a seamless user experience. A
                        reliable Web Development company can provide all these services and ensure your
                        online presence is secure, user-friendly, and tailored to your needs.
                    </p>
                    <button className="btn btn-warning px-4 py-2 fw-bold my-3" onClick={() => { navigate('/contact') }}>Schedule a Call                        </button>
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