import React, { useState, useEffect, useRef } from "react"
import axios from "axios"

//making useState
const FetchPokemonButton = () => {
    const [pokemons, setPokemons] = useState([]);
    const [show, setShow] = useState (false)
    //preventing useeffect to run on page load

    //axios fetch of data
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807").then(response=>
            {setPokemons(response.data.results)})
    }, []
    )

    //handle show conditional rendering on click
    const handleShow = (e) => {
        if(!show){
            setShow(true)
        }else{
            setShow(false)
        }
        
    }


    return(
        <div>
            
            <button onClick= {handleShow} >Fetch pokemon</button>
            {/* if show is true render the pokemon */}
            {
                show?
                pokemons.map((pokemon, index) => {
                    return(<div key = {index}>{pokemon.name}</div>)
                }
                ) : ""
            }
        </div>
    )

}


export default FetchPokemonButton