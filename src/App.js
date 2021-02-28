import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';
import animalData from './fakeData/data.json';

function App() {
 const[countries, setCountries] = useState([]);
const [cart ,setCart ] = useState([]);
const [animal, setAnimal] = useState([]);
useEffect(
  () => {
    setAnimal(animalData);
    console.log(animalData);
  }
)
useEffect(
  ()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data=> setCountries(data))
  }, []
)
const handleAddCountry = (country) => {
  const newCart = [...cart, country];
  setCart(newCart);
}
  return (
    <div className="App">
      <h1>Here will be : {countries.length}</h1>
      <h3>Country Added : {cart.length}</h3>
      <Cart cart={cart}></Cart>
      <ul>
        { countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha2Code}></Country> )
          }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
