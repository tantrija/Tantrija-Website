import ourSolutions from "../../assets/ourSolutions.png"

export default function caseStudiesInnerSolutions() {
    return(
        <div className="container text-center pt-4 mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <h4 className="text-warning text-uppercase">Our Solution</h4>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                </div>
                <img src={ourSolutions} className="img-fluid solutions mt-4 mb-5" alt="solutions" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true" />
            </div>
        </div>
    )
}