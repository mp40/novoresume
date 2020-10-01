import React, { useState } from "react";

import StoreProducts from "./products";
import StoreBilling from "./billing";
import StoreOffer from "./offer";

import text from "./data";

import "./styles.css";

const Store = () => {
  const [order, setOrder] = useState({
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
    item5: 0,
    item6: 0,
    item7: 0,
    item8: 0,
  });

  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    telephone: "",
    email: "",
  });

  const handleAddItem = (item) => {
    const update = { [item]: order[item] + 1 };

    setOrder({ ...order, ...update });
  };

  const handleRemoveItem = (item) => {
    const update = { [item]: order[item] - 1 };

    setOrder({ ...order, ...update });
  };

  const handleUpdateBillingDetails = (item, value) => {
    const update = { [item]: value };

    setBillingDetails({ ...billingDetails, ...update });
  };

  return (
    <div className='storeWrapper'>
      <h1>{text.heading}</h1>
      <StoreProducts
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        order={order}
      />
      <StoreBilling
        billingDetails={billingDetails}
        handleUpdateBillingDetails={handleUpdateBillingDetails}
      />
      <StoreOffer />
    </div>
  );
};

export default Store;
