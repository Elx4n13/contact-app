import 'antd/dist/antd.min.css'
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Contacts from './containers/contacts/Contacts';
import AddContact from './containers/addContact/AddContact';
import EditContact from './containers/editContact/EditContact';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './containers/home/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/contacts/new' element={<AddContact />} />
        <Route path='/contacts/edit/:userId' element={<EditContact />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
