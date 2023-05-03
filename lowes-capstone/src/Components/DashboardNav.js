import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo1 from './logo.jpeg';

export default class DashboardNav extends Component {
  render() {
    return (
      <NavWrapper>
        <LogoWrapper>
          <Link to="/Dashboard">
            <LogoImage src={logo1} alt="home" />
          </Link>
        </LogoWrapper>

        <MenuItems>
          <MenuItem>
            <Link to="/DashboardAbout" className="nav-link">
            About Us
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/EventCart" className="nav-link">
            Events
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/DashboardContact" className="nav-link">
            Contact
            </Link>
          </MenuItem>
        </MenuItems>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222831;
  padding: 1rem;
  fontSize: 1.5rem;
  @media (min-width: 576px) {
    padding: 1rem 2rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;

  @media (min-width: 576px) {
    height: 50px;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  fontSize: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  font-size: 1.5rem;
`;




// import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// import logo from './homelogo.png';
// import styled from 'styled-components';

// export default class DashboardNav extends Component {
//     render() {
//         return (
//             <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
//                <ul className="navbar-nav align-items-center">
//                <Link to='/dashboardHome'>
//                   <img src={logo} alt="home" className="navbar-brand" />
//                </Link> 
                
//                </ul>
//                <ul className="navbar-nav align-items-center">
//                  <li className="nav-item ml-5">
//                     <Link to="/about" className="nav-link">
//                        About Us
//                     </Link>
//                  </li>
//                </ul>
//                <ul className="navbar-nav align-items-center">
//                  <li className="nav-item ml-5">
//                     <Link to="/events" className="nav-link">
//                        Events
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
// background-color:   #6CB4EE;
// .nav-link{
//     color:white;
//     font-size: 1.2rem; 
//     text-transform:capitalize;
// }
// .navbar-brand{
//   height:100px;
//   width:250px;
// }
// `;
