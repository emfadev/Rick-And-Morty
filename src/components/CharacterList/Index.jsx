import { Character } from "../Character/Index";
import React, { useEffect, useState } from "react";
import { SearchBar } from "../Search/Index";
import { PageNav } from "../Pagination/Index";
import { CharacterModal } from "../CharacterModal/Index";

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [defaultCharacters, setDefaultCharacters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

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

  const handleOpenModal = (character) => {
    setSelectedCharacter(character);
    setIsOpen(true);
    };
    
    const handleCloseModal = () => {
    setSelectedCharacter(null);
    setIsOpen(false);
    };
  

  return (
    <>
      <SearchBar defaultCharacters={defaultCharacters} setCharacters={setCharacters} />
      <div className="container-characterList">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div className="mainContainer__CharacterContainer" key={character.id} onClick={() => handleOpenModal(character)}>
            <Character characters={character} />
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
        {isOpen && selectedCharacter && (
          <CharacterModal
            selectedCharacter={selectedCharacter}
            handleCloseModal={handleCloseModal}
          />
      )}
    </div>
    <PageNav page={page} setPage={setPage} />
  </>
);
};
