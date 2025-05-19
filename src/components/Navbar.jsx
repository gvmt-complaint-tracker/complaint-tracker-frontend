import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Government Complaint Tracker</h2>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/status" className="navbar-link">
          Track Status
        </Link>
        <Link to="/admin" className="navbar-link">
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
