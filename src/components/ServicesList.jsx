import "../all-styles/servicesList.css";
import servicesData from "../assets/data/serviceData";


const ServiceItem = ({ item }) => (
    <div className="service-item">
        <span className="service-span">
            {item.icon}
        </span>
        <h6 className="service-item-h6">{item.title}</h6>
        <p className="service-item-description">{item.desc}</p>
    </div>
);

const ServicesList = () => {
    return (
        <section className="services-section">
            <div className="services-section-titles">
                <h6 className="services-section-subtitle">See our</h6>
                <h2 className="services-section-title">Popular Services</h2>
            </div>
            <div className="services-section-content1">
                {
                    servicesData.filter((item, index) => index < 3)
                        .map((item) => (
                            <ServiceItem item={item} key={item.id} />
                        ))
                }
            </div>

            <div className="services-section-content2">
                {
                    servicesData.filter((item, index) => index > 2)
                        .map((item) => (
                            <ServiceItem item={item} key={item.id} />
                        ))
                }
            </div>
        </section>
    );
}

export default ServicesList;