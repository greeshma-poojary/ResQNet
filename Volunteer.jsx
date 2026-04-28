import { useState } from "react";

function Volunteer() {

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Volunteer Registered Successfully!");
  };

  return (
    <div className="container">

      <h1 className="page-title">
        Volunteer Registration
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
        />

        <input
          type="text"
          placeholder="Skills"
        />

        <input
          type="text"
          placeholder="Availability"
        />

        <button type="submit">
          Register
        </button>

      </form>

      <br />

      <h2>{message}</h2>

    </div>
  );
}

export default Volunteer;