import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import List from './components/List';
import Pricing from './components/Pricing';

export default function App() {

  const pets = [
    {
      id: 'dog',
      name: 'Dog',
      price: 30,
      rating: 1,
    },
    {
      id: 'cat',
      name: 'Cat',
      price: 25,
      rating: 2,
    },
    {
      id: 'frog',
      name: 'Frog',
      price: 10,
      rating: 3,
    },
    {
      id: 'dove',
      name: 'Dove',
      price: 20,
      rating: 4,
    },
    {
      id: 'otter',
      name: 'Otter',
      price: 15,
      rating: 3,
    }

  ]

  const [quantityObj, setQuantityObj] = useState({
    dog: 0,
    cat: 0,
    frog: 0,
    dove: 0,
    otter: 0,
  });

  const [totalPrice,setTotalPrice] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Pricing quantityObj={quantityObj} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
      <List pets={pets}  quantityObj={quantityObj} setQuantityObj={setQuantityObj} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
    </div>
  );
}
