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
  const [category, setCategory] = useState(""); // the sorting option ("title" or "price")



  // Set the value of `products` state to the array of products:
  useEffect(() => {
    setProducts(data || []);
  }, []);

  // Handle changes to the sorting option:
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };
  const handleCqtegoryChange = (event) => {
    setCategory(event.target.value);
  };
  const filteredProducts = products.filter((product) => {
    return category === "" || product.category === category;
  });

  // Sort the products based on the current sorting option:
  const sortedProducts = products.sort((a, b) => {
    if (sort === "title") {
      return a.title.localeCompare(b.title);
    } else {
      return sort
    }
    // if (category === 'Women Empowerment') {
     
    //    return products.filter(item => item.category > 'Women Empowerment' )
    // } 
  } )
                                                                                                                                             
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
        <select value={category} onChange={handleCqtegoryChange} className='categorySelector'>
          <option value="">Select a category</option>
          <option value="Women Empowerment">Women Empowerment</option>
          <option value="Handi-capable">Handi-Capable</option>
          <option value="The Basics">The Basics</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <div className="product-grid">
        
          <EventCard props = {filteredProducts} cart={cart} setCart={setCart}/>
          
      </div>
      {/* Pass the `cart` state and the `removeItem` function as props to the `Cart` component */}
      <Cart cartItems={cart} setCart={setCart}  />
    </div>
  );
};

export default ArrayCard;

