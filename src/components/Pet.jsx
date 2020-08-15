import React from "react";

const Pet = ({ id, price, rating, quantity, onIncrement, onDecrement }) => {
  const starElement = <i className="fas fa-star"></i>;
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(starElement);
  }

  return (
    <tr>
      <th scope="row">
        <i className={`fas fa-${id} fa-2x`}></i>
      </th>
      <td>{id.charAt(0).toUpperCase() + id.slice(1)}</td>
      <td>{price}</td>
      <td>{stars}</td>
      <td>
        <i
          className="fas fa-plus-circle fa-2x"
          id={id}
          onClick={onIncrement}
        ></i>
        <span className="quantity"> {quantity} </span>
        <i
          className="fas fa-minus-circle fa-2x"
          id={id}
          onClick={onDecrement}
        ></i>
      </td>
    </tr>
  );
};

export default Pet;