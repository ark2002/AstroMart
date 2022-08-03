import axios from "axios";

export const editAddressService = async (addressId, address, token) => {
  try {
    const { data } = await axios.post(
      `/api/users/edit-address/${addressId}`,
      { address },
      { headers: { authorization: token } }
    );
    return data.address;
  } catch (error) {
    console.log(error);
  }
};
