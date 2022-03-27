export const ProductFilterRated = (products, filters) => {
    switch (filters) {
        case "4star__above":
            return [...products.filter((product) => product.rating >= 4)];
        case "3star__above":
            return [...products.filter((product) => product.rating >= 3)];
        case "2star__above":
            return [...products.filter((product) => product.rating >= 2)];
        case "1star__above":
            return [...products.filter((product) => product.rating >= 1)];
        default:
            return products
    }
}