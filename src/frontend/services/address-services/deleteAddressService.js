import axios from "axios";

export const deleteAddressService = async (addressId, token) => {
  try {
    const { data } = await axios.post(
      `/api/users/remove-address/${addressId}`,
      {},
      { headers: { authorization: token } }
    );
    return data.address;
  } catch (error) {
    console.log(error);
  }
};
