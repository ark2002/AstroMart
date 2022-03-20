import React from "react";
import { QouteBanner } from "../../components/Banners/QouteBanner/QouteBanner";
import { TitleBanner } from "../../components/Banners/TitleBanner/TitleBanner";
import { WelcomeBanner } from "../../components/Banners/WelcomeBanner/WelcomeBanner";
import { ProductsSection } from "../../components/ProductsSection/ProductSection";
import "./Homescreen.css"

function Homescreen() {
    return (
        <>
            <div className="landingpage__container flex--column">
                <TitleBanner />
                <WelcomeBanner />
                <ProductsSection  title = "Spiritual Solutions">
                </ProductsSection>
                <QouteBanner />
                <ProductsSection title ="Top Choices" >
                </ProductsSection>
            </div>
        </>
    );
}

export { Homescreen };