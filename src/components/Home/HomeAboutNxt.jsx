import AiFace from "../../assets/ai-face.png"
import FaceLight from "../../assets/warning-light.png"
import { Link } from "react-router-dom";

export default function homeaboutnxt(){
    return (
        <div className="vh-100 bg-warning d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row mt-5 flex-column-reverse flex-lg-row">
                    {/* <div className="col-lg-6 my-5">
                        <div className="position-relative">
                            <img src={AiFace} className="img-fluid text-start" alt="AI Face" />
                            <img src={FaceLight} className="face-light position-absolute" alt="face light" />
                        </div>
                    </div> */}
                    <div className="col-lg-12 text-center m-auto">
                      <h2 className="text-dark"> 
                            <div className="animation-div">
                                <div data-aos="fade-in" data-aos-easing="linear" data-aos-duration="200" data-aos-delay="300" data-aos-once="true">Ready to reshape<br/> your business?</div>
                            </div> 
                        </h2>
                        <Link className="btn btn-outline-dark light-var px-5 py-3 fs-5 fw-bold my-3" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="600" data-aos-once="true" to={"/Contact"}>Let's Talk!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}