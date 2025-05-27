import HealthStatusCards from "./HealthStatusCards";
import healthData from "../data/healthData";
import AnatomySection from "./AnatomySection";
import "../styles/dashboard-overview.css";

const DashboardOverview = () => {
  return (
    <div className="overview-container">
      <div className="dashboard-header">
        <h2 className="heading remove-padding">Dashboard</h2>
        <h6 className="heading">This week</h6>
      </div>
      <div className="overview-body">
        <AnatomySection />
        <HealthStatusCards healthData={healthData} />
      </div>
    </div>
  );
};

export default DashboardOverview;
