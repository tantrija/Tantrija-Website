import { useNavigate } from "react-router-dom";
import AboutBannerImg from "../../assets/aboutBannerimg.png";

export default function aboutServices() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row mt-5 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="800" data-aos-once="true">
                <h4 className="text-warning text-uppercase">We Are Tantrija</h4>
                <p className="text-white mt-3 mb-4">We are a team of passionate experts dedicated to making your business dream
                digitally possible.</p>
                <img src={AboutBannerImg} className="img-fluid" alt="" />
                <button className="btn btn-warning px-4 py-2 fw-bold my-3 fit-width mx-auto" onClick={() => {navigate('/contact')}}>Talk to Our Experts</button>
            </div>
        </div>
    )
}