import { useState } from "react";

export default function SupportForm() {

  const [form, setForm] = useState({
    name: "",
    issue: "",
    details: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitSupport = () => {
    let data = JSON.parse(localStorage.getItem("support")) || [];

    const support = {
      id: "SUP-" + Date.now(),
      ...form,
      status: "Pending"
    };

    data.push(support);
    localStorage.setItem("support", JSON.stringify(data));

    alert("🆘 Support Request Submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🆘 Citizen Support</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <br /><br />

      <input name="issue" placeholder="Issue Type" onChange={handleChange} />
      <br /><br />

      <textarea name="details" placeholder="Describe your issue" onChange={handleChange} />
      <br /><br />

      <button onClick={submitSupport}>
        Submit Request
      </button>
    </div>
  );
}