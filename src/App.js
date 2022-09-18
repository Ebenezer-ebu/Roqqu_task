import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Dashboard";
import Metrics from "./pages/Metrics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/metrics" element={<Metrics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
