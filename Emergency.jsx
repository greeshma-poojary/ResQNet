import { useState } from "react";

function Emergency() {

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Emergency Request Submitted Successfully!");
  };

  return (
    <div className="container">

      <h1 className="page-title">
        Emergency Support
      </h1>

      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="Enter Name" />

        <input type="text" placeholder="Location" />

        <input type="text" placeholder="Emergency Type" />

        <button type="submit">
          Submit
        </button>

      </form>

      <br />

      <h2>{message}</h2>

    </div>
  );
}

export default Emergency;