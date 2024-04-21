import ArrowRight from "../../assets/arrow-right.svg";
import Blockchain from "../../assets/blockchain-developer.svg";
import App from "../../assets/mobile-app-developer.svg";
import Web from "../../assets/web-developer.svg";
import Backend from "../../assets/backend-developer.svg";

export default function hiredeveloper() {
  return (
    <div className="container-fluid">
      <div className="row mt-5 px-5 developers position-relative">
        <div className="col-lg-3 mb-4">
          <div className="card bg-warning p-4">
            <img src={Blockchain} alt="hire icon" />
            <h6 className="fw-medium text-uppercase text-dark mt-3 text-one-line">
              Blockchain Developer
            </h6>
            <p className="text-dark text-three-lines">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="d-flex justify-content-end mt-3">
              <img src={ArrowRight} alt="link" />
            </a>
            <a href="#" className="card-link"></a>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card bg-warning p-4">
            <img src={App} alt="hire icon" />
            <h6 className="fw-medium text-uppercase text-dark mt-3 text-one-line">
              Mobile App Developer
            </h6>
            <p className="text-dark text-three-lines">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="d-flex justify-content-end mt-3">
              <img src={ArrowRight} alt="link" />
            </a>
            <a href="#" className="card-link"></a>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card bg-warning p-4">
            <img src={Web} alt="hire icon" />
            <h6 className="fw-medium text-uppercase text-dark mt-3 text-one-line">
              Web Developer
            </h6>
            <p className="text-dark text-three-lines">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="d-flex justify-content-end mt-3">
              <img src={ArrowRight} alt="link" />
            </a>
            <a href="#" className="card-link"></a>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card bg-warning p-4">
            <img src={Backend} alt="hire icon" />
            <h6 className="fw-medium text-uppercase text-dark mt-3 text-one-line">
              Backend Developer
            </h6>
            <p className="text-dark text-three-lines">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="d-flex justify-content-end mt-3">
              <img src={ArrowRight} alt="link" />
            </a>
            <a href="#" className="card-link"></a>
          </div>
        </div>
      </div>
    </div>
  );
}
