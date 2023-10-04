export { fetchBreeds, fetchCatByBreed };

const BASE_URL = "https://api.thecatapi.com/v1"
const KYE_API = "live_dUrCbvWl3gvkPdcDZGQpldZZUJrft6N4eeuhRFreMQE1flDI0IVlKPsxLUR1Pu5X";



async function fetchBreeds() {
    const response = await fetch(`${BASE_URL}/breeds?api_key=${KYE_API}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
}




async function fetchCatByBreed(breedId) {
    const response = await fetch(`${BASE_URL}/images/search?api_key=${KYE_API}&breed_ids=${breedId}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
   
}
