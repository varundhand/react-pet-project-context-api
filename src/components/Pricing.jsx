import React from "react";

const Pricing = () => {

  return (
    <>
      <input
        className="price text-center"
        type="text"
        placeholder="Total Price"
        disabled
      />
      <div className="cart bg-warning rounded text-center py-2">
        <i className="fas fa-shopping-cart fa-2x">
          <span className="badge badge-pill badge-dark">1</span>
        </i>
      </div>
    </>
  );
};

export default Pricing;