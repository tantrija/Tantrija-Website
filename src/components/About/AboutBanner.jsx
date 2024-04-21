import AboutBannerImg from "../../assets/aboutBannerimg.png";

export default function aboutServices() {
    return (
        <div className="container">
            <div className="row mt-5 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="800" data-aos-once="true">
                <h4 className="text-warning text-uppercase">About Us</h4>
                <p className="text-white mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                <img src={AboutBannerImg} className="img-fluid" alt="" />
                <button className="btn btn-warning px-4 py-2 fw-bold my-3 fit-width mx-auto">Talk to Our Experts</button>
            </div>
        </div>
    )
}