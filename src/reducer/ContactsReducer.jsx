export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_CONTACTS":
      state = [...state, action.payload];
      localStorage.setItem("USERS", JSON.stringify(state));
      return state;

    default:
      return state;
  }
}
