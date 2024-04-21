
import checkCircleIcon from "../../assets/check-circle-icon.svg"

const requirementsData = [
    {
        img: checkCircleIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        img: checkCircleIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        img: checkCircleIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        img: checkCircleIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
]

export default function caseStudiesInnerResults(){
    return (
        <div className="bg-dark-grey p-5 mt-5 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 m-auto" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <h4 className="text-warning text-uppercase">Results and Benefits</h4>
                        <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br/> labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        {requirementsData.map((card, index) => (
                            <div className="d-flex align-items-start gap-3 mb-4" key={index}>
                                <img src={card.img} alt="check" />
                                <p className="text-white mb-0">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}