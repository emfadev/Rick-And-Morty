import React, { useState } from "react";

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
    <input
      className="form-control inputSearch"
      value={searches}
      placeholder="Search by name"
      onChange={handleChange}
    />
  );
};
