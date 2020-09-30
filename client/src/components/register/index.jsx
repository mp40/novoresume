import React, { useState } from "react";
import PropTypes from "prop-types";

import text from "./data";

const Register = ({ handleRegister, handleSetSigninModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName.trim().length === 0) {
      return;
    }

    if (lastName.trim().length === 0) {
      return;
    }

    if (email.trim().length === 0 || !email.includes("@")) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    }

    handleRegister({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  };

  const renderLabel = (title, value, fn) => {
    return (
      <>
        <label>{title}</label>
        <input value={value} onChange={(event) => fn(event.target.value)} />
      </>
    );
  };

  return (
    <>
      <div className='modal' />
      <div className='card'>
        <div>{text.heading}</div>
        <form className='form' onSubmit={(event) => handleSubmit(event)}>
          {renderLabel("First Name", firstName, setFirstName)}
          {renderLabel("Last Name", lastName, setLastName)}
          {renderLabel("Email", email, setEmail)}
          {renderLabel("Password", password, setPassword)}
          <input type='submit' value='Register' />
        </form>
        <button
          type='button'
          onClick={() => {
            handleSetSigninModal();
          }}
        >
          {text.button}
        </button>
      </div>
    </>
  );
};

Register.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  handleSetSigninModal: PropTypes.func.isRequired,
};

export default Register;
