import Slider from "react-slick";
import '../all-styles/slider.css';
import { Link } from "react-router-dom";



const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const bookButton = () => {
    document
      .querySelector("#book_section")
      .scrollIntoView({ behavior: "smooth" });
  };
  
  return (        
    <Slider {...settings} className="hero-slider">

      <div className="slider-item slider1">
        <div className="slider-content">
          <h1 className="slider-item_text">Reserve Now and Get 50 % Off</h1>
          <Link to="/">
            <button onClick={bookButton} className="slider-item_button">Reserve Now</button>
          </Link>
        </div>
      </div>

      <div className="slider-item slider2">
        <div className="slider-content">
          <h1 className="slider-item_text">Reserve Now and Get 50 % Off</h1>
          <Link to="/">
            <button onClick={bookButton} className="slider-item_button">Reserve Now</button>
          </Link>
        </div>
      </div>

      <div className="slider-item slider3">
        <div className="slider-content">
          <h1 className="slider-item_text">Reserve Now and Get 50 % Off</h1>
          <Link to="/">
            <button onClick={bookButton} className="slider-item_button">Reserve Now</button>
          </Link>
        </div>
      </div>

      <div className="slider-item slider4">
        <div className="slider-content">
          <h1 className="slider-item_text">Reserve Now and Get 50 % Off</h1>
          <Link to="/">
            <button onClick={bookButton} className="slider-item_button">Reserve Now</button>
          </Link>
        </div>
      </div>

    </Slider>
  );
}

export default HeroSlider;