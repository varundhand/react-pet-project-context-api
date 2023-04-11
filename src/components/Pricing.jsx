import React from "react";

const Pricing = ({ quantityObj, totalPrice, setTotalPrice }) => {
  
  const getCartValue = () => {
    let totalValue = 0;
    const values = Object.values(quantityObj);
    values.forEach((item) => {
      totalValue += item;
    });
    return totalValue
  };

  return (
    <>
      <input
        className="price text-center"
        type="text"
        placeholder = {totalPrice}
        disabled
      />
      <div className="cart bg-warning rounded text-center py-2">
        <i className="fas fa-shopping-cart fa-2x">
          <span className="badge badge-pill badge-dark">{getCartValue()}</span>
        </i>
      </div>
    </>
  );
};

export default Pricing;
