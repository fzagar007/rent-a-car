import BmwImg from "../assets/all-images/car-img/bmw320d.webp";
import GolfImg from "../assets/all-images/car-img/golf7.png";
import OpelImg from "../assets/all-images/car-img/opel-astra.png";
import RenaultImg from "../assets/all-images/car-img/renault-clio.png";
import TeslaImg from "../assets/all-images/car-img/tesla-model-3.png";
import ToyotaImg from "../assets/all-images/car-img/toyota-corolla.png";
import { useEffect, useState } from "react";
import "../all-styles/bookCar.css";
import { FaTimes, FaCarSide } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";


function BookCar() {
    const [modal, setModal] = useState(false); // class = active-modal

    // booking car
    const [carType, setCarType] = useState("");
    const [pickUp, setPickUp] = useState("");
    const [dropOff, setDropOff] = useState("");
    const [pickUpTime, setPickUpTime] = useState("");
    const [dropOffTime, setDropOffTime] = useState("");
    const [carImg, setCarImg] = useState("");

    // modal infos
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");

    // taking value of modal inputs
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleZip = (e) => {
        setZipcode(e.target.value);
    };

    // open modal when all inputs are selected
    const openModal = (e) => {
        e.preventDefault();
        const errorMsg = document.querySelector(".error-message");
        if (
            pickUp === "" || pickUp === "Select pick up location" ||
            dropOff === "" || dropOff === "Select drop off location" ||
            pickUpTime === "" ||
            dropOffTime === "" ||
            carType === "" || carType === "Select your car type"
        ) {
            errorMsg.style.display = "flex";
        } else {
            setModal(!modal);
            const modalDiv = document.querySelector(".booking-modal");
            modalDiv.scroll(0, 0);
            errorMsg.style.display = "none";
        }
    };

    // disable page scroll when mdoal is active
    useEffect(() => {
        if (modal === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modal]);

    // confirm modal booking
    const confirmBooking = (e) => {
        e.preventDefault();
        const errorMsg2 = document.querySelector(".error-message2");

        if (
            email === "" ||
            name === "" ||
            lastName === "" ||
            phone === "" ||
            age === "" ||
            address === "" ||
            city === "" ||
            zipcode === ""
        ) {
            errorMsg2.style.display = "flex";
            errorMsg2.scrollIntoView({ behavior: 'smooth' })
        }
        else {
            setModal(!modal);
            const doneMsg = document.querySelector(".booking-done");
            doneMsg.style.display = "flex";
            errorMsg2.style.display = "none"

        }
    };

    // taking booking values
    const handleCar = (e) => {
        setCarType(e.target.value);
        setCarImg(e.target.value);
    };

    const handlePick = (e) => {
        setPickUp(e.target.value);
    };

    const handleDrop = (e) => {
        setDropOff(e.target.value);
    };

    const handlePickTime = (e) => {
        setPickUpTime(e.target.value);
    }

    const handleDropTime = (e) => {
        setDropOffTime(e.target.value);
    };

    // based on value name show car img
    let imgUrl;
    switch (carImg) {
        case "BMW 320d":
            imgUrl = BmwImg;
            break;
        case "Toyota Corrola":
            imgUrl = ToyotaImg;
            break;
        case "Tesla Model 3":
            imgUrl = TeslaImg;
            break;
        case "Renault Clio":
            imgUrl = RenaultImg;
            break;
        case "Volkswagen Golf 7":
            imgUrl = GolfImg;
            break;
        case "Opel Astra":
            imgUrl = OpelImg;
            break;
        default:
            imgUrl = "";
    }

    // hide message
    const hideMessage = () => {
        const doneMsg = document.querySelector(".booking-done");
        doneMsg.style.display = "none";
    };

    return (
        <>
            <section id="book_section" className="book-section">
                <div onClick={openModal} className={`modal-overlay ${modal ? "active-modal" : ""}`}>
                </div>

                <div className="container">
                    <div className="book-content">
                        <div className="book-content_box">
                            <h2>Book a car</h2>
                            <p className="error-message">
                                All fields required!
                            </p>
                            <p className="booking-done">
                                Check your email to confirm an order.{" "}
                                <FaTimes onClick={hideMessage} className="icon1" />
                            </p>

                            <form className="box-form">
                                <div className="box-form_car-type">
                                    <label>
                                        <FaCarSide className="icon2" />
                                        &nbsp; Select Your Car Type <b>*</b>
                                    </label>
                                    <select value={carType} onChange={handleCar}>
                                        <option>Select your car type</option>
                                        <option value="BMW 320d">BMW 320d</option>
                                        <option value="Toyota Corrola">Toyota Corrola</option>
                                        <option value="Tesla Model 3">Tesla Model 3</option>
                                        <option value="Renault Clio">Renault Clio</option>
                                        <option value="Volkswagen Golf 7">Volkswagen Golf 7</option>
                                        <option value="Opel Astra">Opel Astra</option>
                                    </select>
                                </div>

                                <div className="box-form_car-type">
                                    <label>
                                        <FaLocationDot className="icon2" />
                                        &nbsp; Pick-up{" "} <b>*</b>
                                    </label>
                                    <select value={pickUp} onChange={handlePick}>
                                        <option>Select pick up location</option>
                                        <option>London</option>
                                        <option>Zagreb</option>
                                        <option>Berlin</option>
                                        <option>Madrid</option>
                                        <option>Paris</option>
                                        <option>Amsterdam</option>
                                    </select>
                                </div>

                                <div className="box-form_car-type">
                                    <label>
                                        <FaLocationDot className="icon2" />
                                        &nbsp; Drop-off{" "} <b>*</b>
                                    </label>
                                    <select value={dropOff} onChange={handleDrop}>
                                        <option>Select drop off location</option>
                                        <option>London</option>
                                        <option>Zagreb</option>
                                        <option>Berlin</option>
                                        <option>Madrid</option>
                                        <option>Paris</option>
                                        <option>Amsterdam</option>
                                    </select>
                                </div>

                                <div className="box-form_car-time">
                                    <label htmlFor="picktime">
                                        <MdOutlineDateRange className="icon2" />
                                        &nbsp; Pick-up <b>*</b>
                                    </label>
                                    <input
                                        id="picktime"
                                        value={pickUpTime}
                                        onChange={handlePickTime}
                                        type="date" />
                                </div>

                                <div className="box-form_car-time">
                                    <label htmlFor="droptime">
                                        <MdOutlineDateRange className="icon2" />
                                        &nbsp; Drop-off <b>*</b>
                                    </label>
                                    <input
                                        id="droptime"
                                        value={dropOffTime}
                                        onChange={handleDropTime}
                                        type="date" />
                                </div>

                                <button onClick={openModal} type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* modal */}
            <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
                <div className="booking-modal_title">
                    <h2>Complete Reservation</h2>
                    <FaTimes onClick={openModal} className="icon1" />
                </div>

                <div className="booking-modal_message">
                    <h4><RiErrorWarningFill className="icon3" />Upon completing this reservation enquiry, you will receive:</h4>
                    <p>Your rental voucher with which you can pick up the vehicle at the reception and you get a toll-free customer support number</p>
                </div>

                <div className="booking-modal_car-info">
                    <div className="dates-div">
                        <div className="booking-modal_car-info_dates">
                            <h5>Location & Date</h5>

                            <span>
                                <IoLocationSharp className="dates-div_logo" />
                                <div>
                                    <h6>Pick-Up Date & Time</h6>
                                    <p>
                                        {pickUpTime} /{" "}
                                        <input type="time" className="input-time" />
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal_car-info_dates">
                            <span>
                                <IoLocationSharp className="dates-div_logo" />
                                <div>
                                    <h6>Drop-Off Date & Time</h6>
                                    <p>
                                        {dropOffTime} / {" "}
                                        <input type="time" className="input-time" />
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal_car-info_dates">
                            <span>
                                <IoLocationSharp className="dates-div_logo" />
                                <div>
                                    <h6>Pick-up Location</h6>
                                    <p>{pickUp}</p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal_car-info_dates">
                            <span>
                                <IoLocationSharp className="dates-div_logo" />
                                <div>
                                    <h6>Drop-Off Location</h6>
                                    <p>{dropOff}</p>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="booking-modal_car-info_model">
                        <h5>
                            <span>Car -</span> {carType}
                        </h5>
                        {imgUrl && <img src={imgUrl} alt="car-img" />}
                    </div>
                </div>

                {/* personal info */}
                <div className="booking-modal_person-info">
                    <h4>Personal Information</h4>
                    <p className="error-message2">All fields required!</p>

                    <form className="info-form">
                        <div className="info-form_2col">
                            <span>
                                <label>First Name <b>*</b></label>
                                <input
                                    value={name}
                                    onChange={handleName}
                                    type="text"
                                    placeholder="Enter your first name" />
                                <p className="error-modal">This field is required</p>
                            </span>

                            <span>
                                <label>Last Name <b>*</b></label>
                                <input
                                    value={lastName}
                                    onChange={handleLastName}
                                    type="text"
                                    placeholder="Enter your last name" />
                                <p className="error-modal">This field is required</p>
                            </span>

                            <span>
                                <label>Phone Number <b>*</b></label>
                                <input
                                    value={phone}
                                    onChange={handlePhone}
                                    type="tel"
                                    placeholder="Enter your phone number" />
                                <p className="error-modal">This field is required</p>
                            </span>

                            <span>
                                <label>Age <b>*</b></label>
                                <input
                                    value={age}
                                    onChange={handleAge}
                                    type="number"
                                    placeholder="18" />
                                <p className="error-modal">This field is required</p>
                            </span>
                        </div>

                        <div className="info-form_1col">
                            <span>
                                <label>Email <b>*</b></label>
                                <input
                                    value={email}
                                    onChange={handleEmail}
                                    type="email"
                                    placeholder="Enter your email address" />
                                <p className="error-modal">This field is required</p>
                            </span>

                            <span>
                                <label>Address <b>*</b></label>
                                <input
                                    value={address}
                                    onChange={handleAddress}
                                    type="text"
                                    placeholder="Enter your street address" />
                                <p className="error-modal">This field is required</p>
                            </span>
                        </div>

                        <div className="info-form_2col">
                            <span>
                                <label>City <b>*</b></label>
                                <input
                                    value={city}
                                    onChange={handleCity}
                                    type="text"
                                    placeholder="Enter your city" />
                                <p className="error-modal">This field is required</p>
                            </span>

                            <span>
                                <label>Zip Code <b>*</b></label>
                                <input
                                    value={zipcode}
                                    onChange={handleZip}
                                    type="text"
                                    placeholder="Enter your zip code" />
                                <p className="error-modal">This field is required</p>
                            </span>
                        </div>

                        <span className="info-form_checkbox">
                            <input type="checkbox" />
                            <p>Please send me latest news and updates</p>
                        </span>

                        <div className="reserve-button">
                            <button onClick={confirmBooking}>Reserve Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default BookCar;

