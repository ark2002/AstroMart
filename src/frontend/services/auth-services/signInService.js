import axios from "axios";

export const signInService = async (user) => {
    console.log(user);
    try {
        const { data } = await axios.post("/api/auth/login", {
            email: user.email,
            password: user.password,
        });
        console.log(data);
        return data.encodedToken;
    } catch (error) {
        console.error(error);
        return;
    }
};