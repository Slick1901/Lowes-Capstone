import React, { useEffect, useState } from "react";
// import ProductsArray from "../Components/ProductsArray.js";
import data from './cardData.json'
import "./products.css";
import Cart from "../Components/Cart";
import EventCard from "./EventCard";

const ArrayCard = () => {
  // Define three state variables using the `useState` hook:
  const [products, setProducts] = useState([]); // array of the products
  const [cart, setCart] = useState([]); // array of items in the cart
  const [sort, setSort] = useState(""); // the sorting option ("title" or "price")
  

  // Add a product to the cart:
  // function addToCart(product) {
  //   setCart([...cart, product]);
  // }

  // Remove an item from the cart:
  // function removeItem(data) {
  //   const newCart = cart.filter((product) => product.id !== data.id);
  //   setCart(newCart);
  // }

  // Set the value of `products` state to the array of products:
  useEffect(() => {
    setProducts(data || []);
  }, []);

  // Handle changes to the sorting option:
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  // Sort the products based on the current sorting option:
  const sortedProducts = products.sort((a, b) => {
    if (sort === "title") {
      return a.title.localeCompare(b.title);
    } else if (sort === "price") {
      return a.price - b.price;
    } else {
      return 0;
    }
  });

  return (
    <div className="arrayContainer">
      <h1>All Events</h1>
      <div className="filter">
        <span>Sort by:</span>
        {/* The `value` and `onChange` props bind the dropdown menu to the `sort` state */}
        <select value={sort} onChange={handleSortChange} className='categorySelector'>
          <option value="">Select an option</option>
          <option value="title">Name(A-Z)</option>
        </select>
      </div>
      <div className="product-grid">
        
          <EventCard props = {data} cart={cart} setCart={setCart}/>
          
        
        {/* {sortedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <div >
              <h2>{product.title}</h2>
              <p className="description">{product.text}</p>
            
            </div>
            <button
              onClick={() => addToCart(product)}
              className="product-button"
            >
              Interested?
            </button>
          </div>
        ))} */}
      </div>
      {/* Pass the `cart` state and the `removeItem` function as props to the `Cart` component */}
      <Cart cartItems={cart} setCart={setCart}  />
    </div>
  );
};

export default ArrayCard;

