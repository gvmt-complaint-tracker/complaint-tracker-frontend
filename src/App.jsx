import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ComplaintForm from "./components/ComplaintForm";
import AdminDashboard from "./pages/AdminDashboard";
import StatusTracker from "./components/StatusTracker";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ComplaintForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/status" element={<StatusTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
