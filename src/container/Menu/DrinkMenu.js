import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MenuItem } from '../../components'
import { images } from '../../constants'
import './DrinkMenu.css';

const DrinkMenu = () => {
  
  const [drink, setDrink] = useState([]);
  const [vineBeer, setVineBeer] = useState([]);

  // Run functions
  useEffect(() => {
    getDrinks();
    getVineBeer();
  }, [])
  
  // Get-request to fetch Vine and Beers from API
  const getVineBeer = async () => {
    const response = await axios.get("https://admingottugg.azurewebsites.net/api/vinebeerapi");
    if(response.status === 200) {
      setVineBeer(response.data);
    }
  };
  
  // Get-request to fetch Drinks from API
  const getDrinks = async () => {
    const response = await axios.get("https://admingottugg.azurewebsites.net/api/drinkapi");
    if(response.status === 200) {
      setDrink(response.data);
    }
  };

  return (
    <div className='Menu' id="menu">
      <div className="Menu-title">
        <h3>En menu för alla smaker</h3>
        <h1>Drycker</h1>
      </div>

      <div className="Menu-menu">
        <div className="Menu-wine">
          <p className='Menu-heading'>Vin & Öl</p>
          <div className="Menu-items">
            {vineBeer && vineBeer.map((item) => {
              return (
                <MenuItem key={item.id} name={item.name} ingredients={item.ingredients} price={item.price} />
              )
              })}
          </div>
        </div>
                
        <div className="Menu-img">
          <img src={images.drinks} alt="menu img" />
        </div>

        <div className="Menu-cocktails">
          <p className='Menu-heading'>Cocktails</p>
          <div className="Menu-items">
          {drink && drink.map((item) => {
              return (
                <MenuItem key={item.id} name={item.name} ingredients={item.ingredients} price={item.price} />
              )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DrinkMenu;
