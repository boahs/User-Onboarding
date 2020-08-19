import React from "react";

function Form(props) {
  const {
    values,
    submit,
    inputChange,
    disabled,
    errors,
    checkboxChange,
  } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };
  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
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
        <br />
        <label>
          Terms of service:
          <br />
          Yes
          <input
            type="checkbox"
            name="yes"
            checked={values.yes}
            onChange={onCheckboxChange}
          />
        </label>
        <br />
        <label>
          No
          <input
            type="checkbox"
            name="no"
            checked={values.no}
            onChange={onCheckboxChange}
          />
        </label>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </form>
  );
}

export default Form;
