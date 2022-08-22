import { createContext, useContext, useReducer } from "react";
import { ContactsReducer } from "../reducer";

const Context = createContext();

const Provider = ({ children }) => {
  // const [user,setUser] = useState(false)
  // const data={
  //   user,
  //   setUser
  // }
  const contacts = JSON.parse(localStorage.getItem("USERS")) || [];
  const [state, dispatch] = useReducer(ContactsReducer, contacts);
  const data = {
    state,
    dispatch,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export const useContacts = () => useContext(Context);
export default Provider;
