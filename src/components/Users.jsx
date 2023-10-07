import { useEffect, useState } from 'react';
import { API_HOST } from '../config/constants';

export default function Users() {
    const [apiError, setapiError] = useState("");
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        fetch(`${API_HOST}/api/v1/application_user`)
        .then(response => {
            if(!response.ok) {
                setapiError("There was an error fetching the users.")
            }
            return response.json();
        }).then(json => {
            setUsers(json);
        }).catch(err => {
            setapiError("Error");
        })
    };
    
    useEffect(() => {
        fetchUsers();
    }, [])

    return <>
        <h1>Users</h1>
        <table>
            <tr>
                <th>UserName</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>EmailAddress</th>
                <th>UserId</th>
            </tr>
            {
                users.map(user => (
                    <tr>
                        <td>{user.userName}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.emailAddress}</td>
                        <td>{user.userId}</td>
                    </tr>
                ))
            }
        </table>
    </>
}