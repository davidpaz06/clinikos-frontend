import { Link } from "react-router-dom";
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.container}>
        <h1>Welcome to Our Landing Page</h1>
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
