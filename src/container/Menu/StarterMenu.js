import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { MenuItem } from '../../components'
import { images } from '../../constants'
import './DrinkMenu.css';



const StarterMenu = () => {
  const [mainCourse, setMainCourse] = useState([]);

  useEffect(() => {
    getMainCourses();
  }, [])

  const getMainCourses = async () => {
    const response = await axios.get("/api/maincourseapi");
    if(response.status === 200) {
      setMainCourse(response.data);
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
        {mainCourse && mainCourse.map((item) => {
              return (
                <MenuItem key={item.id} name={item.name} ingredients={item.ingredients} price={item.price} />
              )
              })}
        </div>
      </div>

      <div className="Menu-img">
        <img src={images.appetizer} alt="menu img" />
      </div>

      <div className="Menu-cocktails">
        <p className='Menu-heading'>Förätter</p>
        <div className="Menu-items">
        {mainCourse && mainCourse.map((item) => {
              return (
                <MenuItem key={item.id} name={item.name} ingredients={item.ingredients} price={item.price} />
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

export default StarterMenu;