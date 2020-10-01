import React from "react";
import PropTypes from "prop-types";

import logo from "../../assets/icons/logo.png";

import "./styles.css";

const Header = ({
  handleSetRegisterModal,
  handleSetSigninModal,
  handleSignOut,
  signedIn,
}) => {
  return (
    <div className='header'>
      <div>
        <div>
          <img className='logo' src={logo} alt='logo' />
        </div>
        <div className='buttons'>
          {!signedIn && (
            <>
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
            </>
          )}
          {signedIn && (
            <button
              className='signout'
              type='button'
              onClick={() => handleSignOut()}
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleSetRegisterModal: PropTypes.func.isRequired,
  handleSetSigninModal: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired,
};

export default Header;
