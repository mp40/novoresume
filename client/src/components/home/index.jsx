import React from "react";
import PropTypes from "prop-types";

import HomeRegisterBanner from "./registerBanner";
import HomeCallToActionBanner from "./callToActionBanner";
import HomeBlogBanner from "./blogBanner";

import "./styles.css";

const Home = ({ handleSetRegisterModal }) => {
  return (
    <div>
      <HomeRegisterBanner handleSetRegisterModal={handleSetRegisterModal} />
      <HomeCallToActionBanner />
      <HomeBlogBanner />
    </div>
  );
};

Home.propTypes = {
  handleSetRegisterModal: PropTypes.func.isRequired,
};

export default Home;
