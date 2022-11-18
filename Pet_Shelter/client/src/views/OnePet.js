import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    deletePetById,
    getAllPets
} from '../services/internalApiService'



export const OnePet = (props) => {

    const [pets, setPets] = useState([])
    const navigate = useNavigate()
    let filteredPets = pets

    useEffect(() => {
        getAllPets()
            .then((data) => {
                setPets(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [filteredPets]);

    const handleDeleteClick = (id) => {
        deletePetById(id)
            .then((deletedPet) => {
                // **LOWERCASE**
                filteredPets = pets.filter((pet) => {
                    return pet._id !== id
                })
            })
    }

    return (
        <div>
            <h2>Pet Shelter</h2>
            <Link to={`/pets/new`}>Add an Pet to the shelter</Link>
            <button onClick={() => navigate(`/pets`)}>Back to Home</button>
            <br/>
            
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Skills if any</th>
                        <th>Adopt pet</th>
                    </tr>
                </thead>
                <tbody>

                    {pets.map((pet) => {
                        // destructure further for more for attributes in the future
                        const { _id, name, type, description, skillOne, skillTwo, skillThree } = pet
                        return (
                            <tr key={_id}>
                                <td>
                                    {name}
                                </td>

                                <td>
                                    {type}
                                </td>

                                <td>
                                    {description}
                                </td>
                                <td>
                                    {skillOne} 
                                    <br></br>
                                    {skillTwo} 
                                    <br></br>
                                    {skillThree} 
                                </td>

                                <td>
                                    
                                    <button onClick={(e) => { handleDeleteClick(_id) }}>Adopt {name}</button>

                                </td>
                            </tr>


                        )
                    })}
                </tbody>
            </table>
        </div>
    );


};

export default OnePet;