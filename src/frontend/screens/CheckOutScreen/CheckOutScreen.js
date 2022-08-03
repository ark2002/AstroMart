import { useRef, useState } from "react";
import { AddressCard } from "../../components";
import { AddressModal } from "../../components/AddressModal/AddressModal";
import { useUser } from "../../contexts";
import { useOnClickOutside } from "../../hooks";
import "./CheckOutScreen.css";

const CheckOutScreen = () => {
  const { user } = useUser();

  const ref = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useOnClickOutside(ref, () => setIsModalOpen(false));
  return (
    <>
      <div className="flex--column checkOutScreen secondary__font">
        <h1 className="heading3 checkOut__heading">Select Delivery Address</h1>
        <button
          className="btn btn-color--primary btn-font--secondary"
          onClick={() => setIsModalOpen(true)}
        >
          Add Address
        </button>
        <div className="flex--row address__list">
          {user?.address.map((addressDetails) => (
            <AddressCard
              key={addressDetails._id}
              addressDetails={addressDetails}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="AddressModal__container flex--column">
          <div ref={ref}>
            <AddressModal setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export { CheckOutScreen };
