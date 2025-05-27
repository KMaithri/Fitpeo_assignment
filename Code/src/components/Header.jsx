import notification from "../assets/bell.png";
import avatar from "../assets/avatar.png";
import add from "../assets/add.png";
import "../styles/header.css";
// Divided this header into 3 column grid so that i can match their backgrounds with that of the main content as given
const Header = () => {
  return (
    <div className="header-container">
      <div className="div1">
        <h2>
          <span className="logo1">Health</span>
          <span className="logo2">care.</span>
        </h2>
      </div>
      <div className="div2">
        <input type="text" id="search-bar" placeholder="Search"></input>
        <img src={notification} id="notification"></img>
      </div>
      <div className="div3">
        <img src={avatar} className="avatar"></img>
        <img src={add} className="avatar"></img>
      </div>
    </div>
  );
};

export default Header;
