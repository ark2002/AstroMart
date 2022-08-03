import axios from "axios";

export const addAddressService = async (address, token) => {
  try {
    const { data } = await axios.post(
      `/api/users/address/add`,
      { address },
      { headers: { authorization: token } }
    );
    return data.address;
  } catch (error) {
    console.log(error);
  }
};
