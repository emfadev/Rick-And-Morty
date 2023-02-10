import React from "react";
import "./styles.css";
import "../../index.css";

export const Character = ({ characters }) => {

    return (
        <div className="container-characters">
            <div className="character">
                <img className="character__img" src={characters.image} alt="*" />
                <p className="character__species">{characters.species}</p>
            </div>
            <div className="character__info">
                <div>
                    <h2 className="characters__name">{characters.name}</h2>
                    <div className="character__status">
                        <div className={characters.status === "Alive" ? ("character__circle") :
                                        characters.status === "Dead" ? ("character__circle--dead") :
                                        ("character__circle--unknown") }>   
                        </div>
                        <p className="character__value">{characters.status}</p>
                    </div>
                </div>
                <div>
                    <p className="character__section">Location:</p>
                    <p className="character__value">{characters.location.name}</p>
                </div>
                <div>
                    <p className="character__section">Origin:</p>
                    <p className="character__value">{characters.origin.name}</p>
                </div>
            </div>
        </div> 
    )
}