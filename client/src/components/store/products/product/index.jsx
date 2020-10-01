import React from "react";
import PropTypes from "prop-types";

const Product = ({ product, handleAddItem, handleRemoveItem, quantity }) => {
  const addItem = () => {
    handleAddItem(product.key);
  };

  const removeItem = () => {
    if (quantity === 0) {
      return;
    }

    handleRemoveItem(product.key);
  };
  return (
    <div className='storeProduct' key={product.key}>
      <div className='view'>
        <img src={product.image} alt={product.heading} />
        <div>
          <p>{`$${product.price}`}</p>
          <button className='remove' type='button' onClick={() => removeItem()}>
            -
          </button>
          <span>{quantity}</span>
          <button
            className='add'
            type='button'
            onClick={() => addItem(product.key)}
          >
            +
          </button>
        </div>
      </div>
      <div className='text'>
        <h3>{product.heading}</h3>
        <h4>{product.subHeading}</h4>
        <p>{product.text}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Product;
