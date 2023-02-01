import { useEffect, useState } from "react";

export const App = () => {

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
      <div>
        {

          characters.map(characters => {
            return (

              <div key={characters.id}>
                <h2>{characters.name}</h2>
                <img src={characters.image} alt="*" />
                <span><p>{characters.status}</p></span>
                <span><p>{characters.species}</p></span>
              </div>


            )
          })
        }
      </div>
    )
}