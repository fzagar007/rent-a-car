import CommonSection from "../components/CommonSection";
import CarItemsCars from "../components/CarItemsCars";
import "../all-styles/carsHome.css";
import carData from "../assets/data/carData";


const Cars = () => {
    return (
        <>
            <CommonSection title="Car Fleet" />

            <section className="carsHome-section">
                <div className="carsHome-section-cars">
                    {carData.map((item) => (
                        <CarItemsCars item={item} key={item.id} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Cars;

