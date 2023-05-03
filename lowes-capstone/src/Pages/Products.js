import React from "react";
import ArrayCard from "../Components/ArrayCard";
import DashboardNav from "../Components/DashboardNav";
// import "../styles/products.css";
import Footer from "../Components/footer";
function Products() {
  return (
    <div>
      <DashboardNav/>
      <ArrayCard />
      <Footer/>
    </div>
  );
}

export default Products;