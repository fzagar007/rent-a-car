import BecomeDriver from "../components/BecomeDriver";
import BlogList from "../components/BlogLIst";
import BookCar from "../components/BookCar";
import CarsHome from "../components/CarsHome";
import HeroSlider from "../components/HeroSlider";
import MobileApp from "../components/MobileApp";
import ServicesList from "../components/ServicesList";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <>
            <HeroSlider />
            <BookCar />
            <ServicesList />
            <CarsHome />
            <BecomeDriver />
            <Testimonials />
            <BlogList />
            <MobileApp />
        </>
    );
}

export default Home;