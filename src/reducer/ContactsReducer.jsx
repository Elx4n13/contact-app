export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_CONTACTS":
      state = [action.payload, ...state];
      localStorage.setItem("USERS", JSON.stringify(state));
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      localStorage.setItem("USERS", JSON.stringify(state));
      return state;
    case "DELETE_CONTACT":
      state = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("USERS", JSON.stringify(state));
      return state;
    default:
      return state;
  }
}
