import CalenderView from "./CalenderView";
import DashboardOverview from "./DashboardOverview";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "../styles/main-content.css";

// I have divided main into a 2 column css grid so that I can stack them one another for the small screen sizes
const DashboardMainContent = () => {
  return (
    <div className="main-container">
      <div className="main-div1">
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div className="main-div2">
        <CalenderView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
