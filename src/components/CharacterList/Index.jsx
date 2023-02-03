import { useEffect, useState } from "react";
import React from "react";
import {Character} from "../Character/Index";

export const Pagination = ({page, setPage}) => {

  return (
    <div>
      <button 
        onClick={() => page > 1 && setPage(page - 1)} 
        disabled={page <= 1}>
        Page {page - 1}
      </button>

      <p>Page {page}</p>

      <button onClick={() => setPage(page + 1)}>
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
    }, [page]); 

    return (
        <div className="container">
          <Pagination page={page} setPage={setPage} />
        {

          characters.map(characters => {
            return (

                <div className="mainContainer__CharacterContainer">
                  <Character key={characters.id} characters={characters} />
                </div>


            )
          })

        }
        <Pagination page={page} setPage={setPage} />
      </div>
    )
}
