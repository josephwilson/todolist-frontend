import React, { useState } from 'react';
import { API_HOST } from '../config/constants';

export default function CreateTodoList() {
    const [formData, setFormData] = useState({
        userId: "",
        title: "",
        notes: "",
        dueDate: "",
    });
    const [fetchError, setFetchError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API_HOST}/api/v1/todolist`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify(formData),
        }).then(response => {
            if(!response.ok) {
                setFetchError(response.text);
            }
            return response.json();
        }).catch(err => {
            setFetchError(err);
        });
    };

    return (<>
        <h1>Create New TodoList</h1>
        <form>
            <div>
                <label htmlFor="userId">
                    UserId: 
                    <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
                </label>
            </div>

            <div>
                <label htmlFor="title">
                    Title: 
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </label>
            </div>

            <div>
                <label htmlFor="notes">
                    Notes: 
                    <input type="text" name="notes" value={formData.notes} onChange={handleChange} />
                </label>
            </div>

            <div>
                <label htmlFor="dueDate">Due Date:</label>
                <input type="datetime-local" name="dueDate" value={formData.dueDate} onChange={handleChange} /> 
            </div>
            <div>
                <input type="submit" name="submit" onClick={handleSubmit} />
            </div>
        </form>
    </>)
}