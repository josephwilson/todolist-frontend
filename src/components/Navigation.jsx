import { Link } from 'react-router-dom';

export default function Navigation() {
    return <nav>
        <h1>Menu</h1>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/todolists">ToDoLists</Link>
            </li>
            <li>
                <Link to="/createtodolist">Crate TodoList</Link>
            </li>
            <li>
                <Link to="/registernewuser">Register New User</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>  
    </nav>
}