import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <>
      <div className="navSection">
        <div className="title">
          <h2>E-Mart</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="search" />
        </div>
        <div className="user-details">signIn/signUp</div>
        <div className="user">
          <Link to="/cart">
            <div className="cart">
              Cart
              <span>{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles">
            <li>Mobiles</li>
          </Link>
          <Link to="/computers">
            <li>Computers</li>
          </Link>
          <Link to="/men">
            <li>Mens Wear</li>
          </Link>
          <Link to="/women">
            <li>Womens Wear</li>
          </Link>
          <Link to="/books">
            <li>Books</li>
          </Link>
          <Link to="/furnitures">
            <li>Furniture</li>
          </Link>
          <Link to="/watches">
            <li>Watches</li>
          </Link>
          <Link to="/acs">
            <li>Ac</li>
          </Link>
          <Link to="/fridges">
            <li>Fridge</li>
          </Link>
          <Link to="/kitchens">
            <li>Kitchen</li>
          </Link>
          <Link to="/speakers">
            <li>Speaker</li>
          </Link>
          <Link to="/tvs">
            <li>TV</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
