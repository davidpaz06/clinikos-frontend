import { useAuth } from "../context/AuthContext";
import { useActiveSection } from "../context/ActiveSectionContext.jsx";
import useProtected from "../hooks/useProtected";
import styles from "./home.module.css";
import svgs from "../assets/svg/svg.js";
import Sidebar from "../components/Sidebar.jsx";
import UpcomingAppointments from "../components/UpcomingAppointments.jsx";
import Appointments from "../components/Appointments.jsx";

const Home = () => {
  const { user, logout } = useAuth();
  const { activeSection } = useActiveSection();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      logout();
    }
  };

  useProtected();

  const sectionComponents = {
    "Upcoming Appointments": UpcomingAppointments,
    Appointments: Appointments,
    // History: History,
    // Medics: Medics,
    // Hospitalizations: Hospitalizations,
    // Patients: Patients,
  };

  const ActiveComponent = sectionComponents[activeSection];

  return (
    <div className={styles.home}>
      <Sidebar />

      <div className={styles.content}>
        {/* ------------------------------------------------------------------------------------- */}
        <h2>Welcome, {user ? user.username : "Guest"}</h2>

        {ActiveComponent ? <ActiveComponent /> : <p>Select a section</p>}

        {/* ------------------------------------------------------------------------------------- */}
        <img
          className={styles.logout}
          src={svgs.logout}
          alt="logout"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Home;
