import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import Signin from "./components/pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/signin" element={<signin />} /> */}
        {/* <Route path="/landingpage" element={<LandingPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
