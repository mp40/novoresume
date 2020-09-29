import React from "react";

import text from "./data";

import "./styles.css";

const Store = () => {
  return (
    <div className='storeWrapper'>
      <h1>{text.heading}</h1>
    </div>
  );
};

export default Store;
