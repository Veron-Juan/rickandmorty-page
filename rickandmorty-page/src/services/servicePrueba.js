export const servicePrueba = (url)=> {
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            const {info, results} = data
            return {info, results}
            
        })
             
}

export default servicePrueba