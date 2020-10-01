import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import headings from "./data";

import "./styles.css";

const StoreBilling = ({ billingDetails, handleUpdateBillingDetails }) => {
  const updateField = (key, value) => {
    handleUpdateBillingDetails(key, value);
  };

  return (
    <div className='storeBilling'>
      <h2 className='storeSubHeading'>
        Step 2: Add Customer Billing Information
      </h2>
      <form className='billingForm'>
        {headings.map((heading) => (
          <div key={heading.key}>
            <label>{heading.text}</label>
            <input
              type='text'
              defaultValue={billingDetails[heading.key]}
              onChange={(event) => updateField(heading.key, event.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

StoreBilling.propTypes = {
  billingDetails: PropTypes.object.isRequired,
  handleUpdateBillingDetails: PropTypes.func.isRequired,
};

export default StoreBilling;
