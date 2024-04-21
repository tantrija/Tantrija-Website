import uk from "../../assets/uk.png"
import taj from "../../assets/taj.png"

export default function caseStudiesBanner() {
    return (
        <div className="container">
            <form action="">
                <div className="row mt-5 text-center justify-content-center mb-5" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                    <div className="col-lg-12 mb-4">
                        <h1 className="text-warning text-uppercase">Nice To Meet You!</h1>
                        <p className="text-white mt-3 mb-4">If you are looking for redesigning an existing app/website or building one from the<br/> scratch, we have the expertise to convert your dream into reality.</p>
                    </div>
                    <div className="col-lg-8 mb-4">
                        <input type="text" className="form-control bg-transparent" placeholder="Name" required />
                    </div>
                    <div className="col-lg-8 mb-4">
                        <input type="email" className="form-control bg-transparent" placeholder="Email" required />
                    </div>
                    <div className="col-lg-8 mb-4">
                        <input type="tel" className="form-control bg-transparent" placeholder="Phone" required />
                    </div>
                    <div className="col-lg-8 mb-4">
                        <textarea className="form-control bg-transparent" rows={4} placeholder="Your project description" required />
                    </div>
                    <div className="col-lg-8 mb-4 text-end">
                        <button className="btn btn-warning px-4 py-2 fw-bold" type="submit">Submit</button>
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                    <div className="card p-5 bg-dark-grey">
                        <div className="row align-items-end">
                            <div className="col-lg-7 pe-0">
                                <h4 className="text-warning fw-bold text-uppercase">UK</h4>
                                <h6 className="text-white fw-bold text-uppercase">Blockchain Solutions</h6>
                                <p className="text-white">46, Leighton Road, <br/>London, England<br/> W13 9EH</p>
                                <a href="#" className="text-warning fw-bold">+1-844-899-0003</a>
                            </div>
                            <div className="col-lg-5 p-0">
                                <img src={uk} className="img-fluid" alt="uk" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                    <div className="card p-5 bg-dark-grey">
                        <div className="row align-items-end">
                            <div className="col-lg-7 pe-0">
                                <h4 className="text-warning fw-bold text-uppercase">UK</h4>
                                <h6 className="text-white fw-bold text-uppercase">Blockchain Solutions</h6>
                                <p className="text-white">F-264, PHASE - 8A, <br/>Industrial Area, SAS Nagar,
                                <br/>Punjab, 160062</p>
                                <a href="#" className="text-warning fw-bold">+1-844-899-0003</a>
                            </div>
                            <div className="col-lg-5 p-0">
                                <img src={taj} className="img-fluid" alt="uk" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}