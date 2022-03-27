export const ProductFilterCategory = (products, categories) => {
    switch (categories) {
        case "Jewellery":
            return [...products.filter((product) => product.categoryName === "Jewellery")];
        case "Clothing":
            return [...products.filter((product) => product.categoryName === "Clothing")];
        case "Spiritual":
            return [...products.filter((product) => product.categoryName === "Spiritual")];
        case "Accessories":
            return [...products.filter((product) => product.categoryName === "Accessories")];
        case "Any":
            return products;
        default:
            return products;
    }
}