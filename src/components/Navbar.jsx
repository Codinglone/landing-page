import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <div className="brand">
          <span>DEVTEK</span>
        </div>
        <div className="links">
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/services" className="link">Services</Link>
          </li>
          <li>
            <Link to="/about" className="link">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="link">Contact Us</Link>
          </li>
          <li>
            <Link to="/signup" className="link">Sign Up</Link>
          </li>
          <li>
            <Link to="/messages" className="link">Messages</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
