//UPDATE name of object and the route
const {Pet } = require('../models/pet.model')

//REPLACE Model WITH ACTUAL MODEL NAME
const createPet = async (data) => {
    const newPet = await Pet.create(data);
    return newPet;
}

const getAllPets = async () => {
    const allPets = await Pet.find();
    return allPets;
}

const getPetById = async (id) => {
    const onePet = await Pet.findById(id);
    return onePet;
}

const updatePetById = async (id, data) => {
    const updatedPet = await Pet.findByIdAndUpdate(id, data, {
        //re-run validators
        runValidators: true,
        //return the update document
        new: true
    })
    console.log("service ",updatedPet)
    return updatedPet
}

const deletePetById = async (id) => {
    const deletedPet = await Pet.findByIdAndDelete(id);
    return deletedPet;
}

module.exports = {
    createPet,
    getAllPets,
    getPetById,
    updatePetById,
    deletePetById
};