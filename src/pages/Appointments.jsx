// import React, { useState, useEffect } from "react";

// const Appointments = () => {
//   const [appointmentForm, setAppointmentForm] = useState({
//     date: "",
//     time: "",
//     document_nu: "",
//     departmentName: "",
//   });

//   const [departments, setDepartments] = useState([]);

//   useEffect(() => {
//     // Fetch departments from the backend or define them here
//     setDepartments([
//       { name: "Cardiology" },
//       { name: "Neurology" },
//       { name: "Pediatrics" },
//       // Add more departments as needed
//     ]);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAppointmentForm({
//       ...appointmentForm,
//       [name]: value,
//     });
//   };

//   const newAppointment = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/appointments", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(appointmentForm),
//       });

//       if (response.ok) {
//         alert("Appointment created successfully");
//         // Reset form or navigate to another page
//         setAppointmentForm({
//           date: "",
//           time: "",
//           document_nu: "",
//           departmentName: "",
//         });
//       } else {
//         const error = await response.text();
//         console.error("Error creating appointment:", error);
//         alert("Error creating appointment");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error creating appointment");
//     }
//   };

//   return (
//     <form onSubmit={newAppointment}>
//       {[
//         { label: "Date", type: "date", name: "date" },
//         { label: "Time", type: "time", name: "time" },
//         { label: "Document", type: "number", name: "document_nu" },
//       ].map((input) => (
//         <div key={input.name}>
//           <label htmlFor={input.name}>{input.label}</label>
//           <input
//             type={input.type}
//             name={input.name}
//             value={appointmentForm[input.name]}
//             onChange={handleChange}
//           />
//         </div>
//       ))}

//       <div>
//         <label htmlFor="departmentName">Department</label>
//         <select
//           name="departmentName"
//           value={appointmentForm.departmentName}
//           onChange={handleChange}
//         >
//           <option value="">Select a department</option>
//           {departments.map((department) => (
//             <option key={department.name} value={department.name}>
//               {department.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button type="submit">Create Appointment</button>
//     </form>
//   );
// };

// export default Appointments;
