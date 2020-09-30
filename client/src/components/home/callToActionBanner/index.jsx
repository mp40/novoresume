import React from "react";
import PropTypes from "prop-types";

import PseudoLogo from "../../pseudoLogo";

import offer from "../../../assets/icons/offer.png";
import fast from "../../../assets/icons/fast.png";
import log from "../../../assets/icons/log.png";

import { services, text } from "./data";

import "./styles.css";

const icons = { offer, fast, log };

const HomeCallToActionBanner = ({ handleSetRegisterModal }) => {
  return (
    <div className='homeCallToActionBanner'>
      <div className='heading'>
        <PseudoLogo />
        <h2>{text.heading}</h2>
      </div>
      <div className='body'>
        {services.map((service) => {
          return (
            <div className='services' key={service.icon}>
              <img src={icons[service.icon]} alt={service.icon} />
              <div className='text'>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className='standardButtonSecondary'
        type='button'
        onClick={() => handleSetRegisterModal()}
      >
        {text.button}
      </button>
    </div>
  );
};

HomeCallToActionBanner.propTypes = {
  handleSetRegisterModal: PropTypes.func.isRequired,
};

export default HomeCallToActionBanner;
