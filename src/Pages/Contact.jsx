import "../all-styles/contact.css";
import CommonSection from "../components/CommonSection";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { BsEnvelopePaper } from "react-icons/bs";


const Contact = () => {
  const socialLinks = [
    { url: "#", icon: "<CiFacebook />" },
    { url: "#", icon: "<FaInstagram />" },
    { url: "#", icon: "<CiLinkedin />" },
    { url: "#", icon: "<CiTwitter />" },
  ];

  return (
    <>
      <CommonSection title="Contact" />

      <section className="contactSection">
        <div className="contactSection-contact">
          <h2>Need additional information?</h2>
          <h4>Get in Touch</h4>
          <span className="contactSection-contact-span">
            <a href="tel:+385 94-515-0422"><IoCall /> +385 94-515-0422</a>
            <a href="mailto:carrental_info@gmail.com"><MdMailOutline /> carrental_info@gmail.com</a>
          </span>
        </div>

        <div className="contactSection-contact-form">
          <form>
            <label>Full Name</label>
            <input type="text" placeholder='Eg: "John Snow"' />

            <label>Email</label>
            <input type="email" placeholder="youremail@mail.com" />

            <label>Tell us about it</label>
            <textarea placeholder="Write here..." />

            <button><BsEnvelopePaper /> &nbsp; Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;