import React from "react";

export const Character = ({characters}) => {

    return (
        <div>
        <h2>{characters.name}</h2>
        <img src={characters.image} alt="*" />
        <span><p>Status: {characters.status}</p></span>
        <span><p>Specie: {characters.species}</p></span>
      </div>
    )
}