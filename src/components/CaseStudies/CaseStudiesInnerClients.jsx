import reactNative from "../../assets/react.png"
import reactJS from "../../assets/unity-react-js.png"
import nodeJS from "../../assets/unity-node-js.png"
import mongoDB from "../../assets/unity-mongo-db.png"
import figma from "../../assets/unity-figma.png"
import photoShop from "../../assets/unity-photoshop.png"

const clientsData = [
    {
        img: reactNative,
        title: 'React Native',
    },
    {
        img: reactJS,
        title: 'React JS',
    },
    {
        img: nodeJS,
        title: 'Node JS',
    },
    {
        img: mongoDB,
        title: 'Mongo DB',
    },
    {
        img: figma,
        title: 'Figma',
    },
    {
        img: photoShop,
        title: 'Adobe Photoshop',
    },
]

export default function caseStudiesInnerClients(){
    return(
        <div className="container pt-4 mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                <p className="text-uppercase text-white">Technology Stack</p>
                    <hr className="border-white mt-1 mx-auto hr-x-small" />
                    <h4 className="text-warning text-uppercase">Our Solution with trending<br/> tech stacks for our client</h4>
                    <div className="row mt-4 justify-content-center card-icon">
                    {clientsData.map((card, index) => (
                        <div className="col-lg-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <div className="bg-transparent border border-light p-5 my-4 mx-3 position-relative d-flex align-items-center justify-content-center flex-wrap mb-4" key={index}>
                            <div>
                                <img src={card.img} alt="tech" />
                                <p className="text-uppercase mb-0 mt-2 text-white">{card.title}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}
