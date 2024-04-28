import "../all-styles/header.css";
import { IoCarSport, IoCall, IoMenu } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LiaGlobeEuropeSolid } from "react-icons/lia";
import { GoClock } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";

const navLinks = [
    {
        path: "/",
        display: "Home",
    },
    {
        path: "/about",
        display: "About",
    },
    {
        path: "/cars",
        display: "Cars",
    },
    {
        path: "/blogs",
        display: "Blog",
    },
    {
        path: "/team",
        display: "Our Team",
    },
    {
        path: "/contact",
        display: "Contact",
    },
];

const Header = () => {
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("menu_active");

    return (
        <header className="header">

            {/* header top */}
            <div className="top_header">
                <div className="top_header_left">
                    <span className="header_top_help">Need Help?</span>
                    <span className="header_top_number"> <i><IoCall className="icon1" /></i>+385 94-515-0422</span>
                </div>

                <div className="header_top_right">
                    <Link href="/" className="login"><IoMdLogIn className="icon2" /> Login</Link>
                    <Link href="/" className="register"><CgProfile className="icon3" /> Register</Link>
                </div>
            </div>

            {/* header middle */}
            <div className="mid_header">
                <div className="middle_header_left">
                    <h1>
                        <Link to="/" className="mid_header_link">
                            <i><IoCarSport className="logo" /></i>
                            <span className="logo_text">
                                CAR <br /> Rental
                            </span>
                        </Link>
                    </h1>
                </div>

                <div className="mid_header_content">
                    <span>
                        <LiaGlobeEuropeSolid className="icon4" />
                    </span>
                    <div>
                        <h2>Multiple Locations Across Europe</h2>
                    </div>
                </div>

                <div className="mid_header_time">
                    <span>
                        <GoClock className="icon5" />
                    </span>
                    <div className="mid_header_open">
                        <h2>Monday to Saturday</h2>
                        <h3>6am - 11pm</h3>
                    </div>
                </div>

                <div className="mid_header_button">
                    <button className="header_button">
                        <Link to={"/contact"}>
                            <MdOutlineLocalPhone className="icon6" /> Request a call
                        </Link>
                    </button>
                </div>
            </div>

            {/* navbar */}
            <div className="navbar_main">
                <span className="second_logo_content">
                    <Link to="/">
                        <span><IoCarSport className="logo2" /></span>
                    </Link>
                    <span className="logo_text2">
                        CAR <br /> Rental
                    </span>
                </span>

                <span className="mobile_menu">
                    <IoMenu className="icon7" onClick={toggleMenu} />
                </span>

                <div className="Nav_items" ref={menuRef} onClick={toggleMenu} >
                    <div className="menu">
                        {navLinks.map((item, index) => (
                            <NavLink
                                to={item.path}
                                className={(navClass) =>
                                    navClass.isActive ? "nav_active nav_item" : "nav_item"}
                                key={index}>
                                {item.display}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div className="search_box">
                    <input type="text" placeholder="Search" />
                    <span>
                        <FaSearch className="icon8" />
                    </span>
                </div>
            </div>

        </header>



    );
}

export default Header;