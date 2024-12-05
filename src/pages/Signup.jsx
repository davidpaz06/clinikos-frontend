import { useState } from "react";
import styles from "./signup.module.css";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { handleSignup } = useAuth(),
    [form, setForm] = useState({
      profileId: 3,
      documentType: 1,
      documentNumber: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      username: "",
      password: "",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignup(form);
  };

  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <h1>Register</h1>
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
            {
              label: "Document Number",
              type: "number",
              name: "documentNumber",
            },
            { label: "First name", type: "text", name: "firstName" },
            { label: "Last name", type: "text", name: "lastName" },
            { label: "Email", type: "email", name: "email" },
            { label: "Phone", type: "text", name: "phone" },
            { label: "Address", type: "text", name: "address" },
            { label: "Username", type: "text", name: "username" },
            { label: "Password", type: "password", name: "password" },
          ].map((field, index) => (
            <div className={styles.formGroup} key={index}>
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={form[field.name]}
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
                  value={form[field.name]}
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
