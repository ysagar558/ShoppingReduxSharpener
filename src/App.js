import logo from './logo.svg';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import './App.css';
import MainHeader from './components/Layout/MainHeader';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);


  return (
    <Fragment>
      <MainHeader />
      {showCart && <Cart />}
    </Fragment>

  );
}

export default App;
