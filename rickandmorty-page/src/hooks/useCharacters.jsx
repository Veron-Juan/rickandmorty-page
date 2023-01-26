import { useState, useEffect } from "react";

export function useCharecters (url){
    const [personajes, setPersonajes] = useState([])
    const [informacion, setInformacion] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(response => {
            const {results, info} = response;
            setPersonajes(results) 
            setInformacion(info)
            
        })
        
    }, [url])

    return {personajes : personajes, informacion: informacion}

}
