import React from "react";

import logo from "../../assets/icons/logo.png";

import "./styles.css";

const Header = ({ handleSetRegisterModal, handleSetSigninModal }) => {
  return (
    <div className='header'>
      <div>
        <div>
          <img className='logo' src={logo} alt='logo' />
        </div>
        <div className='buttons'>
          <button
            className='register'
            type='button'
            onClick={() => handleSetRegisterModal()}
          >
            Register
          </button>
          <button
            className='signin'
            type='button'
            onClick={() => handleSetSigninModal()}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
