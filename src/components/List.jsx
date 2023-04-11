import React from "react";
import Pet from "./Pet";

const List = ({pets, quantityObj, setQuantityObj,totalPrice,setTotalPrice}) => {

  // Double Deestructuring 
  // (Not Being used Anymore in the Application)
  // const { cat, dog, fish, dove, frog } = pets;

  return (
    <div className="list">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              <i className="fas fa-paw fa-2x"></i>
            </th>
            <th scope="col">Pet</th>
            <th scope="col">Price</th>
            <th scope="col">Rating</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {/* we will be get the PET array here which we need to map */}
          {pets.map(({name, id, price, rating}) => {
            return (<Pet key={id} name={name} id={id} price={price} rating={rating} quantityObj={quantityObj} setQuantityObj={setQuantityObj} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;