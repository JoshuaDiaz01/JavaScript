import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Planet =(props) => {
    const [planets, setplanets] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        
        axios.get(`https://swapi.dev/api/planets/${id}`)
        // .then(response => console.log(response.data.results))
        .then(response => {setplanets(response.data)})
        .catch( (err) => {navigate("/error")});
    }, [id, navigate]
    );

    return (
        <div style = {{color: "#29335C", textAlign: "center"}}>
            <h2>Name: {planets.name}</h2>
            <p>Height: {planets.terrain}</p>
            <p>Mass: {planets.climate}</p>
            <p>Hair Color: {planets.surface_water}</p>
            <p>Skin Color: {planets.population}</p>
        </div>
    )
}
export default Planet