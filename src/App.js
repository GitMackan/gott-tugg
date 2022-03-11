import React from 'react';

import { AboutUs, Footer, Header, DessertMenu, DrinkMenu, MainCourseMenu, StarterMenu, Restaurant } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <DrinkMenu />
    <StarterMenu />
    <MainCourseMenu />
    <DessertMenu />
    <Restaurant />
    <Footer />
  </div>
);

export default App;
