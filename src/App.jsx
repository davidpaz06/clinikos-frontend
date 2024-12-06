import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ActiveSectionProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </ActiveSectionProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
