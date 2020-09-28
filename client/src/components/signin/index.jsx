import React, { useState } from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Signin = ({ handleSignin, handleSetRegisterModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim().length === 0 || !email.includes("@")) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    }

    handleSignin({
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
        <div>Sign In</div>
        <form className='form' onSubmit={(event) => handleSubmit(event)}>
          {renderLabel("Email", email, setEmail)}
          {renderLabel("Password", password, setPassword)}
          <input type='submit' value='Register' />
        </form>
        <button
          type='button'
          onClick={() => {
            handleSetRegisterModal();
          }}
        >
          Don't have an account? Register Now
        </button>
      </div>
    </>
  );
};

Signin.propTypes = {
  handleSignin: PropTypes.func.isRequired,
  handleSetRegisterModal: PropTypes.func.isRequired,
};

export default Signin;
