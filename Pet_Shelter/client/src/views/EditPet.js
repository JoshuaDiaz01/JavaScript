import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { getPetById, updatePetById } from '../services/internalApiService';

export const EditPet = (props) => {
    const { id } = useParams()

    // USE STATE FOR ALL ATTRIBUTES
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        getPetById(id)
            .then((data) => {
                // SET Names and every other attribute
                setName(data.name);
                setType(data.type);
                setDescription(data.description);
                setSkillOne(data.skillOne);
                setSkillTwo(data.skillTwo);
                setSkillThree(data.skillThree);
                
            })
            .catch((error) => {
                console.log(error)
            });
    }, [id])

    const handleEditClick = (event) => {
        event.preventDefault();

        // initializse new object with all model attributes
        const editedPet = {
            // shorthand if key name is attribute name, add every attribute
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
            
        };

        updatePetById(id, editedPet)
            .then((updatedPet) => {
                navigate(`/pets/`);
            })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            });
    };

    return (
        <div>
            
            <Link to = {`/pets/`}>Back to Home</Link>
            <p>Edit this Pet</p>
            <form>
                {/* add input fields for all attributes */}
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

                <div>
                    <label>Type</label>
                    {errors?.type &&
                        <span>{errors?.type?.message}</span>}
                    <br/>
                    <input onChange={(event) => {
                        setType(event.target.value)
                    }}
                        value={type} />
                </div>

                <div>
                    <label>Description</label>
                    {errors?.description &&
                        <span>{errors?.description?.message}</span>}
                    <br/>
                    <input onChange={(event) => {
                        setDescription(event.target.value)
                    }}
                        value={description} />
                </div>

                <div>
                    <label>Skill one: </label>
                    {errors?.skillOne &&
                        <span>{errors?.skillOne?.message}</span>}
                    <br/>
                    <input onChange={(event) => {
                        setSkillOne(event.target.value)
                    }}
                        value={skillOne} />
                </div>

                <div>
                    <label>Skill two: </label>
                    {errors?.skillTwo &&
                        <span>{errors?.skillTwo?.message}</span>}
                    <br/>
                    <input onChange={(event) => {
                        setSkillTwo(event.target.value)
                    }}
                        value={skillTwo} />
                </div>

                <div>
                    <label>Skill three: </label>
                    {errors?.skillThree &&
                        <span>{errors?.skillThree?.message}</span>}
                    <br/>
                    <input onChange={(event) => {
                        setSkillThree(event.target.value)
                    }}
                        value={skillThree} />
                </div>

                <button onClick= {() => navigate(`/pets`)} >Cancel</button>
                <input type="submit" value="Submit" onClick={handleEditClick} />
            </form>

        </div>
    )

}
export default EditPet;