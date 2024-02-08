import "../all-styles/becomeDriver.css";
import driverImg from "../assets/all-images/becomeDriver-img/driver.webp";

const BecomeDriver = () => {
    return (
        <section className="become-driver">
            <img src={driverImg} className="img1" />
            <div className="become-driver-container">
                <h2 className="become-driver-container-title">Do You Want to Earn With Us? Click Button Bellow</h2>
                <button className="become-driver-container-btn">Become a Driver</button>
            </div>
        </section>
    );
}

export default BecomeDriver;