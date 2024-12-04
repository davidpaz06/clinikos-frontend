import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useProtected from "../hooks/useProtected";
import styles from "./home.module.css";
import svgs from "../assets/svg/svg.js";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        alert("Logged out successfully");
        logout(); // Call the logout function from AuthContext
        navigate("/login");
      } else {
        const error = await response.text();
        console.error("Error logging out:", error);
        alert("Error logging out");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error logging out");
    }
  };

  useProtected();

  return (
    <div className={styles.home}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <h1>Clinikos</h1>
        </div>

        <div className={styles.option_container}>
          {/* 
            --------------------------------
            
            LOGICA DE OPCIONES
            
            --------------------------------
            */}
        </div>

        <div className={styles.settings}>
          <img className={styles.icon} src={svgs.user} alt="user" />
          <img className={styles.icon} src={svgs.config} alt="config" />
        </div>
      </div>
      <div className={styles.content}>
        <img
          className={styles.logout}
          src={svgs.logout}
          alt="logout"
          onClick={handleLogout} // Call handleLogout instead of logout
        />
      </div>
    </div>
  );
};

export default Home;
