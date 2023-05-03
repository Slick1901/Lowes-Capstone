import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo1 from './logo.jpeg';
const NavWrapper = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: #222831;
 padding: 1rem;
 font-size: 1rem;
`;
const LogoWrapper = styled.div`
 display: flex;
 align-items: center;
`;
const LogoImage = styled.img`
 height: 40px;
 width: auto;
`;

const MenuItems = styled.ul`
 display: flex;
 flex-direction: row;
 list-style-type: none;
 position: static;
 background-color: transparent;
 margin: 0;
 width: auto;
 padding: 0;
 margin-left: auto;
`;
const MenuItem = styled.li`
 margin: 0.5rem 0;
 @media (min-width: 576px) {
  margin: 0 1rem;
 }
`;
const Nav = () => {

 return (
  <NavWrapper>
   <LogoWrapper>
    <Link to="/">
     <LogoImage src={logo1} alt="home" />
    </Link>
   </LogoWrapper>
   
   <MenuItems>
    <MenuItem>
     <Link to="/about" className="nav-link">
      About Us
     </Link>
    </MenuItem>
    <MenuItem>
     <Link to="/login" className="nav-link">
      Login
     </Link>
    </MenuItem>
    <MenuItem>
     <Link to="/register" className="nav-link">
      Register
     </Link>
    </MenuItem>
    <MenuItem>
     <Link to="/Contact" className="nav-link">
      Contact
     </Link>
    </MenuItem>
   </MenuItems>
  </NavWrapper>
 );
};
export default Nav;












