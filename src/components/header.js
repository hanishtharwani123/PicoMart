import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../styles/header.css";

const header = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">PicoMart</h1>
        <div className="input_search">
          <input
            type="text"
            className="input"
            placeholder="Search for Products"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon" />
        </div>
        <div className="contain">
          <div className="cart">
            <FontAwesomeIcon icon={faCartShopping} className="icon_cart" />
            <p className="cart_text">Cart</p>
          </div>
          <div className="profile">
            <FontAwesomeIcon icon={faUser} className="icon_cart" />
            <p className="cart_text">Hanish</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default header;
