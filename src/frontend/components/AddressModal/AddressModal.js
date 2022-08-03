import { useEffect, useState } from "react";
import { useAuth, useUser } from "../../contexts";
import { addAddressService, editAddressService } from "../../services";
import "./AddressModal.css";

const AddressModal = ({ setIsModalOpen, addressDetails }) => {
  const [details, setDetails] = useState({});
  const { dispatchUser } = useUser();

  const { auth } = useAuth();

  useEffect(() => {
    const initialDetails = {
      name: "",
      mobile: "",
      area: "",
      locality: "",
      pincode: "",
      city: "",
      state: "Andhra Pradesh",
    };
    (() => {
      addressDetails
        ? setDetails({ ...addressDetails })
        : setDetails({ ...initialDetails });
    })();
  }, [addressDetails]);

  const { name, area, locality, city, pincode, state, mobile } = details;

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const submitHandler = async (e, details) => {
    e.preventDefault();
    const response = addressDetails
      ? await editAddressService(addressDetails._id, details, auth.token)
      : await addAddressService(details, auth.token);
    addressDetails
      ? dispatchUser({ type: "EDIT_ADDRESS", payload: response })
      : dispatchUser({ type: "ADD_ADDRESS", payload: response });
    setIsModalOpen(false);
  };

  return (
    <form
      className="flex--column AddressModal secondary__font"
      onSubmit={(e) => submitHandler(e, details)}
    >
      <div className="address-modal__name flex--column">
        <p className="input__label">Name:</p>
        <input
          type="text"
          placeholder="Full Name"
          className="input__large username secondary__font"
          maxLength="20"
          required
          value={name || ""}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
      </div>
      <div className="address-modal__dual flex--row">
        <div className="address-modal__area flex--column">
          <p className="input__label">Area:</p>
          <input
            type="text"
            placeholder="Area"
            className="input__small username secondary__font"
            maxLength="20"
            required
            value={area || ""}
            onChange={(e) => setDetails({ ...details, area: e.target.value })}
          />
        </div>
        <div className="address-modal__area flex--column">
          <p className="input__label">Locality:</p>
          <input
            type="text"
            placeholder="Locality"
            className="input__small username secondary__font"
            maxLength="20"
            required
            value={locality || ""}
            onChange={(e) =>
              setDetails({ ...details, locality: e.target.value })
            }
          />
        </div>
      </div>
      <div className="address-modal__dual flex--row">
        <div className="address-modal__area flex--column">
          <p className="input__label">City:</p>
          <input
            type="text"
            placeholder="City"
            className="input__small username secondary__font"
            maxLength="20"
            required
            value={city || ""}
            onChange={(e) => setDetails({ ...details, city: e.target.value })}
          />
        </div>
        <div className="address-modal__area flex--column">
          <p className="input__label">Pincode:</p>
          <input
            type="text"
            placeholder="400000"
            className="input__small username secondary__font"
            maxLength="6"
            minLength="6"
            pattern="\d*"
            required
            value={pincode || ""}
            onChange={(e) =>
              setDetails({ ...details, pincode: e.target.value })
            }
          />
        </div>
      </div>
      <div className="address-modal__area flex--column">
        <p className="input__label">State:</p>
        <select
          name="category__list"
          id="category__list"
          className="secondary__font input__large"
          value={state || "Andhra Pradesh"}
          onChange={(e) => setDetails({ ...details, state: e.target.value })}
        >
          {states.map((stateName) => (
            <option value={stateName} key={stateName}>
              {stateName}
            </option>
          ))}
        </select>
      </div>
      <div className="address-modal__area flex--column">
        <p className="input__label">Mobile:</p>
        <input
          type="text"
          placeholder="9123456780"
          className="input__small username secondary__font"
          maxLength="10"
          minLength="10"
          pattern="\d*"
          required
          value={mobile || ""}
          onChange={(e) => setDetails({ ...details, mobile: e.target.value })}
        />
      </div>
      <div className="address-modal__buttons flex--row">
        <button
          className="btn btn-transparent--primary btn-font--secondary text__small"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-color--primary btn-font--secondary"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export { AddressModal };
