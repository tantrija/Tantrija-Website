import AboutBanner from "../../assets/aboutBanner.png"

export default function aboutBanner(){
    return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <h4 className="text-warning text-uppercase">Leading Web3 Consulting Company - Discover The Possibilities</h4>
                        <p className="text-white mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                        <button className="btn btn-warning px-4 py-2 fw-bold my-3">Request a free demo</button>
                    </div>
                    <div className="col-lg-6 my-5">
                        <div className="position-relative">
                            <img src={AboutBanner} className="img-fluid" alt="AI Face" />
                        </div>
                    </div>
                </div>
            </div>
    )
}