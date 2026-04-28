import { useState } from "react";

export default function EmergencyForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    emergencyType: "Medical Emergency"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitEmergency = () => {
    let data = JSON.parse(localStorage.getItem("emergency")) || [];

    const emergency = {
      id: "EMG-" + Date.now(),
      ...form,
      status: "Active"
    };

    data.push(emergency);
    localStorage.setItem("emergency", JSON.stringify(data));

    alert("🚨 Emergency Request Sent!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚨 Emergency Support</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <br /><br />

      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <br /><br />

      <input name="location" placeholder="Location" onChange={handleChange} />
      <br /><br />

      <select name="emergencyType" onChange={handleChange}>
        <option>Medical Emergency</option>
        <option>Fire Emergency</option>
        <option>Accident</option>
        <option>Police Help</option>
      </select>

      <br /><br />

      <button onClick={submitEmergency}>
        Send Emergency Alert
      </button>
    </div>
  );
}