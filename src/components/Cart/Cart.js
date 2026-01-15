import React from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';

const Cart=()=>{
    return(
        <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      </Card>
    )
};
export default Cart;
