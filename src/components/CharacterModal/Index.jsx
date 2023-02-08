import React from "react";
import "./CharacterModal.css"

export const CharacterModal = ({ selectedCharacter, handleCloseModal }) => {
    return (
        <div className="overlay-characterModal">
            <div className="container-characterModal">
                <img className="character__img" src={selectedCharacter.image} alt="*" />
                <h2>{selectedCharacter.name}</h2>
                <div className="character__status">
                    <div className={selectedCharacter.status === "Alive" ? ("character__circle") : selectedCharacter.status === "Dead" ? ("character__circle--dead") : ("character__circle--unknown") }></div>
                    <p className="character__value">{selectedCharacter.status}</p>
                </div>

                <p>{selectedCharacter.species}</p>
                <p>{selectedCharacter.gender}</p>
                <button onClick={handleCloseModal}>Close</button>
            </div>
        </div>
    );
  };

