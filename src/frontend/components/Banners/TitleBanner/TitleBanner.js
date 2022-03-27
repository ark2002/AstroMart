import React from "react";
import { Link } from "react-router-dom"

import "./TitleBanner.css";

function TitleBanner() {
    return (
        <>
            <div className="banner1__container flex--row">
                <div className="banner1__left flex--column">
                    <h1 className="heading1 title banner1__title">AstroMart</h1>
                    <p className="text__medium subtitle">
                        A perfect place for all the Astroheads out there.
                    </p>
                    <button className="btn btn-color--tertiary btn-font--secondary">
                        <Link to="/products">
                            Shop Now
                        </Link>
                    </button>
                </div>
                <img src="/assets/zodiaclogo.png" alt="" className="banner1__img" />
            </div>
        </>
    );
}

export { TitleBanner }