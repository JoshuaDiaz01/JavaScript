
const express = require('express');


const {
    handleCreatePet,
    handleGetAllPets,
    handleGetPetById,
    handleUpdatePetById,
    handleDeletePetById
} = require('../controllers/pet.controller')

const router = express.Router();

router.post('/', handleCreatePet);
router.get('/', handleGetAllPets);
router.get('/:id', handleGetPetById);
router.put('/:id', handleUpdatePetById);
router.delete('/:id', handleDeletePetById);


module.exports ={ petRouter: router};