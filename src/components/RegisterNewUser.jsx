import { useState } from 'react';
import { API_HOST } from '../config/constants';

export default function RegisterNewUser() {
    const [formData, setFormData] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
    });
    const [apiError, setApiError] = useState("");
    const [newUser, setNewUser] = useState({});

    const clearFormData = () => {
        setFormData({
            userName: "",
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
        });
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API_HOST}/api/v1/application_user`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify({
                firstName: formData.firstName,
                lastName: formData.lastName,
                emailAddress: formData.emailAddress,
                userName: formData.userName,
            }),
        }).then(response => {
            clearFormData()
            if(!response.ok) {
                setApiError("There was an error creating your account");
            }
            return response.json();
        }).then(json => {
            setNewUser(json);
        }).catch(err => {
            setApiError("There was an error.");
        })
    }

    return <>
        <h1>Register New User</h1>
        {newUser && <>
            <h2>New user was created.</h2>

        </>}
        <form>
            <div>
                <label htmlFor="userName">UserName: </label>
                <input type="text" name="userName" id="userName" value={formData.userName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="emailAddress" id="emailAddress" value={formData.emailAddress} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
            </div>
            <div>
                <input type="submit" name="submit" id="submit" value="Submit" onClick={handleSubmit} />
            </div>
        </form>
    </>
}