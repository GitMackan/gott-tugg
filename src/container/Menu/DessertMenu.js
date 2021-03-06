import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MenuItem } from '../../components'
import { images } from '../../constants'
import './DrinkMenu.css';

const DessertMenu = () => {
  const [Dessert, setDessert] = useState([]);
  const [Coffee, setCoffee] = useState([]);

  // Run functions 
  useEffect(() => {
    getDesserts();
    getCoffee();
  }, [])

  // Get-request to fetch Desserts from API
  const getDesserts = async () => {
    const response = await axios.get("https://admingottugg.azurewebsites.net/api/dessertapi");
    if(response.status === 200) {
        setDessert(response.data);
    }
  }; 

  // Get-request to fetch Coffees from API
  const getCoffee = async () => {
    const response = await axios.get("https://admingottugg.azurewebsites.net/api/coffeeapi");
    if(response.status === 200) {
        setCoffee(response.data);
    }
  }; 

  return (
  <div className='Menu' id="menu">
    <div className="Menu-title">
     <h3>En menu för alla smaker</h3>
      <h1>Efterrätter</h1>
    </div>

    <div className="Menu-menu">
      <div className="Menu-wine">
        <p className='Menu-heading'>Kaffe</p>
        <div className="Menu-items">
        {Coffee && Coffee.map((item) => {
              return (
                <MenuItem key={item.id} name={item.name} ingredients={item.ingredients} price={item.price} />
              )
              })}
        </div>
      </div>

      <div className="Menu-img">
        <img src={images.dessert} alt="menu img" />
      </div>

      <div className="Menu-cocktails">
        <p className='Menu-heading'>Efterrätter</p>
        <div className="Menu-items">
        {Dessert && Dessert.map((item) => {
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

export default DessertMenu;
