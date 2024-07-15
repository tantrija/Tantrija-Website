import ArrowRight from "../../assets/arrow-right.svg";
import Blockchain from "../../assets/blockchain-developer.svg";
import App from "../../assets/mobile-app-developer.svg";
import Web from "../../assets/web-developer.svg";
import Backend from "../../assets/backend-developer.svg";
import { useNavigate } from "react-router-dom";

export default function hiredeveloper() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row mt-5 px-5 developers position-relative">
        <div className="col-lg-3 mb-4" >
          <div className="card bg-warning p-4">
            <img src={Blockchain} alt="hire icon" />
            <h6 className="fw-medium text-uppercase text-dark mt-3 text-one-line">
              Blockchain
            </h6>
            <p className="text-dark text-three-lines">
              Our blockchain services include development on Ethereum and Hyperledger Besu, with expertise in Solidity and Chaincode.
            </p>
            <a href="#" className="d-flex justify-content-end mt-3">
              <img src={ArrowRight} alt="link" />
            </a>
            <a href="/blockchain" className="card-link"></a>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card bg-warning p-4">
            <img src={App} alt="hire icon" />
            <h6 className="fw-medium text-uppercase text-dark mt-3 text-one-line">
              Mobile App Development
            </h6>
            <p className="text-dark text-three-lines">
              We specialize in creating mobile apps for iOS and Android using Swift, Java, Kotlin, React Native, and Flutter.
            </p>
            <a href="#" className="d-flex justify-content-end mt-3">
              <img src={ArrowRight} alt="link" />
            </a>
            <a href="/mobile-development" className="card-link"></a>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card bg-warning p-4">
            <img src={Web} alt="hire icon" />
            <h6 className="fw-medium text-uppercase text-dark mt-3 text-one-line">
              Web App Development
            </h6>
            <p className="text-dark text-three-lines">
              Our team builds dynamic websites and web applications using HTML, CSS, JavaScript, React.js, Angular, and Vue.js.
            </p>
            <a href="#" className="d-flex justify-content-end mt-3">
              <img src={ArrowRight} alt="link" />
            </a>
            <a href="/web-development" className="card-link"></a>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card bg-warning p-4">
            <img src={Backend} alt="hire icon" />
            <h6 className="fw-medium text-uppercase text-dark mt-3 text-one-line">
              Games Development
            </h6>
            <p className="text-dark text-three-lines">
              We create games using Unity and Unreal Engine, along with C# and C++ for programming.
            </p>
            <a href="#" className="d-flex justify-content-end mt-3">
              <img src={ArrowRight} alt="link" />
            </a>
            <a href="/game-development" className="card-link"></a>
          </div>
        </div>
      </div>
    </div>
  );
}
