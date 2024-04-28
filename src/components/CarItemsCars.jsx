import "../all-styles/carItems.css";
import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { IoCarOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";


const CarItemsCars = (props) => {
    const { imgUrl, Brand, Model, Year, Price, Doors, AC, Transmition, Fuel } = props.item;

    return (
        <div className="container-cars">
            <div className="car-item">
                <div className="car-item-img">
                    <img src={imgUrl} className="car-img" />
                </div>

                <div className="car-item-content">
                    <h4>{Brand}</h4>
                    <h6>${Price}.00 / Day</h6>

                    <div className="car-item-content-info1">
                        <span className="car-item-content-info1-model">
                            <IoCarOutline className="car-item-icons" /> {Model}
                        </span>

                        <span className="car-item-content-info1-year">
                            <MdOutlineCalendarMonth className="car-item-icons" /> {Year}
                        </span>

                        <span className="car-item-content-info1-transmition">
                            <FaGear className="car-item-icons" /> {Transmition}
                        </span>
                    </div>

                    <div className="car-item-content-info2">
                        <span className="car-item-content-info2-doors">
                            <BsFuelPumpFill className="car-item-icons" /> {Fuel}
                        </span>

                        <span className="car-item-content-info2-ac">
                            <GiCarDoor className="car-item-icons" /> {Doors}
                        </span>

                        <span className="car-item-content-info2-fuel">
                            <TbAirConditioning className="car-item-icons" /> {AC}
                        </span>
                    </div>
                </div>

                <div className="car-item-rent">
                    <Link to="/#book_section">
                        <button className="car-item-rent-button">Rent</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarItemsCars;