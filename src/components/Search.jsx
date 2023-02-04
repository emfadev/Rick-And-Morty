import React from "react";
import {useState} from "react";


export const Search = ({fun}) => {

    const [busqueda, setbusqueda] = useState([])
    const [tablaUser, settablaUser] = useState([])

    const search = (e) => {	
        setbusqueda(e.target.value)
        filtro( e.target.value);
    }

    const filtro = (e) => {
        var resultado = tablaUser.filter(
            (e) => {
            if(e.name.toString().toLowerCase().includes(resultado.toLowerCase())){
                return e;
            }
        })
        fun = resultado;
    }

    return(
        <div>
            <input
             placeholder="Search..." 
             value={busqueda}
             onChange={search}  
             />
        </div>
    )
}  