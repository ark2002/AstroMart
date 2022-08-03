import { useRef, useState } from "react";
import { useUser } from "../../contexts";
import { useOnClickOutside } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { AddressModal } from "../AddressModal/AddressModal";
import "./AddressCard.css";

const AddressCard = ({ addressDetails }) => {
  const { name, area, locality, city, pincode, state, mobile } = addressDetails;

  const { dispatchUser } = useUser();
  const navigate = useNavigate();

  const ref = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useOnClickOutside(ref, () => setIsModalOpen(false));
  return (
    <>
      <div
        className="address__item flex--column"
        onClick={() => {
          dispatchUser({ type: "SELECT_ADDRESS", payload: addressDetails });
          navigate("/ordersummary");
        }}
      >
        <h3 className="address__text address__name">{name},</h3>
        <div className="address__details flex--row">
          <p className="address__text">{area}, </p>
          <p className="address__text">{locality}, </p>
          <p className="address__text">{city}: </p>
          <p className="address__text">{pincode}, </p>
          <p className="address__text">{state}</p>
          <p className="address__text">+91-{mobile}</p>
        </div>
        <button
          className="btn btn-color--primary btn-font--secondary"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
        >
          Edit
        </button>
      </div>
      {isModalOpen && (
        <div className="AddressModal__container flex--column">
          <div ref={ref}>
            <AddressModal
              setIsModalOpen={setIsModalOpen}
              addressDetails={addressDetails}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { AddressCard };
