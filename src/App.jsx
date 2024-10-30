import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* <Route path="/landingpage" element={<LandingPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
