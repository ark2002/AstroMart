import React, { useState, useContext, createContext } from "react"

const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        status: localStorage.getItem("AUTH_TOKEN") ? true : false,
        token: localStorage.getItem("AUTH_TOKEN"),
    });


    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };