import DevCompany from "../../assets/dev-company.jpg"

export default function solutionsWhyUs(){
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-6 my-5 pe-4">
                    <img src={DevCompany} className="img-fluid rounded" alt="AI Face" />
                </div>
                <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                    <p className="text-uppercase text-white">Why Choose Us</p>
                    <hr className="border-white mt-1 hr-x-small" />
                    <h4 className="text-warning text-uppercase">Why Choose a Dedicated NFT Development Company?</h4>
                    <p className="text-white mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="d-flex align-items-center gap-4">
                        <a target="_blank" href="https://wa.me/7420969224" className="btn btn-warning px-4 py-2 fw-bold my-3">Connect On Whatsapp</a>
                        <a target="_blank" href="https://t.me/Tantrija" className="btn btn-outline-light px-4 py-2 fw-bold my-3">Connect On Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}