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
    const response = await axios.get("/api/vinebeerapi");
    if(response.status === 200) {
      setVineBeer(response.data);
    }
  };
  
  const getDrinks = async () => {
    const response = await axios.get("/api/drinkapi");
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
            {/*vineBeer.map((item) => (
                <MenuItem key={item.id} name={item.name} ingredients={item.ingredients} price={item.price} />
            ))*/}
            {drink.map((item) => {
                        return (
                            <div key={item.id}>
                                <p>{item.name}</p>
                                <p>{item.ingredients}</p>
                                <p>{item.price}</p>
                            </div>
                        );
                    })}
          </div>
        </div>
                
        <div className="Menu-img">
          <img src={images.drinks} alt="menu img" />
        </div>

        <div className="Menu-cocktails">
          <p className='Menu-heading'>Cocktails</p>
          <div className="Menu-items">
          {/*drink.map((item) => (
                <MenuItem key={item.id} name={item.name} ingredients={item.ingredients} price={item.price} />
          ))*/}
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
