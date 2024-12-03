import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useProtected from "../hooks/useProtected";
import styles from "./home.module.css";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const newAppointment = async () => {
    try {
      const response = await fetch("http://localhost:3000/toProcess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          methodName: "createAppointment",
          objectName: "Appointment",
          params: {
            date: "2023-12-01",
            time: "10:00",
            doctorId: 1,
            patientId: 1,
          },
        }),
        credentials: "include",
      });

      if (response.ok) {
        alert("Logged out successfully");
        navigate("/");
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
      <h1 style={{ color: "#000" }}>Welcome home, {user}</h1>
      <button onClick={newAppointment}>New Appointment</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Home;
