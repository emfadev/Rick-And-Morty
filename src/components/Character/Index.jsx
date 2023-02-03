import React from "react";
import "./Character.css"
import "../../index.css"

export const Character = ({characters}) => {

    return (
      <div className="characters">
        <div className="character">
          <img className="character__img" src={characters.image} alt="*" />
          <p className="character__species">{characters.species}</p>
        </div>
        <div className="characters__container">
          <h2 className="characters__name">{characters.name}</h2>
          <p className={characters.status === "Alive" ? "characters__status" : "characters__status--dead" }><span>{characters.status}</span></p>
          <p className="characters__info">Location: <span>{characters.location.name}</span></p>
          <p className="characters__info">Origin: <span>{characters.origin.name}</span></p>
        </div>
      </div>
    )
}