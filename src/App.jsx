import { useState } from "react";
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Mentors from "./components/Mentors"
import Interns from "./components/Interns"
import Tasks from "./components/Tasks"
import { AppStateProvider } from './context/AppState'
import Attendance from "./components/Attendance"
import Reports from "./components/Reports"

function App() {
  const [active, setActive] = useState("Dashboard");

  const renderPage = () => {
    switch (active) {
      case "Mentors":
        return <Mentors />;
      case "Interns":
        return <Interns />;
      case "Tasks":
        return <Tasks />;
      case "Attendance":
        return <Attendance />;
      case "Reports":
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStateProvider>
      <div className="flex">
        <Sidebar active={active} setActive={setActive} />
        <div className="flex-1 min-h-screen ">
          {renderPage()}
        </div>
      </div>
    </AppStateProvider>
  );
}

export default App;