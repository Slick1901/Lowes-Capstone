import React from "react";
import Nav from './Nav'
import Footer from "./footer";
import Founders from "./Founders";
const AboutPage = () => {
  return (
  <div>
    <Nav/>
    <div className="about-container">
      <h1 className="about-header">About Us</h1>
      <p className="about-description">
        We are a non-profit organization committed to making a positive impact
        in our community. Our mission is to provide resources and support to
        those in need, and to promote philanthropy and volunteerism.
      </p>
      <p className="about-description">
        Our organization was founded in 2005 by a group of dedicated volunteers
        who saw a need for more community support. Since then, we have grown and
        expanded our programs to better serve those in need.
      </p>
      <p className="about-description">
        We rely on the generosity of our donors and volunteers to continue our
        work. Thank you for your support!
      </p>
    </div>
<Founders/>
    <Footer/>
    </div>
  );
};

export default AboutPage;
