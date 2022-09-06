import React from 'react'

const PokemonDisplay = props => {
    const {pokemon} = props

    return(
        <div>
            {
                pokemon.map((name, i) => (
                    <p key={i}>{name}</p>
                )
                )
            }
        </div>

    )
}

export default PokemonDisplay