import "../styles/health-cards.css";
import lungs from "../assets/lungs.png";
import tooth from "../assets/tooth.png";
import bone from "../assets/bone.png";
import green from "../assets/green-bar.png";
import red from "../assets/red-bar.png";
import orange from "../assets/orange-bar.png";

const HealthStatusCards = ({ healthData }) => {
  return (
    <div>
      {healthData.map((organ) => (
        <div key={organ.name} className="health-cards">
          <div className="healthcard-header">
            {organ.name === "Lungs" ? (
              <img src={lungs} alt="" className="organ-image" />
            ) : organ.name === "Teeth" ? (
              <img src={tooth} alt="" className="organ-image" />
            ) : (
              <img src={bone} alt="" className="organ-image" />
            )}
            <h5 className="heading organ-margin">{organ.name}</h5>
          </div>
          <div>
            <h6 className="date faded weight-remover">Date: {organ.date}</h6>
            {organ.status === "Red" ? (
              <img src={red} alt="" className="bars" />
            ) : organ.status === "Green" ? (
              <img src={green} alt="" className="bars" />
            ) : (
              <img src={orange} alt="" className="bars" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
