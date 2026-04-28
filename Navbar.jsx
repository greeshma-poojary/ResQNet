import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>ResQNet</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/emergency">Emergency</Link>
        <Link to="/complaint">Complaint</Link>
        <Link to="/volunteer">Volunteer</Link>
        <Link to="/support">Support</Link>
      </div>
    </nav>
  );
}

export default Navbar;