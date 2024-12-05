import { useAuth } from "../context/AuthContext";
import useProtected from "../hooks/useProtected";
import UpcomingAppointments from "./UpcomingAppointments";
import styles from "./home.module.css";
import svgs from "../assets/svg/svg.js";
import Sidebar from "./Sidebar.jsx";

const Home = () => {
  const { user, logout } = useAuth();

  useProtected();
  return (
    <div className={styles.home}>
      <Sidebar />

      <div className={styles.content}>
        {/* ------------------------------------------------------------------------------------- */}
        <h2>Welcome, {user}</h2>

        <UpcomingAppointments />

        {/* ------------------------------------------------------------------------------------- */}
        <img
          className={styles.logout}
          src={svgs.logout}
          alt="logout"
          onClick={logout}
        />
      </div>
    </div>
  );
};

export default Home;
