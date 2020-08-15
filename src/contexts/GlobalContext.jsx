import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  // State Hooks
  const [pets, setPets] = useState({
    cat: 0,
    dog: 0,
    fish: 0,
    dove: 0,
    frog: 0,
  });
  const [prices, setPrices] = useState([30, 15, 25, 20, 17]);
  const [ratings, setRatings] = useState([4, 1, 3, 5, 2]);
  const [totalPets, setTotalPets] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Effect Hooks
  useEffect(() => {
    const values = Object.values(pets);

    let totalPriceArray = [];
    values.map((item, index) => totalPriceArray.push(item * prices[index]));

    const totalPrice = totalPriceArray.reduce((a, b) => a + b, 0);
    setTotalPrice(totalPrice);

    const totalPets = values.reduce((a, b) => a + b, 0);
    setTotalPets(totalPets);
  }, [pets, prices]); //Why is prices a dependency, learn more about useEffect

  // Actions
  // Very Important to know.
  //   1) The e.target refernce changed inside the classComponent while setting state, this however wasnt the case when I used a Hook in the functional component.
  const handleIncrement = (e) => {
    setPets({
      ...pets,
      [e.target.id]: pets[e.target.id] + 1,
    });
  };

  const handleDecrement = (e) => {
    if (pets[e.target.id] !== 0) {
      setPets({
        ...pets,
        [e.target.id]: pets[e.target.id] - 1,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        pets,
        prices,
        ratings,
        totalPets,
        totalPrice,
        handleIncrement,
        handleDecrement,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;