import { useReducer, createContext, useContext } from "react";
import { FiltersReducer } from "../reducers/FilterReducer";

const FilterContext = createContext();

const filtersInitialState = {
    sortBy: "",
    categories: "Any",
    rating: "",
    maxPrice: 10000
};

const FilterProvider = ({ children }) => {
    const [filters, dispatchFilters] = useReducer(FiltersReducer, filtersInitialState)
    return (
        <FilterContext.Provider value={{ filters, dispatchFilters }}>
            {children}
        </FilterContext.Provider>
    );
}

const useFilters = () => useContext(FilterContext);

export { filtersInitialState, useFilters, FilterProvider }