import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     totalPopulation = totalPopulation + cart.population;
        
    // }

    const totalPopulation = cart.reduce((sum, country) => sum + country.population
     ,0)
    return (
        <div>
            <h5>Cart added : {cart.length}</h5>
            <h6>Total Population : {totalPopulation}</h6>
        </div>
    );
};

export default Cart;