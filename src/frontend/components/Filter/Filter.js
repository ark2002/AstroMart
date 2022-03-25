import React from "react";
import "./Filter.css";

const Filter = ({ filters, dispatchFilters }) => {
    const { sortBy, categories, rating, maxPrice } = filters;
    return (
        <>
            <div className="filter flex--column">
                <div className="filter__top flex--row">
                    <h1 className="secondary__font text-align--center category__label heading3">
                        Filter
                    </h1>
                    <button className="btn btn-color--primary btn-font--secondary filter__clear" onClick={() => dispatchFilters({ type: "reset" })}>
                        Clear
                    </button>
                </div>
                <h1 className="secondary__font text-align--center filter__label heading4">
                    Category
                </h1>
                <select name="category__list" id="category__list" className="secondary__font category__list" value={categories} onChange={(e) => dispatchFilters({ type: "categories", payload: e.target.value })}>
                    <option value="Any">Any</option>
                    <option value="Jewellery">Jewellery</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Spiritual">Spiritual</option>
                    <option value="Accessories">Accessories</option>
                </select>
                <h1 className="secondary__font text-align--center filter__label heading4">Max-Price</h1>
                <input type="range" name="max__price-slider" id="max__price-slider" className="filter__slider" min="500"
                    max="10000"
                    step="500"
                    value={maxPrice}
                    onChange={(e) => dispatchFilters({ type: "maxPrice", payload: e.target.value })}
                />
                <h1 className="secondary__font text-align--center filter__label heading4">Rating</h1>
                <div className="rating__container">
                    <label htmlFor="4star__above" className="secondary__font heading4 filter__label">
                        <input type="radio" id="4star__above" name="rating__filter" value="4star__above" className="filter__radio" checked={rating === "4star__above"} onChange={() => dispatchFilters({ type: "rating", payload: "4star__above" })} />
                        4 star & above </label>
                </div>
                <div className="rating__container">
                    <label htmlFor="3star__above" className="secondary__font heading4 filter__label">
                        <input type="radio" id="3star__above" name="rating__filter" value="3star__above" className="filter__radio" checked={rating === "3star__above"} onChange={() => dispatchFilters({ type: "rating", payload: "3star__above" })} />
                        3 star & above</label>
                </div>
                <div className="rating__container">
                    <label htmlFor="2star__above" className="secondary__font heading4 filter__label">
                        <input type="radio" id="2star__above" name="rating__filter" value="2star__above" className="filter__radio" checked={rating === "2star__above"} onChange={() => dispatchFilters({ type: "rating", payload: "2star__above" })} />
                        2 star & above</label>
                </div>
                <div className="rating__container">
                    <label htmlFor="1star__above" className="secondary__font heading4 filter__label">
                        <input type="radio" id="1star__above" name="rating__filter" value="1star__above" className="filter__radio" checked={rating === "1star__above"} onChange={() => dispatchFilters({ type: "rating", payload: "1star__above" })} />
                        1 star & above</label>
                </div>
                <h1 className="secondary__font text-align--center filter__label heading4">Sort By</h1>
                <div className="sort__container">
                    <label htmlFor="price__lowtohigh" className="secondary__font heading4 filter__label">
                        <input type="radio" id="price__lowtohigh" name="sort__filter" value="price__lowtohigh" className="filter__radio" checked={sortBy === "LowToHigh"} onChange={() => dispatchFilters({ type: "sortBy", payload: "LowToHigh" })} />
                        Price: Low to High</label>
                </div>
                <div className="sort__container">
                    <label htmlFor="price__hightolow" className="secondary__font heading4 filter__label">
                        <input type="radio" id="price__hightolow" name="sort__filter" value="price__hightolow" className="filter__radio" checked={sortBy === "HighToLow"} onChange={() => dispatchFilters({ type: "sortBy", payload: "HighToLow" })} />
                        Price: High to Low</label>
                </div>
            </div>

        </>
    );
}

export { Filter };