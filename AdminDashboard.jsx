import { useEffect, useState } from "react";
import "../styles.css";

export default function AdminDashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    const emergency = JSON.parse(localStorage.getItem("emergency")) || [];
    const volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];
    const support = JSON.parse(localStorage.getItem("support")) || [];

    const allData = [
      ...complaints.map(c => ({ ...c, type: "Complaint" })),
      ...emergency.map(e => ({ ...e, type: "Emergency" })),
      ...volunteers.map(v => ({ ...v, type: "Volunteer" })),
      ...support.map(s => ({ ...s, type: "Support" }))
    ];

    setData(allData);
  }, []);

  return (
    <div className="admin-page">

      {/* HEADER */}
      <div className="admin-header">
        <h1>🏛️ DigitalSeva Admin Dashboard</h1>
        <p>Manage all citizen requests in one place</p>
      </div>

      {/* STATS */}
      <div className="admin-stats">
        <div>Total Requests: {data.length}</div>
        <div>Complaints: {data.filter(d => d.type === "Complaint").length}</div>
        <div>Emergency: {data.filter(d => d.type === "Emergency").length}</div>
        <div>Volunteer: {data.filter(d => d.type === "Volunteer").length}</div>
        <div>Support: {data.filter(d => d.type === "Support").length}</div>
      </div>

      {/* TABLE */}
      <div className="admin-table">
        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Name</th>
              <th>Category / Issue</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id || "N/A"}</td>
                  <td>{item.type}</td>
                  <td>{item.name || "N/A"}</td>
                  <td>{item.category || item.issue || item.skills || "N/A"}</td>
                  <td>{item.location || item.area || "N/A"}</td>
                  <td>{item.status || "Pending"}</td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
}