import { Character } from "../Character/Index";
import React, { useEffect, useState } from "react";
import { SearchBar } from "../Search/Index";
import { PageNav } from "../Pagination/Index";

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [defaultCharacters, setDefaultCharacters] = useState([]);

  useEffect(() => {
    const apiFetch = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const apiData = await response.json();
        setCharacters(apiData.results);
        setDefaultCharacters(apiData.results);
      } catch (error) {
        console.error(error);
      }
    };

    apiFetch();
  }, [page]);

  return (
    <>
      <SearchBar defaultCharacters={defaultCharacters} setCharacters={setCharacters} />
      <PageNav page={page} setPage={setPage} />
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
    <PageNav page={page} setPage={setPage} />
  </>
);
};
