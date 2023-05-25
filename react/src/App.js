import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom' ;
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  
  
  return (
    <div className="App">
      <h5>React</h5>
      <BrowserRouter>
       <nav>
        <ul>
          <li>
            <Link to="/">List user</Link>
          </li>
          <li>
            <Link to="user/create">Create user</Link>
          </li>
        </ul>
       </nav>
       <Routes>
        <Route index element={<ListUser/>}/>
        <Route path="user/create" element={<CreateUser/>}/>
        <Route path="user/:id/edit" element={<CreateUser/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;