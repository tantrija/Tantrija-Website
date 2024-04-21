import portfoliokilix from "../../assets/portfolio-kilix-banner.png"

export default function portfolioInnerBanner(){
    return (
        <div className="bg-portfolio d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 m-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <h1 className="text-warning text-uppercase">KILIX</h1>
                        <p className="text-white mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                    </div>
                    <div className="col-xl-6">
                    <img src={portfoliokilix} className="img-fluid d-lg-none" alt="AI Face" />
                    </div>
                </div>
            </div>
        </div>
    )
}