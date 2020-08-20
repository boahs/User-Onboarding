import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import * as yup from "yup";
import Form from "./components/Form";
import User from "./components/User";

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  checkbox: {
    yes: false,
    no: false,
  },
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
    console.log(newUser);
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

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      checkbox: {
        ...formValues.checkbox,
        [name]: isChecked,
      },
    });
  };

  const submit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <header className="App-header">
        <Form
          values={formValues}
          inputChange={inputChange}
          checkboxChange={checkboxChange}
          submit={submit}
          disabled={disabled}
          errors={formErrors}
        />
        {users.map((user) => {
          return <User key={user.id} details={user} />;
        })}
      </header>
    </div>
  );
}

export default App;
