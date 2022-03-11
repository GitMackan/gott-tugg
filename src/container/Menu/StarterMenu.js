import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { MenuItem } from '../../components'
import { images } from '../../constants'
import './DrinkMenu.css';



const StarterMenu = () => {
  const [starter, setStarter] = useState([]);
  const [appetizer, setAppetizer] = useState([]);

  useEffect(() => {
    getStarters();
    getAppetizer();
  }, [])

  const getAppetizer = async () => {
    const response = await axios.get("/api/appetizerapi");
    if(response.status === 200) {
      setAppetizer(response.data);
    }
  }; 

  const getStarters = async () => {
    const response = await axios.get("/api/starterapi");
    if(response.status === 200) {
      setStarter(response.data);
    }
  }; 

  return (
  <div className='Menu' id="menu">
    <div className="Menu-title">
      <h3>En menu för alla smaker</h3>
      <h1>Förrätter</h1>
    </div>

    <div className="Menu-menu">
      <div className="Menu-wine">
        <p className='Menu-heading'>Aptitretare</p>
        <div className="Menu-items">
        {appetizer.map((item) => (
                <MenuItem key={item.id} name={item.name} ingredients={item.ingredients} price={item.price} />
                ))}
        </div>
      </div>

      <div className="Menu-img">
        <img src={images.appetizer} alt="menu img" />
      </div>

      <div className="Menu-cocktails">
        <p className='Menu-heading'>Förätter</p>
        <div className="Menu-items">
        {starter.map((item) => (
                <MenuItem key={item.id} name={item.name} ingredients={item.ingredients} price={item.price} />
                ))}
        </div>
      </div>


    </div>

    <div style={{ marginTop: '15px' }}>
      <button type='button' className='menuBtn'>View More</button>
    </div>
  </div>
)
}

export default StarterMenu;