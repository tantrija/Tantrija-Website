import chr from "../../assets/kilix-attractive-character.png"
import wallet from "../../assets/kilix-crypto-wallet.png"
import game from "../../assets/kilix-game-assest.png"
import dataSafety from "../../assets/kilix-data-safety.png"
import rewards from "../../assets/kilix-loyalty-rewards.png"
import tokens from "../../assets/kilix-token-standards.png"


const portfolioChallangesData = [
    {
        img: chr,
        title: "Attractive Characters",
    },
    {
        img: wallet,
        title: "Attractive Characters",
    },
    {
        img: game,
        title: "In-Game Assets",
    },
    {
        img: dataSafety,
        title: "100% DATA SAFETY",
    },
    {
        img: rewards,
        title: "LOYALTY REWARDS",
    },
    {
        img: tokens,
        title: "TOKEN STANDARDS",
    },
]

export default function portfolioFeatures() {
    return (
        <div className="bg-dark-grey p-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-4">
                        <h4 className="text-warning text-uppercase">Advance Feature</h4>
                    </div>
                    <div className="col-lg-8">
                        <div className="row mt-4">
                            {portfolioChallangesData.map((card, index) => (
                                <div className="col-lg-4 mb-4" key={index} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                                    <div className="card bg-dark p-4 text-center">
                                        <img src={card.img} className="my-3" alt="img" />
                                        <p className="text-uppercase text-white px-5">{card.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}