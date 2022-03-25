import { filtersInitialState } from "../contexts/filter-context";

export const FiltersReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "sortBy":
            return { ...state, sortBy: payload };
        case "categories":
            return { ...state, categories: payload };
        case "rating":
            return { ...state, rating: payload };
        case "maxPrice":
            return { ...state, maxPrice: payload };
        case "reset":
            return filtersInitialState;
        default:
            return state;
    }
}