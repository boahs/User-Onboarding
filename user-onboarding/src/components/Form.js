import React from "react";

function Form(props) {
  const { values, submit, inputChange, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form submit">
        <h2>Add a User</h2>
        <button disabled={disabled}>submit</button>
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
      </div>
      <div className="form-group inputs">
        <h4> General information</h4>
        <label>
          username:{" "}
          <input
            value={values.username}
            onChange={onInputChange}
            name="username"
            type="text"
          />
        </label>
        <label>
          password:
          <input
            value={values.password}
            onChange={onInputChange}
            name="password"
            type="text"
          />
          <br />
          <label>
            Email:
            <input
              value={values.email}
              onChange={onInputChange}
              name="email"
              type="text"
            />
          </label>
        </label>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </form>
  );
}

export default Form;
