import "../styles/sidebar.css";
import dashboard from "../assets/dashboard.png";
import history from "../assets/history.png";
import calendar from "../assets/calendar.png";
import appointment from "../assets/appointment.png";
import statistics from "../assets/statistics.png";
import chat from "../assets/chat.png";
import support from "../assets/support.png";
import settings from "../assets/settings.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-div1">
        <h6 className="faded weight-remover">General</h6>
        <div className="side-link-divs">
          <img className="side-icons" src={dashboard}></img>
          <h5 className="side-links active weight-remover">Dashboard</h5>
        </div>
        <div className="side-link-divs">
          <img className="side-icons" src={history}></img>
          <h5 className="side-links faded weight-remover">History</h5>
        </div>
        <div className="side-link-divs">
          <img className="side-icons" src={calendar}></img>
          <h5 className="side-links faded  weight-remover">Calendar</h5>
        </div>
        <div className="side-link-divs">
          <img className="side-icons" src={appointment}></img>
          <h5 className="side-links faded weight-remover">Appointments</h5>
        </div>
        <div className="side-link-divs">
          <img className="side-icons" src={statistics}></img>
          <h5 className="side-links faded weight-remover">Statistics</h5>
        </div>
        <h6 className="faded weight-remover">Tools</h6>
        <div className="side-link-divs">
          <img className="side-icons" src={chat}></img>
          <h5 className="side-links faded weight-remover">Chat</h5>
        </div>
        <div className="side-link-divs">
          <img className="side-icons" src={support}></img>
          <h5 className="side-links faded weight-remover">Support</h5>
        </div>
        <div className="side-link-divs">
          <img className="side-icons" src={settings}></img>
          <h5 className="side-links faded weight-remover">Setting</h5>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
