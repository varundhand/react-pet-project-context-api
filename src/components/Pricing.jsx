import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Pricing = () => {
  const { totalPets, totalPrice } = useContext(GlobalContext);

  return (
    <>
      <input
        className="price text-center"
        type="text"
        placeholder="Total Price"
        value={`$${totalPrice}.00`}
        disabled
      />
      <div className="cart bg-warning rounded text-center py-2">
        <i className="fas fa-shopping-cart fa-2x">
          <span className="badge badge-pill badge-dark">{totalPets}</span>
        </i>
      </div>
    </>
  );
};

export default Pricing;