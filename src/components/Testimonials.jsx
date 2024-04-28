import "../all-styles/testimonials.css";
import Slider from "react-slick";
import testImg1 from "../assets/all-images/profile-img/prof1.jpg";
import testImg2 from "../assets/all-images/profile-img/prof2.jpg";
import testImg3 from "../assets/all-images/profile-img/prof3.jpg";
import testImg4 from "../assets/all-images/profile-img/prof4.jpg";

const Testimonials = () => {
    const settings2 = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="testimonial-section">
            <div className="testimonial-headings">
                <h6 className="testimonial-headings-subtitle">Our clients says</h6>
                <h2 className="testimonial-headings-title">Testimonials</h2>
            </div>

            <Slider {...settings2} >

                <div className="testimonials">
                    <p className="testimonials-description">
                        My recent experience with this rent-a-car service was exceptional.
                        The customer care was outstanding from start to finish.
                        The representatives were knowledgeable, accommodating, and genuinely cared about ensuring a positive experience.
                        The car was reliable, and the overall service exceeded my expectations.
                    </p>
                    <div className="testimonials-profile">
                        <img src={testImg1} className="testimonials-img1" />
                        <div className="testimonials-profile-text">
                            <h6>Olivia Johnson</h6>
                            <p className="testimonials-profile-description">Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials">
                    <p className="testimonials-description">
                        I had a seamless rental experience with this company.
                        The online booking was straightforward, and the pick-up and drop-off were quick and efficient.
                        The car was in excellent condition, and the rates were reasonable. I highly recommend this rent-a-car service for anyone looking for a reliable and hassle-free experience.
                    </p>
                    <div className="testimonials-profile">
                        <img src={testImg2} className="testimonials-img1" />
                        <div className="testimonials-profile-text">
                            <h6>Benjamin Hart</h6>
                            <p className="testimonials-profile-description">Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials">
                    <p className="testimonials-description">
                        The staff at this rent-a-car service went above and beyond to make my rental experience pleasant.
                        They were friendly, accommodating, and professional. The car I rented was spotless, and I felt confident in its reliability.
                        I appreciate the excellent customer service and will definitely choose this company again.
                    </p>
                    <div className="testimonials-profile">
                        <img src={testImg3} className="testimonials-img1" />
                        <div className="testimonials-profile-text">
                            <h6>Ava Thompson</h6>
                            <p className="testimonials-profile-description">Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials">
                    <p className="testimonials-description">
                        I rented a car for a weekend getaway, and I couldn't be happier with the value for money I received.
                        The rental rates were competitive, and there were no hidden fees. The vehicle was fuel-efficient, and I was impressed with the overall service.
                        I'll be recommending this rent-a-car service to friends and family.
                    </p>
                    <div className="testimonials-profile">
                        <img src={testImg4} className="testimonials-img1" />
                        <div className="testimonials-profile-text">
                            <h6>Ethan Anderson</h6>
                            <p className="testimonials-profile-description">Customer</p>
                        </div>
                    </div>
                </div>

            </Slider>
        </section>
    );
}

export default Testimonials;