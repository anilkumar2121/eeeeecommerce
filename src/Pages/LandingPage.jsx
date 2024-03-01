import React from "react";
import Products from "../stores/components/Products";
import Navbar from "../stores/components/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default LandingPage;
