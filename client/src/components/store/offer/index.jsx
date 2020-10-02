import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const StoreOffer = ({ handleOrder }) => {
  return (
    <div className='storeOffer'>
      <h2 className='storeSubHeading'>Step 3: Generate Offer</h2>
      <button
        className='standardButtonPrimary'
        type='button'
        onClick={() => {
          handleOrder();
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

StoreOffer.propTypes = {
  handleOrder: PropTypes.func.isRequired,
};

export default StoreOffer;
