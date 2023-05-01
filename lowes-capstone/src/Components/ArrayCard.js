import React, { useEffect, useState } from "react";
import ProductsArray from "../Components/ProductsArray.js";
import "./products.css";
import Cart from "../Components/Cart";

const ArrayCard = () => {
  // Define three state variables using the `useState` hook:
  const [products, setProducts] = useState([]); // array of the products
  const [cart, setCart] = useState([]); // array of items in the cart
  const [sort, setSort] = useState(""); // the sorting option ("title" or "price")

  // Add a product to the cart:
  function addToCart(product) {
    setCart([...cart, product]);
  }

  // Remove an item from the cart:
  function removeItem(item) {
    const newCart = cart.filter((product) => product.id !== item.id);
    setCart(newCart);
  }

  // Set the value of `products` state to the array of products:
  useEffect(() => {
    setProducts(ProductsArray);
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
    <div className="container">
      <h1>Events Page</h1>
      <div className="filter">
        <span>Sort by:</span>
        {/* The `value` and `onChange` props bind the dropdown menu to the `sort` state */}
        <select value={sort} onChange={handleSortChange}>
          <option value="">Select an option</option>
          <option value="title">Name(A-Z)</option>
        </select>
      </div>
      <div className="product-grid">
        {/* Render the sorted products as a grid of product items */}
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <div >
              <h2>{product.title}</h2>
              <p className="description">{product.text}</p>
            
            </div>
            {/* Add the product to the cart when the "Add to Cart" button is clicked */}
            <button
              onClick={() => addToCart(product)}
              className="product-button"
            >
              Interested?
            </button>
          </div>
        ))}
      </div>
      {/* Pass the `cart` state and the `removeItem` function as props to the `Cart` component */}
      <Cart cartItems={cart} removeItem={removeItem} />
    </div>
  );
};

export default ArrayCard;

