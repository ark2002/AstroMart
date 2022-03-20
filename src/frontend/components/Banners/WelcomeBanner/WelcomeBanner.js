import React from "react";
import "./WelcomeBanner.css"
function WelcomeBanner() {
    return (
        <>
            <div className="banner2__container">
                <img src="/assets/banner_2.webp" alt="banner_1" className="banner2" />
                <h1 className="heading1 banner2__heading text-align--center">Welcome to the Zodiac</h1>
            </div>
        </>
    );
}

export { WelcomeBanner }