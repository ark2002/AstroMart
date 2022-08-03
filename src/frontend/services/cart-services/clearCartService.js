import axios from "axios";

export const clearCartService = async (token) => {
  try {
    const { data } = await axios.post(
      `/api/user/cart/clearCart`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data.cart;
  } catch (error) {
    console.error(error);
  }
};
