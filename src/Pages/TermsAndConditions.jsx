import { useNavigate } from "react-router-dom"
import Footer from './../components/Global/Footer'
import * as ReactGA from "react-ga";
import { useEffect } from "react";

export default function TermsAndConditions() {
    const navigate = useNavigate();

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <h1 class="text-warning text-uppercase mt-5">Terms and Conditions</h1>
                        <hr class="border-white mt-1 mx-auto hr-x-small" />
                        <div class="text-start mt-4">
                            <h4 class="text-warning">Introduction</h4>
                            <p class="text-white">
                                These Website Standard Terms and Conditions (these “Terms” or these “Website Standard Terms and Conditions”) contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website if you have any objection to any of these Website Standard Terms and Conditions.
                            </p>
                            <h4 class="text-warning">Intellectual Property Rights</h4>
                            <p class="text-white">
                                Other than content you own, which you may have opted to include on this Website, under these Terms, Tantrija and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved.
                            </p>
                            <h4 class="text-warning">Restrictions</h4>
                            <p class="text-white">
                                You are expressly and emphatically restricted from all of the following:
                                <ul class="text-white">
                                    <li>publishing any Website material in any media;</li>
                                    <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                                    <li>publicly performing and/or showing any Website material;</li>
                                    <li>using this Website in any way that is, or may be, damaging to this Website;</li>
                                    <li>using this Website in any way that impacts user access to this Website;</li>
                                    <li>using this Website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Website, or to any person or business entity;</li>
                                    <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website, or while using this Website;</li>
                                    <li>using this Website to engage in any advertising or marketing.</li>
                                </ul>
                            </p>
                            <h4 class="text-warning">Your Content</h4>
                            <p class="text-white">
                                In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video, text, images or other material you choose to display on this Website. With respect to Your Content, by displaying it, you grant Tantrija a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
                            </p>
                            <h4 class="text-warning">No Warranties</h4>
                            <p class="text-white">
                                This Website is provided “as is,” with all faults, and Tantrija makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website. Additionally, nothing contained on this Website shall be construed as providing consult or advice to you.
                            </p>
                            <h4 class="text-warning">Variation of Terms</h4>
                            <p class="text-white">
                                Tantrija is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing use of this Website.
                            </p>
                            <h4 class="text-warning">Entire Agreement</h4>
                            <p class="text-white">
                                These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between Tantrija and you in relation to your use of this Website, and supersede all prior agreements and understandings with respect to the same.
                            </p>
                            <p class="text-white">
                                If you have any questions or concerns about our Terms and Conditions, please contact us at <b><a href="tel:+91 9784527279">+91-9784527279</a></b>.
                            </p>
                            <p class="text-white">
                                This terms and conditions are effective as of 20th JUNE, 2024.
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