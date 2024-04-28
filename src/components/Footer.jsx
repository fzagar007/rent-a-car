import "../all-styles/footer.css";
import { IoCall } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";


const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerContainer-content">
                    <ul className="footerContainer-content1">
                        <li>
                            <span className="footer-headings">CAR Rental </span>
                        </li>
                        <li className="footerContainer-content1-text">
                            Explore the open road with confidence by choosing our premier car rental service.
                            With a fleet of top-quality vehicles and unbeatable customer support, your journey starts and ends with us.
                        </li>
                        <li>
                            <a href="tel:+385 94-515-0422">
                                <IoCall /> +385 94-515-0422
                            </a>
                        </li>

                        <li>
                            <a href="mailto:carrental_info@gmail.com">
                                <MdMailOutline /> carrental_info@gmail.com
                            </a>
                        </li>
                    </ul>

                    <ul className="footerContainer-content2">
                        <li className="footer-headings">Quick Links</li>
                        <li className="footerContainer-content2-li">
                            <a href="/about" >About</a>
                        </li>
                        <li className="footerContainer-content2-li">
                            <a href="#privacy" >Privacy policy</a>
                        </li>
                        <li className="footerContainer-content2-li">
                            <a href="#book_section" >Booking</a>
                        </li>
                        <li className="footerContainer-content2-li">
                            <a href="/blogs" >Blog</a>
                        </li>
                        <li className="footerContainer-content2-li">
                            <a href="/contact" >Contact</a>
                        </li>
                    </ul>

                    <ul className="footerContainer-content3">
                        <li className="footer-headings">Working Hours</li>
                        
                        <span className="footerContainer-content3-span2">
                            <li>Mon - Sat: 06:00AM - 11:00PM</li>
                            <li>Sun: Closed</li>
                        </span>
                    </ul>

                    <ul className="footerContainer-content4">
                        <span className="footer-headings">
                            <li>Newsletter</li>
                        </span>
                        <li>
                            <p>Subscribe your Email address for latest news & updates.</p>
                        </li>
                        <li>
                            <input type="email" placeholder="Enter Email Address" />
                        </li>
                        <li>
                            <button className="newsletter-btn">Submit</button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;