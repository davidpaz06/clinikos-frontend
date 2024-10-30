import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;