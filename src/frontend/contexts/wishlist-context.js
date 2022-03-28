import React, { useState, useEffect, createContext, useContext } from "react";

import { getWishlistService, moveProductToWishlistService, removeProductFromWishlistService } from "../services";
import { useAuth } from "./auth-context";


const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {

    const { auth } = useAuth();

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        if (auth.status) {
            (async () => {
                const getWishlistResponse = await getWishlistService(auth.token);
                if (getWishlistResponse !== undefined) {
                    setWishlist(getWishlistResponse);
                }
            })();
        } else {
            setWishlist([]);
        }
    }, [auth]);

    const moveProductToWishlist = async (product) => {
        const newWishlist = await moveProductToWishlistService(auth.token, product);
        if (newWishlist !== undefined) {
            setWishlist(newWishlist);
        }
    };

    const removeProductFromWishlist = async (id) => {
        const newWishlist = await removeProductFromWishlistService(auth.token, id);
        if (newWishlist !== undefined) {
            setWishlist(newWishlist);
        }
    };

    return (
        <WishlistContext.Provider value={{ wishlist, moveProductToWishlist, removeProductFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

const UseWishlist = () => useContext(WishlistContext);

export { WishlistProvider, UseWishlist };