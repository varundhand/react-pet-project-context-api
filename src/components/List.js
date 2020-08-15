import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Pet from "../components/Pet";
// import uuid from '../../node_modules/uuid/dist/v1'

const List = () => {
  const {
    pets,
    prices,
    ratings,
    handleIncrement,
    handleDecrement,
  } = useContext(GlobalContext);

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
          {Object.keys(pets).map((pet, index) => {
            return (
              <Pet
                key={index}
                id={pet}
                price={`$${prices[index]}.00`}
                rating={ratings[index]}
                quantity={Object.values(pets)[index]}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            );
          })}
          {/* Earlier Approach, This is not the way to go in React use the map method instead*/}
          {/* <Pet id={'cat'} price={'$30.00'} rating={4} quantity={cat} onIncrement={handleIncrement} onDecrement={handleDecrement} />
            <Pet id={'dog'} price={'$15.00'} rating={1} quantity={dog} onIncrement={handleIncrement} onDecrement={handleDecrement} />
            <Pet id={'fish'} price={'$25.00'} rating={3} quantity={fish} onIncrement={handleIncrement} onDecrement={handleDecrement} />
            <Pet id={'dove'} price={'$20.00'} rating={5} quantity={dove} onIncrement={handleIncrement} onDecrement={handleDecrement} />
            <Pet id={'frog'} price={'$17.00'} rating={2} quantity={frog} onIncrement={handleIncrement} onDecrement={handleDecrement} /> */}
        </tbody>
      </table>
    </div>
  );
};

export default List;