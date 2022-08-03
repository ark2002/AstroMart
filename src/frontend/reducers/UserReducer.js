const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_ADDRESS":
      return { ...state, address: action.payload };
    case "EDIT_ADDRESS":
      return { ...state, address: action.payload };
    case "DELETE_ADDRESS":
      return { ...state, address: action.payload };
    case "ADD_ADDRESS":
      return { ...state, address: action.payload };
    case "SELECT_ADDRESS":
      return { ...state, selectedAddress: action.payload };
    default:
      return state;
  }
};

export { userReducer };
