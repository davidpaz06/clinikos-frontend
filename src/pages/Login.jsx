import { useState } from "react";
import styles from "./login.module.css";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { handleLogin } = useAuth(),
    [form, setForm] = useState({
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
    await handleLogin(form.username, form.password);
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {["username", "password"].map((field) => (
            <div key={field} className={styles.formGroup}>
              <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                id={field}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
