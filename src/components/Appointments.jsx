import { useState } from "react";
import styles from "./appointments.module.css";

const Appointments = () => {
  const [appointmentForm, setAppointmentForm] = useState({
    date: "",
    time: "",
    document_number: "",
    department: "",
  });

  //----------------------------------------------
  // CALL THE DATABASE TO GET THE DOCTORS
  // CALL THE DATABASE TO GET THE DEPARTMENTS

  const departments = [
    { value: "1", name: "Dentist" },
    { value: "2", name: "Psychology" },
    { value: "3", name: "Traumatology" },
  ];

  //----------------------------------------------

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
            hour: appointmentForm.time,
            date: appointmentForm.date,
            document_number: appointmentForm.document_number,
            department: appointmentForm.department,
          },
        }),
        credentials: "include",
      });

      if (response.ok) {
        alert("Appointment created successfully");
      } else {
        const error = await response.text();
        console.error("Error creating an appointment", error);
        alert("Error creating an appointment");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating an appointment");
    }
  };

  return (
    <div className={styles.appointments}>
      <form className={styles.formGroup} onSubmit={newAppointment}>
        {[
          { label: "Date", type: "date", name: "date" },
          { label: "Time", type: "time", name: "time" },
          { label: "Document ", name: "document_number" },
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
          <label className={styles.formGroup} htmlFor="departmentName">
            Department{" "}
          </label>
          <select
            name="department"
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
