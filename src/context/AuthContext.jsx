/* eslint-disable*/

import { createContext, useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const navigate = useNavigate();

  const handleSignup = async (form) => {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        credentials: "include",
      });

      if (response.ok) {
        setUser({ username: form.username });
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

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (response.ok) {
        setUser({ username });
        sessionStorage.setItem("user", JSON.stringify({ username }));
        navigate("/home");
      } else {
        const error = await response.text();
        console.error("Error al iniciar sesión:", error);
        alert("Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al iniciar sesión");
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
        setUser(null);
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
    <AuthContext.Provider value={{ user, handleSignup, handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
