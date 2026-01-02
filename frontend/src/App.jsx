import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Billing from "./components/Billing"; // Create later

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
    </BrowserRouter>
  );
}

export default App;
