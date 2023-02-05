import React, { useEffect, useState } from "react";
import { Character } from "../Character/Index";

export const Pagination = ({ page, setPage }) => {
  return (
    <div>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}>
        Anterior
      </button>

      <p>Página {page}</p>

      <button onClick={() => setPage(page + 1)}>
        Siguiente
      </button>
    </div>
  );
};

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [busqueda, setBusqueda] = useState("");
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
    setBusqueda(event.target.value);
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
        className="form-control inputBuscar"
        value={busqueda}
        placeholder="Búsqueda por nombre"
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
          <p>No se encontraron resultados</p>
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
};
