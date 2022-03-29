import { useState, useEffect, createContext, useContext } from "react";
import { useAuth } from "./auth-context";

import {
    addProductToCartService,
    getCartService,
    removeProductFromCartService,
    updateQuantityOfProductInCartService,
} from "../services";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const { auth } = useAuth();

    const cartSummary = cart.reduce(
        (a, b) => ({
            ...a,
            cartTotalProducts: a.cartTotalProducts + b.qty,
            cartTotalPrice: a.cartTotalPrice + b.qty * b.price,
            cartTotalAmount: a.cartTotalAmount + b.qty * b.price,
        }),
        {
            cartTotalProducts: 0,
            cartTotalPrice: 0,
            cartTotalAmount: 0,
        }
    );

    useEffect(() => {
        if (auth.status) {
            (async () => {
                const getCartResponse = await getCartService(auth.token);
                setCart(getCartResponse);
            })();
        } else {
            setCart([]);
        }
    }, [auth]);

    const addProductToCart = async (product) => {
        const newCart = await addProductToCartService(auth.token, product);
        if (newCart !== undefined) {
            setCart(newCart);
        }
    };

    const removeProductFromCart = async (id) => {
        const newCart = await removeProductFromCartService(auth.token, id);
        if (newCart !== undefined) {
            setCart(newCart);
        }
    };

    const updateQuantityOfProductInCart = async (id, type) => {
        const newCart = await updateQuantityOfProductInCartService(
            auth.token,
            id,
            type
        );
        if (newCart !== undefined) {
            setCart(newCart);
        }
    };

    return (
        <CartContext.Provider value={{ cart, cartSummary, addProductToCart, removeProductFromCart, updateQuantityOfProductInCart, }}>
            {children}
        </CartContext.Provider>
    );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };