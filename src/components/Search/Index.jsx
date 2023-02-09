import React, { useState } from "react";
import './index.css'

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
    <div className="search">
      <div className="som">
    <input
    id="este"
    className="form-control inputSearch"
    value={searches}
    placeholder="Search by name 🔎.."
    onChange={handleChange}
  /></div>
    <div>
        <h1>hellos</h1>
    </div>
    <div>
        <h1>ho</h1>
    </div>
    </div>
    </>
  );
};