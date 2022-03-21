import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
  return (
    <>
      <footer className="footer">
        <hr />
        <div className="footer__links text__medium primary__font flex--row">
          <Link to="/">Store Policy</Link>
          <div className="vl"></div>
          <Link to="/">Contact Us</Link>
          <div className="vl"></div>
          <Link to="/">Support Our Work</Link>
        </div>
        <p className="text__xsmall text-align--center primary__font">
          All images and content are copyright protected, ©2020 AstroMart
        </p>
        <div className="footer__socials">
          <a href="https://github.com/ark2002"><i className="fab fa-github icon"></i></a>
          <a href="https://www.linkedin.com/in/aryaklahane"><i className="fab fa-linkedin icon"></i></a>
          <a href="https://medium.com/@aryakprakashlahane"><i className="fab fa-medium icon"></i></a>
        </div>
      </footer>
    </>
  );
}

export { Footer };