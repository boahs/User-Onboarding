import React from "react";

function Form({ details }) {
  if (!details) {
    return <h3>working on fetching your details...</h3>;
  }
  return (
    <div className="form container">
      <h2>{details.username}</h2>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}

export default Form;
