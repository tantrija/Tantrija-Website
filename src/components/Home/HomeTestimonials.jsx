import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import User1 from "../../assets/user1.jpg"
import QuoteImg from "../../assets/quote.png"

const testimonialsData = [
    {
        "userImg": "AliImg",
        "quoteImg": QuoteImg,
        "userName": "Ali",
        "company": "CACTUS",
        "title": "Logo Designing",
        "desc": "Exceptional logo design service. Perfectly captured our brand essence. Delivered a sleek, memorable logo that truly stands out. Highly recommended!"
    },
    {
        "userImg": "SamuelMillerImg",
        "quoteImg": QuoteImg,
        "userName": "Sam Miller",
        "company": "The Fineart Ledger",
        "title": "Blockchain Integration",
        "desc": "Outstanding NFT marketplace development. Deep blockchain expertise evident. User-friendly platform with innovative features. Boosted our trading immensely."
    },
    {
        "userImg": "DanielZanggerImg",
        "quoteImg": QuoteImg,
        "userName": "Daniel Zangger",
        "company": "Vocal Workout of The Day",
        "title": "Mobile Application",
        "desc": "Impressive mobile app creation. Intuitive design meets flawless functionality. Significantly increased user engagement and retention. A game-changer!"
    },
    {
        "userImg": "EdwinHoImg",
        "quoteImg": QuoteImg,
        "userName": "Edwin Ho",
        "company": "Hedger Pay",
        "title": "Backend Deveopment",
        "desc": "Excellent backend development and support. Robust, scalable solutions. Quick response to issues. Significantly improved our system's performance and reliability."
    }
]

export default function testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                    <p className="text-uppercase text-white">Client Say</p>
                    <hr className="border-white mt-1 mx-auto hr-x-small" />
                    <h4 className="text-warning text-uppercase">Our customer reviews</h4>
                </div>
                <div className="col-lg-12 text-center mb-5" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                    <Slider className="text-start mt-3 mb-5" {...settings}>
                        {testimonialsData.map((card, index) => (
                            <div className="card bg-warning p-4 mb-3" key={index}>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        {/* <img src={card.userImg} className="userthumb" alt="user" /> */}
                                        <div>
                                            <h6 className="text-dark text-uppercase fw-bold mb-0 mt-2">{card.userName}</h6>
                                            {/* <p className="text-uppercase text-one-line">{card.company}</p> */}
                                        </div>
                                    </div>
                                    <img src={card.quoteImg} width={50} alt="quote" />
                                </div>
                                <h6 className="fw-medium text-uppercase text-dark mt-3">{card.title}</h6>
                                <p className="text-dark text-five-lines">{card.desc}</p>
                                <a href="#" className="card-link"></a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
