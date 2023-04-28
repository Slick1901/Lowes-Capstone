
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from './homelogo.png';
import styled from 'styled-components';

export default class Nav extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <ul className="navbar-nav align-items-center">
               <Link to='/'>
                  <img src={logo} alt="home" className="navbar-brand" />
               </Link> 
                
               </ul>
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/about" className="nav-link">
                       About Us
                    </Link>
                 </li>
               </ul>
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                 </li>
               </ul>
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/register" className="nav-link">
                      register
                    </Link>
                 </li>
               </ul>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
display:flex;
justify-content:space-between;
background-color:   #6CB4EE;
.nav-link{
    color:white;
    font-size: 1.2rem; 
    text-transform:capitalize;
}
.navbar-brand{
  height:100px;
  width:250px;
}
`;