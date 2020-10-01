import React, { useState } from "react";
import PropTypes from "prop-types";

import Product from "./product";

import item1 from "../../../assets/items/item1.png";
import item2 from "../../../assets/items/item2.png";
import item3 from "../../../assets/items/item3.png";
import item4 from "../../../assets/items/item4.png";
import item5 from "../../../assets/items/item5.png";
import item6 from "../../../assets/items/item6.png";
import item7 from "../../../assets/items/item7.png";
import item8 from "../../../assets/items/item8.png";

import { products } from "./data";

import "./styles.css";

const itemImgs = { item1, item2, item3, item4, item5, item6, item7, item8 };

const StoreProducts = ({ handleAddItem, handleRemoveItem, order }) => {
  return (
    <div className='storeProducts'>
      <h2 className='storeSubHeading'>Step 1: Select Products</h2>
      <div className='productWrapper'>
        {products.map((product) => (
          <Product
            key={product.key}
            product={{ ...product, image: itemImgs[product.key] }}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            quantity={order[product.key]}
          />
        ))}
      </div>
    </div>
  );
};

StoreProducts.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};

export default StoreProducts;
