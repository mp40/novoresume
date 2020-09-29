import React from "react";
import PropTypes from "prop-types";

import HomeRegisterBanner from "./registerBanner";
import HomeCallToActionBanner from "./callToActionBanner";
import HomeBlogBanner from "./blogBanner";

import "./styles.css";

const Home = ({ handleSetRegisterModal }) => {
  return (
    <div className='homeWrapper'>
      <HomeRegisterBanner handleSetRegisterModal={handleSetRegisterModal} />
      <HomeCallToActionBanner handleSetRegisterModal={handleSetRegisterModal} />
      <HomeBlogBanner />
    </div>
  );
};

Home.propTypes = {
  handleSetRegisterModal: PropTypes.func.isRequired,
};

export default Home;
