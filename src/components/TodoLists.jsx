import React, { useEffect, useState } from 'react';
import { API_HOST } from '../config/constants';
import CreateTodoList from './CreateTodoList';

export default function TodoLists() {
    const [todoLists, setTodoLists] = useState([]);
    const [fetchError, setFetchError] = useState("");
    const [fetchLoading, setFetchLoading] = useState(false);

    const fetchTodoLists = () => {
        fetch(`${API_HOST}/api/v1/todolist/${'seedUser'}`, {
            headers: {
                "Accept": "application/json",
            }
        })
            .then(response => {
                if(!response.ok) {
                    setFetchError(response.statusText)
                }
                return response.json();
            })
            .then(json => {
                setTodoLists(json);
            })
            .catch(err => {
                setFetchError(err);
            });
    };

    useEffect(() => {
        fetchTodoLists();
    }, []);

    if(fetchError) {
        return (<>
            <h1>There was an error.</h1>
            <p>{JSON.stringify(fetchError)}</p>
            </>);
    }

    if(fetchLoading) {
        <h1>Loading...</h1>
    }

    return (<>
        <h1>Todo Lists</h1>
        <table>
            <tr>
                <th>Title</th>
                <th>Notes</th>
                <th>Due Date</th>
            </tr>
            {
                todoLists.map(l => (<>
                    <tr>
                        <td>{l.title}</td>
                        <td>{l.notes}</td>
                        <td>{l.dueDate}</td>
                    </tr>
                </>))
            }
        </table>
    </>);
}