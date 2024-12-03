import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function useProtected() {
  const { user } = useAuth(),
    navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      // navigate("/login");
      navigate("/home");
    } else {
      navigate("/home");
    }
  }, [user, navigate]);
}

export default useProtected;
