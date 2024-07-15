import AboutBanner from "../../assets/blockchain.png"
import { useNavigate } from "react-router-dom"

export default function aboutBanner() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                    <h4 className="text-warning text-uppercase">Leading Blockchain Service Provider</h4>
                    <p className="text-white mt-3">Our comprehensive Blockchain Development services are designed to empower
                        businesses, ensuring security, transparency, and efficiency throughout their digital
                        journey. Our team of Blockchain experts will guide you through every step,
                        ensuring a seamless and successful implementation of your Blockchain solutions.</p>
                    <button className="btn btn-warning px-4 py-2 fw-bold my-3" onClick={() => { navigate('/contact') }}>Contact Us Now!</button>
                </div>
                <div className="col-lg-6 my-5 pt-5 pb-5">
                    <div className="position-relative">
                        <img src={AboutBanner} className="img-fluid" alt="AI Face" />
                    </div>
                </div>
            </div>
        </div>
    )
}