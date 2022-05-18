import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import TodoPage from './components/TodoPage/TodoPage';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<TodoPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
