import React, { useEffect, useState } from "react";
import { Character } from "../Character/Index";

export const Pagination = ({ page, setPage }) => {
  return (
    <div>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}>
        Back
      </button>

      <p>Page {page}</p>

      <button onClick={() => setPage(page + 1)}>
        Following
      </button>
    </div>
  );
};

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searches, setsearches] = useState("");
  const [defaultCharacters, setDefaultCharacters] = useState([]);

  useEffect(() => {
    const apiFetch = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const apiData = await response.json();
        setCharacters(apiData.results);
        setDefaultCharacters(apiData.results)
      } catch (error) {
        console.error(error);
      }
    };

    apiFetch();
  }, [page]);

  const handleChange = (event) => {
    setsearches(event.target.value);
    if (event.target.value){
      setCharacters(defaultCharacters.filter((character) => 
        character.name.toLowerCase().includes(event.target.value.toLowerCase())
      ))
    } else {
      setCharacters(defaultCharacters)
    }
  };

  return (
    <>
      <input
        className="form-control inputSearch"
        value={searches}
        placeholder="Search by name"
        onChange={handleChange}
      />
      <Pagination page={page} setPage={setPage} />
      <div className="container">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div className="mainContainer__CharacterContainer" key={character.id}>
              <Character characters={character} />
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
};
