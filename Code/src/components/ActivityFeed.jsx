import chart from "../assets/barchart.png";
import "../styles/activity-feed.css";

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h5 className="activity-heading">Activity</h5>
        <h6 className="faded weight-remover">3 appointment on this week</h6>
      </div>
      <div className="chart-container">
        <img src={chart} alt="activity-chart" className="chart-image" />
        <img src={chart} alt="activity-chart" className="chart-image" />
        <img src={chart} alt="activity-chart" className="chart-image" />
        <img src={chart} alt="activity-chart" className="chart-image" />
        <img src={chart} alt="activity-chart" className="chart-image" />
      </div>
    </div>
  );
};

export default ActivityFeed;
