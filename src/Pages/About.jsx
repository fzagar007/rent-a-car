import "../all-styles/about.css"
import CommonSection from "../components/CommonSection";
import { FaRegCheckCircle } from "react-icons/fa";
import AboutImg1 from "../assets/all-images/about-img/aboutImg.png";
import AboutImg2 from "../assets/all-images/sectionPicture.jpg"
import { FiPhone } from "react-icons/fi";
import BecomeDriver from "../components/BecomeDriver";


const About = () => {
    return (
        <>
            <CommonSection title="About Us" />

            <section className="about-section">
                <div className="about-section-container">
                    <div className="about-section-content">
                        <h4 className="section-subtitle">About Us</h4>
                        <h2 className="section-title">Welcome to car rental service</h2>
                        <p className="section-description">At Car Rental, we take pride in providing an unparalleled car rental experience tailored to your needs. With a commitment to exceptional service, a diverse fleet of well-maintained vehicles, and a passion for customer satisfaction, we strive to make every journey memorable. Choose us for reliability, affordability, and a seamless rental process that puts you in the driver's seat of convenience and comfort.</p>

                        <div className="about-section-item">
                            <p className="section-description"><FaRegCheckCircle className="about-section-item-icon" />Diverse Fleet</p>
                            <p className="section-description1"><FaRegCheckCircle className="about-section-item-icon" />Transparent Pricing</p>
                        </div>

                        <div className="about-section-item">
                            <p className="section-description"><FaRegCheckCircle className="about-section-item-icon" />Exceptional Customer Support</p>
                            <p className="section-description"><FaRegCheckCircle className="about-section-item-icon" />Multiple Rental Options</p>
                        </div>
                    </div>

                    <div className="about-section-picture">
                        <img src={AboutImg1} />
                    </div>
                </div>

                <div className="about-section-container2">
                    <div className="about-section-picture2">
                        <img src={AboutImg2} />
                    </div>

                    <div className="about-section-content2">
                        <h2 className="section-title">We Are Committed To Provide Safe Ride Solutions</h2>
                        <p className="section-description2">At Car Rental, safety is our top priority. We are dedicated to providing secure and reliable ride solutions, ensuring that every journey with us is not only convenient but also a trusted experience for our valued customers. </p>
                        <p className="section-description2">At the core of our service philosophy is a steadfast commitment to delivering safe and comfortable travel experiences. Our fleet is meticulously maintained, and our drivers undergo rigorous training to uphold the highest safety standards. Trust us for a worry-free journey, where your well-being is our utmost concern.</p>

                        <div className="section-call">
                            <FiPhone className="section-icon" />
                            <div>
                                <h6 className="section-subtitle">Need Any Help</h6>
                                <h4>+385 94-515-0422</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BecomeDriver />
        </>
    );
}

export default About;