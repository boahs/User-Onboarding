import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: "",
  email: "",
  ///// DROPDOWN /////
  password: "",
  ///// RADIO BUTTONS /////
};

const initialUsers = [];
const initialDisabled = true;

function Form({ details }) {
  const [users, setUsers] = useState(initialUsers); // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean

  const formSchema = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      });
  };
  console.log(initialFormErrors);

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
