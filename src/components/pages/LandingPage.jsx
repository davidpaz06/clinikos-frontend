import { useNavigate } from "react-router-dom";
import styles from "./landingpage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.landingPage}>
      <div className={styles.container}>
        <h1>Welcome to Our Landing Page</h1>
        <button className={styles.button} onClick={() => navigate("/login")}>
          Log In
        </button>
        <button className={styles.button} onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
