import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

export default function homebanner() {
  const navigate = useNavigate();

  return (
    <div className="container vh-80">
      <div className="py-5 text-center">
        <p className="text-center text-uppercase text-white mb-4" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          Digital Innovation
        </p>
        <hr className="border-white mt-1 mx-auto hr-small" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" />
        <h1 className="text-center text-white text-uppercase fw-bold animation-div mt-4">
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="1200" data-aos-once="true">Driving Business Growth with</div>
        </h1>
        <h1 className="text-center text-border-warning text-uppercase fw-bold py-sm-2 animated-text animation-div" >
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="1500" data-aos-once="true">
            <ReactTyped
              strings={[
                "Innovative",
                "Efficient",
                "Reliable"
              ]}
              typeSpeed={200}
              backSpeed={100}
              loop
            >
            </ReactTyped>
          </div>
        </h1>
        <h1 className="text-center text-white text-uppercase fw-bold animation-div">
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="1800" data-aos-once="true">
            Tech Solutions
          </div>
        </h1>
        <h6 className="text-center mt-4 text-white opacity-6 w-75 mx-auto" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="2300" data-aos-once="true">
          Achieve your digital goals with our transformative tech solutions. <br />
          We help you simplify your journey, amplify growth, <br />
          and steer your business towards a brighter tomorrow.
        </h6>
        <button onClick={() => (navigate('/contact'))} className="btn btn-warning px-4 py-2 fw-bold my-3" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="2300" data-aos-once="true">
          Start Building
        </button>
      </div>
    </div>
  );
}
