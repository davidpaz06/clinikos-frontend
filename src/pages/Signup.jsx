import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    profileId: 3,
    documentType: 1,
    documentNu: "",
    personNa: "",
    personLna: "",
    personEml: "",
    personPho: "",
    personDir: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (response.ok) {
        navigate("/home", { state: { username: formData.username } });
      } else {
        const error = await response.text();
        console.error("Error al registrar el usuario:", error);
        alert("Error al registrar el usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al registrar el usuario");
    }
  };

  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {[
            {
              label: "Profile",
              type: "select",
              name: "profileId",
              options: [
                { value: "2", label: "Doctor" },
                { value: "3", label: "Patient" },
              ],
            },
            {
              label: "Document Type",
              type: "select",
              name: "documentType",
              options: [
                { value: "1", label: "V" },
                { value: "2", label: "E" },
              ],
            },

            { label: "Document Number", type: "number", name: "documentNu" },
            { label: "Name", type: "text", name: "personNa" },
            { label: "Lastname", type: "text", name: "personLna" },
            { label: "Email", type: "email", name: "personEml" },
            { label: "Phone", type: "number", name: "personPho" },
            { label: "Address", type: "text", name: "personDir" },
            { label: "Username", type: "text", name: "username" },
            { label: "Password", type: "password", name: "password" },
          ].map((field, index) => (
            <div className={styles.formGroup} key={index}>
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                >
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          ))}
          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
