import { createContext, useContext, useEffect, useReducer } from "react";
import { userReducer } from "../reducers";
import { getAddressService } from "../services";
import { useAuth } from "./auth-context";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, {
    address: [],
    selectedAddress: {},
  });

  const { auth } = useAuth();

  useEffect(() => {
    if (auth.status) {
      (async () => {
        const response = await getAddressService(auth.token);
        dispatchUser({ type: "GET_ADDRESS", payload: response });
      })();
    }
  }, [auth, dispatchUser]);

  return (
    <UserContext.Provider value={{ user, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
