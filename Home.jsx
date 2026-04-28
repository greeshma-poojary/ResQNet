 import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Home() {

  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdmin = () => {
    const pass = prompt("Enter Admin Password:");

    if (pass === "admin123") {
      setIsAdmin(true);
      alert("Access Granted ✔");
    } else {
      alert("Access Denied ❌");
    }
  };

  return (
    <div>

      {/* HERO SECTION */}
      <div className="hero-section">
        <h1>🏛️ DigitalSeva Portal</h1>
        <p>Smart platform for citizen services and government support</p>
      </div>

      {/* FEATURES SECTION */}
      <div className="features">

        {/* 📢 COMPLAINT */}
        <Link to="/complaint" style={{ textDecoration: "none" }}>
          <div className="feature-card">
            <h3>📢 Complaint System</h3>
            <p>Register civic issues easily</p>
          </div>
        </Link>

        {/* 🚨 EMERGENCY */}
        <Link to="/emergency" style={{ textDecoration: "none" }}>
          <div className="feature-card">
            <h3>🚨 Emergency Support</h3>
            <p>Quick SOS assistance</p>
          </div>
        </Link>

        {/* 🤝 VOLUNTEER */}
        <Link to="/volunteer" style={{ textDecoration: "none" }}>
          <div className="feature-card">
            <h3>🤝 Volunteer Network</h3>
            <p>Join community help</p>
          </div>
        </Link>

        {/* 🆘 SUPPORT */}
        <Link to="/support" style={{ textDecoration: "none" }}>
          <div className="feature-card">
            <h3>🆘 Citizen Support</h3>
            <p>Government assistance desk</p>
          </div>
        </Link>

        {/* 🔐 ADMIN (PROTECTED) */}
        {isAdmin ? (
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <div className="admin-special-card">
              🧑‍💼 Admin Dashboard (Unlocked)
            </div>
          </Link>
        ) : (
          <div onClick={checkAdmin} className="admin-special-card">
            🔐 Restricted Admin Access
          </div>
        )}

      </div>

      {/* FOOTER */}
      <div className="footer">
        <p>© 2026 DigitalSeva | Built for Smart Governance</p>
      </div>

    </div>
  );
}