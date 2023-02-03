import { useEffect, useState } from "react";
import React from "react";
import {Character} from "./Character";

export const Pagination = ({page, setPage}) => {

  return (
    <div>
      <p>Page {page}</p>
      <button onClick={() => setPage=(page + 1)}>
      Page {page + 1}
      </button>
    </div>
  )

}

export const CharacterList = () => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() =>{
      const apiFetch = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const apiData = await response.json();
        setCharacters(apiData.results);

        console.log(apiData)
    }

        apiFetch();
    }, []);

    return (
        <div>
        {

          characters.map(characters => {
            return (

                <div className="mainContainer">
                  <Pagination page={page} setPage={setPage} />
                  <div className="mainContainer__CharacterContainer">
                    <Character key={characters.id} characters={characters} />

                  </div>
                </div>


            )
          })
        }
      </div>
    )
}
