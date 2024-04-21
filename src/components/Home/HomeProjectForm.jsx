export default function projectform() {
    return (
            <div className="bg-circle-right mt-5 pt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">What are You Waiting For</p>
                            <hr className="border-white mt-1 mx-auto hr-x-small" />
                            <h4 className="text-warning text-uppercase">Let's Talk About Project</h4>
                            <div className="row my-4">
                                <div className="col-lg-6 mb-4">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <input type="email" className="form-control" placeholder="Email Address" />
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <textarea name="" id="" cols="30" rows="3" className="form-control" placeholder="Something about your project..."></textarea>
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                                        <div className="mb-3 text-start d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input mt-0" id="exampleCheck1" />
                                            <label className="form-check-label text-muted" htmlFor="exampleCheck1">I have read and accepted the <a href="#" className="border-bottom">Terms & Conditions</a> and <a href="#" className="border-bottom">Privacy Policy</a>.</label>
                                        </div>
                                        <button className="btn btn-warning px-4 py-2 fw-bold my-3">
                                            Start Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}