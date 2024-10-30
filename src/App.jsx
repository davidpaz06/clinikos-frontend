import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import Signup from "./components/pages/Signup";
// import Login from "./components/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/landingpage" element={<LandingPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
