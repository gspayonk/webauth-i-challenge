import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import axios from 'axios';

    const initialState = {
        username: ' ',
        password: ' '
    }

function HomeForm() {

    const [credentials, setCredentials] = useState(initialState)

    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    };

    const login = event => {
        event.preventDefault();
        axios
            .post('http://localhost:5000/api/auth/login', credentials)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error.response));
    }

    return(
        <>
            <form onSubmit={login}>
                <input
                    type = 'text'
                    name = 'username'
                    placeholder = 'username'
                    value = {credentials.username}
                    onChange = {handleChange}
                />

                <input
                    type = 'password'
                    name = 'password'
                    placeholder = 'password'
                    value = {credentials.password}
                    onChange = {handleChange}
                />
                <button type = 'submit'>submit</button>
            </form>
        </>
    )
}

export default HomeForm;