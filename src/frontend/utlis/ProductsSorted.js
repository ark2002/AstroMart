export const ProductsSorted = (products, sortby) => {
    if (sortby === "LowToHigh") {
        return [...products.sort((a, b) => a.price - b.price)];
    } else if (sortby === "HighToLow") {
        return [...products.sort((a, b) => b.price - a.price)];
    }
    return products;
};