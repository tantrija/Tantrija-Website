import { useNavigate } from "react-router-dom"

export default function aboutConnect() {
    const navigate = useNavigate();

    return (
        <div className="bg-dark-grey p-5 text-center mt-5" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
            <h6 className="fw-bold text-uppercase text-warning mt-3">Looking for Reliable Blockchain Solutions? Tantrija is Here to Help.</h6>
            <div className="d-flex justify-content-center flex-wrap gap-4">
                <button className="btn btn-warning px-4 py-2 fw-bold my-3" onClick={() => {navigate('/contact')}}>Contact Us!</button>
            </div>
        </div>
    )
}