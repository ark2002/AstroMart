import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Aryak",
    lastName: "Lahane",
    email: "aryaklahane@gmail.com",
    password: "aryaklahane",
    address: [
      {
        _id: uuid(),
        name: "Aryak Lahane",
        mobile: "9123456789",
        area: "Dr. B.A marg",
        locality: "Byculla",
        pincode: "411111",
        city: "Mumbai",
        state: "Maharashtra",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Aryak",
    lastName: "Lahane",
    email: "aryaklahane@gmail.com",
    password: "aryaklahane",
    address: [
      {
        _id: uuid(),
        name: "Aryak Lahane",
        mobile: "9123456789",
        area: "Dr. B.A marg",
        locality: "Byculla",
        pincode: "411111",
        city: "Mumbai",
        state: "Maharashtra",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
