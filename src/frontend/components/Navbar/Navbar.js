import React from "react";

function Navbar(){
    return(
        <>
        <header className="header flex--row">
      <a href="/index.html">
        <div className="header__logo-container flex--row">
          <img src="/assets/zodiaclogo.png" alt="logo" className="logo__img" />
          <h2 className="header__logo">AstroMart</h2>
        </div>
      </a>
      <div className="navbar__search-container flex--row">
        <input type="text" className="navbar__search input__txt" placeholder="Search" />
        <button className="navbar__search-btn btn">
          <span className="material-icons search__btn-icon">search</span>
        </button>
      </div>
      <nav className="navbar__nav flex--row">
        <ul>
          <li>
            <a href=""><span className="material-icons" title="View Cart">shopping_cart</span></a>
          </li>
          <li>
            <a href=""><span className="material-icons" title="View Wishlist">favorite_border</span></a>
          </li>
          <li>
            <a href=""><span className="material-icons" title="Account">account_circle</span></a>
          </li>
        </ul>
      </nav>
    </header>
        </>
    );
}

export {Navbar}