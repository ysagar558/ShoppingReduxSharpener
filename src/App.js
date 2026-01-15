import logo from './logo.svg';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import './App.css';
import MainHeader from './components/Layout/MainHeader';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);


  return (
    <Fragment>
      <MainHeader />
      {showCart && <Cart />}
      <Products/>
    </Fragment>

  );
}

export default App;
