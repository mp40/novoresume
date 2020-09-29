import React from "react";
import PropTypes from "prop-types";

import header from "../../../assets/background/header.png";

import text from "./text";

import "./styles.css";

const HomeRegisterBanner = ({ handleSetRegisterModal }) => {
  return (
    <div className='homeRegisterBanner'>
      <div className='text'>
        <div>
          <h1>{text.heading}</h1>
          <p>{text.body}</p>
        </div>
        <button type='button' onClick={() => handleSetRegisterModal()}>
          {text.button}
        </button>
      </div>
      <div className='image'>
        <img className='homeHeader' src={header} alt='home' />
      </div>
    </div>
  );
};

HomeRegisterBanner.propTypes = {
  handleSetRegisterModal: PropTypes.func.isRequired,
};

export default HomeRegisterBanner;
