import axios from "axios";

export const getAddressService = async (token) => {
  try {
    const { data } = await axios.get(`/api/users/address`, {
      headers: { authorization: token },
    });
    return data.address;
  } catch (error) {
    console.log(error);
  }
};
