import { useState } from "react";

function Complaint() {

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Complaint Registered Successfully!");
  };

  return (
    <div className="container">

      <h1 className="page-title">
        Complaint Registration
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Complaint Title"
        />

        <textarea
          placeholder="Describe Your Complaint"
        ></textarea>

        <input
          type="text"
          placeholder="Location"
        />

        <button type="submit">
          Submit Complaint
        </button>

      </form>

      <br />

      <h2>{message}</h2>

    </div>
  );
}

export default Complaint;