import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav({ isLoggedIn }) {
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <Link
            to="/"
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span class="ml-3 text-xl">(logo)</span>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/projects" class="mr-5 hover:text-gray-900">
              Workshops
            </Link>
            <Link to="/about" class="mr-5 hover:text-gray-900">
              About
            </Link>
            {isLoggedIn ? (
              <Link to="/dashboard" class="mr-5 hover:text-gray-900">
                Dashboard
              </Link>
            ) : (
              <>
                <Link to="/login" class="mr-5 hover:text-gray-900">
                  Login
                </Link>
                <Link to="/register" class="mr-5 hover:text-gray-900">
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;


// import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// // import logo from './logo.webp';
// import styled from 'styled-components';

// export default class Navbar extends Component {
//     render() {
//         return (
//             <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
//                <Link to='/Home'>
//                   {/* <img src={logo} alt="store" className="navbar-brand" /> */}
//                </Link> 
//                <Link to='/Products1'>
//                   {/* <img src={logo2} alt="store" className="navbar-brand" /> */}
//                </Link> 
//                <ul className="navbar-nav align-items-center">
//                  <li className="nav-item ml-5">
//                     <Link to="/Home" className="nav-link">
//                        The Lazy Shop
//                     </Link>
//                  </li>
//                </ul>
            
//                <ul className="navbar-nav align-items-center">
//                  <li className="nav-item ml-5">
//                     <Link to="/Products" className="nav-link">
//                        Products
//                     </Link>
//                  </li>
//                </ul>
//                <ul className="navbar-nav align-items-center">
//                  <li className="nav-item ml-5">
//                     <Link to="/ContactUs" className="nav-link">
//                       Contact Us
//                     </Link>
//                  </li>
//                </ul>
//             </NavWrapper>
//         )
//     }
// }

// const NavWrapper = styled.nav`
// display:flex;
// justify-content:space-between;
// background-color:   rgba(49, 49, 54, 0.993);
// .nav-link{
//     color:white;
//     font-size:1.3 rem;
//     text-transform:capitalize;
// }
// `;