import calendar from "../data/calendar.js";
import "../styles/calendar.css";
import calendarappointments from "../data/calendarappointments.js";
import SimpleAppointmentCard from "./SimpleAppointmentCard.jsx";

const CalenderView = () => {
  return (
    <div>
      <h5 className="cal-year">October 2021</h5>
      {calendar.map((x) => (
        <div
          className={
            x.date === "26"
              ? "highlight-day make-inline"
              : "normal-day make-inline"
          }
          key={x.date}
        >
          <ul className="remove-ul-padding">
            <li>
              <h6 className="weight-remover">{x.day}</h6>
            </li>
            <li>
              <h4>{x.date}</h4>
            </li>
            {x.time.map((t) => (
              <li key={t}>
                <h6
                  className={
                    x.date === "26"
                      ? t === "09:00"
                        ? "highlight-time weight-remover"
                        : "normal-time-highlight weight-remover"
                      : x.date === "28"
                      ? t === "11:00"
                        ? "upcoming-time-highlight"
                        : "normal-time"
                      : x.date === "30"
                      ? t === "12:00"
                        ? "upcoming-time-highlight"
                        : "normal-time"
                      : x.date === "31"
                      ? t === "09:00"
                        ? "upcoming-time-highlight"
                        : "normal-time"
                      : "normal-time weight-remover"
                  }
                >
                  {t}
                </h6>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <SimpleAppointmentCard data={calendarappointments} isCal={true} />
    </div>
  );
};

export default CalenderView;
