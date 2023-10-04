export { fetchBreeds, fetchCatByBreed }

const BASE_URL = "https://api.thecatapi.com/v1"
const KYE_API = "live_dUrCbvWl3gvkPdcDZGQpldZZUJrft6N4eeuhRFreMQE1flDI0IVlKPsxLUR1Pu5X";



function fetchBreeds() {
return fetch(`${BASE_URL}/breeds?api_key=${KYE_API}`)
    .then(response => { return response.json() })
}




function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?api_key=${KYE_API}&breed_ids=${breedId}`)
    .then(response => { return response.json() })
   
}
