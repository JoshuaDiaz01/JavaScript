

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    deleteAuthorById,
    getAllAuthors
} from '../services/internalApiService'



export const AllAuthors = (props) => {
    // return <h2>Favorite Authors</h2>

    // UNCOMMENT BELOW WHEN READY
    // **LOWERCASE**
    const [authors, setAuthors] = useState([])
    const navigate = useNavigate()
    let filteredAuthors = authors

    useEffect(() => {
        getAllAuthors()
            .then((data) => {
                setAuthors(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [filteredAuthors]);

    const handleDeleteClick = (id) => {
        deleteAuthorById(id)
            .then((deletedAuthor) => {
                // **LOWERCASE**
                filteredAuthors = authors.filter((author) => {
                    return author._id !== id
                })
            })
    }
    // Delete if not needed
    // const handleEditClick = (id) => {

    // }

    return (
        <div style={{ width: 300, margin: 'auto' }}>
            <h2>Favorite Authors</h2>
            <Link to={`/authors/new`}>Add an Author</Link>
            <br />
            <table>
                <thead>
                    <tr>
                        <th style={{ padding: 10 }}>Author</th>
                        <th style={{ padding: 10 }}>Actions Available</th>
                    </tr>
                </thead>
                <tbody>

                    {authors.map((author) => {
                        // destructure further for more for attributes in the future
                        const { _id, name } = author
                        return (
                            <tr key={_id}>
                                <td>
                                    {name}
                                </td>

                                <td>
                                    <button style={{ margin: 5 }} onClick={() => navigate(`/authors/${_id}/edit`)}>Edit</button>
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

export default AllAuthors;