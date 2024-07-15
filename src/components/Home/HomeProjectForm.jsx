import { useState } from "react";

export default function ProjectForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectDescription: "",
        termsAccepted: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.termsAccepted) {
            alert("Please accept the Terms & Conditions and Privacy Policy.");
            return;
        }

        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeXqZpfKyVZH2w5qchGRDMs8BFnLXin15lvxI-KLDxXLgE-IQ"; // Replace with your Google Form URL
        const formEntries = {
            "entry.2005620554": formData.name,        // Replace with actual entry ID for the name field
            "entry.1045781291": formData.email,       // Replace with actual entry ID for the email field
            "entry.839337160": formData.projectDescription  // Replace with actual entry ID for the description field
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
        <div className="bg-circle-right vh-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <p className="text-uppercase text-white">What are You Waiting For</p>
                        <hr className="border-white mt-1 mx-auto hr-x-small" />
                        <h4 className="text-warning text-uppercase">Let's Talk About Project</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="row my-4">
                                <div className="col-lg-6 mb-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <textarea
                                        cols="30"
                                        rows="3"
                                        className="form-control"
                                        placeholder="Something about your project..."
                                        name="projectDescription"
                                        value={formData.projectDescription}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                                        <div className="mb-3 text-start d-flex align-items-center gap-2">
                                            <input
                                                type="checkbox"
                                                className="form-check-input mt-0"
                                                id="exampleCheck1"
                                                name="termsAccepted"
                                                checked={formData.termsAccepted}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="exampleCheck1">
                                                I have read and accepted the <a href="#" className="border-bottom">Terms & Conditions</a> and <a href="#" className="border-bottom">Privacy Policy</a>.
                                            </label>
                                        </div>
                                        <button className="btn btn-warning px-4 py-2 fw-bold my-3" type="submit">
                                            Start Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
