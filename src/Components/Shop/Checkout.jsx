
import React, { useState, useEffect } from 'react';
import './Checkout.css';

const Checkout = () => {
    const [cart, setCart] = useState([]);
    //cart is an array of objects, each object is a product with a name, price, and image
    //cart set to an empty array, setCart is a function that updates the cart and get the cart from local storage which stored in shop.jsx
    //use effect will use for mount and unmount of the component(adds and removes items from the cart)
    
    useEffect(() => {
        // Load cart from local storage on component mount/component update
        const storedCart = localStorage.getItem('cart');
        // if there is a cart  in local storage, set the cart to the cart in local storage
        // [] means it will only run once when the component mounts
        if (storedCart) {
        setCart(JSON.parse(storedCart));
        }
    }, []);

    //take the cart [items] and map over them to display the items in the cart
    
    return (
        <div className="main">
        <div className="checkout">
        <h3>Checkout</h3>
        <div className="cart-items">
            {cart.map((product, index) => (
            <div key={index} className="cart-item">
                <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} />
                <h4>{product.name}</h4>
                <h5>£{product.price}</h5>
                {/* <p>{product.description}</p> */}
            </div>
            ))}
        </div>
        <div className="total">
            {/* to calculat the total we use reduce method() */}
            {/* reduce method takes two parameters, a function and an initial value */}
            {/* the function takes two parameters, the total and the current item */}
            {/* the initial value is 0 */}
            <h3>Order Total: £{cart.reduce((total, product) => total + product.price, 0)}</h3>
        </div>
        <div className="pay">
            <button className='bbbn'>Pay Now</button>
        </div>
        {/* <div className="giffy"></div> */}
        </div>
        <div className="giffy"></div>

        </div>
    );
    }

export default Checkout;