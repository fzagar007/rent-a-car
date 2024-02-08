import "../all-styles/team.css";
import Person1 from "../assets/all-images/team-img/team1.jfif";
import Person2 from "../assets/all-images/team-img/team2.jfif";
import Person3 from "../assets/all-images/team-img/team3.jfif";
import Person4 from "../assets/all-images/team-img/team4.jfif";
import Person5 from "../assets/all-images/team-img/team5.jfif";
import Person6 from "../assets/all-images/team-img/team6.jfif";
import ComonSection from "../components/CommonSection";


const Team = () => {
    const teamP = [
        { img: Person1, name: "John Smith", job: "Salesman" },
        { img: Person2, name: "Olivia Taylor", job: "Accountant" },
        { img: Person3, name: "David Williams", job: "Mechanic" },
        { img: Person4, name: "Emily Brown", job: "Photographer" },
        { img: Person5, name: "Michael Johnson", job: "Driver" },
        { img: Person6, name: "Sophia Martinez", job: "Manager" },
    ];

    return (
        <>
            <ComonSection title="Our Team" />
            <section className="TeamSection">
                <div className="TeamSection-container">
                    {teamP.map((people, id) => (
                        <div key={id} className="TeamSection-container-box">
                            <div className="TeamSection-container-box-img">
                                <img src={people.img} className="team-img" />
                            </div>

                            <div className="TeamSection-container-box-desc">
                                <h3>{people.name}</h3>
                                <p>{people.job}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Team;

<div></div>