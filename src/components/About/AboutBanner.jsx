import { useNavigate } from "react-router-dom";
import AboutBannerImg from "../../assets/aboutBannerimg.png";

export default function AboutServices() {
    const navigate = useNavigate();

    return (
        <section className="about-services container" aria-label="About Tantrija IT Services">
            <div className="row mt-5 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="800" data-aos-once="true">
                <h1 className="text-warning text-uppercase">Tantrija: <br />Your IT Solutions Partner</h1>
                <p className="text-white mt-3 mb-4">Expert IT consultants transforming your digital business vision into reality. We specialize in custom software development, cloud solutions, and cybersecurity.</p>
                <img src={AboutBannerImg} className="img-fluid" alt="Tantrija IT Services Team" width="1200" height="600" />
                <button className="btn btn-warning px-4 py-2 fw-bold my-3 fit-width mx-auto" onClick={() => {navigate('/contact')}} aria-label="Contact Tantrija IT Experts">
                    Consult Our IT Experts
                </button>
            </div>
        </section>
    )
}