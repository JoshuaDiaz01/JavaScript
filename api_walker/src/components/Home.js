import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const [resource, setResource] = useState();
    const [selectedId, setSelectedId] = useState();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(resource, selectedId);
        

        //when we submit we want to navigate to the certain resource and id

        navigate(`/${resource}/${selectedId}`)
        
    }

    return (
        <div>
            <form onSubmit = {handleSubmit} >
                <label>Search for:</label>
                <select onChange = {e=>setResource(e.target.value)} >
                    <option value="people">People</option>
                    <option value="planet">Planet</option>
                </select>
                <label>ID: </label>
                <input type = "number" onChange = {e=>setSelectedId(e.target.value)}></input>
                <button type = "submit">Submit</button>
            </form>
        </div>

    );

}

export default Home