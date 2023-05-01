import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from './homelogo.png';
import styled from 'styled-components';

export default class DashboardNav extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <ul className="navbar-nav align-items-center">
               <Link to='/dashboardHome'>
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
                    <Link to="/events" className="nav-link">
                       Events
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
