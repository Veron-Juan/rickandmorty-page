export const getCharacters = (url)=> {
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            return data
        })
             
}

export default getCharacters