export default function getUnicCharacter(id){
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
             
}