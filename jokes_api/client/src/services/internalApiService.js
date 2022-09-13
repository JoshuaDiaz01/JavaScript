//make functions in this file to call the functions in joke.service
import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export const getAllJokes = async () => {
    const res = await http.get('/jokes');
    return res.data;
};

export const getJokeById = async (id) => {
    const res = await http.get(`/jokes/${id}`);
    return res.data;
};

export const createJoke = async (data) => {
    const res = await http.post('/jokes/new');
    return res.data;
};

export const updateJoke = async (id, data) => {
    const res = await http.put(`/jokes/update/${id}`, data);
    return res.data;
};

export const deleteJoke = async (id) => {
    const res = await http.put(`/jokes/delete/${id}`);
    return res.data;
};

