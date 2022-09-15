import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

const MODEL = "author"

export const createAuthor = async (data) => {
    const res = await http.get(`/${MODEL}s`, data);
    return res.data;
}

export const getAllAuthors = async () => {
    const res = await http.get(`/${MODEL}s`);
    return res.data
}

export const getAuthorById = async (id) => {
    const res = await http.get(`/${MODEL}s/${id}`);
    return res.data
}

export const updateAuthorById = async (id, data) => {
    const res = await http.get(`/${MODEL}s/${id}`, data);
    return res.data
}

export const deleteAuthorById = async (id) => {
    const res = await http.get(`/${MODEL}s/${id}`);
    return res.data
}



