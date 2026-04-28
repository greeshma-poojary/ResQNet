import { useState } from "react";

function Support() {

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Support Request Submitted Successfully!");
  };

  return (
    <div className="container">

      <h1 className="page-title">
        Student & Senior Citizen Support
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
        />

        <input
          type="text"
          placeholder="Location"
        />

        <textarea
          placeholder="Describe Support Needed"
        ></textarea>

        <button type="submit">
          Request Support
        </button>

      </form>

      <br />

      <h2>{message}</h2>

    </div>
  );
}

export default Support;