import logo from './logo.svg';
import './App.css';
import TodoLists from './components/TodoLists';
import CreateTodoList from './components/CreateTodoList';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Users from './components/Users';
import { Routes, Route } from 'react-router-dom';
import RegisterNewUser from './components/RegisterNewUser';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="todolists" element={<TodoLists />} />
        <Route path="createtodolist" element={<CreateTodoList />} />
        <Route path="registernewuser" element={<RegisterNewUser />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
