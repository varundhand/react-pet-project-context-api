import React from "react";

const Pet = ({id = 1}) => {

  const starElement = <i className="fas fa-star"></i>;
  // let stars = [];
  // for (let i = 0; i < rating; i++) {
  //   stars.push(starElement);
  // }

  const handleDecrement = () => {
    
  }

  return (
    <tr>
      <th scope="row">
        <i className={`fas fa-${id} fa-2x`}></i>
      </th>
      {/* <td>{id.charAt(0).toUpperCase() + id.slice(1)}</td> */}
      <td>23</td>
      <td><i className="fas fa-star"></i></td>
      <td>
        <i
          className="fas fa-plus-circle fa-2x"
          id={id}
          onClick={() => {}}
        ></i>
        <span className="quantity"> {20} </span>
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