
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData.json';

import './Shop.css';


//usestate is used to set the cart and get the cart from local storage
//use effect will use for mount and unmount of the component(adds and removes items from the cart)
const Shop = () => {
  const [cart, setCart] = useState([]);
  //cart is an array of objects, each object is a product with a name, price, and image
  //here its set to an empty array, setCart is a function that updates the cart and set  the cart in local storage

  useEffect(() => {
    // Load cart from local storage on component mount
    const storedCart = localStorage.getItem('cart');
    //if there is a cart  in local storage, get the cart from the  local storage and set the cart to the cart in local storage
    // [] means it will only run once when the component mounts and unmounts
    //it will tell the react that your component needs to do something after render
    
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  //this useeffect will update the local storage with the cart whenever the cart changes
  //now the [card] means this array will  tell the react that your component needs to do something after render
  useEffect(() => {
    // Update local storage whenever cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  
//add to cart function
//[...cart, product] is a new array that contains all the items from the old cart and the new product 
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  //remove from cart function
  //filter method will remove the item from the cart
  //(_, i) in _ means we are not using the first parameter it reopresents the current item in the array and i is the index of the current item
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const getTotalPrice = () => {
    // return cart.reduce((total, product) => total + product.price, 0);
    // let totalPrice = calculateYourTotalPriceHere();
    // return Math.round(totalPrice);
    return Math.round(cart.reduce((total, product) => total + product.price, 0));

  };

  return (
    <div className="store ">

      
      <div className="products">
      {/* <h2 className='text-red-600'>Products</h2> */}
        {productsData.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image} alt={product.name}  />
            <h3 className='heel' >{product.name}</h3>
            <p>{product.description}</p>
            <h5 className='hee'>£{product.price}</h5>
            <button className='but' onClick={() => addToCart(product)}>Add to Cart</button>
        {/* //remove item from cart */}
         </div>
        ))}
     </div>

<div className="shopping">
  <div className="shopping-cart">
    <h2>Shopping Cart</h2>
    {cart.map((product, index) => (
      <div key={index} className="cart-item">
        <img  src={product.image} alt={product.name} style={{ width: "50px", height: "50px" ,margin:"10px"}} />
        <p>£{product.price}</p>
        <button className='shop-but' onClick={() => removeFromCart(index)}>Remove</button>
      </div>
    ))}
    <div className="total">
      <h3>Total: £{getTotalPrice()}</h3>
    </div>
    {cart.length > 0 && (
      <Link className='proceed' to="/checkout">Proceed to Checkout</Link>
    )}
  </div>
</div>
</div>
  );
}

export default Shop;
          
