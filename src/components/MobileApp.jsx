import "../all-styles/mobileApp.css";
import mobileImg1 from "../assets/all-images/mobile-img/appstore.svg";
import mobileImg2 from "../assets/all-images/mobile-img/googleapp.svg";
import mobileImg3 from "../assets/all-images/mobile-img/mobile.png";


const MobileApp = () => {
    return (
        <section className="MobileApp">
            <div className="MobileApp-content">
                <div className="MobileApp-content-text">
                    <h2>Download our mobile app</h2>
                    <p>
                        Unlock a seamless experience on the go by downloading our mobile app today.
                        Access our services effortlessly, anytime, anywhere, and enjoy exclusive features tailored just for you.
                    </p>
                </div>

                <div className="MobileApp-content-downloads">
                    <span>
                        <img className="download-img1" src={mobileImg1} />
                    </span>
                    <span>
                        <img className="download-img2" src={mobileImg2} />
                    </span>
                </div>
            </div>

            <div className="MobileAppImg">
                <img src={mobileImg3} />
            </div>
        </section>
    );
}

export default MobileApp;