import { useEffect, useState } from "react";
import React from "react";
import {Character} from "./Character/Index";

export const CharacterList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() =>{
      const apiFetch = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const apiData = await response.json();
        setCharacters(apiData.results);
    }

        apiFetch();
    }, []);

    return (
        <div className="container">
        {

          characters.map(characters => {
            return (

                <Character key={characters.id} characters={characters} />


            )
          })
        }
      </div>
    )
}
