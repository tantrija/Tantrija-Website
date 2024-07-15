import Globe from "../../assets/game.png"
import { useNavigate } from "react-router-dom"

export default function aboutBanner() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                    <h4 className="text-warning text-uppercase">Custom Game Development Services</h4>
                    <p className="text-white mt-3">Tantrija is a full-cycle Game Development company dedicated to bringing your
                        gaming vision to life. Our collaborative approach ensures that we not only meet
                        but exceed your expectations, delivering games that standout in the market.
                    </p>
                    <button className="btn btn-warning px-4 py-2 fw-bold my-3" onClick={() => { navigate('/contact') }}>Schedule a Call</button>
                </div>
                <div className="col-lg-6 my-5 pt-5 pb-5">
                    <div className="position-relative">
                        <img src={Globe} className="img-fluid" alt="AI Face" />
                    </div>
                </div>
            </div>
        </div>
    )
}