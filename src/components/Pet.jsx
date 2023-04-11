import React, { useState } from "react";

const Pet = ({
  id,
  name,
  price,
  rating,
  quantityObj,
  setQuantityObj,
  totalPrice,
  setTotalPrice,
}) => {
  console.log(totalPrice);

  const starElement = <i className="fas fa-star"></i>;

  const handleIncrement = () => {
    let totalPrice = 0;
    setQuantityObj((prevQuantityObj) => {
      // * Way 1
      // return {
      //   ...prevQuantityObj,
      //   [id]: prevQuantityObj[id] + 1,
      // }

      // * Way 2
      // In useState hook, never mutate an Object or Array directly. Create a clone and modify it.
      const quantityObjAdd = structuredClone(prevQuantityObj);
      quantityObjAdd[id] = prevQuantityObj[id] + 1;
      console.log("Runs this");
      // console.log(totalPrice)
      return quantityObjAdd;
    });
    
    setTotalPrice((prevPrice) => {
      console.log(prevPrice, price);
      return prevPrice + price;
    });
  };

  const handleDecrement = () => {
    setQuantityObj((prevQuantityObj) => {
      if (prevQuantityObj[id] === 0) {
        return prevQuantityObj;
      } else {
        const quantityObjSubtract = structuredClone(prevQuantityObj);
        console.log({ quantityObjSubtract });
        quantityObjSubtract[id] = prevQuantityObj[id] - 1;
        return quantityObjSubtract;
      }
    });

    setTotalPrice((prevPrice) => {
      return (prevPrice > 0 ? prevPrice - price : prevPrice) 
    })
  };

  function starIcon(rating) {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={Math.random()} className="fas fa-star"></i>);
    }
    return stars;
  }
  // const starIcon = <i className="fas fa-star"></i>
  return (
    <tr>
      <th scope="row">
        <i className={`fa-solid fa-${id} fa-2x`}></i>
      </th>
      {/* <td>{id.charAt(0).toUpperCase() + id.slice(1)}</td> */}
      <td>{name}</td>
      <td>{price}</td>
      <td>{starIcon(rating)}</td>
      <td>
        <i
          className="fas fa-plus-circle fa-2x"
          id={id}
          onClick={handleIncrement}
        ></i>
        <span className="quantity"> {quantityObj[id]} </span>
        <i
          className="fas fa-minus-circle fa-2x"
          id={id}
          onClick={handleDecrement}
        ></i>
      </td>
    </tr>
  );
};

export default Pet;
