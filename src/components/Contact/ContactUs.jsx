import uk from "../../assets/uk.png";
import taj from "../../assets/taj.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function CaseStudiesBanner() {
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeXqZpfKyVZH2w5qchGRDMs8BFnLXin15lvxI-KLDxXLgE-IQ"; // Replace with your Google Form URL
    const formEntries = {
      "entry.2005620554": formData.name,        // Replace with actual entry ID for the name field
      "entry.1045781291": formData.email,       // Replace with actual entry ID for the email field
      "entry.1166974658": formData.phone,       // Replace with actual entry ID for the phone field
      "entry.839337160": formData.description  // Replace with actual entry ID for the description field
    };

    const queryString = new URLSearchParams(formEntries).toString();
    const submitUrl = `${formUrl}/formResponse?${queryString}`;

    try {
      await fetch(submitUrl, {
        method: "POST",
        mode: "no-cors" // Important to avoid CORS issues
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Form submission failed!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div
          className="row mt-5 text-center justify-content-center mb-5"
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="50"
          data-aos-once="true"
        >
          <div className="col-lg-12 mb-4">
            <h1 className="text-warning text-uppercase">We're Here to Help You!</h1>
            <p className="text-white mt-4 mb-5">
              We're excited to hear from you! Whether you have a question about our services, want to discuss a project, or
              <br />
              just want to say hi, we're here to help. Feel free to reach out to us using the contact information
              <br />
              below or fill out the form, and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="col-lg-8 mb-4">
            <input
              type="text"
              className="form-control bg-transparent"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-8 mb-4">
            <input
              type="email"
              className="form-control bg-transparent"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-8 mb-4">
            <input
              type="tel"
              className="form-control bg-transparent"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-8 mb-4">
            <textarea
              className="form-control bg-transparent"
              rows={4}
              placeholder="Your project description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-8 mb-4 text-end">
            <button className="btn btn-warning px-4 py-2 fw-bold" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="row justify-content-center">
        <div
          className="col-lg-12 mb-4"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="50"
          data-aos-once="true"
        >
          <div className="card p-5 bg-dark-grey">
            <div className="row align-items-end">
              <div className="col-lg-7 pe-0">
                <h4 className="text-warning fw-bold text-uppercase">Tantrija</h4>
                <h6 className="text-white fw-bold text-uppercase">India</h6>
                <p className="text-white my-4">
                  Pune, Maharastra, India
                </p>
                <span>
                  Call: <a href="tel:+919784527279" className="text-warning fw-bold">+91 9784527279</a>
                </span>
                <br />
                <br />
                <span>
                  Whatsapp: <a target="_blank" href="https://wa.me/7420969224" className="text-warning fw-bold">+91 7420969224</a>
                </span>
              </div>
              <div className="col-lg-5 p-0">
                <img src={uk} className="img-fluid" alt="uk" />
              </div>
            </div>
          </div>
        </div>
        {/* Uncomment and update as needed */}
        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
          <div className="card p-5 bg-dark-grey">
            <div className="row align-items-end">
              <div className="col-lg-10 pe-0">
                <h4 className="text-warning fw-bold text-uppercase">General Inquiries</h4>
                <h6 className="text-white fw-bold text-uppercase"><a href="mailto:info@tantrija.com">📩 &nbsp; info@tantrija.com</a></h6>
              </div>
              <div className="col-lg-4 p-0">
                {/* <img src={uk} className="img-fluid" alt="General Inquiries" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
          <div className="card p-5 bg-dark-grey">
            <div className="row align-items-end">
              <div className="col-lg-10 pe-0">
                <h4 className="text-warning fw-bold text-uppercase">Support</h4>
                <h6 className="text-white fw-bold text-uppercase">
                  <a href="mailto:support@tantrija.com">🛠️ &nbsp; support@tantrija.com</a>
                  <br />
                  <a href="mailto:techsupport@tantrija.com">💻 &nbsp; techsupport@tantrija.com</a> 
                </h6>
              </div>
              <div className="col-lg-4 p-0">
                {/* <img src={uk} className="img-fluid" alt="Support" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
          <div className="card p-5 bg-dark-grey">
            <div className="row align-items-end">
              <div className="col-lg-10 pe-0">
                <h4 className="text-warning fw-bold text-uppercase">Sales & Outreach</h4>
                <h6 className="text-white fw-bold text-uppercase">
                  <a href="mailto:sales@tantrija.com">💼 &nbsp; sales@tantrija.com</a> 
                  <br />
                  <a href="mailto:contact@tantrija.com">📞 &nbsp; contact@tantrija.com</a> 
                </h6>
              </div>
              <div className="col-lg-4 p-0">
                {/* <img src={salesImage} className="img-fluid" alt="Sales" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
          <div className="card p-5 bg-dark-grey">
            <div className="row align-items-end">
              <div className="col-lg-10 pe-0">
                <h4 className="text-warning fw-bold text-uppercase">HR & Feedback</h4>
                <h6 className="text-white fw-bold text-uppercase">
                  <a href="mailto:hr@tantrija.com">👥 &nbsp; hr@tantrija.com</a>
                  <br />
                  <a href="mailto:feedback@tantrija.com">📝 &nbsp; feedback@tantrija.com</a>
                </h6>
              </div>
              <div className="col-lg-4 p-0">
                {/* <img src={hrImage} className="img-fluid" alt="HR & Feedback" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
          <div className="card p-5 bg-dark-grey">
            <div className="row align-items-end">
              <div className="col-lg-10 pe-0">
                <h4 className="text-warning fw-bold text-uppercase">Research & Development</h4>
                <h6 className="text-white fw-bold text-uppercase"><a href="mailto:research@tantrija.com">🔬 &nbsp; research@tantrija.com</a></h6>
              </div>
              <div className="col-lg-4 p-0">
                {/* <img src={researchImage} className="img-fluid" alt="Research & Development" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
