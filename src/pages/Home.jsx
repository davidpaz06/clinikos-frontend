import React from "react";
import { useAuth } from "../context/AuthContext";
import useProtected from "../hooks/useProtected";
import styles from "./home.module.css";
import svgs from "../assets/svg/svg.js";
import Sidebar from "../components/Sidebar.jsx";
import UpcomingAppointments from "../components/UpcomingAppointments.jsx";

const Home = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      logout();
    }
  };

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
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Home;
