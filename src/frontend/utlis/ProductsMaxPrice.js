export const ProductsMaxPrice = (products, range) => {
  return [...products.filter((product) => (product.price) <= range)];
};