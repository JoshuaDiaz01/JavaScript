//Make sure to update "Author" with actual
const {
    createPet,
    getAllPets,
    getPetById,
    updatePetById,
    deletePetById
    //This is the only lower case "Pet"
} = require('../services/pet.service')


const handleCreatePet = async (req, res) => {
    try {
        const newPet = await createPet(req.body);
        return res.json(newPet);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllPets = async (req, res) => {
    try {
        const allPets = await getAllPets();
        return res.json(allPets);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetPetById = async (req, res) => {
    try {
        const onePet = await getPetById(req.params.id);
        return res.json(onePet);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdatePetById = async (req, res) => {
    console.log("controller", req)
    try {
        const updatedPet = await updatePetById(req.params.id, req.body);
        console.log("controller", updatedPet)
        return res.json(updatedPet);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeletePetById = async (req, res) => {
    try {
        const deletedPet = await deletePetById(req.params.id);
        return res.json(deletedPet);
    }catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreatePet,
    handleGetAllPets,
    handleGetPetById,
    handleUpdatePetById,
    handleDeletePetById
};