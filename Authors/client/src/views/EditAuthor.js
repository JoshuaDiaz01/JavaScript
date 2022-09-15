import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { getAuthorById, updateAuthorById } from '../services/internalApiService';

export const EditAuthor = (props) => {
    const { id } = useParams()
    // return <h2> EditAuthor (id: {id})</h2>

    // USE STATE FOR ALL ATTRIBUTES
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                // SET Names and every other attribute
                setName(data.name);
                
            })
            .catch((error) => {
                console.log(error)
            });
    }, [id])

    const handleEditClick = (event) => {
        event.preventDefault();

        // initializse new object with all model attributes
        const editedAuthor = {
            // shorthand if key name is attribute name, add every attribute
            name
            
        };

        updateAuthorById(id, editedAuthor)
            .then((updatedAuthor) => {
                navigate(`/authors/`);
            })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            });
    };

    return (
        <div>
            <h2>Favorite Authors</h2>
            <Link to = {`/authors/`}>Home</Link>
            <p>Edit this author</p>
            <form>
                {/* add fields for all attributes */}
                <div>
                    <label>Name</label>
                    {errors?.name &&
                        <span>{errors?.name?.message}</span>}
                    <br />
                    <input style={{ margin: 10 }} onChange={(event) => {
                        setName(event.target.value)
                    }}
                        value={name} />
                </div>
                <button onClick= {() => navigate(`/authors`)} >Cancel</button>
                <input type="submit" value="Submit" onClick={handleEditClick} />
            </form>

        </div>
    )

}
export default EditAuthor;