import { useState } from "react";

export default function VolunteerForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    skills: "",
    area: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitVolunteer = () => {
    let data = JSON.parse(localStorage.getItem("volunteers")) || [];

    const volunteer = {
      id: "VOL-" + Date.now(),
      ...form
    };

    data.push(volunteer);
    localStorage.setItem("volunteers", JSON.stringify(data));

    alert("🤝 Registered as Volunteer!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🤝 Volunteer Network</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <br /><br />

      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <br /><br />

      <input name="skills" placeholder="Skills (First Aid, Rescue...)" onChange={handleChange} />
      <br /><br />

      <input name="area" placeholder="Area" onChange={handleChange} />
      <br /><br />

      <button onClick={submitVolunteer}>
        Join Volunteer Network
      </button>
    </div>
  );
}