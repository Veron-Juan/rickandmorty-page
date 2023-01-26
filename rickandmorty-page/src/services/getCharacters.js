export const getCharacters = (url)=> {
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            return data
        })
             
}

//forma asincrona

// export const getCharacters =async ()=> {
//     const res = await fetch("https://rickandmortyapi.com/api/character");
//     const data = await res.json();
//     const { info, results } = data;
//     return info, results;
             
// }
export default getCharacters