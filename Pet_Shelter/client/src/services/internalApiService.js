import axios from 'axios';
const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

//can also name MODEL pets but for exam will keep it how i have it
const MODEL = "pet"

export const createPet = async (data) => {
    const res = await http.post(`/${MODEL}s`, data);
    return res.data;
}

export const getAllPets = async () => {
    const res = await http.get(`/${MODEL}s`);
    return res.data
}

export const getPetById = async (id) => {
    const res = await http.get(`/${MODEL}s/${id}`);
    return res.data
}

export const updatePetById = async (id, data) => {
    const res = await http.put(`/${MODEL}s/${id}`, data);
    return res.data
}

export const deletePetById = async (id) => {
    const res = await http.delete(`/${MODEL}s/${id}`);
    return res.data
}
