import React from "react";
import "./characterModal.css"

export const CharacterModal = ({ selectedCharacter, handleCloseModal }) => {

    return (
        <div className="overlay-characterModal">
            <div className="container-characterModal">

                <div className="character">
                    <img className="character__img character__img--modal" src={selectedCharacter.image} alt="*" />
                    <p className="character__species">{selectedCharacter.species}</p>
                </div>

                <div className="character__info">
                    <div>
                        <div className="character__status character__status--x">
                            <p className="character__section">Id: <span className="character__value">{selectedCharacter.id}</span></p>
                            <button onClick={handleCloseModal}>x</button>
                        </div>
                        <h2 className="characters__name">{selectedCharacter.name}</h2>
                        <div className="character__status">
                            <div className={selectedCharacter.status === "Alive" ? ("character__circle") : selectedCharacter.status === "Dead" ? ("character__circle--dead") : ("character__circle--unknown") }></div>
                            <p className="character__value">{selectedCharacter.status}</p>
                        </div>
                    </div>

                    <div>
                        <p className="character__section">Gender: </p>
                        <p className="character__value">{selectedCharacter.gender}</p>
                    </div>
                    <div>
                        <p className="character__section">Type: </p>
                        <p className="character__value">{selectedCharacter.type}</p>
                    </div>
                    <div>
                        <p className="character__section">Origin: </p>
                        <p className="character__value">{selectedCharacter.origin.name}</p>
                    </div>
                    <div>
                        <p className="character__section">Location: </p>
                        <p className="character__value">{selectedCharacter.location.name}</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
  };