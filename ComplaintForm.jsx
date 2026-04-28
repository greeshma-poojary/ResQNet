import { useState } from "react";

export default function ComplaintForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "Road Issue",
    location: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitComplaint = () => {
    let data = JSON.parse(localStorage.getItem("complaints")) || [];
    data.push(form);
    localStorage.setItem("complaints", JSON.stringify(data));

    alert("✔ Complaint Submitted Successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📢 Complaint Form</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <br /><br />

      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <br /><br />

      <select name="category" onChange={handleChange}>
        <option>Road Issue</option>
        <option>Water Supply</option>
        <option>Electricity</option>
        <option>Garbage</option>
      </select>
      <br /><br />

      <input name="location" placeholder="Location" onChange={handleChange} />
      <br /><br />

      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <br /><br />

      <button onClick={submitComplaint}>
        Submit Complaint
      </button>
    </div>
  );
}