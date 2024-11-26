import { Link } from "react-router-dom";
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.clinikOS}>
        <h1>ClinikOS</h1>
        <p>Medical solutions, at your fingertips.</p>
      </div>
      <h1 className={styles.welcome}>Welcome to Our Landing Page</h1>

      <div className={styles.container}>
        <Link to="/login">
          <button className={styles.button}>Log in</button>
        </Link>
        <Link to="/signup">
          <button className={styles.button}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
