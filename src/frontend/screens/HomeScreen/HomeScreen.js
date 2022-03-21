import React from "react";
import { ProductsSection, TitleBanner, WelcomeBanner, QouteBanner } from "../../components";
import "./HomeScreen.css"

const HomeScreen=()=> {
    return (
        <>
            <div className="landingpage__container flex--column">
                <TitleBanner />
                <WelcomeBanner />
                <ProductsSection title="Spiritual Solutions">
                </ProductsSection>
                <QouteBanner />
                <ProductsSection title="Top Choices" >
                </ProductsSection>
            </div>
        </>
    );
}

export default HomeScreen;