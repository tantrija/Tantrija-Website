import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import User1 from "../../assets/user1.jpg"
import QuoteImg from "../../assets/quote.png"

const testimonialsData = [
    {
        "userImg": "ShwetankImg",
        "quoteImg": QuoteImg,
        "userName": "Bluemingo, Director",
        "company": "Bluemingo Tech Pvt. Ltd",
        "title": "Wordpress Website Deveopment",
        "desc": "Our new website is incredible! They completely understood our manufacturing business and created something that looks professional and works perfectly. Our online presence has never been stronger. We've worked with other web teams before, but these folks just get it right. They turn your vision into reality."
    },
    {
        "userImg": "AliImg",
        "quoteImg": QuoteImg,
        "userName": "Ali, Founder",
        "company": "CACTUS",
        "title": "Logo Designing",
        "desc": "They really got what our brand is about. The design feels modern and memorable - it's exactly what we wanted. We've tried working with other designers before, but this team just gets it. If you need a logo that truly speaks your brand's language, they're the ones to call."
    },
    {
        "userImg": "SamuelMillerImg",
        "quoteImg": QuoteImg,
        "userName": "Sam Miller, Founder",
        "company": "The Fineart Ledger",
        "title": "Blockchain Integration",
        "desc": "Their blockchain work is a game-changer for us. They built an NFT marketplace that's smooth, secure, and packed with cool features. Our entire trading platform feels transformed. I've worked with lots of tech teams, and these folks are definitely something special. They don't just build solutions - they create experiences."
    },
    {
        "userImg": "EdwinHoImg",
        "quoteImg": QuoteImg,
        "userName": "Edwin Ho, CFO",
        "company": "Hedger Pay",
        "title": "Backend Deveopment",
        "desc": "These developers are absolute pros. They built us a backend system that's rock-solid and super scalable. Their support is lightning-fast, and our platform's performance has improved dramatically. After shopping around, I can confidently say they're in a league of their own. They turn technical challenges into elegant solutions."
    },
    {
        "userImg": "DanielZanggerImg",
        "quoteImg": QuoteImg,
        "userName": "Daniel Zangger, CEO",
        "company": "Vocal Workout of The Day",
        "title": "Mobile Application",
        "desc": "Our mobile app is a dream come true! It looks amazing and works even better. User engagement has gone through the roof since they took over. We've tried other developers, but none come close to their blend of design and functionality. They truly understand what makes an app click."
    },
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
                                            <p className="text-uppercase text-one-line">{card.company}</p>
                                        </div>
                                    </div>
                                    <img src={card.quoteImg} width={50} alt="quote" />
                                </div>
                                <h6 className="fw-medium text-uppercase text-dark mt-3">{card.title}</h6>
                                <p className="text-dark">{card.desc}</p>
                                {/* <a href="#" className="card-link"></a> */}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
