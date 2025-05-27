import "../styles/appointment-card.css";
import syringe from "../assets/syringe.png";
import heart from "../assets/heart.png";
import eye from "../assets/eye.png";
import doctor from "../assets/doctor.png";
import tooth from "../assets/tooth.png";
import bicep from "../assets/bicep.png";

const SimpleAppointmentCard = ({ data, isCal }) => {
  return (
    <div className="appointment-container">
      {data.map((d) => (
        <div
          className={
            d.name === "Dentist"
              ? "highlighted-appointment"
              : "appointment-card"
          }
          key={d.name}
        >
          <div className="app-card-header">
            <h5 className="remove-margin">{d.name}</h5>

            {isCal === true ? (
              d.name === "Dentist" ? (
                <img src={tooth} className="avatar"></img>
              ) : (
                <img src={bicep} className="avatar"></img>
              )
            ) : d.name === "Health checkup complete" ? (
              <img src={syringe} className="avatar"></img>
            ) : d.name === "Cardiologist" ? (
              <img src={heart} className="avatar"></img>
            ) : d.name === "Ophthalmologist" ? (
              <img src={eye} className="avatar"></img>
            ) : (
              <img src={doctor} className="avatar"></img>
            )}
          </div>

          <h6 className=" weight-remover remove-margin">{d.time}</h6>
          {isCal === true ? (
            <h6 className=" weight-remover remove-margin">{d.doctorName}</h6>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default SimpleAppointmentCard;
