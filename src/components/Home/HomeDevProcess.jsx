import Dev from "../../assets/dev.svg";

export default function devprocess() {
    return (
            <div className="bg-circle-right my-5" style={{paddingBlock:120}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">Evolution of Projects</p>
                            <hr className="border-white mt-1 mx-auto hr-x-small" />
                            <h4 className="text-warning text-uppercase mb-5">Project Development Process</h4>
                            <img src={Dev} alt="development process" className="w-100 mt-4 px-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="700" data-aos-once="true" />
                        </div>
                    </div>
                </div>
            </div>
    )
}