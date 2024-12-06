import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useActiveSection } from "../context/ActiveSectionContext";
import useProtected from "../hooks/useProtected";
import styles from "./home.module.css";
import svgs from "../assets/svg/svg.js";
import Sidebar from "../components/Sidebar.jsx";

const Home = () => {
  const { user, logout } = useAuth();
  const { activeSection } = useActiveSection();
  const [menus, setMenus] = useState([]);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      logout();
    }
  };

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch("http://localhost:3000/getMenus", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setMenus(data.menus);
        } else {
          console.error("Error fetching menus:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  console.log(menus);

  useProtected();

  return (
    <div className={styles.home}>
      <Sidebar menus={menus} />

      <div className={styles.content}>
        {/* ------------------------------------------------------------------------------------- */}
        <h2>Welcome, {user ? user.username : "Guest"}</h2>

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
