import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';
import './Card.css'

const Cart = ({ cartItems, setCart }) => {
  // Calculate the total price of the items in the cart:
  // const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
  function removeItem(data) {
    const newCart = cartItems.filter((product) => product.id !== data.id);
    setCart(newCart);
  }
  return (
    <div className="cartContainer">
      <h2 className='cartTitle'>My Events</h2>
      {/* Display a message if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>No Events Selected</p>
      ) : (
        // Render the cart items and total price if there are items in the cart
        <>
          {cartItems.map((item) => (
            <div className="cart">
            <div className='hover-zoom'>
            <MDBCard key={item.id}>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={item.image} alt={item.title} fluid>
                </MDBCardImage>
                <a>
                 <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
              <MDBCardText>
              {item.category}
            </MDBCardText>
              <MDBCardTitle>
              {item.title}
              </MDBCardTitle>
              <MDBCardText>
              {item.date} {item.time}
              </MDBCardText>
              <MDBCardText>
                {item.address}
            </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <button onClick={() => removeItem(item)}>Remove</button>
              </div>
              {/* Remove the item from the cart when the "Remove" button is clicked */}
              
            </div>
          ))}
    
        </>
      )}
    </div>
  );
};

export default Cart;



