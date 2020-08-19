import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import * as yup from "yup";
import Form from "./components/Form";

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

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Must include email address"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is Required"),
  password: yup
    .string()
    .min(8, "You must select a password of 8 or more characters")
    .required("You must select a password"),
});

function App() {
  const [users, setUsers] = useState(initialUsers); // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      });
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
