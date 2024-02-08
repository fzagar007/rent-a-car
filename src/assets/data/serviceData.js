import { MdCarRental, MdLocalAirport, MdOutlineElectricCar } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const img1 = <MdCarRental />;
const img2 = <RiMoneyDollarCircleLine />;
const img3 = <MdLocalAirport />;
const img4 = <FaCarSide />;
const img5 = <HiOutlineWrenchScrewdriver />;
const img6 = <MdOutlineElectricCar />;

const serviceData = [
  {
    id: 1,
    title: "Hourly Rentals",
    icon: img1,
    desc: "Catering to short-term needs, this service allows customers to rent a car for a few hours, perfect for quick errands or brief outings without the commitment of a full day.",
  },

  {
    id: 2,
    title: "Fleet Subscription",
    icon: img2,
    desc: "Providing flexibility and variety, fleet subscription services allow customers to switch between different vehicle models within a set period, ensuring they always have the right car for their evolving needs.",
  },

  {
    id: 3,
    title: "Airport Transfers",
    icon: img3,
    desc: "Offering seamless transportation to and from airports, this service ensures a stress-free start or end to your journey with reliable pick-up and drop-off options.",
  },

  {
    id: 4,
    title: "Chauffeur Services",
    icon: img4,
    desc: "Elevate your travel experience with professional chauffeurs. This premium service offers a skilled driver to navigate, allowing you to relax and focus on your priorities while on the road.",
  },

  {
    id: 5,
    title: "Roadside Assistance",
    icon: img5,
    desc: "Enhancing customer support, this service provides 24/7 roadside assistance, ensuring that customers are covered in case of unexpected breakdowns or emergencies during their rental period.",
  },

  {
    id: 6,
    title: "Electric and Hybrid Cars",
    icon: img6,
    desc: "Embracing eco-conscious choices, this service provides access to electric or hybrid vehicles, promoting sustainable and environmentally friendly transportation options.",
  },

];

export default serviceData;
