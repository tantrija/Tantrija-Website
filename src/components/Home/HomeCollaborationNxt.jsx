import { Link } from "react-router-dom";

export default function homeaboutnxt(){
    return (
        <div className="vh-100 bg-warning d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row mt-5 flex-column-reverse flex-lg-row">
                    <div className="col-lg-12 text-center m-auto">
                      <h2 className="text-dark"> 
                            <div className="animation-div">
                                <div data-aos="fade-in" data-aos-easing="linear" data-aos-duration="200" data-aos-delay="300" data-aos-once="true">Ready to Transform<br/> your Industry?</div>
                            </div> 
                        </h2>
                        <Link className="btn btn-outline-dark light-var px-5 py-3 fs-5 fw-bold my-3" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="600" data-aos-once="true" to={"/contact"}>Get In Touch!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}