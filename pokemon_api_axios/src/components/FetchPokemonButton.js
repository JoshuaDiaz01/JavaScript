import React, { useState, useEffect, useRef } from "react"
import axios from "axios"

const FetchPokemonButton = () => {
    const [pokemons, setPokemons] = useState([]);
    const [show, setShow] = useState (false)
    //preventing useeffect to run on page load

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807").then(response=>
            {setPokemons(response.data.results)})
    }, []
    )

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