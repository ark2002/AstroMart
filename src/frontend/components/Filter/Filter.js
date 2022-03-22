import React from "react";
import "./Filter.css"

const Filter = () => {
    return (
        <>
            <div className="filter flex--column">
                <div className="filter__top flex--row">
                    <h1 className="secondary__font text-align--center category__label heading3">
                        Filter
                    </h1>
                    <button className="btn btn-color--primary btn-font--secondary filter__clear">
                        Clear
                    </button>
                </div>
                <h1 className="secondary__font text-align--center filter__label heading4">
                    Category
                </h1>
                <select name="category__list" id="category__list" className="secondary__font category__list">
                    <option value="any">Any</option>
                    <option value="jewellery">Jewellery</option>
                    <option value="clothing">Clothing</option>
                    <option value="Spiritual">Spiritual</option>
                    <option value="accesories">Accessories</option>
                </select>
                <h1 className="secondary__font text-align--center filter__label heading4">Max-Price</h1>
                <input type="range" name="max__price-slider" id="max__price-slider" className="filter__slider" data-price-input='{
          "0": "500",
          "1": "1000",
          "2": "1,500",
          "3": "2,000",
          "4": "2,500",
          "5": "3,500",
          "6": "5,000",
          "7": "7,500",
          "8": "10,000",
          "9": "15,000+"                        
        }' />
                <h1 className="secondary__font text-align--center filter__label heading4">Rating</h1>
                <div className="rating__container">
                    <label htmlFor="4star__above" className="secondary__font heading4 filter__label">
                        <input type="radio" id="4star__above" name="rating__filter" value="4star__above" className="filter__radio" />
                        4 star & above </label>
                </div>
                <div className="rating__container">
                    <label htmlFor="3star__above" className="secondary__font heading4 filter__label">
                        <input type="radio" id="3star__above" name="rating__filter" value="3star__above" className="filter__radio" />
                        3 star & above</label>
                </div>
                <div className="rating__container">
                    <label htmlFor="2star__above" className="secondary__font heading4 filter__label">
                        <input type="radio" id="2star__above" name="rating__filter" value="2star__above" className="filter__radio" />
                        2 star & above</label>
                </div>
                <div className="rating__container">
                    <label htmlFor="1star__above" className="secondary__font heading4 filter__label">
                        <input type="radio" id="1star__above" name="rating__filter" value="1star__above" className="filter__radio" />
                        1 star & above</label>
                </div>
                <h1 className="secondary__font text-align--center filter__label heading4">Sort By</h1>
                <div className="sort__container">
                    <label htmlFor="price__lowtohigh" className="secondary__font heading4 filter__label">
                        <input type="radio" id="price__lowtohigh" name="sort__filter" value="price__lowtohigh" className="filter__radio" />
                        Price: Low to High</label>
                </div>
                <div className="sort__container">
                    <label htmlFor="price__hightolow" className="secondary__font heading4 filter__label">
                        <input type="radio" id="price__hightolow" name="sort__filter" value="price__hightolow" className="filter__radio" />
                        Price: High to Low</label>
                </div>
            </div>

        </>
    );
}

export { Filter };