import "../all-styles/carsHome.css";
import carData from "../assets/data/carData";
import CarItems from "./CarItems";


const CarsHome = () => {
    return (
        <section className="carsHome-section">
            <div className="carsHome-section-headings">
                <h6 className="carsHome-section-h6">Todays</h6>
                <h2 className="carsHome-section-h2">Hot Offers</h2>
            </div>
            <div className="carsHome-section-cars">
                {carData.map((item) => (
                    <CarItems item={item} key={item.id} />
                ))}
            </div>


        </section>
    );
}

export default CarsHome;