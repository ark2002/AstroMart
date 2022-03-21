import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("/api/products");
                setProducts(data.products);
            } catch (err) {
                console.log(err.message);
            }
        })();
    }, [])
    return (
        <ProductsContext.Provider
            value={{ products }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };