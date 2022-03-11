import React from 'react';

import './MenuItem.css';

const MenuItem = ({ name, price, ingredients }) => (
  <div className='menuitem' >
    <div className="menuitem-head">
      <div className="menuitem-name">
        <p>{name}</p>
      </div>
      <div className='menuitem-dash' />
      <div className="menuitem-price">
        <p>{price}:-</p>
      </div>
    </div>
    <div className="menuitem-sub">
      <p>{ingredients}</p>
    </div>
  </div>
);

export default MenuItem;
