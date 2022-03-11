import React from 'react';

import { images } from '../../constants'
import './Restaurant.css';

const Restaurant = () => (
  <div className='restaurant' id='restaurant'>
    <div className="restaurant-img">
      <img src={images.restaurant} alt="chef" />
    </div>
    <div className="restaurant-info">
      <h1>Vårt motto</h1>
      <div className="restaurant-content">
        <div className="restaurant-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi saepe velit, quis repellendus harum unde
                    eum corporis corrupti mollitia dolor excepturi distinctio pariatur eius beatae, ratione molestias rem,
                    itaque cum quaerat soluta? Ex rem molestias ducimus vero velit? <br /><br />Repellendus sequi harum perferendis fuga
                    eaque, libero enim consectetur maxime temporibus beatae, dolore dignissimos doloribus totam asperiores
                    voluptatem vitae laboriosam itaque, facilis impedit?</p>
        </div>
      </div>


    </div>
  </div>
);

export default Restaurant;
