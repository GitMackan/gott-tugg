import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { MenuItem } from '../../components'
import { images } from '../../constants'
import './DrinkMenu.css';

const DrinkMenu = () => {

  
  const [drink, setDrink] = useState([]);
  const [vineBeer, setVineBeer] = useState([]);

  useEffect(() => {
    getDrinks();
    getVineBeer();
  }, [])
  
  const getVineBeer = async () => {
    const response = await axios.get("/vinebeerapi");
    if(response.status === 200) {
      setVineBeer(response.data);
      console.log(vineBeer);
    }
  };
  
  const getDrinks = async () => {
    const response = await axios.get("https://dt162g-test.herokuapp.com/movies");
    if(response.status === 200) {
      setDrink(response.data);
      console.log(drink);
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
                <MenuItem key={item._id} name={item.title} ingredients={item.director} price={item.year} />
              )
              })}
          </div>
        </div>


      </div>

      <div style={{ marginTop: '15px' }}>
        <button type='button' className='menuBtn'>View More</button>
      </div>
    </div>
  )
}

export default DrinkMenu;
