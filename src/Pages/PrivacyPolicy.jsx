import { useNavigate } from "react-router-dom"
import Footer from './../components/Global/Footer'
import { useEffect } from "react";

export default function PrivacyPolicy() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <h1 class="text-warning text-uppercase mt-5">Privacy Policy</h1>
                        <hr class="border-white mt-1 mx-auto hr-x-small" />
                        <div class="text-start mt-4">
                            <p class="text-white">
                                Your privacy is important to us. It is Tantrija's policy to respect your privacy regarding any information we may collect from you across our website, <b><a href="https://tantrija.com" target="_blank">https://tantrija.com</a></b>, and other sites we own and operate.
                            </p>
                            <h4 class="text-warning">Information We Collect</h4>
                            <p class="text-white">
                                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                            </p>
                            <h4 class="text-warning">How We Use Information</h4>
                            <p class="text-white">
                                We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
                            </p>
                            <h4 class="text-warning">Sharing Information</h4>
                            <p class="text-white">
                                We don’t share any personally identifying information publicly or with third parties, except when required to by law.
                            </p>
                            <h4 class="text-warning">External Links</h4>
                            <p class="text-white">
                                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                            </p>
                            <h4 class="text-warning">Your Rights</h4>
                            <p class="text-white">
                                You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                            </p>
                            <h4 class="text-warning">Consent</h4>
                            <p class="text-white">
                                Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                            </p>
                            <h4 class="text-warning">Changes to this Policy</h4>
                            <p class="text-white">
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                            </p>
                            <p class="text-white">
                                If you have any questions or concerns about our Privacy Policy, please contact us at <b><a href="tel:+91 9784527279">+91-9784527279</a></b>.
                            </p>
                            <p class="text-white">
                                This policy is effective as of 20th JUNE, 2024.
                            </p>
                        </div>
                        <div class="text-center mt-4 mb-5">
                            <button onClick={() => { navigate('/') }} class="btn btn-warning px-4 py-2 fw-bold">Back to Home</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}