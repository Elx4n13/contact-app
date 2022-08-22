import './App.css';
import 'antd/dist/antd.min.css'
import Navbar from './components/navbar/Navbar';
import {Routes,Route,Navigate} from 'react-router-dom'
import Contacts from './containers/contacts/Contacts';
import AddContact from './containers/addContact/AddContact';
import EditContact from './containers/editContact/EditContact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to={'/contacts'}/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/contacts/new' element={<AddContact/>}/>
        <Route path='/contacts/edit/:userId' element={<EditContact />}/>
      </Routes>
    </div>
  );
}

export default App;
