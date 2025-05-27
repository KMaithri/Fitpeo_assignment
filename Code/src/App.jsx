import DashboardMainContent from "./components/DashboardMainContent";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="app-layout">
      <header>
        <Header />
      </header>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <DashboardMainContent />
      </main>
    </div>
  );
};

export default App;
