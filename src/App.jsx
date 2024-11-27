import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import Page from "./pages/Page";
import Test from "./pages/Test";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/page" element={<Page />} /> */}
          <Route path="/test" element={<Test />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
