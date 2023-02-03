import { useEffect, useState } from "react";
import React from "react";
import { Character } from "../components/Character/Index";



export const Pagination = ({ page, setPage }) => {

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

  const [caracter, setcaracter] = useState([]);
  const [page, setPage] = useState(1);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");


  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log(e.target.value)
  }

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento;
      }
    });
    setcaracter(resultadosBusqueda);
  }

  useEffect(() => {
    const apiFetch = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const apiData = await response.json();
      setcaracter(apiData.results);
      setTablaUsuarios(apiData.results)
    }

    apiFetch();
  }, [page]);

  return (
    <div className="container">
      <input
        className="form-control inputBuscar"
        value={busqueda}
        placeholder="Búsqueda por nombre"
        onChange={handleChange}
      />
      <Pagination page={page} setPage={setPage} />

      {

        caracter.map(item => {
          return (

            <div className="mainContainer__CharacterContainer" key={item.id}>
              <Character characters={item} ko={item.id} />
            </div>


          )
        })

      }

      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

