import Dev from "../../assets/dev.svg";

export default function devprocess() {
    return (
            <div className="bg-circle-right mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">Evolution of Projects</p>
                            <hr className="border-white mt-1 mx-auto hr-x-small" />
                            <h4 className="text-warning text-uppercase">Project Development Process</h4>
                            <img src={Dev} alt="development process" className="w-75 mt-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="700" data-aos-once="true" />
                        </div>
                    </div>
                </div>
            </div>
    )
}