import { ReactTyped } from "react-typed";

export default function homebanner() {
  return (
      <div className="container">
        <div className="py-5 text-center">
          <p className="text-center text-uppercase text-white" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
            Software Development Company
          </p>
          <hr className="border-white mt-1 mx-auto hr-small" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" />
          <h1 className="text-center text-white text-uppercase fw-bold animation-div">
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="1200" data-aos-once="true">Empowering With</div>  
          </h1>
          <h1 className="text-center text-border-warning text-uppercase fw-bold py-sm-2 animated-text animation-div" >
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="1500" data-aos-once="true">
            <ReactTyped
              strings={[
                "web3",
                "Blockchain",
                "AI",
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
            Innovation
            </div>
          </h1>
          <h6 className="text-center text-white w-75 mx-auto" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="2300" data-aos-once="true">
            We are a team of software engineers, data scientists, business
            analysts, and designers sharing a passion for innovative
            technologies and providing seamless customer experience.
          </h6>
          <button className="btn btn-warning px-4 py-2 fw-bold my-3" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="2300" data-aos-once="true">
            Start Project
          </button>
        </div>
      </div>
  );
}
