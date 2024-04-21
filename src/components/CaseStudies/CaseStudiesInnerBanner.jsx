import bankingApp from "../../assets/bankingApp.png"

export default function caseStudiesInnerBanner(){
    return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <h1 className="text-warning text-uppercase">Digital<br/> Banking App</h1>
                        <p className="text-white mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-end">
                            <img src={bankingApp} className="img-fluid bankingBanner" alt="AI Face" />
                        </div>
                    </div>
                </div>
            </div>
    )
}