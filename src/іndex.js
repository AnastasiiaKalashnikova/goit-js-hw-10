import { fetchBreeds, fetchCatByBreed } from './сat-api.js';

const menuSelect = document.querySelector('.breed-select');
const infoBox = document.querySelector('.cat-info');
menuSelect.addEventListener("change", handler);



fetchBreeds().then(cats => {
    createMarkupOptions(cats);
    })
    .catch(error => console.log(error))


function handler(evt) {
    const breedId = menuSelect.value
fetchCatByBreed(breedId).then(cat => createMarkupCard(cat))
    .catch(error => console.log(error))
    //const breedId = evt.currentTarget.value
    //console.dir(breedId) достукались до ід вибраного кота
    
}
//fetchCatByBreed(breedId)}
    




//розмітка опцій в селекті
function createMarkupOptions(array) {
    const markup = array.map(({ id, name }) => `<option value=" ${id}"> ${name} </option>`).join('');
        menuSelect.insertAdjacentHTML('beforeend',markup)
}

//створення розмітки картки вибраного кота
function createMarkupCard(array) {
    const markup = array.map(({ url, name, temperament, description}) => `<img src=" ${url}" alt="${name}"> <h2>${name}</h2>
      <p>${description}</p>
      <p><b>Temperament:</b>${temperament}</Temperament:b> </p>`).join('');
    infoBox.insertAdjacentHTML('beforeend',markup)
}