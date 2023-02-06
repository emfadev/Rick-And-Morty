import React from "react";
import {useState} from "react";


export const Search = ({fun}) => {

    const [searches, setsearches] = useState([])
    const [tablaUser, settablaUser] = useState([])

    const search = (e) => {	
        setsearches(e.target.value)
        filtro( e.target.value);
    }

    const filtro = (e) => {
        var result = tablaUser.filter(
            (e) => {
            if(e.name.toString().toLowerCase().includes(result.toLowerCase())){
                return e;
            }
        })
        fun = result;
    }

    return(
        <div>
            <input
             placeholder="Search..." 
             value={searches}
             onChange={search}  
             />
        </div>
    )
}  