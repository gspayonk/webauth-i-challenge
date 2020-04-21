import axios from 'axios';

export const axiosWithAuth = () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    return axios.create({
        baseURL: 'http://localhost:5000/api/',
        headers: {
            username: username,
            password: password
        }
    });
};
