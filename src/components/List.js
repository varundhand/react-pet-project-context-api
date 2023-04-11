import React from "react";
import Pet from "../components/Pet";

const List = () => {

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
          
          
        </tbody>
      </table>
    </div>
  );
};

export default List;