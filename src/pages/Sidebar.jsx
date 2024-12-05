import { useAuth } from "../context/AuthContext";
import styles from "./home.module.css";
import svgs from "../assets/svg/svg.js";

const Sidebar = () => {
  const { user } = useAuth();

  // Hardcode the user profile for testing purposes
  const hardcodedUser = { ...user, profile: "admin" }; // Cambia "admin" por el perfil que desees probar

  const options = {
    admin: [
      "Appointments",
      "History",
      "Medics",
      "Hospitalizations",
      "Patients",
      "Exams",
      "History",
    ],
    doctor: ["Appointments", "Patients", "Hospitalizations", "History"],
    patient: ["History", "Appointments", "Medics"],
  };

  const userOptions = options[user?.profile] || options[hardcodedUser.profile];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>Clinikos</h1>
      </div>

      <div className={styles.option_container}>
        {userOptions.map((option) => (
          <div key={option} className={styles.option}>
            {option}
          </div>
        ))}
      </div>

      <div className={styles.settings}>
        <img className={styles.icon} src={svgs.user} alt="user" />
        <img className={styles.icon} src={svgs.config} alt="config" />
      </div>
    </div>
  );
};

export default Sidebar;
