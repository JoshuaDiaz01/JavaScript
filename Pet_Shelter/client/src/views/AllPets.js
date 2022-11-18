import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    deletePetById,
    getAllPets
} from '../services/internalApiService'



export const AllPets = (props) => {

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
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>

                    {pets.map((pet) => {
                        // destructure further for more for attributes in the future
                        const { _id, name, type } = pet
                        return (
                            <tr key={_id}>
                                <td>
                                    {name}
                                </td>

                                <td>
                                    {type}
                                </td>

                                <td>
                                    <button style={{ margin: 5 }} onClick={() => navigate(`/pets/${_id}/edit`)}>Edit</button>
                                    <button style={{ margin: 5 }} onClick={() => navigate(`/pets/${_id}`)}>View Pet</button>
                                    <button style={{ margin: 5 }} onClick={(e) => { handleDeleteClick(_id) }}>Delete</button>

                                </td>
                            </tr>


                        )
                    })}
                </tbody>
            </table>
        </div>
    );


};

export default AllPets;