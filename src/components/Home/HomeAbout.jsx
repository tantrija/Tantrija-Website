import AiFace from "../../assets/ai-face.png"
import FaceLight from "../../assets/warning-light.png"

export default function homeabout(){
    return (
            <div className="container">
                <div className="row mt-5 flex-column-reverse flex-lg-row">
                    <div className="col-lg-6 my-5">
                        <div className="position-relative">
                            <img src={AiFace} className="img-fluid text-start" alt="AI Face" />
                            <img src={FaceLight} className="face-light position-absolute" alt="face light" />
                        </div>
                    </div>
                    <div className="col-lg-6 m-auto">
                        <p className="text-uppercase text-white" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="500" data-aos-once="true">Know About Us</p>
                        <hr className="border-white mt-1 hr-x-small" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="500" data-aos-once="true" />
                        <h4 className="text-warning text-uppercase"> 
                            <div className="animation-div">
                                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="700" data-aos-once="true"> BLOCHAIN - your technology</div>
                            </div> 
                            <div className="animation-div">
                                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="900" data-aos-once="true">consulting partner to</div> 
                            </div>
                            <div className="animation-div">
                                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="1100" data-aos-once="true">empower your business to</div> 
                            </div>
                            <div className="animation-div">
                                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="1300" data-aos-once="true">the next level!</div>
                            </div>
                        </h4>
                        <p className="text-white mt-3" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="2300" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className="btn btn-outline-light px-4 py-2 fw-bold my-3" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="2300" data-aos-once="true">Learn More</button>
                    </div>
                </div>
            </div>
    )
}