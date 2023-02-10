import React, { useState } from "react";
import './index.css'
import rick from '../../assets/img/Rick&MortyLogo.png';

export const SearchBar = ({ defaultCharacters, setCharacters }) => {
  const [searches, setsearches] = useState("");

  const handleChange = (event) => {
    setsearches(event.target.value);
    if (event.target.value) {
      setCharacters(defaultCharacters.filter((character) =>
        character.name.toLowerCase().includes(event.target.value.toLowerCase())
      ));
    } else {
      setCharacters(defaultCharacters);
    }
  };

  return (
    <>
    <div className="container-header">
      
    <div>
        <img src={rick} alt="*" />
    </div>
    <div className="som">
    <input
    id="este"
    className="searchBar"
    value={searches}
    placeholder="Search by name..."
    onChange={handleChange}
  /></div>
    </div>
    </>
  );
};