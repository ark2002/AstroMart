import React from "react";
import "./QouteBanner.css"

function QouteBanner() {
    return (
        <>
            <div className="banner4__container">
                <img src="/assets/banner_4.jpg" alt="" />
                <div className="banner4__qoute-wrapper">
                    <h3 className="heading3 italic banner4__qoute">
                        “Astrology is a Language. If you understand this language, The Sky
                        Speaks to You.”
                    </h3>
                    <h2 className="heading2 text-align--right">- Dane Rudhyar</h2>
                </div>
            </div>
        </>
    );
}

export { QouteBanner }