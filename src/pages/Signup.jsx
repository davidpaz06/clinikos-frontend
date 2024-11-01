import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    documentType: 1,
    documentNu: "",
    personNa: "",
    personLna: "",
    personEml: "",
    personDir: "",
    username: "",
    password: "",
  });

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
      });

      if (response.ok) {
        navigate("/home");
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

  const handleTest = async () => {
    try {
      const response = await fetch("http://localhost:3000/test", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // console.log(response);
      } else {
        const error = await response.text();
        console.error("Error al obtener los datos:", error);
        alert("Error al obtener los datos");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al obtener los datos");
    }
  };

  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {[
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
        <button onClick={handleTest}>test</button>
      </div>
    </div>
  );
};

export default Signup;
