import appointments from "../data/appointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "../styles/appointment-card.css";

const UpcomingSchedule = () => {
  return (
    <div>
      <h4 className="heading set-margin">The Upcoming schedule</h4>
      {appointments.map((appointment) => (
        <div key={appointment.day}>
          <h5 className="faded weight-remover set-margin">
            On {appointment.day}
          </h5>
          <SimpleAppointmentCard data={appointment.cards} isCal={false} />
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
