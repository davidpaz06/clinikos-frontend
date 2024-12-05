import { useState } from "react";
import styles from "./appointments.module.css";

const Appointments = () => {
  const [appointmentForm, setAppointmentForm] = useState({
    date: "",
    time: "",
    document: "",
    department_de: "",
    // doctor_de: "",
  });

  const departments = [
    { value: "3", name: "Traumatology" },
    { value: "4", name: "Psychology" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm({
      ...appointmentForm,
      [name]: value,
    });
  };

  const newAppointment = async (e) => {
    e.preventDefault();
    console.log(appointmentForm);

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
            appointment_dt: appointmentForm.date,
            appointment_hr: appointmentForm.time,
            document_nu: appointmentForm.document_nu,
            department_de: appointmentForm.departmentName,
            // doctor_de: appointmentForm.doctorName,
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

  return (
    <div className={styles.appointments}>
      <form className={styles.formGroup} onSubmit={newAppointment}>
        {[
          { label: "Date", type: "date", name: "date" },
          { label: "Time", type: "time", name: "time" },
          { label: "Document ", type: "number", name: "document_nu" },
        ].map((input) => {
          return (
            <div key={input.name}>
              <label htmlFor={input.name}>{input.label}</label>
              <input
                type={input.type}
                name={input.name}
                value={appointmentForm[input.name]}
                onChange={handleChange}
              />
            </div>
          );
        })}

        <div>
          <label htmlFor="departmentName">Department </label>
          <select
            name="department_de"
            value={appointmentForm.departmentName}
            onChange={handleChange}
          >
            <option value="">Select a department</option>
            {departments.map((department) => (
              <option key={department.name} value={department.name}>
                {department.name}
              </option>
            ))}
          </select>
        </div>

        {/* <div>
          <label htmlFor="doctorName">Doctor</label>
          <select
            name="doctor_de"
            value={appointmentForm.doctorName}
            onChange={handleChange}
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.name} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div> */}

        <button className={styles.button} type="submit">
          Create Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointments;
