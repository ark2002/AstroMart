import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useAuth } from "../../contexts";


function Navbar() {
  const [accountList, setAccountList] = useState(false);
  const { auth, setAuth } = useAuth();

  const signOutHandler = (setAuth) => {
    localStorage.removeItem("AUTH_TOKEN");
    setAuth((auth) => ({
      ...auth,
      status: false,
      token: null,
    }));
  };

  return (
    <>
      <header className="header flex--row">
        <NavLink to="/">
          <div className="header__logo-container flex--row">
            <img src="/assets/zodiaclogo.png" alt="logo" className="logo__img" />
            <h2 className="header__logo">AstroMart</h2>
          </div>
        </NavLink>
        <div className="navbar__search-container flex--row">
          <input type="text" className="navbar__search input__txt" placeholder="Search" />
          <button className="navbar__search-btn btn">
            <span className="material-icons search__btn-icon">search</span>
          </button>
        </div>
        <nav className="navbar__nav flex--row">
          <ul>
            <li>
              <NavLink to="/cart"><span className="material-icons" title="View Cart">shopping_cart</span></NavLink>
            </li>
            <li>
              <NavLink to="/wishlist"><span className="material-icons" title="View Wishlist">favorite_border</span></NavLink>
            </li>
            <li>
              <span className="material-icons" title="Account" onClick={() => setAccountList(!accountList)}>account_circle</span>
            </li>
          </ul>
        </nav>
      </header>
      {accountList && (!auth.status ? <div className="dropdown-list secondary__font text__small">
        <NavLink to="/signin"><li>Sign-In</li></NavLink>
        <NavLink to="/signup"><li>Sign-Up</li></NavLink>
      </div> : <div className="dropdown-list secondary__font text__small">
        <NavLink to="/signin"><li onClick={() => signOutHandler(setAuth)}>Log-Out</li></NavLink>
      </div>)}
    </>
  );
}

export { Navbar }