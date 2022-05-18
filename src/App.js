import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Nav from './components/Nav/Nav';
import TodoPage from './components/TodoPage/TodoPage';
import 'react-toastify/dist/ReactToastify.css';
import RequiredAuth from './components/RequireAuth/RequireAuth';
import Login from './components/Login/Login';
import RegisterPage from './components/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<RequiredAuth><TodoPage/></RequiredAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
