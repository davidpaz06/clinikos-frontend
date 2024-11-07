/*eslint-disable*/
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location.state || {};

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

  const logout = async () => {
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

  return (
    <div>
      <h1>Welcome home, {username}</h1>
      <button onClick={newAppointment}>New Appointment</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Home;
